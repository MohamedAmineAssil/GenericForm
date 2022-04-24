import React from 'react';
import SideBar from './SideBar';
import Main from './Main';
import '../Styles/Container.css';

export default function Container() {
  return (
    <div>
        <h1>Generic Forms</h1>
        <div className='Container'>
            <SideBar></SideBar>
            <Main></Main>
        </div>
    </div>
  )
}
