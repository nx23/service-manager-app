import { ServiceManagerSwitch } from "../ServiceManagerSwitch";
import { Container } from "./style";

interface IPythonServiceProps {
  name: string;
  handleWarningModalOpen: () => void;
  isServiceRunning: boolean;
  handleServiceRunning: () => void;
  handleServiceStopping: () => void;
}

export function PythonService(
  {
    name,
    isServiceRunning,
    handleServiceRunning,
    handleServiceStopping,
    handleWarningModalOpen
  }: IPythonServiceProps
) {

  return (
    <>
      <Container>
        <h3>{name}</h3>
        <ServiceManagerSwitch
          handleWarningModalOpen={handleWarningModalOpen}
          isServiceRunning={isServiceRunning}
          serviceId={name}
          handleServiceRunning={handleServiceRunning}
          handleServiceStopping={handleServiceStopping}
        />
      </Container>
    </>
  )
}