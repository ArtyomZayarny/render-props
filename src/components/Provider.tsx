import React from 'react'



interface ProviderProps  {
   children(value:string): JSX.Element;
}
 

const Provider:React.FC<ProviderProps>  = (props) => {
    const value:string = 'Tim'
    return props.children(value)
}
export default Provider