// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputElement: ''}

  searchInput = event => this.setState({inputElement: event.target.value})

  onSelect = text => this.setState({inputElement: text})

  render() {
    const {suggestionsList} = this.props

    const {inputElement} = this.state
    console.log(suggestionsList)
    console.log(inputElement)

    const newList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputElement.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <img
          className="logoImage"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="SearchBoxContainer">
          <div className="SearchBox">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="searchBar"
              type="search"
              value={inputElement}
              onChange={this.searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul>
            {newList.map(each => (
              <SuggestionItem
                key={each.id}
                value={each}
                select={this.onSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
