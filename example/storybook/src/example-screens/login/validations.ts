import * as z from 'zod';
export type loginValidationType = z.infer<typeof loginValidationSchema>;
export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .min(1, {
      message: "Email can't be empty",
    })
    .email({ message: 'Please enter valid email' }),
});
