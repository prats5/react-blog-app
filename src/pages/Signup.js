import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { signup, signUp } from "../services/user-service";

import { Card, CardHeader, Container, CardBody, Form, FormGroup, FormFeedback, Label, Input, Button, Row, Col } from 'reactstrap';

import Base from "../components/Base";
import { toast } from "react-toastify";

const Signup = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
  });

  const [error, setError]=useState({
          errors:{},
          isError: false
  })

  useEffect(()=>{
    console.log(data);
  },[data])

  // handle change

   const handleChange=(event, property)=>{
     //console.log("name changed");
     setData({...data, [property]:event.target.value})
    
     }

     const resetData = () => {
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    }; 
    
    // submit the form 
    const submitForm=(event)=>{
      event.preventDefault()
      console.log(data);

      signUp(data).then((resp)=>{
       console.log(resp)
        console.log("success log")
        toast.success("User is registered successfully !! user id " + resp.id);

        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      }).catch((error)=>{
          console.log(error)
          console.log("Error Log")
          setError({
            errors: error,
            isError: true
          })
      })
    }

    return(
    <Base>
    
    <Container>
      <Row className="mt-4">  

         <Col sm={{ size: 6, offset: 3}}>
             <Card color="dark" inverse>

            <CardHeader>  
             <h3> Fill Information to Register ! </h3>

            </CardHeader>
                   <CardBody>
        <form onSubmit={submitForm}>

        <FormGroup>
          <Label for="name">Enter Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter here" 
          onChange={(e)=>handleChange(e, 'name')}
          value={data.name}
          invalid={
            error.errors?.response?.data?.name ? true : false
          }
          />
          <FormFeedback>
            {error.errors?.response?.data?.name}
          </FormFeedback>
          </FormGroup>

        <FormGroup>
          <Label for="email">Enter email</Label>
          <Input type="text" name="email" id="email" placeholder="Enter here"
           onChange={(e)=>handleChange(e, 'email')}
           value={data.email}
           invalid={
            error.errors?.response?.data?.email ? true : false
          }
          />
           <FormFeedback>
            {error.errors?.response?.data?.email}
          </FormFeedback>
          </FormGroup>
        

        <FormGroup>
          <Label for="password">Enter password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter here" 
          onChange={(e)=>handleChange(e, 'password')}
          value={data.password}
          invalid={
            error.errors?.response?.data?.password ? true : false
          }
          />
           <FormFeedback>
            {error.errors?.response?.data?.password}
          </FormFeedback>
          </FormGroup>

        <FormGroup>
          <Label for="about">Enter About</Label>
          <Input type="text" name="about" id="about" style={{height:"150px"}}    placeholder="Write something about yourself" 
           onChange={(e)=>handleChange(e, 'about')}
           value={data.about}
           invalid={
            error.errors?.response?.data?.about ? true : false
          }
           />
           <FormFeedback>
            {error.errors?.response?.data?.about}
          </FormFeedback>
        </FormGroup>

        <Container className="text-center">
                    <Button outline color="light">Register</Button>
                    <Button onClick={resetData} outline color="secondary" type="reset" className="ms-2">Reset</Button>
                    
          </Container>
            </form>

                   </CardBody>

        </Card>

             </Col>

      </Row>

      </Container>
        
        
        
         
    </Base>


    );

    };



export default Signup;