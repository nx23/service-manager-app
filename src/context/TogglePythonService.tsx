import React from "react";
import { createContext, useState, useContext } from "react";

interface IPythonService {
  name: string, isRunning: boolean
}

interface IWarningModal {
  name: string, isOpen: boolean
}

interface IPythonServices extends Array<IPythonService>{}

interface IPythonServiceContext {
  pythonServices: IPythonServices;
  isWarningModalOpen: IWarningModal;
  handleTogglePythonService: (scriptName:string) => void;
  handleToggleWarningModal: (scriptName:string) => void;
}

const PythonServiceContext = createContext({} as IPythonServiceContext);

interface IContextProps {
  children: React.ReactChild
}

export function PythonServiceProvider({ children }: IContextProps) {
  const defaultPythonServicesState = [
      {name:'Service1', isRunning: false},
      {name:'Service2', isRunning: false}
    ]
    const defaultWarningModalState = {name:'empty', isOpen: false}

  const [pythonServices, setPythonServices] = useState(defaultPythonServicesState)
  function handleTogglePythonService (scriptName: string) {
    const newPythonServices = pythonServices.map(script => {
      if (script.name === scriptName) {
        if (script.isRunning) {
          window.postMessage({
            type: 'DESLIGAR_PROCESSO',
            scriptName: scriptName
          })
        } else {
          window.postMessage({
            type: 'LIGAR_PROCESSO',
            scriptName: scriptName
          })
        }
        return {...script, isRunning: !script.isRunning};
      }
      return script
    })
    setPythonServices(newPythonServices)
  }

  const [isWarningModalOpen, setIsWarningModalOpen] = React.useState(defaultWarningModalState)
  function handleToggleWarningModal (scriptName: string) {
    setIsWarningModalOpen({ name: scriptName, isOpen: !isWarningModalOpen.isOpen })
  }
  return (
    <PythonServiceContext.Provider
      value={{
        pythonServices,
        isWarningModalOpen,
        handleTogglePythonService,
        handleToggleWarningModal
      }}
    >
      {children}
    </PythonServiceContext.Provider>
  )
}

export function useTogglePythonService() {
  const context = useContext(PythonServiceContext)
  if (!context) throw new Error("usePythonService can only be used within a PythonServiceProvider")
  return context
}
