import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Form, Row, Col, Container, InputGroup, Card, FloatingLabel } from "react-bootstrap";
import LoginValidator from "../validators/loginValidador";


const Login = () => {

  // style 
  
  const center = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  const central = {
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  }

  // Captura de informações |

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [validated, setValidated] = useState(false);
  const [validadeEmail, setValidadeEmail] = useState(false)
  const [validadeSenha, setValidadeSenha] = useState(false)
 
  // Efeito incorreto input
  useEffect(() => {
    if (errors.email !== undefined){
      setValidadeEmail(true);
    } 
    if (errors.senha !== undefined){
      setValidadeSenha(true);
    }
  },[errors])

  // Alteração input correto e envio dos dados
  const validade = (dados) => {

    if (errors.email !== undefined){
      setValidadeEmail(true);
    } else if (errors.senha !== undefined){
      setValidadeSenha(true);
    }   
    else {
      setValidated(true);
      novoEvento(dados);
    }
  };

  // envio de dados 

  function novoEvento(props) {
    const dados = props;
    console.log(dados);    
  }

  return (
    <>
      <div style={central}>
        <Container>
          <Row>
            <div style={center} >
            <Col md={5}>
              <Card border="gray">
                <Card.Body>
                  
                  <br />
                  <div style={center}>
                  
                  <img src='https://ecs.com.br/wp-content/uploads/2021/03/logo.png' alt="Logo"/>

                  </div>
                  <br />

                  <Form noValidate onSubmit={handleSubmit} validated={validated}>
                    <Row className="mb-3">
                      <div>
                      <InputGroup controlId="validationCustom01" className="md-3">
                        <FloatingLabel
                          controlId="email"
                          label="Insira seu e-mail:"
                          className="w-100"
                        >
                          <Form.Control
                            
                            type="email"
                            {...register("email", LoginValidator.email)}
                            placeholder="Email"
                            isInvalid={validadeEmail}
                            required                                                   
                          />
                          
                          {errors.email && <span className="text-danger">{errors.email.message}</span>}
                  
                        </FloatingLabel>
                      </InputGroup>
                      </div>
                    </Row>

                    <Row className="mb-3">
                      
                      <InputGroup controlId="validationCustom01">
                        <FloatingLabel
                          controlId="senha"
                          label="Insira sua senha:"
                          className="w-100"
                        >
                          <Form.Control
                            
                            type="password"
                            {...register("senha", LoginValidator.senha)}
                            placeholder="Senha"
                            isInvalid={validadeSenha}
                            required
                          />

                          {errors.senha && <span className="text-danger">{errors.senha.message}</span>}

                        </FloatingLabel>
                      </InputGroup>

                      
                    </Row>
                    
                    <Row>
                      <Col md={6} style={{ display: 'Flex', alignItems: 'center', justifyContent: 'left' }}>
                        <Form.Check label='Lembrar-me' />
                      </Col>
                      <Col md={6} style={{ display: 'Flex', fontStyle: 'italic', alignItems: 'center', justifyContent: 'right' }}>
                        <a href='#top' className="btn btn">Esqueceu a senha?</a>
                      </Col>

                    </Row>
                    
                    <br />
                    <Row >
                      <div style={center}>
                        
                          <Button type="submit" onClick={handleSubmit(validade)} variant="outline-primary" className="w-50">
                            Entrar
                          </Button>
                        
                      </div>
                      
                    </Row>
                  </Form>
                  <br />
                  <Row>
                    <Col style={center} >
                      <p className='btn btn-ourtilne'>Cadastrar </p>

                    </Col>
                  </Row>

                </Card.Body>
                
              </Card>
            </Col>

            </div>

          </Row>
        </Container>
      </div>  
  </>
  )
}

export default Login