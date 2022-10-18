import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-md-3">
            <Card>
              <Card.Img variant="top" src={product.image} className="w-100" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.rating.rate}</Card.Text>
                <Link
                  className="btn btn-primary"
                  to={`/products/${product.id}`}
                >
                  Go Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
