import React from "react"

const TopBar = () => {
  return(
    <div className="topbar-mobile">
      <div className="logo">
        <a href="index.html"><img src="images/logo.png" alt className style={{height: '44px'}} /></a>
        <button className="button-menu-mobile">
          <i className="mdi mdi-menu" />
        </button>
      </div>
    </div>
  )
}

export default TopBar