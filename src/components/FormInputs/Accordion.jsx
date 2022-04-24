import React, { useContext, useEffect, useRef, useId } from 'react';
import Choices from './Choices';
import DropDown from './DropDown';
import TextInput from './TextInput';
import { GenericFormContext } from '../../App';

export default function Accordion({fieldGroup}) {

    const id = useId();

    const ref = useRef(id);

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

    return(
        <div ref={ref} className="accordion" id={`accordionExample${fieldGroup.id}`}>

        {
            fieldGroup.map((field)=>{
                return(
                    
                    <div className="accordion-item" key={field.id}>
                        <h2 className="accordion-header" id={`heading${field.id}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${field.id}`} aria-expanded="false" aria-controls={`collapse${field.id}`}>
                            {field.label}
                        </button>
                        </h2>
                        <div id={`collapse${field.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${field.id}`} data-bs-parent={`#accordionExample${fieldGroup.id}`}>
                        <div className="accordion-body">
                            { 
                                field && field.fields && field.fields.map((field)=>{
                                    switch(field.component){
                                        case "choices":{
                    
                                            return(<Choices key={field.id} 
                                                    label={field.label}
                                                    id={field.id}
                                                    name={field.name}
                                                    options={field.options}
                                                    value={field.value}
                                                    required>
                                                    </Choices>)
                                        }
                                        case "dropdown":{
                                            return(<DropDown
                                                    key={field.id} 
                                                    label={field.label}
                                                    id={field.id}
                                                    name={field.name}
                                                    value={field.value}
                                                    options={field.options}
                                                    ></DropDown>
                                            )
                                        }
                                        case 'accordion':{
                                            return(<Accordion
                                                    key={field.id} 
                                                    label={field.label} 
                                                    id={field.id} 
                                                    type={field.type}
                                                    required={field.required}
                                                    fieldGroup={field.fieldGroup}
                                                    ></Accordion>
                                            )
                                        }
                                        default:{
                                            return(<TextInput 
                                                key={field.id} 
                                                label={field.label} 
                                                placeholder={field.placeholder} 
                                                id={field.id} 
                                                type={field.type}
                                                value={field.value}
                                                required={field.required} />
                                        )
                                        }
                                    }
                                })
                            }       
                        </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )


}
