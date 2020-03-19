import React, { Component } from 'react'
import GitHubMarkpx from '../Images/GitHub-Mark-64px.png'

export class Navigator extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <section class="navbar">
            <ul class="left">
              <li class="logo">
                <img src={GitHubMarkpx} />
              </li>
              <li class="mark">
                <a class="link" href="https://octodex.github.com/">
                  <strong>Octodex</strong>
                </a>
              </li>
              <li class="home">
                <a
                  class="link"
                  href="https://www.alternatememories.com/historical-events/movies/et-phone-home"
                >
                  Home
                </a>
              </li>
              <li class="FAQ">
                <a class="link" href="https://en.wikipedia.org/wiki/Shrug">
                  FAQ
                </a>
              </li>
            </ul>

            <ul class="right">
              <li class="tweet">
                <a class="link" href="https://en.wikipedia.org/wiki/Shrug">
                  Follow us on Twitter
                </a>
              </li>
              <li class="git">
                <a class="link" href="https://github.com/">
                  Back to GitHub.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </header>
    )
  }
}

export default Navigator
