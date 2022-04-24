import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/SideBar.css';

export default function SideBarItem({items}) {
  return (
    items.map( (item) => {
       return(
        <NavLink key={item.id} to={`/forms/${item.id}`} className='SideBarItems-single-item'>
            {item.title}
        </NavLink>);
    })
  )
}
