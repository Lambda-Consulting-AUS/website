
import Header from './header'
import Footer from './footer'
import { Row, Col } from 'antd'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import { MailtoLink, ContentBlock, Partner, SectionLabel } from './components'

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

    <SectionLabel id='team'>Our Team</SectionLabel>

    <Partner name='Oliver Balfour' photo='/images/partners/balfour.jpg'>
      <p>Oliver is a Software Developer at <a href='https://www.liquidinstruments.com/'>Liquid Instruments</a> where he develops Windows, macOS and iOS interfaces for scientific instruments.</p>
      <p>Oliver has experience making websites, mobile apps, desktop software, video games and machine learning pipelines.</p>
      <p>He studies Computer Science and Mathematics in a Bachelor of Philosophy at the ANU, supported by the ANU All-Rounder Scholarship.</p>
      <p>He is currently the Vice-President of the <a href='https://cs.club.anu.edu.au/'>ANU Computer Science Students' Association</a>.</p>
    </Partner>
    <Partner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' flipped>
      <p>Paras works as a Software Developer at CSIRO writing data science code running on supercomputers, such as modelling river flow in the Murray-Darling basin.</p>
      <p>He achieved a perfect 99.95 ATAR in high school and is now studying at the ANU.</p>
    </Partner>
    <Partner name='Oliver Bagin' photo='/images/partners/bagin.jpg'>
      <p>Oliver achieved a state rank in year 12 software development in year 10. He works manufacturing and installing lifts. He made his own CNC machine from scratch in high school.</p>
    </Partner>

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
