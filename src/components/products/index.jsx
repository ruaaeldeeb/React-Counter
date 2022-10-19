import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCartCount } from "../../redux/cartSlice";
import "./products.css";

function Products() {
  const dispatch = useDispatch();
  const addToCartCounter = (prod) => {
    dispatch(addToCartCount(prod));
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
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
          <div className="col-md-4  ">
            <Card className="prod">
              <Card.Img variant="top" src={product.image} className="img" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
                <Card.Text> ratting: {product.rating.rate}</Card.Text>
                <Link
                  className="btn btn-primary"
                  to={`/products/${product.id}`}
                >
                  Go Details
                </Link>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => addToCartCounter(product)}
                >
                  Add To Cart
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
