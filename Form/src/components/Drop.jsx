import React from 'react'
import { useDrop } from 'react-dnd'
import {Rnd} from 'react-rnd'
import '../App.css'

const Component="formcomponent";

const Drop = ({formComponents,addField,handleEditChange}) => {
    const [,drop]=useDrop(()=>({

        accept:Component,
        drop:(item, controller)=>{
            const spot=controller.getClientOffset();
            if(spot){
            addField(item,{x:spot.x,y:spot.y});
            }
        },
    
    }));
  return (
    <div
      ref={drop} className='container'>
{formComponents.map((field,index)=>(
    <Rnd key={index} className='resizeComponent'>

        {field.type==="label" &&(
           <div className='label'>
            <div className='formcomponents'
            contentEditable
            onChange={(e)=>handleEditChange(index,e.target.innerText)}>
                {field.name}
            </div>  
            
            </div>        
                     )}
          

          {field.type==="button" &&(
           <div>
           <button className='btn btn-primary'>

            <div className='formcomponents'
            contentEditable
            
            onChange={(e)=>handleEditChange(index,e.target.innerText)}
            
               >{field.name}
            </div> 
            </button> 
            </div>        
                     )}




{field.type==="checkbox" &&(
           
           <div className='formcomponents'>
<input type='checkbox'
/>
            <label
            className=''
            contentEditable
           
            onChange={(e)=>handleEditChange(index,e.target.innerText)}
           
           
           /* */
               >{field.name}
            </label>  
            </div>        
                     )}
{field.type==="radio" &&(
           
           <div className='formcomponents'>
<input type='radio'

/>
            <label
            className=''
            contentEditable
            
            onChange={(e)=>handleEditChange(index,e.target.innerText)}
           
           
               >{field.name}
            </label>  
            </div>        
                     )}
         {field.type==="text" &&(
           
           <div className='formcomponents'>
            <input 
            type='text'
            placeholder={field.name}
            />

            </div>        
                     )}
</Rnd>
))}
</div>
  )
}
export default Drop
