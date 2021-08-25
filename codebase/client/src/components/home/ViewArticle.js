import React from 'react'
import Card from 'react-bootstrap/Card'

function ViewArticle({key,title,text,author}) {
    return (
        <div>
            <Card className="home__card">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">{author}</Card.Subtitle>
                <Card.Body>{text}</Card.Body>
            </Card>
        </div>
    )
}

export default ViewArticle
