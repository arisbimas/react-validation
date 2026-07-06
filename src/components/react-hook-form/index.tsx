import FormGroup from '@/components/common/form-group'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Field,
    // FieldDescription, 
    FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'


export default function ReactHookFormStandalone() {

    const [cities,] = useState([
        { label: "Select a City", value: null },
        { label: "Jakarta", value: "jakarta" },
        { label: "Bandung", value: "bandung" },
        { label: "Surabaya", value: "surabaya" },
    ])
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>React Hook Form Standalone</CardTitle>
                <CardDescription>
                    Ini adalah contoh React Hook Form Standalone
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                <form>
                    <FormGroup>
                        <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                        <Input id="fullName" type="text" placeholder="John Doe" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input id="password" type="password" placeholder="*********" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="confirmPassword">Password</FieldLabel>
                        <Input id="confirmPassword" type="password" placeholder="*********" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="phone">Phone</FieldLabel>
                        <Input id="phone" type="tel" placeholder="+620000000000" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
                        <Input id="dateOfBirth" type="text" placeholder="YYYY-MM-DD" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel>Gender</FieldLabel>
                        <RadioGroup defaultValue="comfortable" className="w-fit">
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="default" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="comfortable" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                        </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="address">Address</FieldLabel>
                        <Textarea id="address" placeholder="Jl. Contoh" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Select items={cities}>
                            <SelectTrigger className="w-full max-w-48">
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
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="postalCode">Postal Code</FieldLabel>
                        <Input id="postalCode" type="text" placeholder="12345" />
                        {/* <FieldDescription>
                                desc
                            </FieldDescription> */}
                    </FormGroup>
                    <Field orientation="horizontal" className='my-4'>
                        <Checkbox id="terms" name="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </Field>
                    <Button className="w-full mt-4" type="submit" size='lg'>Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}
