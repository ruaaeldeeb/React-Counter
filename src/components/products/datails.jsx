import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Details() {
  const parms = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts();
    console.log(product);
  }, []);

  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products/${parms.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <>
      <Card className="w-25">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Details;
