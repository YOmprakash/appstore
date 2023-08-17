// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails
  const onChangeTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-list">
      <button type="button" className="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
