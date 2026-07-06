
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'
import ReactHookFormYup from '@/components/react-hook-form-yup'

function App() {

  return (
    <Tabs className="p-4">
      <TabsList>
        <TabsTrigger value="react-hook-form-yup">RHF + YUP</TabsTrigger>
      </TabsList>
      <ReactHookFormYup />
    </Tabs>
  )
}

export default App
