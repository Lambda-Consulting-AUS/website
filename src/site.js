
import Header from './header'
import Footer from './footer'
import { Row, Col } from 'antd'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import { MailtoLink, ContentBlock } from './components'

export default function Site () {
  return <>
    <Header />
    <ContentBlock>
      <>
        <h1>Custom software solutions for problems big and small</h1>
        <p>
          Websites, mobile apps, and software designed, implemented and maintained.
          We will work alongside you to develop solutions to your needs.
        </p>
      </>
      <img src='/images/developer.svg' alt='Software developer drinking coffee' />
    </ContentBlock>
    <ContentBlock flipped>
      <>
        <h1>Determine what you need quickly and easily</h1>
        <p>
          Our team will meet with you to identify your requirements and design a plan of attack at no cost.
          We provide free advice, just give us a call!
        </p>
      </>
      <img src='/images/graphs.svg' alt='Charts on a slideshow' />
    </ContentBlock>
    <ContentBlock>
      <>
        <h1>Quick and transparent development</h1>
        <p>
          Our active and dedicated team will work tirelessly to deliver your solution in the timeframe required.
          We value transparency, honesty and our relationships with clients.
        </p>
      </>
      <img src='/images/launch.svg' alt='Rocket launch' />
    </ContentBlock>
    <ContentBlock flipped>
      <>
        <h1>Experience with web, mobile and desktop software</h1>
        <p>
          Our team has a diverse skill set spanning all major platforms. We've built mobile apps, websites,
          search engines, control panels for rockets and scientific instruments and smart contracts,
          among many other projects.
        </p>
      </>
      <img src='/images/waving.svg' alt='Person waving into a computer' />
    </ContentBlock>
    <ContentBlock>
      <>
        <h1>Let's have a chat!</h1>
        <p>
          Get in touch to speak about anything tech related!
          We enjoy solving problems and helping clients.
        </p>
      </>
      <>
        <div style={{ fontSize: 22 }}>E:&nbsp;<MailtoLink/></div>
        <div style={{ fontSize: 22 }}>T:&nbsp;+61 000 000 000</div>
      </>
    </ContentBlock>
    <Footer />
  </>
}
