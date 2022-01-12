
import { Row, Col } from 'antd'
import { MailtoLink, PhoneLink } from './components'

export default function Footer () {
  return (
    <footer>
      <div className='container'>
        <Row justify='space-between' align='middle'>
          <Col lg={11} md={11} sm={11} xs={24}>
            <img src='logo-square.svg' width='200' height='200'
              alt='Lambda Consulting logo' />
            <br/>
            Copyright © Lambda Consulting 2022
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <h2 style={{ fontSize: '1.4rem' }}>Contact</h2>
            <p style={{ fontSize: '1rem' }}>Do you have any questions? Reach out to us at</p>
            <MailtoLink /><br />
            <PhoneLink />
            <p style={{ fontSize: '1rem', fontFamily: 'sans-serif', marginTop: 20, color: '#333' }}>ABN: 62 973 907 508</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

