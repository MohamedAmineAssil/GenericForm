import React ,{useContext,useEffect,useState} from 'react';
import '../Styles/SideBar.css';
import SideBarItem from './SideBarItem';
import { GenericFormContext } from '../App';

export default function SideBar() {

  const useGenericFormContext = useContext(GenericFormContext);

  const [items ,setItems] = useState([]);

  useEffect(()=>{

    if(useGenericFormContext.forms.length > 0 ){
        const item_Prov=[];
        useGenericFormContext.forms.map((item)=>{
            setItems(item_Prov);
            item_Prov.push({
                id:item.id,
                title:item.title
            })
        });
       
    }else{
        setItems([]);
    }
    

  },[]);

  return (
    <div className='SideBar-section-container'>
        <SideBarItem items={items}></SideBarItem>
    </div>
  )
}
