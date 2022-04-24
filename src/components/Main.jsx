import React from 'react';
import '../Styles/Main.css';
import SectionPanel from './Section/SectionPanel';
import SectionTabs from './Section/SectionTabs';

export default function Main() {
  return (
    <div className='Main-section-container'>
        <SectionTabs></SectionTabs>
        <SectionPanel></SectionPanel>
    </div>
  )
}
