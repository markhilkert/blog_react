import React from "react"

const TopBar = () => 
  <div className="topbar-mobile">
    <div className="logo">
      <router-link to="/"><img src="/images/logo.png" alt="Mark. Est. 1985" className style={{height: '44px'}} /></router-link>
      <button className="button-menu-mobile">
        <i className="mdi mdi-menu" />
      </button>
    </div>
  </div>

export default TopBar