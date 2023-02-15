import Base from "../components/Base";
import { Container, Col, Row, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import { doLogin } from "../components/auth/index";
import { useNavigate } from "react-router-dom";




const Login = () => {

  const navigate = useNavigate();

   const [loginDetail, setLoginDetail] = useState({
      username: '',
      password: ''
    });


    const handleChange = (event, field) => {
      let actualValue = event.target.value;
      setLoginDetail({
        ...loginDetail,
        [field]: actualValue,
      });
    };


    const handleReset = () => {
      setLoginDetail({
        username: '',
        password: ''
      });
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(loginDetail);
      //validation
      if (
        loginDetail.username.trim() == '' ||
        loginDetail.password.trim() == ''
      ) {
        toast.error("Username or Password  is required !!");
        return;
      }

      loginUser(loginDetail).then((data)=>{         
         console.log(data)

          doLogin(data, ()=>{
            console.log("login details saved to localstorage")

            navigate("/user/dashboard");

          })

         toast.success("Login successfully !")
      }).catch(error=>{
         console.log(error)
         if(error.response.status==400 || error.response.status==404 || error.response.status==500){
            toast.error(error.response.data.message)   
         }  else {
            toast.error("something went wrong on server !")
         }
         
      })
      


    };






   return(
    <Base>
        
        <Container>

            <Row className="mt-4">

               <Col sm={{
                  size:6,
                  offset: 3
               }}>
               
               
                 <Card color="dark" inverse>

                     <CardHeader>
                      <h3> Login here</h3>
                     </CardHeader>
                      <CardBody>

                           <Form onSubmit={handleFormSubmit} >
                                <FormGroup>
                                   <Label for="email">Enter Email</Label>
                                   <Input type="text" id="email"
                                    value={loginDetail.username}
                                    onChange={(e) => handleChange(e, 'username')}
                                   />
                                </FormGroup>

                                <FormGroup>
                                   <Label for="password">Enter password</Label>
                                   <Input type="password" id="password" 
                                    value={loginDetail.password}
                                    onChange={(e) => handleChange(e, 'password')}
                                   />
                                </FormGroup>

                                <Container className="text-center">
                                    <Button color="light" outline>Login</Button>
                                    <Button onClick={handleReset} className="ms-2" outline color="secondary">Reset</Button>
                                </Container>

                           </Form>
                         
                         </CardBody>  
                 </Card>


               </Col>

            </Row>



        </Container>
        
        

</Base>
   );


}

export default Login;