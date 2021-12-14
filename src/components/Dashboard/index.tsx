import { ServiceList } from "../ServiceList";
import { ServiceListHeaders } from "../ServiceListHeaders";
import { Container } from "./style";

interface IDashboardProps {
  handleWarningModalOpen: () => void;
  isServiceRunning: boolean;
  handleServiceRunning: () => void;
  handleServiceStopping: () => void;
}

export function Dashboard(
  {
    isServiceRunning,
    handleServiceRunning,
    handleServiceStopping,
    handleWarningModalOpen,
  }: IDashboardProps
) {
  return (
    <Container>
      <ServiceListHeaders />
      <ServiceList
        isServiceRunning={isServiceRunning}
        handleServiceRunning={handleServiceRunning}
        handleServiceStopping={handleServiceStopping}
        handleWarningModalOpen={handleWarningModalOpen}
      />
    </Container>
  )
}