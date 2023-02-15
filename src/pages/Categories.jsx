import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../components/Base'
import { Container, Row, Col } from "reactstrap";
import CategorySideMenu from '../components/CategorySideMenu';
import { loadPostCategoryWise } from '../services/post-service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Post from '../components/Post';

function Categories() {

    const [posts, setPosts] = useState([])

    const { categoryId } = useParams()
    useEffect(() => {
        console.log(categoryId);
        loadPostCategoryWise(categoryId).then(data => {
            setPosts([...data])
        })
            .catch(error => {
                console.log(error)
                toast.error("error in loading posts")
            })
    }, [categoryId])


    return (
        <Base>

            <Container className="mt-3">
                <Row>
                    <Col md={2} className="pt-5">
                        <CategorySideMenu />
                    </Col>
                    <Col md={10}>

                        <h1>Blogs Count ( {posts.length} )</h1>

                        
                        {posts.length <= 0 ? <h1>No post in this category</h1> : ''}
                    </Col>
                </Row>
            </Container>


        </Base>
    )
}

export default Categories