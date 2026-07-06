
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'
import ReactHookFormYup from '@/components/react-hook-form-yup'
import ReactHookFormStandalone from '@/components/react-hook-form'
import ReactHookFormZod from '@/components/react-hook-form-zod'
import FormikYup from '@/components/formik-yup'

function App() {

  return (
    <Tabs className="p-4 items-center">
      <TabsList>
        <TabsTrigger value="react-hook-form-standalone">RHF Standalone</TabsTrigger>
        <TabsTrigger value="react-hook-form-yup">RHF + YUP</TabsTrigger>
        <TabsTrigger value="react-hook-form-zod">RHF + ZOD</TabsTrigger>
        <TabsTrigger value="formik-yup">Formik + YUP</TabsTrigger>

      </TabsList>
      <TabsContent value="react-hook-form-standalone" className="w-1/3">
        <ReactHookFormStandalone />
      </TabsContent>
      <TabsContent value="react-hook-form-yup" className="w-1/3">
        <ReactHookFormYup />
      </TabsContent>
      <TabsContent value="react-hook-form-zod" className="w-1/3">
        <ReactHookFormZod />
      </TabsContent>
      <TabsContent value="formik-yup" className="w-1/3">
        <FormikYup />
      </TabsContent>

    </Tabs>
  )
}

export default App
