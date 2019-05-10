import React from "react"
import TopBar from "../components/TopBar"
import SidebarLogo from "../components/SidebarLogo"
import SideMenu from "../components/SideMenu"

const ComponentTest = () => {
  const sidebarItems = [
    {
      text: "Home",
      reference: "/"
    },
    {
      text: "About",
      ref: "/about"
    }
  ]

  return(
    <div>
      <TopBar />
      <SidebarLogo />
      <SideMenu items={sidebarItems} /> 
    </div>
  )
}

export default ComponentTest