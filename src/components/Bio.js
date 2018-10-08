import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
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
          Written by <strong>Ard Scheirlynck</strong> who lives and works in Gullegem, Belgium.{' '}
          <a href="https://twitter.com/Ard_Scheirlynck">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio