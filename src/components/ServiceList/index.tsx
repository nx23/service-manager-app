import { PythonService } from "../PythonService";
import { Container } from "./style";
import WarningModal from "../WarningModal";


export function ServiceList() {
  return (
    <Container>
      <PythonService scriptName="Service1" />
      <PythonService scriptName="Service2" />
      <WarningModal />
    </Container>
  )
}