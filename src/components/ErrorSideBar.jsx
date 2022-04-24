import React, { useContext, useEffect , useState } from 'react';
import '../Styles/ErrorsSideBar.css';
import ErrorCard from './ErrorCard';
import { GenericFormContext } from '../App';

export default function ErrorSideBar({ErrorSideBarRef}) {


  const useGenericFormContext = useContext(GenericFormContext);

  const [isShown,setIsShown] = useState(false);

  const showErrorSideBar = () =>{
    setIsShown(true);
  }

  const hideErrorSideBar = () =>{
    setIsShown(false);
  }

  useEffect(()=>{
    // attach child action to parent via ref
    ErrorSideBarRef.showErrorSideBar = showErrorSideBar;
    ErrorSideBarRef.hideErrorSideBar = hideErrorSideBar;

  },[]);

  return (
    <div className={`Error-side-bar-container ${isShown ? 'show' : 'hide'}`}>
        
        <div className='Error-side-bar-sub-container'>

            <h3 className='Error-side-bar-header'>
                Application Errors
                <span className='Error-side-bar-header-close' onClick={()=>{hideErrorSideBar()}}>
                    <i className='fa fa-close'></i>
                </span>
            </h3>

            <div className='Error-side-bar-content'>
                <p className='Error-side-bar-counter'>
                    {useGenericFormContext.errors.length} error{ useGenericFormContext.errors.length > 0 ? 's' : ''} found</p>
                <div className='Error-side-bar-errors'>
                    {
                        useGenericFormContext.errors.map((error,index)=>{
                           return(<ErrorCard 
                            key={index} 
                            goTo={error.goTo} 
                            hideErrorSideBar={ showErrorSideBar }
                            errorMessage={error.errorMessage} 
                            errorInput={error.errorInput} 
                            errorForm={error.errorForm}
                            id={error.id}
                            ></ErrorCard>)
                        })
                    }
                </div>
            </div>

        </div>

    </div>
  )
}
