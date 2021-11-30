
import Header from './header'
import Footer from './footer'
import "antd/dist/antd.css"
import './global.scss'
import './index.scss'
import {
  ContentBlock, Partner, SectionLabel,
  MailtoLink, PhoneLink, Link
} from './components'

export default function Site () {
  return <>

    <Header />

    <ContentBlock>
      <>
        <h1>Custom software solutions for problems big and small</h1>
        <p>
          Websites, mobile apps, and software designed, implemented and maintained.
          We will work alongside you to develop solutions to your problems.
        </p>
      </>
      <img src='/images/developer.svg' alt='Software developer drinking coffee' />
    </ContentBlock>

    <SectionLabel id='why-us'>Why Us?</SectionLabel>

    <ContentBlock flipped>
      <>
        <h1>Experience with web, mobile and desktop software</h1>
        <p>
          Our team has a diverse skill set spanning all major platforms. We've built mobile apps, websites,
          search engines, control panels for rockets and scientific instruments, smart contracts,
          machine learning algorithms and circuit boards among many other projects.
        </p>
      </>
      <img src='/images/launch.svg' alt='Rocket launch' />
    </ContentBlock>
    <ContentBlock>
      <>
        <h1>Determine what you need quickly and easily</h1>
        <p>
          Our team will meet with you to identify your requirements and design a plan of attack at no cost.
          We provide free advice, just give us a call!
        </p>
        <p>
          <Link href='#contact'>Contact</Link>
        </p>
      </>
      <img src='/images/graphs.svg' alt='Charts on a slideshow' />
    </ContentBlock>

    {/* <SectionLabel id='portfolio'>Portfolio</SectionLabel>
      TODO
     */}

    <SectionLabel id='team'>Our Team</SectionLabel>

    <Partner name='Oliver Balfour' photo='/images/partners/balfour.jpg' title='Partner'
      linkedin='https://www.linkedin.com/in/oliver-balfour-63b8a4199/'
      github='https://github.com/OliverBalfour'
      email='oliver.leo.balfour@gmail.com'
      phone='+61 434 853 662'>
      <p>Oliver is a Software Developer at <a href='https://www.liquidinstruments.com/'>Liquid Instruments</a> where he develops Windows, macOS and iOS apps for scientific instruments.</p>
      <p>Oliver also has experience making websites and machine learning pipelines.</p>
      <p>He studies Computer Science and Mathematics in a Bachelor of Philosophy at the ANU, supported by the ANU All-Rounder Scholarship.</p>
      <p>He is currently the Vice-President of the <a href='https://cs.club.anu.edu.au/'>ANU Computer Science Students' Association</a>.</p>
    </Partner>

    <Partner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' title='Partner' flipped
      linkedin='https://www.linkedin.com/in/paras-stefanopoulos-738bb8208/'
      github='https://github.com/pstefa1707'
      email='parasstefans@hotmail.com'
      phone='+61 432 049 137'>
      <p>Paras works as a Software Developer at CSIRO writing data science code running on supercomputers, such as modelling river flow in the Murray-Darling basin.</p>
      <p>He achieved a perfect 99.95 ATAR in high school and is now studying at the ANU.</p>
    </Partner>

    <Partner name='Oliver Bagin' photo='/images/partners/bagin.jpg'
      linkedin='https://www.linkedin.com/in/oliver-bagin-7915a9210/'
      github='https://github.com/Oliver-Bagin'
      email='oliverbagin1@outlook.com'
      phone='+61 481 880 377'>
      <p>Oliver achieved a state rank in year 12 software development in year 10. He works manufacturing and installing lifts. He made his own CNC machine from scratch in high school.</p>
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
