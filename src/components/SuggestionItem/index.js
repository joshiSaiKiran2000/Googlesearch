const SuggestionItem = props => {
  const {items} = props
  const {suggestion} = items
  return (
    <li>
      <p>{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
