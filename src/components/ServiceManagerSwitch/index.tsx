
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useTogglePythonService } from '../../context/TogglePythonService'
import WarningModal from "../WarningModal";

interface IServiceManagerSwitch {
  scriptName: string;
}

const GreenSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#27AE60',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#EB5757',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export function ServiceManagerSwitch({ scriptName }: IServiceManagerSwitch) {

  const {
    pythonServices,
    handleTogglePythonService,
    handleToggleWarningModal
  } = useTogglePythonService()

  function handlePythonService() {
      if (pythonServices.find(script => script.name === scriptName)!.isRunning) {
        handleToggleWarningModal()
      } else {
        handleTogglePythonService(scriptName)
      }
    }

  return (
    <>    
      <GreenSwitch
        id={scriptName}
        checked={pythonServices.find(script => script.name === scriptName)!.isRunning}
        onChange={handlePythonService}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <WarningModal
        scriptName={scriptName}
      />
    </>

  )
}