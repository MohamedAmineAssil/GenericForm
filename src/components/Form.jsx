import React from 'react'
import Accordion from './FormInputs/Accordion';
import Choices from './FormInputs/Choices';
import DropDown from './FormInputs/DropDown';
import TextInput from './FormInputs/TextInput';


export default function Form({currentFormSection}) {

 
  return (
    <div>
        { 
           currentFormSection && currentFormSection.fields && currentFormSection.fields.map((field)=>{
                switch(field.component){
                    case "choices":{

                        return(<Choices key={field.id} 
                                label={field.label}
                                id={field.id}
                                name={field.name}
                                options={field.options}
                                value={field.value}
                                ></Choices>)
                        
                    }
                    case "dropdown":{
                        return(<DropDown
                                key={field.id} 
                                label={field.label}
                                id={field.id}
                                name={field.name}
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
                            required={field.required}
                            value={field.value}
                            />
                    )
                    }
                }
            })
        }
    </div>
  )
}
