import React, { useContext } from 'react'
import Base from '../../components/Base';
import userContext from '../../context/userContext';
import { useParams } from 'react-router';
import { getUser } from '../../services/user-service';
import { useState, useEffect } from "react";
import { Button, Card, CardBody, CardFooter, Col, Container, Input, Row, Table } from 'reactstrap';
import ViewUserProfile from '../../components/ViewUserProfile';

function ProfileInfo() {

  const object = useContext(userContext)
  const [user, setUser]=useState(null)

             const {userId}=useParams()
             console.log(userId)


          useEffect(()=>{
            getUser(userId).then(data=>{
                 console.log(data);
                 setUser({...data})
            })

          },[])

          const userView = ()=> {
           return(
             <Row>
                <Col md={{ size: 8, offset: 2 }} >

                  <ViewUserProfile user={user} />
                 
                {/*
                <Card className='mt-2 border-0 rounded-0 shadow-sm'>
                  <CardBody>
                 <h3 className='text-uppercase'>user Information</h3>

                <Container className='text-center'>
                <img style={{ maxWidth: '150px', maxHeight: '200px' }} src={user.image ? user.image : 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
            </Container>

            <Table responsive striped hover bordered={true} className='text-center mt-5'>
              <tbody>
                <tr>
                  <td >
                    LCWDBlLOGS ID
                  </td>
                  <td>
                    LCWD{user.id}
                  </td>
                </tr>
                <tr>
                  <td >
                    USER NAME
                  </td>
                  <td>
                    <Input type='text' value={user.name} />
                  </td>
                </tr>
                <tr>
                  <td >
                    USER EMAIL
                  </td>
                  <td>
                    {user.email}
                  </td>
                </tr>
                <tr>
                  <td >
                    ABOUT
                  </td>
                  <td>
                    <Input type='textarea' value={user.about} />
                  </td>

                </tr>
                <tr>
                  <td>
                    ROLE
                  </td>
                  <td>
                    {user.roles.map((role) => {
                      return (
                        <div key={role.id}>{role.name}</div>
                      )
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>



            </CardBody>

            </Card>
                  */}

                </Col>


             </Row>

           )


          }

    return(

        <Base>
          {user ? userView(): 'Loading user data...'}
        </Base>

    )

}

export default ProfileInfo;