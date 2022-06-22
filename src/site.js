
import Header from './header'
import Footer from './footer'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import {
  ContentBlock, Partner, Project, ProjectCarousel, SectionLabel,
  MailtoLink, PhoneLink, Link,
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

    <SectionLabel id='why-us'>Why Us?</SectionLabel>

    <ContentBlock flipped>
      <>
        <h1>Our Experience</h1>
        <p>
          Our team has a diverse skill set spanning all major platforms. We've built mobile apps, websites,
          search engines, digital control panels for rockets, smart contracts, machine learning algorithms
          and control software for precision instruments as well as circuit boards soon to be orbiting the planet.
        </p>
      </>
      <img src='/images/launch.svg' alt='Rocket launch' />
    </ContentBlock>
    <ContentBlock>
      <>
        <h1>Any Questions?</h1>
        <p>
          Our team is happy to meet at no cost to see if our services are a good fit for you and provide a quote.
        </p>
        <p>
          <Link href='#contact'>Contact</Link>
        </p>
      </>
      <img src='/images/graphs.svg' alt='Charts on a slideshow' />
    </ContentBlock>

    <SectionLabel id='portfolio'>Portfolio</SectionLabel>

    <ProjectCarousel>
      <Project src='https://app.ebisusbay.com/img/background/Ebisus-bg-1_L.webp'>
        <h2>Ebisu's Bay Sales Bot</h2>
        <p>
          Discord bot for tracking sales on Ebisu's Bay Marketplace. This software allows users to listen for certain events on the blockchain and generates alerts. Thousands of users; robust, maintainable and scalable code.
          More information can be seen <a href='https://faq.ebisusbay.com/misc-topics/discord-sales-bot'>here</a>.
        </p>
      </Project>
      <Project src='/images/projects/5th.png'>
        <h2>5th Avenue Bar Membership App</h2>
        <p>
          Membership and rewards app (Android &amp; iOS) integrating with Square POS for a bar in Canberra. Purchases are tracked via customers "linked" cards and rewards are given respectively.
        </p>
      </Project>
      <Project src='https://raqoon.io/wp-content/uploads/2022/04/The-Apiens.jpg'>
        <h2>Whitelist Wallet Checker</h2>
        <p>
          This discord bot was custom developed for <a href='https://theapiens.com/'>The Apiens</a>.
          The software, assisted thousands of users to confirm they had joined the whitelist for the project successfully.
        </p>
      </Project>
      <Project src='https://whitelistpy.lambdaconsulting.com.au/static/media/multiple-whitelists.a589e034.png'>
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
      <Project src='/images/projects/CCMC.png'>
        <h2>Cabinet Cost and Material Calculator</h2>
        <p>
          Custom calculator that generates pricing and cutting sheets for arbitrary dimension cabinets.
          Created for <a href='https://www.showfront.com.au/'>Showfront Display Systems</a> - a leading display cabinet maker in Australia.
        </p>
      </Project>
    </ProjectCarousel>

    <SectionLabel id='team'>Our Team</SectionLabel>

    <Partner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' title='Partner' flipped
      linkedin='https://www.linkedin.com/in/paras-stefanopoulos-738bb8208/'
      github='https://github.com/pstefa1707'
      email='paras@lambdaconsulting.com.au'
      phone='+61 432 049 137'
    >
      <p>Paras has experience with backend web development, automation software and data processing pipelines.</p>
      <p>He is studying Advanced Computing (Research &#38; Development) at the ANU, supported by the National University Scholarship. He achieved a perfect 99.95 ATAR in high school.</p>
    </Partner>

    <Partner name='Oliver Bagin' photo='/images/partners/bagin.jpg' title='Partner'
      linkedin='https://www.linkedin.com/in/oliver-bagin-7915a9210/'
      github='https://github.com/Oliver-Bagin'
      email='oliver.bagin@lambdaconsulting.com.au'
      // phone='+61 481 880 377'
    >
      <p>Oliver is studying Advanced Computing and Mathematics at ANU. He has written programs ranging from factory optimization software to websites to Unity games.</p>
      <p>Oliver works in manufacturing and fabrication as well as software. He has undertaken many electronic projects including building a CNC machine and electronics for ANU Rocketry.</p>
      <p>He has a keen interest in business administration and law. He was a Kwong Lee Dow Scholars as well as a Youth Advisor in his Victorian electorate. He completed year 12 software development two years early achieving a state rank.</p>
    </Partner>

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

    <Footer />

  </>
}
