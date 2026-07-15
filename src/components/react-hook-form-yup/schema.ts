import * as yup from 'yup'

export const schema = yup.object({
    fullName: yup.string().required('Full name is required').min(3, 'At least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required').min(8).matches(/^(?=.*[A-Z])(?=.*\d)/, 'Must contain uppercase & number'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Please confirm your password'),
    phone: yup.string().required('Phone is required').matches(/^08\d{8,11}$/, 'Invalid phone (e.g. 08123456789)'),
    dateOfBirth: yup.date().required('Date of birth is required')
        .test('min-age', 'You must be at least 18 years old', (value) => {
            if (!value) return true
            const today = new Date()
            const age = today.getFullYear() - value.getFullYear()
            return age >= 18
        }),
    gender: yup.string().required('Gender is required'),
    address: yup.string().required('Address is required').max(200, 'Max 200 characters'),
    city: yup.string().required('City is required'),
    postalCode: yup.string().required('Postal code is required').matches(/^\d{5}$/, 'Must be exactly 5 digits'),
    terms: yup.boolean().required('Terms and conditions are required').oneOf([true], 'You must accept the terms'),
})

export type FormValues = yup.InferType<typeof schema>