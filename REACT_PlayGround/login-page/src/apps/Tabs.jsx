import React from 'react'

const Tabs = () => {
  return (
    <div 
    class="tab-container"
    >
    <div 
    class="tabs"
    >
      <button 
      class="tab-button active" 
      data-tab="tab1">Tab 1</button>
      <button 
      class="tab-button" 
      data-tab="tab2">Tab 2</button>
      <button 
      class="tab-button" 
      data-tab="tab3">Tab 3</button>
    </div>
    <div 
    class="tab-content"
    >
      <div id="tab1" 
      class="tab-pane active"
      >Content for Tab 1</div>
      <div id="tab2" 
      class="tab-pane"
      >Content for Tab 2</div>
      <div id="tab3" 
      class="tab-pane"
      >Content for Tab 3</div>
    </div>
  </div>
  )
}

export default Tabs