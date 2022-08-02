
import Header from './header'
import Footer from './footer'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import {
  ContentBlock, Partner, Project, ProjectCarousel, SectionLabel,
  MailtoLink, PhoneLink, Link, Logo, LogoCarousel,
} from './components'

export default function Site() {
  return <>

    <Header />

    <ContentBlock>
      <>
        <h1>Software Solutions and Consulting</h1>
        <p>
          Lambda Consulting is here to help in creating bespoke software. Be-it bots for discord, websites, mobile apps, blockchain tech, etc.
        </p>
        <p>
          We will work alongside you to develop custom software solutions to your problems.
        </p>
      </>
      <img src='/images/developer.svg' alt='Software developer drinking coffee' />
    </ContentBlock>

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

    <SectionLabel id='team'>Our Team</SectionLabel>

    <Partner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' title='Partner' flipped
      linkedin='https://www.linkedin.com/in/paras-stefanopoulos-738bb8208/'
      github='https://github.com/pstefa1707'
      email='paras@lambdaconsulting.com.au'
      phone='+61 432 049 137'
    >
      <p>Paras is one of the founding members of Lambda Consulting. With experience in data analysis, software development and modelling, he has brought innovation to countless products and services he has worked on.</p>

      <p>A small project he started in his college dormitory went on to be one of Lambda’s first success stories, WhitelistPy. Having reached over 130k users from over 80 countries before being acquired. Best in class, it changed the way NFT wallet addresses were collected by online communities globally.</p>

    </Partner>

    <Partner name='Oliver Bagin' photo='/images/partners/bagin.jpg' title='Partner'
      linkedin='https://www.linkedin.com/in/oliver-bagin-7915a9210/'
      github='https://github.com/Oliver-Bagin'
      email='oliver.bagin@lambdaconsulting.com.au'
      phone='+61 481 880 377'
    >
      <p>Oliver has studied Advanced Computing and Mathematics at ANU. He has written programs ranging from factory optimization software to websites to Unity games. </p>
      <p>With an affinity for business, electronics, hands on manufacturing and design - Oli has also built factory optimisation software, physical electronic solutions and customer-facing programs used by thousands.</p>
    </Partner>

    <div className='container container_cus'>
      <>
        <p>Together, Oliver and Paras have managed many contracts. From the design and development stage through to production and managing tens of thousands of users. </p> 
        <p>Their software has innovated the methods by which communities gather data on discord, the expertise requirement for cost-calculations in factory settings and produced insights into how Australia's ecological systems operate.</p>
      </>
    </div>

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

    <Footer />

  </>
}
