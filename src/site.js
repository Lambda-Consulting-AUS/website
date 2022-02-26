
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
          Lambda Consulting is here to help create your website, mobile application or other business software as easily and affordably as possible.
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
      <Project src='/images/projects/test-stand-control-software.jpg'>
        <h2>ANU Rocketry Test Stand</h2>
        <p>
          Web-based control panel for a rocket engine testing stand.
          Supports plotting pressure valve data and opening/closing valves in real-time.
          Has fail-safes, supports multiple devices at once, works from up to 1km away.
        </p>
      </Project>
      <Project src='/images/projects/associate-law.jpg'>
        <h2>Associate Law Search Engine</h2>
        <p>
          AI-powered natural language search engine for Australian case law,
          made by our team and two other members.
          See a <a href='https://distracted-brown-5a2407.netlify.app/'>live demo</a>.
        </p>
      </Project>
      <Project src='/images/projects/5th.png'>
        <h2>5th Avenue Bar Membership App</h2>
        <p>
          Membership and rewards app (Android &amp; iOS) integrating with Square POS for a bar in Canberra.
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
      <p>Paras is a Software Developer at <a href="https://www.csiro.au/en/">CSIRO</a> where he performs large scale computation to derive and investigate hydrological properties of the Murray Darling Basin.</p>
      <p>He also has experience with backend web development, automation software and data processing pipelines.</p>
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
