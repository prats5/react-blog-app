import { useState } from "react"
import { useEffect } from "react"
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import { loadAllCategories } from "../services/category-service"
import { createPost as doCreatePost } from "../services/post-service"
import { getCurrentUserDetail } from "../components/auth/index"
import { toast } from "react-toastify"





const AddPost = () => {

       
    const [categories, setCategories] = useState([])   
    const [user, setUser] = useState(undefined)
    
    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId:''
    })

    // field changed 
    const fieldChanged=(event)=>{        
        setPost({...post, [event.target.name]:event.target.value})
    }

    // create post function 

    const createPost = (event) => {

        event.preventDefault();

        console.log(post)
        if (post.title.trim() === '') {
            toast.error("post  title is required !!")
            return;
        }

        if (post.content.trim() === '') {
            toast.error("post content is required !!")
            return
        }

        if (post.categoryId === '') {
            toast.error("select some category !!")
            return;
        }


     // submit the form data to the server
     post['userId'] = user.id
     doCreatePost(post).then(data => {
        toast.success("Post Created !")
        //console.log(post)
        setPost({
            title: '',
            content: '',
            categoryId: ''
        })
    }).catch((error) => {
        toast.error("Post not created due to some error !!")
        console.log(error)
    })
}


    useEffect(
        () => {
            setUser(getCurrentUserDetail())
            loadAllCategories().then((data) => {
                console.log(data)
                setCategories(data)
            }).catch(error => {
                console.log(error)
            })
        }, []
    )

               
    return (
        <div className="wrapper">
            <Card className="shadow-sm  border-0 mt-2">
                <CardBody>
                   <h3>What going in your mind ?</h3>
                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="title" >Post title</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="title"
                                onChange={fieldChanged}
                               
                            />
                        </div>

                        <div className="my-3">
                            <Label for="content" >Post Content</Label>
                            <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="content"
                                style={{ height: '200px' }}
                                onChange={fieldChanged}
                            /> 

                                                    
                        </div>

                        
                        <div className="my-3">
                            <Label for="category" >Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="categoryId"
                                defaultValue={0}
                                onChange={fieldChanged}

                            >

                              <option disabled value={0} >--Select category--</option>

                                   {

                                      categories.map((category) => (
                                       <option value={category.categoryId} key={category.categoryId}>
                                        {category.categoryTitle}
                                         </option>
                                              ))

                                      }



                            </Input>
                        </div>



                        <Container className="text-center">
                            <Button type="submit" className="rounded-0" color="primary">Create Post</Button>
                            <Button className="rounded-0 ms-2" color="danger">Reset Content</Button>
                        </Container>


                    </Form>


                </CardBody>

            </Card>




        </div>
    )
}

export default AddPost;