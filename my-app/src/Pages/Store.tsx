import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../Components/StoreItem';
import storeItems from "../assets/db_tree/items.json";


export const Store = () => {

  return (
    <Container className="mb-4">
      <h6 className="mt-3" style={{fontSize: "2.4rem"}}>Store</h6>

      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>))}
      </Row>
    </Container>
  );
}
