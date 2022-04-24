import React , {useEffect,useRef,useContext} from 'react';
import '../../Styles/FormInputs/DropDown.css';
import { GenericFormContext } from '../../App';
import { useParams } from 'react-router-dom';

export default function DropDown({id,name,label,options,required}) {

    const ref = useRef();
    const useGenericFormContext = useContext(GenericFormContext);

    const {form_id,section_id} = useParams();
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

    useEffect(()=>{
    
        // test if already exist
        const alreadyExist = useGenericFormContext.globalRefs.filter((elm)=>{
            return elm.id == id
        })
    
        if(alreadyExist.length == 0){
            useGenericFormContext.globalRefs.push({"id":id,"ref":ref});
        }
       
    },[ref.current]);

    return (
        <div ref={ref}  className='DropDown-text-container'>
            <label htmlFor={id}>{label} 
                {required && <span className='DropDown-label-aster'>*</span> }
            </label>
            <select name={name} id={id} required={required}  onChange={(e)=>{
                updateFieldValue(form_id,id,e.target.value);
                return e.target.value;
            }}>

            {
                options && options.length > 0 &&  options.map((opt)=>{
                    return(
                        <option key={opt.id} value={opt.value}>{ opt.text}</option>
                    )
                })
            }
        </select>
        </div>
    )
}
