import * as z from 'zod';
type loginValidationType = z.infer<typeof loginValidationSchema>;
type inviteValidationType = z.infer<typeof inviteValidationSchema>;
const loginValidationSchema = z.object({
  email: z.string({ required_error: 'email is required' }).min(1, {
    message: 'Please enter valid email',
  }),
  password: z.string({ required_error: 'password is required' }).min(1, {
    message: 'Please enter valid password',
  }),
});
const inviteValidationSchema = z.object({
  inviteMessage: z.string({ required_error: 'invite is required' }).min(1, {
    message: 'Please enter valid invite message',
  }),
});

export {
  loginValidationSchema,
  loginValidationType,
  inviteValidationSchema,
  inviteValidationType,
};
