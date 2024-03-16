'use server';
import { signIn, signOut } from '@/auth';
import supabase, { supabaseAdmin } from '@/lib/supabase';
import {
  ProjectsSchema,
  UserSchema,
  projectCreateSchema,
  projectEditSchema,
} from '@/lib/type';
import { AuthError } from 'next-auth';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
interface PrevState {
  errors: {};
  message: null | string;
}
export const getAllProjects = async () => {
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: false });
  const validateFields = ProjectsSchema.safeParse(data);
  if (!validateFields.success) {
    throw new Error('Something went wrong!');
  }
  return validateFields.data;
};
export const getProjectByLimit = async (limit: number = 4) => {
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: false })
    .limit(limit);
  const validateFields = ProjectsSchema.safeParse(data);
  if (!validateFields.success) {
    throw new Error('Something went wrong!');
  }
  return validateFields.data;
};
export const deleteProject = async (id: number, image: string) => {
  noStore();
  await supabaseAdmin.storage.from('projects').remove([`images/${image}`]);
  await supabaseAdmin.from('projects').delete().eq('id', id);
  revalidatePath('/');
  revalidatePath('/projects');
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/projects');
};
export const updateProject = async (
  id: number,
  image: string,
  prev: PrevState,
  formData: FormData
): Promise<PrevState> => {
  const validateFields = projectEditSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    demo: formData.get('demo'),
    year: formData.get('year'),
    made_at: formData.get('made_at'),
    skills: formData.get('skills'),
    image: formData.get('image'),
  });
  if (!validateFields.success) {
    return {
      message: 'Error',
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  const data = validateFields.data;
  noStore();
  if (data.image['size'] > 0) {
    await supabaseAdmin.storage
      .from('projects')
      .upload(`images/${image}`, data.image, {
        cacheControl: '3600',
        upsert: true,
      });
  }
  await supabaseAdmin
    .from('projects')
    .update([{ ...data, image }])
    .eq('id', id);
  revalidatePath('/');
  revalidatePath('/projects');
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
};
export const getProjectById = async (id: number) => {
  noStore();
  const { data } = await supabase.from('projects').select('*').eq('id', id);
  const validateFields = ProjectsSchema.safeParse(data);
  if (!validateFields.success) {
    throw new Error('Something went wrong!');
  }
  return validateFields.data[0];
};
export const createProject = async (
  prev: PrevState,
  formData: FormData
): Promise<PrevState> => {
  const validateFields = projectCreateSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    demo: formData.get('demo'),
    year: formData.get('year'),
    made_at: formData.get('made_at'),
    skills: formData.get('skills'),
    image: formData.get('image'),
  });
  if (!validateFields.success) {
    return {
      message: 'Error',
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  const data = validateFields.data;
  const fileName = Date.now() + data.image['name'];
  noStore();
  await supabaseAdmin.storage
    .from('projects')
    .upload(`images/${fileName}`, data.image, {
      cacheControl: '3600',
      upsert: false,
    });
  await supabaseAdmin.from('projects').insert([{ ...data, image: fileName }]);
  revalidatePath('/');
  revalidatePath('/projects');
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
};
export const authenticate = async (
  prev: PrevState,
  formData: FormData
): Promise<PrevState> => {
  const validateFields = UserSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields,fail to login account!',
    };
  }
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            errors: {},
            message: 'Something went wrong!',
          };
        default:
          return {
            errors: {},
            message: 'Something went wrong!',
          };
      }
    }
    throw error;
  }
  return {
    errors: {},
    message: 'Successfully  signed in',
  };
};
export const authSignOut = async () => {
  noStore();
  await supabase.auth.signOut();
  await signOut();
};
