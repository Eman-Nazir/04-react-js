import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .refine((val) => val !== "admin@example.com", { message: "Enter a different email address" }),
  age: z.number().min(18, "Age must be at least 18").max(25, "Age must be at most 25"),
  country: z.string().min(1, "Country is required"),
  gender: z.string().min(1, "Gender is required"),
  skills: z.array(z.string()).optional(),
  dob: z.date(),
  social: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
  }),
  phonenumber: z.array(z.string().min(1, "Phone number is required")).length(2, "Both phone numbers are required"),
});
