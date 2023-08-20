import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard  ({image ,title , description , category , price , rating , count })
{

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button variant="primary">{price}</Button>
        <Card.Text>
            {rating} Stars
            {count} Available
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;