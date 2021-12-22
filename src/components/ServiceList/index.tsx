import { PythonService } from "../PythonService";
import { Container } from "./style";

export function ServiceList() {
  return (
    <Container>
      <PythonService scriptName="DispDimerr" />
      <PythonService scriptName="VPA" />
    </Container>
  )
}