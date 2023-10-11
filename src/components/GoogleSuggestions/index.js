import {Component} from 'react'
import './index.css'
import '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    return (
      <div className="main-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
        </div>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt=""
            className="search-image"
          />
          <input type="search" placeholder="Search Google" className="search" />
          <ul>
            {suggestionsList.map(eachItem => (
              <SuggestionItem items={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
