import React from 'react'
import { SocialIcon } from 'react-social-icons';

import { rhythm } from '../utils/typography'

class SocialMediaBar extends React.Component {
  render() {
    return (
        <div style={{  marginBottom: rhythm(1), }}>
          <SocialIcon color="black" url="https://twitter.com/ard_scheirlynck" style={{ marginRight:10, boxShadow:'none', height: 25, width: 25 }}/>
          <SocialIcon color="black" url="https://www.facebook.com/ard.scheirlynck" style={{ marginRight:10, boxShadow:'none', height: 25, width: 25 }}/>
          <SocialIcon color="black" url="https://www.linkedin.com/in/ard-scheirlynck-b5a26a8b/" style={{ marginRight:10, boxShadow:'none', height: 25, width: 25 }}/>
      </div>
    )
  }
}

export default SocialMediaBar
