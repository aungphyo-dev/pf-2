'use server';
import supabase from '@/services/supabase';
import { MailSchema, ProjectsSchema, UserSchema } from '@/types';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
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
                        message: 'Error 1',
                    };
                default:
                    return {
                        errors: {},
                        message: 'Error 2',
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
