import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { Link } from 'gatsby'

import profilePic from '../assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Ard Scheirlynck`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Ard Scheirlynck</strong>. <br/>
          <i>Geek. Programmer. Gamer.</i>{' '}
          <Link
            style={{
              boxShadow: 'none', 
            }}
            to={'/whoami/'}
          >
            More...
          </Link>
        </p>
      </div>
    )
  }
}

export default Bio
