import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";


type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  const quantity = getItemQuantity(id);

  return (
    <Card className="me-auto">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{objectFit: "cover"}}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4" style={{fontFamily: "One-serif"}}>{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="btn btn-primary btn-sm"
                  style={{width: "50px"}} onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <div>
                  <span className="fs-3" style={{fontSize: "1.4rem"}}>{quantity}</span> In cart
                </div>
              <Button style={{width: "50px"}} 
                className="btn btn-primary btn-sm" onClick={() => increaseCartQuantity(id)}>
                +
              </Button>
            </div>
              <Button className="btn btn-primary btn-sm"
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
          </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
