import * as z from 'zod'

export const schema = z.object({
    fullName: z.string().min(1, 'Full name is required').min(3, 'At least 3 characters'),
    email: z.email('Invalid email format').min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required').min(8).regex(/^(?=.*[A-Z])(?=.*\d)/, 'Must contain uppercase & number'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    phone: z.string().min(1, 'Phone is required').regex(/^08\d{8,11}$/, 'Invalid phone (e.g. 08123456789)'),
    dateOfBirth: z.date({ error: 'Date of birth is required' }),
    gender: z.string().min(1, 'Gender is required'),
    address: z.string().min(1, 'Address is required').max(200, 'Max 200 characters'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal code is required').regex(/^\d{5}$/, 'Must be exactly 5 digits'),
    terms: z.boolean(),
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
}).refine(data => data.terms === true, {
    message: 'You must accept the terms',
    path: ['terms']
}).refine(data => {
    if (!data.dateOfBirth) return false
    const age = new Date().getFullYear() - data.dateOfBirth.getFullYear()
    return age >= 18
}, {
    message: 'Must be at least 18 years old',
    path: ['dateOfBirth']
})

export type FormValues = z.infer<typeof schema>