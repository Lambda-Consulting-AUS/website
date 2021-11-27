
import { Row, Col } from "antd"
import { MailtoLink } from "./components";

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
            <h3>Contact</h3>
            Do you have any questions? Reach out to us at<br/><MailtoLink/>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

