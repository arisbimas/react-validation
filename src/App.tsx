
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'
import ReactHookFormYup from '@/components/react-hook-form-yup'
import ReactHookFormStandalone from '@/components/react-hook-form'
import ReactHookFormZod from '@/components/react-hook-form-zod'
import FormikYup from '@/components/formik-yup'
import RHFNotes from '@/components/rhf-notes'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState(() => new URLSearchParams(window.location.search).get('tab') || 'react-hook-form-standalone')

  const handleClickTab = (tab: string) => {
    //push to url query params
    const url = new URL(window.location.href)
    setActiveTab(tab)
    url.searchParams.set('tab', tab)
    window.history.pushState({}, '', url.href)
  }



  return (
    <Tabs className="p-4 items-center" value={activeTab}>
      <TabsList className="sticky top-3">
        <TabsTrigger
          className="cursor-pointer" value="react-hook-form-standalone"
          onClick={() => handleClickTab('react-hook-form-standalone')}>
          RHF Standalone
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer"
          value="react-hook-form-yup"
          onClick={() => handleClickTab('react-hook-form-yup')}>
          RHF + YUP
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer"
          value="react-hook-form-zod"
          onClick={() => handleClickTab('react-hook-form-zod')}>
          RHF + ZOD
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer"
          value="formik-yup"
          onClick={() => handleClickTab('formik-yup')}>
          Formik + YUP
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer"
          value="rhf-notes"
          onClick={() => handleClickTab('rhf-notes')}>
          RHF Notes
        </TabsTrigger>

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
      <RHFNotes />

    </Tabs>
  )
}

export default App
