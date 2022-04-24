import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../../Styles/Section.css';
import { GenericFormContext } from '../../App';

const tabsList = [
  {
    id:1,
    title:"First"
  },
  {
    id:2,
    title:"Next"
  },
  {
    id:3,
    title:"Done"
  }
]

export default function SectionTabs({tabs}) {

  const {form_id,section_id} = useParams();
  const useGenericFormContext = useContext(GenericFormContext);
  const [currentForm,setCurrentForm] = useState([]);

  useEffect(()=>{

    // get selected form
    const current_form = useGenericFormContext.forms.filter((form)=>{
      return form.id == form_id;
    });

    // test current_form forms to avoid empty array
    if(current_form.length){
      setCurrentForm( current_form[0].form_Sections);
    }else{
      setCurrentForm([]);
    }

  },[form_id,section_id]);

  return (
    <div>
      <ul className='Section-tabs'>
        {
          // Iterate form tabs
          currentForm.length > 0 && currentForm.map((tab)=>{
            return(
              <li key={tab.id}>
                <NavLink key={tab.id} to={"section/"+tab.id+"/"+String(tab.label).replaceAll(" ","")}>{tab.label}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
