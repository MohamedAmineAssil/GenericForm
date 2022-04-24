import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation,useParams } from 'react-router-dom';
import ErrorSideBar from '../ErrorSideBar';
import Form from '../Form';
import { GenericFormContext } from '../../App';

export default function SectionPanel() {

  const useGenericFormContext = useContext(GenericFormContext);

  const {section_id,section_label,form_id} = useParams();
  const location  = useLocation();
  const ErrorSideBarRef = useRef();
  const [formData,setFormData] = useState();
  const [currentFormSection,setCurrentFormSection] = useState([]);
  const [errors,setErrors] = useState([]);

  useEffect(()=>{
      
    // get selected form
    const current_form = useGenericFormContext.forms.filter((form)=>{
        return form.id == form_id;
    });

    // test current_form forms to avoid empty array
    if(current_form.length > 0){

        // set form data;
        setFormData(current_form);

        // get current form section
        const current_form_section = current_form[0].form_Sections.filter((currentForm)=>{
            return currentForm.id == section_id;
        });

        setCurrentFormSection(current_form_section[0]);

    }

    // test if location contains state with input ref
    if(location.state !== null ){

        const focusOn = useGenericFormContext.globalRefs.filter((globalRef)=>{
            return globalRef.id == location.state.id
        })

        if(useGenericFormContext.globalRefs.length > 0){
            resetErrorUI();
            console.log(focusOn);
            console.log(useGenericFormContext.globalRefs[0]);
            console.log( location.state.id);
            if(focusOn && focusOn.length > 0 && focusOn[0].ref.current != null){
                focusOn[0].ref.current.classList.add('error');
                focusOn[0].ref.current.scrollIntoView({ behavior: 'smooth' });
                focusOn[0].ref.current.focus();
            }
           
        }

    }

    console.log(useGenericFormContext.globalRefs);

  },[section_id,section_label,form_id,location]);
 
  // set Errors UI
 const handleErrorUI = (id)=>{

        const focusOn = useGenericFormContext.globalRefs.filter((globalRef)=>{
            return globalRef.id == id
        })

        if(useGenericFormContext.globalRefs.length > 0){
            if(focusOn && focusOn.length > 0 && focusOn[0].ref.current != null){
                focusOn[0].ref.current.classList.add('error');
                focusOn[0].ref.current.scrollIntoView({ behavior: 'smooth' });
                focusOn[0].ref.current.focus();
            }
            
        }

  }

  // reset Error UI
  const resetErrorUI = () =>{
    useGenericFormContext.globalRefs.map((globalRef)=>{
        if(globalRef.ref.current != null){
            globalRef.ref.current.classList.remove('error');
        }
    })
  }

  //check current form errors
  const handleErrors = (event) => {

        event.preventDefault();
        useGenericFormContext.errors = [];
        useGenericFormContext.globalRef = [];
        
        formData[0].form_Sections.map((forms)=>{
            forms.fields.map((field)=>{
                if(field.type != "accordion"){
                    if(field.required && field.value == ""){
                        useGenericFormContext.errors.push({
                            goTo: `Section/${forms.id}/${String(forms.label).replaceAll(" ","")}`, 
                            errorMessage:field.label+" is required",
                            errorInput:field.label,
                            errorForm: forms.label,
                            id:field.id
                        });

                        // set Errors
                        //handleErrorUI(field.id);

                    }
                }else{
                    field.fieldGroup.map((fieldGroup)=>{
                        fieldGroup.fields.map((field)=>{
                            if(field.required && field.value == ""){
                                useGenericFormContext.errors.push({
                                    goTo: `section/${forms.id}/${String(forms.label).replaceAll(" ","")}`, 
                                    errorMessage:field.label+" is required",
                                    errorInput:field.label,
                                    errorForm: forms.label,
                                    id:field.id
                                });

                                // set Errors
                                //handleErrorUI(field.id);
                            }
                        })
                    })
                }
            });
        });

        // check if there is errors
        if( useGenericFormContext.errors.length > 0){
            ErrorSideBarRef.showErrorSideBar();
        }else{
            console.log("Valide form feel free to submit");
        }
        setErrors(useGenericFormContext.errors);
        resetErrorUI();
  }
  
  return (
    <div className='Section-panel'>
        <Form currentFormSection={currentFormSection}></Form>
        <ErrorSideBar ErrorSideBarRef={ErrorSideBarRef}></ErrorSideBar>
        <button className='Sumbit-btn btn btn-primary' onClick={handleErrors}>Sumbit</button>
    </div>
  )

}
