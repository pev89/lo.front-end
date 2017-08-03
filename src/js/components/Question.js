import React from 'react'
import { render } from 'react-dom'
import { Link, hashHistory } from 'react-router'

class Question extends React.Component {
  render() {
    const { current, left, right } = this.props

    return <div className="home-header txt-grey question-page">
      <div className="logo-icon dark small fixed"></div>
      <div className="sixteen-nine">
        <div className="content dark">
          <div className="safe-area">
            <div className="header txt-white">
              <h1>{current.question}<span className="txt-yellow">.</span></h1>
              <nav>
                <button className="rounded yellow mr-25"><span className="tooltip">home</span></button>
                <button className="rounded green" onClick={() => hashHistory.goBack()}><span className="tooltip">back</span></button>
              </nav>
            </div>
            <div className="center">
              {/*<div className="question img-text">
                <div className="content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa est, tempus nec hendrerit nec, euismod id lectus. Duis justo purus, pharetra sed ex in, tincidunt ullamcorper lorem. In nibh tellus, hendrerit a orci aliquet, consequat lacinia sapien. Morbi ultrices ullamcorper purus, in ullamcorper sapien tincidunt in. Proin dictum nunc eu metus scelerisque, molestie ultrices felis vestibulum. Nunc quis erat sed nisl sollicitudin vulputate vitae sit amet turpis. Maecenas luctus aliquet quam, nec aliquam nisl egestas dignissim. Donec id elementum est, eu ornare justo. Sed dignissim sem sapien, ac tempor ante cursus ac.
Cras purus leo, eleifend a eros eget, rutrum convallis lacus. In non risus a odio tincidunt placerat. Phasellus ac scelerisque arcu. Nulla nec lorem tempor, varius ligula at, cursus risus. Aenean fermentum eu enim sed porta. Mauris posuere urna ut urna dictum, a tempus ex maximus. Curabitur scelerisque neque metus. Aliquam eu velit a diam pulvinar auctor. Nulla malesuada a nibh ut molestie. Nunc nec orci neque. Proin vel fermentum nulla. Donec et risus odio. Nunc vel nisl blandit, viverra turpis at, egestas diam. Aliquam nec sollicitudin arcu.
                </div>
                <div className="img"><img src="http://ca.france.fr/sites/default/files/imagecache/ATF_Image_bandeau_v2/la_france_cote_nature_6.jpg" /></div>
              </div>*/}
              <div className="question text">
                <div className="content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa est, tempus nec hendrerit nec, euismod id lectus. Duis justo purus, pharetra sed ex in, tincidunt ullamcorper lorem. In nibh tellus, hendrerit a orci aliquet, consequat lacinia sapien. Morbi ultrices ullamcorper purus, in ullamcorper sapien tincidunt in. Proin dictum nunc eu metus scelerisque, molestie ultrices felis vestibulum. Nunc quis erat sed nisl sollicitudin vulputate vitae sit amet turpis. Maecenas luctus aliquet quam, nec aliquam nisl egestas dignissim. Donec id elementum est, eu ornare justo. Sed dignissim sem sapien, ac tempor ante cursus ac.
Cras purus leo, eleifend a eros eget, rutrum convallis lacus. In non risus a odio tincidunt placerat. Phasellus ac scelerisque arcu. Nulla nec lorem tempor, varius ligula at, cursus risus. Aenean fermentum eu enim sed porta. Mauris posuere urna ut urna dictum, a tempus ex maximus. Curabitur scelerisque neque metus. Aliquam eu velit a diam pulvinar auctor. Nulla malesuada a nibh ut molestie. Nunc nec orci neque. Proin vel fermentum nulla. Donec et risus odio. Nunc vel nisl blandit, viverra turpis at, egestas diam. Aliquam nec sollicitudin arcu.
                </div>
              </div>
            </div>
            <div className="footer">
              <ul className="related">
                <li className="text-left bg-pink">
                  <p>Prev</p>
                  <h4>this is a tile</h4>
                </li>
                <li className="text-right bg-red">
                  <p>Prev</p>
                  <h4>this is a tile</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Question
