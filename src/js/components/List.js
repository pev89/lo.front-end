import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import Slider from 'react-slick'

class List extends React.Component {
  render() {
    const { questions, updateCurrent } = this.props
    const settings = {
      dots: true,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      afterChange: (i) => {
        console.log(i)
        updateCurrent(i)
      },
    }

    return <div className="carousel">
      <Link to={'/categories'}>Yellow Button</Link>
      {questions &&
        <Slider ref={c => this.slider = c} {...settings}>
          {questions.map((question) => {
            return <div key={question.id}><Link to={`/questions/${question.id}`}><h3>{question.question}</h3></Link></div>
          })}
        </Slider>
      }
    </div>
  }
}

export default List
