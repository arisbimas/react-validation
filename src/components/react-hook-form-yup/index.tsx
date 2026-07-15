import { Controller, useForm } from 'react-hook-form'
import type { Resolver, SubmitHandler } from 'react-hook-form'

import FormGroup from '@/components/common/form-group'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { EyeOffIcon } from 'lucide-react'
import DatePicker from '@/components/common/date-picker'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, type FormValues } from '@/components/react-hook-form-yup/schema'

export default function ReactHookFormYup() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { register, handleSubmit, formState: { errors, isValid }, getValues, reset, control, trigger } = useForm<FormValues>({
        resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
        mode: 'onBlur',
        defaultValues: {
            gender: '',
            terms: false,
            city: '',
        }
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('Submitted:', data)
        alert(JSON.stringify(data, null, 2))
    }

    const handleReset = () => {
        reset()
    }

    const [cities,] = useState([
        { label: "Select a City", value: "" },
        { label: "Jakarta", value: "jakarta" },
        { label: "Bandung", value: "bandung" },
        { label: "Surabaya", value: "surabaya" },
    ])
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>React Hook Form + YUP</CardTitle>
                <CardDescription>
                    Ini adalah contoh React Hook Form + YUP
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormGroup>
                        <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="John Doe"
                            {...register('fullName')}
                            aria-invalid={errors.fullName ? 'true' : 'false'}
                        />
                        <FieldError errors={[errors.fullName]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" type="email" placeholder="john.doe@example.com"
                            {...register('email')}
                            aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        <FieldError errors={[errors.email]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="password" type={showPassword ? 'text' : 'password'} placeholder="*********"
                                {...register('password')}
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                            <InputGroupAddon align="inline-end" onClick={() => setShowPassword(!showPassword)}>
                                <EyeOffIcon className="cursor-pointer" />
                            </InputGroupAddon>

                        </InputGroup>
                        <FieldError errors={[errors.password]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="*********"
                                {...register('confirmPassword')}
                                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                            />
                            <InputGroupAddon align="inline-end" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <EyeOffIcon className="cursor-pointer" />
                            </InputGroupAddon>

                        </InputGroup>
                        <FieldError errors={[errors.confirmPassword]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="phone">Phone</FieldLabel>
                        <Input id="phone" type="tel" placeholder="08123456789"
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^08\d{8,11}$/,
                                    message: 'Invalid phone (e.g. 08123456789)',
                                },
                            })}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                        />
                        <FieldError errors={[errors.phone]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
                        <Controller
                            name='dateOfBirth'
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    value={field.value}
                                    onChange={(date) => {
                                        field.onChange(date)
                                        trigger('dateOfBirth')
                                    }}
                                />
                            )}
                        />
                        <FieldError errors={[errors.dateOfBirth]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="gender">Gender</FieldLabel>
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    value={field.value}
                                    onValueChange={(v) => {
                                        field.onChange(v)
                                        trigger('gender')
                                    }}
                                    className="w-fit"
                                >
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male">Male</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female">Female</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="other" id="other" />
                                        <Label htmlFor="other">Other</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                        <FieldError errors={[errors.gender]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="address">Address</FieldLabel>
                        <Textarea id="address" placeholder="Jl. Contoh No. 123"
                            {...register('address')}
                            aria-invalid={errors.address ? 'true' : 'false'}
                        />
                        <FieldError errors={[errors.address]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Controller
                            name="city"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    items={cities}
                                    value={field.value}
                                    onValueChange={(v) => {
                                        field.onChange(v)
                                        trigger('city')
                                    }}
                                    onOpenChange={(open) => {
                                        if (!open) {
                                            trigger('city')
                                        }
                                    }}
                                >
                                    <SelectTrigger
                                        className="w-full max-w-48"
                                        aria-invalid={errors.city ? 'true' : 'false'}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Cities</SelectLabel>
                                            {cities.map((item) => (
                                                <SelectItem key={item.value} value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}>
                        </Controller>
                        <FieldError errors={[errors.city]} />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="postalCode">Postal Code</FieldLabel>
                        <Input id="postalCode" type="text" placeholder="12345"
                            {...register('postalCode')}
                            aria-invalid={errors.postalCode ? 'true' : 'false'}
                        />
                        <FieldError errors={[errors.postalCode]} />
                    </FormGroup>
                    <Controller
                        name="terms"
                        control={control}
                        render={({ field }) => (
                            <Field orientation="horizontal" className='my-4'>
                                <Checkbox
                                    id="terms"
                                    checked={field.value}
                                    onCheckedChange={(checked) => {
                                        field.onChange(checked)
                                        trigger('terms')
                                    }}
                                    aria-invalid={errors.terms ? 'true' : 'false'} />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                                <FieldError errors={[errors.terms]} />
                            </Field>
                        )} />
                    <Button className="w-1/2 mt-4" type="submit" size='lg' onClick={handleReset}>Reset</Button>
                    <Button className="w-1/2 mt-4" type="submit" size='lg' disabled={!isValid}>Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}
