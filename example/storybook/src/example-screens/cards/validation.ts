import * as z from 'zod';
type loginValidationType = z.infer<typeof loginValidationSchema>;
type inviteValidationType = z.infer<typeof inviteValidationSchema>;
const loginValidationSchema = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .min(1, {
      message: "Email can't be empty",
    })
    .email({ message: 'Please enter valid email' }),
  password: z
    .string({ required_error: 'password is required' })
    .min(6, {
      message: 'Password should be atleast 6 characters',
    })
    .max(12, {
      message: 'Password should be less than 12 characters',
    }),
});
const inviteValidationSchema = z.object({
  inviteEmail: z
    .string({ required_error: 'email is required' })
    .min(1, {
      message: "Invite email can't be empty",
    })
    .email({ message: 'Please enter valid invite email' }),
});

export {
  loginValidationSchema,
  loginValidationType,
  inviteValidationSchema,
  inviteValidationType,
};
