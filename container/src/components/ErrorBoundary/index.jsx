import React from "react";
import { Wrapper, Details, Title, Content } from "./styles";
import errorImage from "../../assets/undraw_warning_cyit.svg";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    //? Pega erros em qualquer componente abaixo dele e re-renderiza com mensagens de erro
    this.setState({ error, errorInfo });
    //? Também é possivel fazer um log de erros em algum serviço de report aqui
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Wrapper>
          <Content>
            <img src={errorImage} alt="error" />

            <Title>Opa, ocorreu aconteceu algum imprevisto</Title>
            <Details>
              <summary>Saiba mais</summary>

              {this.state.error && <span>{this.state.error.toString()}</span>}
              <br />
              <span>{this.state.errorInfo.componentStack}</span>
            </Details>
          </Content>
        </Wrapper>
      );
    }
    //! Se não acontecer nenhum erro, renderize os filhos normalmente
    return this.props.children;
  }
}

export default ErrorBoundary;
