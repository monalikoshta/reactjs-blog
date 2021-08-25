import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import AddArticleService from '../../services/AddArticleService'

function AddArticle() {
    const title = React.useRef(null);
    const content = React.useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
          title: title.current.value,
          content: content.current.value,
          author_id: localStorage.getItem("user_id"),
          author_name: localStorage.getItem("name")
        }
        console.log(data)
        let response;
        try{
            response = await AddArticleService(data);
            if(response.success){
              console.log("Added Successfully!")
            } 
        } catch(err){
            console.log("Show error/ error handling")
        }
    };

    return (
        <div>
            <h3>Add Article</h3>
            <Card className="home__card">
                <Form>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" ref={title}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="What's on your mind..." ref={content} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default AddArticle
