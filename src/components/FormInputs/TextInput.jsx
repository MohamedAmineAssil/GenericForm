import React, {useContext, useEffect, useRef, useState} from 'react';
import '../../Styles/FormInputs/InputText.css';
import { GenericFormContext } from '../../App';
import { useParams } from 'react-router-dom';

export default function TextInput({id,type,name,label,placeholder,required}) {

  const {form_id,section_id} = useParams();

  const ref = useRef();

  const useGenericFormContext = useContext(GenericFormContext);

  useEffect(()=>{

    console.log("ref =>",ref);
    
    // test if already exist
    const alreadyExist = useGenericFormContext.globalRefs.filter((elm)=>{
        return elm.id == id
    })

    if(alreadyExist.length == 0){
        useGenericFormContext.globalRefs.push({"id":id,"ref":ref});
    }
   
  },[ref.current]);

  // update Field Value 
  const updateFieldValue = (form_id,field_id,value)=>{
    useGenericFormContext.forms.filter((form)=>{
        if(form.id == form_id ){
            form.form_Sections.map((section)=>{
                if(section.id == section_id ){
                    section.fields.map((field)=>{
                        if(field.type != "accordion"){
                            if(field.id == field_id ){
                                field.value = value;
                            }
                        }else{
                            field.fieldGroup.map((fieldGroup)=>{
                                fieldGroup.fields.map((field)=>{
                                    if(field.id == field_id ){
                                        field.value = value;
                                    }
                                })
                            });
                        }
                    })
                }
            })
        }
    })
  }

  return (
      
    <div ref={ref} className='Input-text-container'>
        <label htmlFor={id}>{label} 
            {required && <span className='Input-text-label-aster'>*</span>}
        </label>
        <input  type={type} name={name} placeholder={placeholder} required={required} id={id}
            onChange={(e)=>{
                updateFieldValue(form_id,id,e.target.value);
                return e.target.value;
            }}
        />
    </div>
  )
}