
import Header from '../header'
import Footer from '../footer'
import "antd/dist/antd.css"
import '../global.scss'
import '../index.scss'
import {
  ContentBlock, Partner, SmallPartner, PartnerArray, Project, ProjectCarousel, SectionLabel,
  MailtoLink, PhoneLink, Link, Logo, LogoCarousel, SectionSubLabel,
} from '../components';
import {Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';

export default function Site() {
  return <>

    <Header />

    <ContentBlock>
      <>
        <h1>Software and Data Consulting</h1>
        <p>
          Lambda Consulting is here to help in creating bespoke software and delivering custom data solutions. Be-it websites, mobile apps, blockchain tech, big data, environmental modelling, etc.
        </p>
        <p>
          We will work alongside you to develop custom software and data solutions to your problems.
        </p>
      </>
      <img src='/images/developer.svg' alt='Software developer drinking coffee' />
    </ContentBlock>

    <SectionLabel id='team'>Our Team</SectionLabel>

<PartnerArray>
<SmallPartner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' title='Founder' flipped
  linkedin='https://www.linkedin.com/in/paras-stefanopoulos-738bb8208/'
  github='https://github.com/pstefa1707'
  email='paras@lambdaconsulting.com.au'
  phone='+61 432 049 137'
/>
<SmallPartner name='Oliver Bagin' photo='/images/partners/bagin.jpg' title='Founder'
  linkedin='https://www.linkedin.com/in/oliver-bagin-7915a9210/'
  github='https://github.com/Oliver-Bagin'
  email='oliver.bagin@lambdaconsulting.com.au'
  phone='+61 481 880 377'
  />
<SmallPartner name='Jack Miller' photo='/images/partners/jack.jpg' title='Data and AI Partner' flipped
  linkedin='https://www.linkedin.com/in/jack-miller-8574211aa/'
  email='jack@lambdaconsulting.com.au'
/>
<SmallPartner name='Charles O&#39;Neil' photo='/images/partners/charles.jpeg' title='Data and AI Partner' flipped
  linkedin='https://www.linkedin.com/in/charles-o-neill/'
  email='charles@lambdaconsulting.com.au'
/>
</PartnerArray>
<div>    
  <Button type="primary" size="large" id="center-button" icon={<RightOutlined />} href='/team'>
    Read More
  </Button>
</div>

    <SectionLabel id='portfolio'>Portfolio</SectionLabel>
<ProjectCarousel>
  <Project src='/images/projects/CCMC.png'>
    <h2>Cabinet Cost and Material Calculator</h2>
    <p>
      Custom calculator that generates pricing and cutting sheets for arbitrary dimension cabinets.
      Created for <a href='https://www.showfront.com.au/'>Showfront Display Systems</a> - the leading display cabinet maker in Australia.
    </p>
  </Project>
  <Project src='/images/projects/5th.png'>
    <h2>5th Avenue Bar Membership App</h2>
    <p>
      Membership and rewards app (Android &amp; iOS) integrating with Square POS for a bar in Canberra. Purchases are tracked via customers "linked" cards and rewards are given respectively.
    </p>
  </Project>
  <Project src='https://app.ebisusbay.com/img/background/Ebisus-bg-1_L.webp'>
    <h2>Ebisu's Bay Sales Bot</h2>
    <p>
      Discord bot for tracking sales on Ebisu's Bay Marketplace. This software allows users to listen for certain events on the blockchain and generates alerts. Thousands of users; robust, maintainable and scalable code.
      More information can be seen <a href='https://faq.ebisusbay.com/misc-topics/discord-sales-bot'>here</a>.
    </p>
  </Project>
  <Project src='/images/projects/LambdaWhitelistpy.png'>
    <h2>NFT WhitelistPy</h2>
    <p>
      Discord bot for managing NFT whitelists.
      This piece of software has over 100k users, boasting perfect uptime and great features.
      More information can be seen <a href='https://whitelistpy.lambdaconsulting.com.au/'>here</a>.
    </p>
  </Project>
  <Project src='/images/projects/test-stand-control-software.png'>
    <h2>ANU Rocketry Test Stand</h2>
    <p>
      Web-based control panel for a rocket engine testing stand.
      Supports plotting pressure valve data and opening/closing valves in real-time.
      Has fail-safes, supports multiple devices at once, works from up to 1km away.
    </p>
  </Project>
</ProjectCarousel>

    <ContentBlock id='contact'>
      <>
        <h1>Enquire now</h1>
        <p>
          Get in touch to let us know about your requirements and we'll discuss paths forward.
        </p>
      </>
      <>
        <p><MailtoLink /></p>
        <p><PhoneLink /></p>
      </>
    </ContentBlock>

    <SectionSubLabel>Our Partners</SectionSubLabel>
    <div className='logo-banner'>
      <div className='logo'>
      <Logo src='/images/logos/Showfront.png'>
      </Logo>
      <Logo src='/images/logos/5th.png'>
      </Logo>
      <Logo src='/images/logos/Ebusis.svg'>
      </Logo>
      <Logo src='/images/logos/ANUR.png'>
      </Logo>
      <Logo src='./logo-square.svg'>
      </Logo>
      </div>
    </div>

    <Footer />

  </>
}
