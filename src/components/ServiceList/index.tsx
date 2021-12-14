import { PythonService } from "../PythonService";
import { Container } from "./style";

interface IServiceListProps {
  handleWarningModalOpen: () => void;
  isServiceRunning: boolean;
  handleServiceRunning: () => void;
  handleServiceStopping: () => void;
}

export function ServiceList(
  {
    isServiceRunning,
    handleServiceRunning,
    handleServiceStopping,
    handleWarningModalOpen
  }: IServiceListProps
) {
  return (
    <Container>
      <PythonService
        name="VPA"
        handleWarningModalOpen={handleWarningModalOpen}
        isServiceRunning={isServiceRunning}
        handleServiceRunning={handleServiceRunning}
        handleServiceStopping={handleServiceStopping}
      />
    </Container>
  )
}