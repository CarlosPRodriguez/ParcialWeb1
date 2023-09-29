import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

function Loging(props){
  const navigate = useNavigate();
  const[logins, setLogins] = useState(true);
  const [formValues, setFormValues] = useState({email:"", password:""})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  //la contraseña debe tener mas de 6 caracteres o numeros 
  const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  if (e.target.value.length < 6 ) {
    setValidationStates({...validationStates, passwordState:false})
  }else{
    setValidationStates({...validationStates, passwordState:true})
  }
  });

  const clickIngresar = (() => {
    //Si el correo tiene el signo , se valida l coreo
    if (formValues.email.includes("@") && validationStates.passwordState) {
      setValidationStates({ ...validationStates, emailState: true });
      handlePost();
      
    } else if (!formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: false });
      setLogins(false);
    } else if (!validationStates.passwordState) {
      setValidationStates({ ...validationStates, passwordState: false });
      setLogins(false);
    }
    //if (formValues.email.includes("@")) {
    //    setValidationStates({ ...validationStates, emailState: true });
    //    setLogins(false);
    //    }
    //else if (!formValues.email.includes("@")) {
    //    setValidationStates({ ...validationStates, emailState: false });
    //    }
    })

  //const clickSubmit = (() => {
    //validación del correo
  
  //  })


    const exampleJSON = { email: formValues.email, password: formValues.password}

    async function handlePost() {
      console.log("Envio de Post")
      console.log(JSON.stringify(exampleJSON))
      //const response = await fetch("https://my.api.mockaroo.com/login.json?key=__method=POST", { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      //const dataa = await response.json()
      //setDataPOST(JSON.stringify(dataa))
      //props.setUsuario(dataa)
      navigate("/cafes" )
    };

    return(
        <Container>
    <Row>
       
        <Col style={{backgroundColor: 'white'}}>
        <Container>
        <div class="container text-right">
            <div class="row">
                <h1> El aroma mágico </h1>
                <div class="col">
                    <img class= "img-fluid" src="C:\Users\charl\ParcialWeb1\encabezado.jpg" alt="..." width="700" />
                </div>
              </div> 
        </div>
        {(logins) && 
          <div class="container px-4">
            <h4> Inicio de sesión </h4>
            <Form>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    
                    <h4 > Nombre de usuario </h4>
                    <Form.Control type='email' placeholder='Enter email' onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <h4> Contraseña</h4>
                    <Form.Control type="password" placeholder="Ingresa su contraseña" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''}/>
                    { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 6 char long</Form.Text>} 
                  </Form.Group>
                 <div class= "row">
                    <div class="col-4">
                      <Button onClick={clickIngresar}>
                        Ingresar
                      </Button>
                    </div>
                    <div class="col-8">
                      <Button  onClick={clickIngresar} >
                          Cancelar
                      </Button>
                    </div>
                    {!validationStates.emailState &&  <Form.Text className='text-muted'>Erro de Autenticación. Revise sus credenciales</Form.Text>} 
                 </div>
                
            </Form>

            <p> Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
          </div>
        }
        </Container>
        </Col>
         
    </Row>
    </Container>
    );
}

// <Form.Label>Ingreda tu contraseña</Form.Label>
export default Loging;