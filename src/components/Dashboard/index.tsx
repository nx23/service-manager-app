import { ServiceList } from "../ServiceList";
import { ServiceListHeaders } from "../ServiceListHeaders";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <ServiceListHeaders />
      <ServiceList />
    </Container>
  )
}