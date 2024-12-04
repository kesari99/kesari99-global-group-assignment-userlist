import React from 'react'
import { Label } from '../label'
import { Input } from '../input'
import { Textarea } from '../textarea'

const FormControls = ({
    formControls = [],
    formData,
    setFormData
}) => {

    console.log('formData', formData)

    const renderComponentByType = (getControlItem) => {

        let element = null  
        const currentControlItemValue = formData[getControlItem.name] || ''
        
        switch(getControlItem.componentType){

            case 'input':
                element = <Input
                    id = {getControlItem.name}
                    name = {getControlItem.name}
                    placeHolder = {getControlItem.placeholder}
                    value = {currentControlItemValue}
                    onChange = {(e) => setFormData({...formData, [getControlItem.name] : e.target.value})}
                
                />
                break;
            case 'textarea':
                element = <Textarea
                    id = {getControlItem.name}
                    name = {getControlItem.name}
                    placeHolder = {getControlItem.placeholder}
                    value={currentControlItemValue}
                    onChange = {(e) => setFormData({...formData, [getControlItem.name] : e.target.value})}
                
                />
                break;
           
            default:
                element = <Input
                    id = {getControlItem.name}
                    name = {getControlItem.name}
                    placeHolder = {getControlItem.placeholder}
                    value = {currentControlItemValue}
                    onChange = {(e) => setFormData({...formData, [getControlItem.name] : e.target.value})}


                
                />

        }
        return element


    }



  return (

   

    <div className='flex flex-col gap-4'>
        {
            formControls.map(eachControl => (
                <div key={eachControl.name}>
                    <Label>{eachControl.label}</Label>
                    {
                        renderComponentByType(eachControl)
                    }

                </div>
            ))
        }

     
    </div>
  )
}

export default FormControls