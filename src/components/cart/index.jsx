import { click } from "@testing-library/user-event/dist/click";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
function Cart() {
  let cartList = useSelector((state) => state.cartstore.cartList);
  // console.log(cartList);

  return (
    <div className="row">
      {cartList.map((product) => {
        return (
          <div className="col-md-4  ">
            <Card className="prod">
              <Card.Img variant="top" src={product.image} className="img" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Card.Text> ratting: {product.rating.rate}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
