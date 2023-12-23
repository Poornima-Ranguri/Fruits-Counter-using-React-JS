import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickingMango = () => {
    const {mangoCount} = this.state
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickingBanana = () => {
    const {bananaCount} = this.state
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="home">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="images-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image-1"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image-2"
              alt="banana"
            />
          </div>

          <div className="button-container">
            <button
              className="btns-1"
              type="button"
              onClick={this.onClickingMango}
            >
              Eat Mango
            </button>
            <button
              className="btns-2"
              type="button"
              onClick={this.onClickingBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
