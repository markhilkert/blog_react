import React from "react";

const SideMenu = (props) => {
  const menuItems = props.items.map( item => {
    return(<li> <a href="{item.reference}"><span> {item.text} </span></a> </li>)
  });

  return(
    <div id="sidebar-menu">
      <ul className="metismenu" id="side-menu">
        {menuItems}
      </ul>
      <div className="copyright-box">
        <p>2019 © Mark Hilkert. </p>
      </div>
    </div>
  )
}

export default SideMenu