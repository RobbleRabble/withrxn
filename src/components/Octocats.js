import React from 'react'
// import megacat from '../Images/megacat-2.png'

class Octocats extends React.Component {
  render() {
    // code for one Octo
    return (
      <li>
        <img src={this.props.imageUrl} alt="" />
        <div class="words">
          <p class="number">#{this.props.num}:</p>
          <a class href={this.props.link}>
            {this.props.octocatsName}
          </a>
        </div>
      </li>
    )
  }
}

export default Octocats
