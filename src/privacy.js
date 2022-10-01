function Section(props) {
  return (
    <div className="content-section">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default function Privacy(props) {
  return (
    <div className="container">
      <div>
        <Section>
            <h2>5th Ave. Privacy Policy</h2>
        </Section>
        <Section title="Definitions:">
          <p>
            Herein ‘Fifth Ave app’ will be in reference to any mobile app,
            website or other related part of the platform codeveloped by Lambda
            Consulting and 5th Avenue.
          </p>
          <b>Parties</b>
          <list>
            <li>
              5th Avenue Cbr – 5th Avenue is a bar in Canberra located at 32
              Northbourne Avenue Canberra ACT, 2601.
            </li>
            <li>
              Lambda Consulting is a software consultancy located in Canberra.
            </li>
          </list>
          <b>The app</b>
          <list>
            <li>
              Herein ‘Fifth Ave app’ will be in reference to any mobile app,
              website or other related part of the platform codeveloped by
              Lambda Consulting and 5th Avenue.
            </li>
          </list>
        </Section>
        <Section title="What kinds of information do we collect and why?">
          <p>
            We collect personal information about you that is essential to us
            provide you with our service including:
          </p>
          <list>
            <li>
              Your name, your date of birth, your email, your phone number,
              partial card information and purchase history at 5th avenue.
            </li>
          </list>
        </Section>
        <Section title="How to we collect you information?">
          <p>
            We collect your information when you directly provide it to us
            through the app or when you use your linked card instore.
          </p>
        </Section>
        <Section title="How do we safely store your information?">
          <p>
            We store all you information using security best practices. We do
            not store your card information this information is secured by
            Square.
          </p>
        </Section>
        <Section title="">
          <p>
            As part of providing, you with your service we share your details
            with Square. Their privacy policy can be found{" "}
            <a href="https://squareup.com/help/au/en/article/3796-privacy-and-security#:~:text=To%20protect%20Square%20account%20holders,with%20all%20required%20PCI%20standards">
              here
            </a>
            . Square is the POS system used by participating venues. This allows
            square to tell share purchase information in the bar with us.
          </p>
          <p>
            We might also share aggregated data where users are not identifiable
            for the purposes of research, commerce or marketing with third
            parties.
          </p>
        </Section>
        <Section title="Removal of your information.">
          <p>
            To have your information removed from our website please email our
            team using the information in the contact us section.
          </p>
        </Section>
        <Section title="Contact us.">
          <p>For any concerns please email, admin@lambdaconsulting.com.au</p>
        </Section>
      </div>
    </div>
  );
}
