import { z } from 'zod';
export const ProjectSchema = z.object({
  id: z.number().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  demo: z.string().nullish(),
  skills: z.string().min(1),
  year: z.string().min(1),
  made_at: z.string().nullish(),
  apk: z.string().nullish(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;
export const ProjectsSchema = z.array(ProjectSchema);
export type ProjectsType = z.infer<typeof ProjectsSchema>;

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const projectCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  demo: z.string().nullish(),
  year: z.string().min(1),
  made_at: z.string().nullish(),
  image: z
    .any()
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 5MB.',
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: '.jpg, .jpeg, .png and .webp files are accepted.',
    }),
  skills: z.string().min(1),
});

export type projectCreateType = z.infer<typeof projectCreateSchema>;

export const projectEditSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  demo: z.string().nullish(),
  year: z.string().min(1),
  made_at: z.string().nullish(),
  image: z
    .any()
    .refine((file) => (file.size > 0 ? file.size <= MAX_FILE_SIZE : true), {
      message: 'Max file size is 5MB.',
    })
    .refine(
      (file) =>
        file.size > 0 ? ACCEPTED_IMAGE_TYPES.includes(file.type) : true,
      {
        message: '.jpg, .jpeg, .png and .webp files are accepted.',
      }
    ),
  skills: z.string().min(1),
});
export const ExperienceSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  company: z.string().min(1),
  companyLink: z.string().optional(),
  description: z.string().min(1),
  durationStart: z.string().min(1),
  durationEnd: z.string().min(1),
  skills: z.array(z.string()).min(1),
});
export type ExperienceType = z.infer<typeof ExperienceSchema>;

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
