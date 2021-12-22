import { ServiceManagerSwitch } from "../ServiceManagerSwitch";
import { Container } from "./style";

interface IPythonServiceProps {
  scriptName: string;
}

export function PythonService({ scriptName }: IPythonServiceProps) {
  return (
    <>
      <Container>
        <h3>{scriptName}</h3>
        <ServiceManagerSwitch scriptName={scriptName} />
      </Container>
    </>
  )
}