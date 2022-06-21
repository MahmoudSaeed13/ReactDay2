import { Button, Card } from "react-bootstrap";

export const MyCard = (props) => {
    
    return (
        <div className="col-9 col-lg-3 py-2">
            <Card>
            <Card.Img variant="top" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="primary">{props.linkTitle}</Button>
            </Card.Body>
            </Card> 
        </div>
    )
}