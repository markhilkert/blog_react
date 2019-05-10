import React from "react"

const SidebarLogo = () =>
  <div className="logo">
    <router-link to="/"><img src="/images/logo.png" alt="Mark. Est. 1985" className style={{height: '180px'}} /></router-link>
    <p className="text-muted">Software. Productivity. Sleep. And whatever else sticks. </p>
  </div>

export default SidebarLogo