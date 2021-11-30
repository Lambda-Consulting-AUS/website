
import { Row, Col } from "antd"
import { MailtoLink, PhoneLink } from "./components"

export default function Footer () {
  return (
    <footer>
      <div className='container'>
        <Row justify="space-between">
          <Col span={11}>
            <img src="logo-square.svg" width="150" height="150"
              alt='Lambda Consulting logo' />
            <br/>
            Copyright © Lambda Consulting 2022
          </Col>
          <Col span={11}>
            <h2>Contact</h2>
            <p style={{ fontSize: '1rem' }}>Do you have any questions? Reach out to us at</p>
            <MailtoLink /><br />
            <PhoneLink />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

