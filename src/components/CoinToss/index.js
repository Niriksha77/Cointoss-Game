import {Component} from 'react'
import './index.css'

const HEADS_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    isHeads: true,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0

    this.setState(prev => ({
      isHeads,
      total: prev.total + 1,
      heads: prev.heads + (isHeads ? 1 : 0),
      tails: prev.tails + (isHeads ? 0 : 1),
    }))
  }

  render() {
    const {isHeads, total, heads, tails} = this.state
    const imageUrl = isHeads ? HEADS_IMG : TAILS_IMG

    return (
      <div className="coin-toss-bg">
        <div className="coin-toss-card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="subtitle">Heads (or) Tails</p>

          <img src={imageUrl} alt="toss result" className="toss-image" />

          <button type="button" className="toss-btn" onClick={this.onToss}>
            Toss Coin
          </button>

          <div className="results">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
