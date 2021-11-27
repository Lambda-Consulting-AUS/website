
import Header from './header'
import Footer from './footer'
import { Row, Col } from 'antd'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import { MailtoLink } from './components'

function ContentBlock ({ flipped, src, children }) {
  const a =
    <Col span={11}>
      {children}
    </Col>

  const b =
    <Col span={11}>
      <img src={src} />
    </Col>
  
  return <div className='container'>
    <Row justify="space-between" align='middle' className="content-section">
      {flipped ? b : a}
      {flipped ? a : b}
    </Row>
  </div>
}

export default function Site () {
  return <>
    <Header />
    <ContentBlock src='/images/developer.svg'>
      <h1>Custom software solutions for problems big and small</h1>
      <p>
        Websites, mobile apps, and software designed, implemented and maintained.
        We will work alongside you to develop solutions to your needs.
      </p>
    </ContentBlock>
    <ContentBlock src='/images/graphs.svg' flipped>
      <h1>Determine what you need quickly and easily</h1>
      <p>
        Our team will meet with you to identify your requirements and design a plan of attack at no cost.
        We provide free advice, just give us a call!
      </p>
    </ContentBlock>
    <ContentBlock src='/images/launch.svg'>
      <h1>Quick and transparent development</h1>
      <p>
        Our active and dedicated team will work tirelessly to deliver your solution in the timeframe required.
        We value transparency, honesty and our relationships with clients.
      </p>
    </ContentBlock>
    <ContentBlock src='/images/waving.svg' flipped>
      <h1>Experience with web, mobile and desktop software</h1>
      <p>
        Our team has a diverse skill set spanning all major platforms. We've built mobile apps, websites,
        search engines, control panels for rockets and scientific instruments and smart contracts,
        among many other projects.
      </p>
    </ContentBlock>
    <div className='container'>
      <Row justify="space-between" align='middle' className="content-section" id='contact'>
        <Col span={11}>
          <h1>Let's have a chat!</h1>
          <p>
            Get in touch to speak about anything tech related!
            We enjoy solving problems and helping clients.
          </p>
        </Col>
        <Col span={11}>
          <div style={{ fontSize: 22 }}>E:&nbsp;<MailtoLink/></div>
          <div style={{ fontSize: 22 }}>T:&nbsp;+61 000 000 000</div>
        </Col>
      </Row>
    </div>
    <Footer/>
  </>
}
