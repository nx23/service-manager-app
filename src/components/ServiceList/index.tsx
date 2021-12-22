import { PythonService } from "../PythonService";
import { Container } from "./style";
import WarningModal from "../WarningModal";


export function ServiceList() {
  return (
    <Container>
      <PythonService scriptName="DispDimerr" />
      <PythonService scriptName="VPA" />
      <WarningModal/>
    </Container>
  )
}