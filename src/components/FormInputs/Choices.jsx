import React , {useEffect,useRef,useContext} from 'react';
import '../../Styles/FormInputs/Choices.css';
import { GenericFormContext } from '../../App';
import { useParams } from 'react-router-dom';

export default function Choices({id,label,options,required}) {
    
    const useGenericFormContext = useContext(GenericFormContext);

    const ref = useRef();

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
        });
    
        if(alreadyExist.length == 0){
            useGenericFormContext.globalRefs.push({"id":id,"ref":ref});
        }
       
    },[ref.current]);

    return (
        <div ref={ref}  className='Choice-container'>
            <label htmlFor={id}>{label} 
                {required && <span className='Choice-label-aster'>*</span> }
            </label>
            <div>
                {
                options && options.length > 0 && options.map((opt)=>{
                        return(
                            <label htmlFor={opt.id} key={opt.id}>
                                    <input type={opt.type} value={opt.value} name={opt.name} id={opt.id} onClick={(e)=>{updateFieldValue(form_id,id,e.target.value)}} />
                                    {opt.text}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}