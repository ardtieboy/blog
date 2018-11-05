import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import profilePic from '../assets/profile-pic.jpg'


import SocialMediaBar from '../components/SocialMediaBar';

class WhoAmiI extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="WhoAmI?"
        />
        <h1>WhoAmI?</h1>
        <h2
          style={{
            display: 'block',
            marginBottom: rhythm(2),
            marginTop: rhythm(0),
          }}
        >
          Let's get to know each other!
        </h2>
        <div>
          <img
            src={profilePic}
            alt={`Ard Scheirlynck`}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '50%',
              width: rhythm(10),
              height: rhythm(10),
            }}
          />
        </div>
        
        <p>
          Hi there!<br/>
          Welcome to my blog site. Allow me to introduce myself.<br/><br/>
          My name is Ard and currently I'm living in Gullegem, Belgium. I'm happily living together with my girlfriend and my awesome dog Nalu.
          At day I'm working at Melexis as an IT Business Analyst/Developer for the Core Business Solutions team. When I'm behind my desk
          I'm developing awesome applications, analyzing the business needs and deploying/maintaining my baby applications. 
          Most of the time I'm using cool tech such as Java, Python, Docker, Kubernetes and a lot of other tech to achieve my goals,
          but I'm always keen on experimenting with other languages and technologies.<br/><br/>

          At night I like spending time with my dog Nalu and my awesome girlfriend. When I'm not playing with one of them, I probably have a PlayStation 4-controller 
          in my hands or I'm sitting behind my desk in my mancave. When I'm not working for Melexis, I'm always bizzy experimenting with cool technologies like my Raspberry Pi Flask Camera Server 
          or cool frameworks like Jekyll, Gatsby.. Gaming is also a big passion of mine; therefore I'm also an editor for <a href="https://www.9lives.be/">9lives.be</a> where 
          I write reviews and previews for cool video games. At last but not least, sports is also a big part of my life. You can find me on the basketball court 3 to 4 times per week.
          When not playing basketball, I like to ride my racing bike or go jogging with my lovely girlfriend Steffi. <br/><br/>

          If you would like to reach out (for whatever reason), you can get in touch with me by clicking the social media links below. 

          I hope to hear you soon!

        </p> 

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </Layout>
    )
  }
}

export default WhoAmiI
