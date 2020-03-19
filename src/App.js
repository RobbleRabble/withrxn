import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Navigator from './components/Navigator'
import Octocats from './components/Octocats'
import Footer from './components/Footer'

// import GitHubMarkpx from './Images/GitHub-Mark-64px.png'
import chellocat from './Images/chellocat.jpg'
import codercat from './Images/codercat.jpg'
import dojocat from './Images/dojocat.jpg'
import electrocat from './Images/electrocat.png'
import homercat from './Images/homercat.png'
import linktocat from './Images/linktocat.jpg'
import megacat from './Images/megacat-2.png'
import minertocat from './Images/minertocat.png'
import redpolo from './Images/red-polo.png'
import scottocat from './Images/scottocat.jpg'
import strongbadtocat from './Images/strongbadtocat.png'
// import octofez from '/Images/octofez.png'
// import mountietocat from '/Images/mountietocat.png'

class App extends React.Component {
  render() {
    return (
      <>
        <Navigator />

        <section class="pictures">
          <ul>
            <Octocats
              octocatsName="Megacat-2"
              imageUrl={megacat}
              link="https://octodex.github.com/megacat-2/"
              num="1"
            />
            <Octocats
              octocatsName="Chellocat"
              imageUrl={chellocat}
              link="https://octodex.github.com/chellocat/"
              num="2"
            />
            <Octocats
              octocatsName="Electrocat"
              imageUrl={electrocat}
              link="https://octodex.github.com/electrocat"
              num="3"
            />
            <Octocats
              octocatsName="Homercat"
              imageUrl={homercat}
              link="https://octodex.github.com/homercat/"
              num="4"
            />
            <Octocats
              octocatsName="Linktocat"
              imageUrl={linktocat}
              link="https://octodex.github.com/linktocat/"
              num="5"
            />
            <Octocats
              octocatsName="Strongbadtocat"
              imageUrl={strongbadtocat}
              link="https://octodex.github.com/strongbadtocat/"
              num="6"
            />
            <Octocats
              octocatsName="Minertocat"
              imageUrl={minertocat}
              link="https://octodex.github.com/minertocat/"
              num="7"
            />
            <Octocats
              octocatsName="Dojocat"
              imageUrl={dojocat}
              link="https://octodex.github.com/dojocat/"
              num="8"
            />
            <Octocats
              octocatsName="Codercat"
              imageUrl={codercat}
              link="https://octodex.github.com/codertocat/"
              num="9"
            />
            <Octocats
              octocatsName="Red-polo"
              imageUrl={redpolo}
              link="https://octodex.github.com/red-polo/"
              num="10"
            />
            <Octocats
              octocatsName="Scottocat"
              imageUrl={scottocat}
              link="https://octodex.github.com/scottocat/"
              num="11"
            />
          </ul>
        </section>
        <Footer />
      </>
    )
  }
}

export default App
