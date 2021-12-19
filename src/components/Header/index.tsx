import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles'; //Quando usar o concatenar não precisa botar a extensão


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  
  return (
    <Container>
      <Content>
      <a href="index.html">
      <img src={logoImg} alt="dt money" />
      </a>
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
       </Content>
    </Container>
  )
}