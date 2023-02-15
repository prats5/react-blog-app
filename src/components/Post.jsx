import React from 'react'
import { Card, CardBody, CardText, Button } from 'reactstrap'
import { Link } from 'react-router-dom'


function Post({post={ title:"This is default post title", content:"This is default post content"} }) {
    return (
       
        <Card className='border-0 shadow-sm mt-3'>
           <CardBody>
                  <h1>{post.title}</h1>
               <CardText>
                   {post.content.substring(0,50)}...
               </CardText>
               <div>
                   <Link className='btn btn-secondary boarder-0' to={'/posts/'+ post.postId}>Read More</Link>
               </div>
           </CardBody>

        </Card>
    )
}


export default Post;