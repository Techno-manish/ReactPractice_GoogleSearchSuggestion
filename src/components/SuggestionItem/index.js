// // Write your code here
import './index.css'

const SuggestionItem = props => {
  const {value, select} = props
  const {suggestion} = value
  const onSelectSuggetion = () => select(suggestion)
  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        onClick={onSelectSuggetion}
      />
    </li>
  )
}
export default SuggestionItem
