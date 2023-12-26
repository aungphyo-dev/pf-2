'use server';
import { signIn, signOut } from '@/auth';
import supabase from '@/services/supabase';
import { MailSchema, ProjectsSchema, UserSchema } from '@/types';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
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

export const sendMail = async (
    prevstate: null | string,
    formData: FormData
): Promise<string> => {
    const validateFields = MailSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        question: formData.get('question'),
    });
    if (!validateFields.success) {
        throw new Error('Something went wrong');
    }
    const res = await fetch('https://formspree.io/f/mrgvybye', {
        method: 'POST',
        body: JSON.stringify({ ...validateFields.data }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        cache: 'no-cache',
    });
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return 'Successfully';
};

interface loginPrevState {
    errors: {};
    message: null | string;
}
export const authenticate = async (
    prev: loginPrevState,
    formData: FormData
): Promise<loginPrevState> => {
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
    await supabase.auth.signOut();
    await signOut();
};
export const deleteProject = async (id: number, image: string) => {
    console.log(id, image);
    await supabase.storage.from('projects').remove([`images/${image}`]);
    await supabase.from('projects').delete().eq('id', id);
    revalidatePath('/dashboard/projects');
};
export const increaseViewsCount = async (slug: string) => {
    const { data: d } = await supabase
        .from('view_blogs')
        .select('*')
        .eq('slug', slug);
    const da = d?.at(0);
    if (da) {
        await supabase
            .from('view_blogs')
            .update({ views: da.views + 1 })
            .eq('slug', slug);
    } else {
        await supabase.from('view_blogs').insert({ slug, views: 1 });
    }
    revalidatePath('/blogs');
};
