import { z } from 'zod';
export const ProjectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    demo: z.string(),
    skills: z.array(z.string()),
});
export const ProjectsSchema = z.array(ProjectSchema);
export type ProjectsType = z.infer<typeof ProjectsSchema>;
export type ProjectType = z.infer<typeof ProjectSchema>;

export const ExperienceSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    company: z.string().min(1),
    companyLink: z.string().min(1),
    description: z.string().min(1),
    durationStart: z.string().min(1),
    durationEnd: z.string().min(1),
    skills: z.array(z.string()).min(1),
});
export type ExperienceType = z.infer<typeof ExperienceSchema>;

export const MailSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    message: z.string().min(1),
    question: z.string().min(1),
});
export type MailType = z.infer<typeof MailSchema>;

export const UserSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
});
export type UserType = z.infer<typeof UserSchema>;

export const AuthUserSchema = z.object({
    id: z.string().min(1),
    email: z.string().email().min(1),
    role: z.string().min(1),
    jwt: z.string().min(1),
});

export type AuthUserType = z.infer<typeof AuthUserSchema>;
