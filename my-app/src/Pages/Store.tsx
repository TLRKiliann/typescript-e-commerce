import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../Components/StoreItem';
import storeItems from "../assets/db_tree/items.json";


export const Store = () => {

  return (
    <>
      <h6 style={{fontSize: "3rem"}}>Store</h6>

      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>))}
      </Row>
    </>
  );
}
