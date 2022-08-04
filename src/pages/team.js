
import Header from '../header'
import Footer from '../footer'
import "antd/dist/antd.css"
import '../global.scss'
import '../index.scss'
import {
  ContentBlock, Partner, Project, ProjectCarousel, SectionLabel,
  MailtoLink, PhoneLink, Link, Logo, LogoCarousel, SectionSubLabel, SmallPartner, PartnerArray,
} from '../components'

export default function Team() {
  return <>

    <Header />

    <SectionLabel>Software</SectionLabel>

    <Partner name='Paras Stefanopoulos' photo='/images/partners/paras.jpg' title='Founder' flipped
      linkedin='https://www.linkedin.com/in/paras-stefanopoulos-738bb8208/'
      github='https://github.com/pstefa1707'
      email='paras@lambdaconsulting.com.au'
      phone='+61 432 049 137'
    >
      <p>Paras is one of the founding members of Lambda Consulting. With experience in data analysis, software development and modelling, he has brought innovation to countless products and services he has worked on.</p>

      <p>A small project he started in his college dormitory went on to be one of Lambda’s first success stories, WhitelistPy. Having reached over 130k users from over 80 countries before being acquired. Best in class, it changed the way NFT wallet addresses were collected by online communities globally.</p>

    </Partner>

    <Partner name='Oliver Bagin' photo='/images/partners/bagin.jpg' title='Founder'
      linkedin='https://www.linkedin.com/in/oliver-bagin-7915a9210/'
      github='https://github.com/Oliver-Bagin'
      email='oliver.bagin@lambdaconsulting.com.au'
      phone='+61 481 880 377'
    >
      <p>Oliver has studied Advanced Computing and Mathematics at ANU. He has written programs ranging from factory optimization software to websites to Unity games. </p>
      <p>With an affinity for business, electronics, hands on manufacturing and design - Oli has also built factory optimisation software, physical electronic solutions and customer-facing programs used by thousands.</p>
    </Partner>

    <SectionLabel>Data and AI</SectionLabel>

    <Partner name='Jack Miller' photo='/images/partners/jack.jpg' title='Data and AI Partner' flipped
  linkedin='https://www.linkedin.com/in/jack-miller-8574211aa/'
  email='jack@lambdaconsulting.com.au'
    >
      <p>Jack Miller (Tuckwell Scholar) (PhB Science) is a partner of Lambda Consulting, specialising in data science and machine learning. Having worked for engineroom.io (a high performance computing and machine learning company) and in several research roles at the Australian National University, he has experience in both industry and academia.</p>

      <p>Jack’s previous projects include the initialisation of Koopman predictive autoencoders, Koopman and convolutional approaches to cyclone trajectory prediction and transformer-based approaches to Australian speech recognition. Outside of data science, Jack has completed research on cyclone intervention strategies and given recommendations regarding the associated modelling.</p>

    </Partner>

    <Partner name='Charles O&#39;Neil' photo='/images/partners/charles.jpeg' title='Data and AI Partner'
  linkedin='https://www.linkedin.com/in/charles-o-neill/'
  email='charles@lambdaconsulting.com.au'
    >
      <p>Charles O’Neill (Tuckwell Scholar) (Science, Economics) is a data science partner of Lambda Consulting. With a focus on data analysis, forecasting and machine learning, Charles has extensive experience in both research and industry. Charles works for Macuject, a Melbourne-based startup developing AI to fight retinal blindness, and has held several research roles at ANU and CSIRO.</p>

      <p>Charles has worked on a number of related projects, including long-term bushfire prediction for key Australian stakeholders, natural language processing for medical data extraction, and several predictive vision models for pharmaceutical companies. Charles is currently researching Koopman autoencoders and their advantages in modelling natural disasters such as cyclones.</p>
    </Partner>

    {/* <div className='container container_cus'>
      <>
        <p>Together, Oliver and Paras have managed many contracts. From the design and development stage through to production and managing tens of thousands of users. </p> 
        <p>Their software has innovated the methods by which communities gather data on discord, the expertise requirement for cost-calculations in factory settings and produced insights into how Australia's ecological systems operate.</p>
      </>
    </div> */}

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
