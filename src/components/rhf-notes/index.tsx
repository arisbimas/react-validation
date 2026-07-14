import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'

const notes: { title: string; items: { label: string; detail: string }[] }[] = [
    {
        title: 'useForm()',
        items: [
            { label: 'register', detail: 'Daftarin input ke RHF. Spread (...register("name", { rules })) ke element.' },
            { label: 'handleSubmit', detail: 'Bungkus submit handler: onSubmit={handleSubmit(onValid, onInvalid)}' },
            { label: 'formState', detail: '{ errors, isValid, isDirty, isSubmitting, touchedFields } — di-destructure pas call useForm' },
            { label: 'watch', detail: 'Subscribe ke field value. Bikin re-render tiap value berubah.' },
            { label: 'getValues', detail: 'Baca current value tanpa subscribe. Aman dipake di validate().' },
            { label: 'setValue', detail: 'Set field value manual. Butuh { shouldValidate: true } kalo mau trigger validation.' },
            { label: 'reset', detail: 'Reset form ke defaultValues. bisa partial: reset({ field: value })' },
            { label: 'control', detail: 'Object buat Controller / useWatch. Dioper ke <Controller control={control} />' },
        ],
    },
    {
        title: 'Validation Rules (register)',
        items: [
            { label: 'required', detail: 'required: "Error message" atau required: true' },
            { label: 'minLength / maxLength', detail: '{ value: number, message: string }' },
            { label: 'pattern', detail: 'RegExp: { value: /^\\d{5}$/, message: "Must be 5 digits" }' },
            { label: 'validate', detail: 'Custom function. return string (error) atau true/undefined (valid). Bisa async.' },
            { label: 'validate (multi)', detail: 'Object { key: fn } — tiap key jalan sendiri, error dikembalikan sebagai object.' },
            { label: 'min / max', detail: 'Buat number/date input: min: { value: 18, message: "..." }' },
            { label: 'deps', detail: 'Array field name. Validate ulang field ini kalo dependency berubah.' },
        ],
    },
    {
        title: 'Modes',
        items: [
            { label: 'onSubmit (default)', detail: 'Validasi jalan pas submit.' },
            { label: 'onBlur', detail: 'Validasi tiap field pas blur (keluar dari input).' },
            { label: 'onChange', detail: 'Validasi tiap keystroke. Bikin re-render banyak.' },
            { label: 'onTouched', detail: 'Validasi pertama pas blur, selanjutnya onChange.' },
            { label: 'all', detail: 'Validasi via blur dan change.' },
        ],
    },
    {
        title: 'Controller',
        items: [
            { label: 'Kapan dipake', detail: 'Buat custom component yang gak punya ref (Select, RadioGroup, Checkbox, DatePicker, dll).' },
            { label: 'Props', detail: '<Controller control={control} name="field" render={({ field }) => <Component ...field />} />' },
            { label: 'fieldState', detail: 'render={({ field, fieldState }) => ...} — akses fieldState.error, fieldState.isTouched' },
            { label: 'Rules di Controller', detail: 'rules prop: rules={{ required: "Required", minLength: 3 }} — sama kayak di register.' },
        ],
    },
    {
        title: 'Schema Validation (Zod / Yup)',
        items: [
            { label: '@hookform/resolvers', detail: 'npm i @hookform/resolvers. Import: import { zodResolver } from "@hookform/resolvers/zod"' },
            { label: 'useForm + resolver', detail: 'useForm({ resolver: zodResolver(schema) }) — validasi pindah ke schema, gak perlu rules di register.' },
            { label: 'Zod schema', detail: 'z.object({ name: z.string().min(3), email: z.string().email() }) + .refine() buat cross-field' },
            { label: 'Server-side errors', detail: 'setError("field", { message: "..." }) — inject error dari API response.' },
        ],
    },
]

export default function RHFNotes() {
    return (
        <TabsContent value="rhf-notes">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>RHF Notes</CardTitle>
                    <CardDescription>
                        Quick reference for React Hook Form concepts &amp; APIs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {notes.map((section) => (
                            <section key={section.title}>
                                <h3 className="mb-3 text-base font-semibold">{section.title}</h3>
                                <div className="space-y-2">
                                    {section.items.map((item) => (
                                        <div key={item.label} className="rounded-lg border p-3">
                                            <code className="text-sm font-medium text-primary">{item.label}</code>
                                            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
