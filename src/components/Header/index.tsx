import logoImg from "../../assets/ServiceManagerLogo.svg"
import { Container, Content } from "./style"

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="service manager"></img>
      </Content>
    </Container>
  )
}