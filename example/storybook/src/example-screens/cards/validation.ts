import * as z from 'zod';
export type loginValidationType = z.infer<typeof loginValidationSchema>;
export type inviteValidationType = z.infer<typeof inviteValidationSchema>;
export const loginValidationSchema = z.object({
  email: z.string({ required_error: 'email is required' }).min(1, {
    message: 'Please enter valid email',
  }),
  password: z.string({ required_error: 'password is required' }).min(1, {
    message: 'Please enter valid password',
  }),
});
export const inviteValidationSchema = z.object({
  inviteMessage: z.string({ required_error: 'invite is required' }).min(1, {
    message: 'Please enter valid invite message',
  }),
});
