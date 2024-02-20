import * as z from 'zod';
import { dummyUsernames } from './constants';
export type profileViewValidationType = z.infer<
  typeof profileViewValidationSchema
>;
export type accountViewValidationType = z.infer<
  typeof accountViewValidationSchema
>;
export type appearanceViewValidationType = z.infer<
  typeof appearanceViewValidationSchema
>;
export type commentValidationType = z.infer<typeof commentValidationSchema>;
export const profileViewValidationSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(1, {
      message: 'Username is required',
    })
    .refine((value: string) => !dummyUsernames.includes(value), {
      message: 'User name is already present',
    }),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, {
      message: 'Email is required',
    })
    .email('Please select a valid email'),
  urls: z
    .string({ required_error: 'Url is required' })
    .min(1, {
      message: 'Url is required',
    })
    .url('Please enter a valid url')
    .array(),
});

export const accountViewValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, {
    message: 'Name is required',
  }),
  language: z.string({ required_error: 'Language is required' }).min(1, {
    message: 'Language is required',
  }),
});
export const appearanceViewValidationSchema = z.object({
  font: z.string({ required_error: 'Font is required' }).min(1, {
    message: 'Font is required',
  }),
});

export const commentValidationSchema = z.object({
  comment: z.string({ required_error: 'Empty cannot be uploaded' }).min(1, {
    message: 'Empty cannot be uploaded',
  }),
});
