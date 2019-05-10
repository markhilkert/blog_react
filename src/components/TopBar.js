import React from "react"

const TopBar = () => 
  <div className="topbar-mobile">
    <div className="logo">
      <a href="/"><img src="/images/logo.png" alt="Mark. Est. 1985" className style={{height: '44px'}} /></a>
      <button className="button-menu-mobile">
        <i className="mdi mdi-menu" />
      </button>
    </div>
  </div>

export default TopBar