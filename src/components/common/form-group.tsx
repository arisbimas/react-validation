import { Field } from '@/components/ui/field'

type FormGroupProps = {
    children?: React.ReactNode
}

export default function FormGroup({ children }: FormGroupProps) {
    return (
        <Field orientation="responsive" className='mb-2'>{children}</Field>
    )
}
