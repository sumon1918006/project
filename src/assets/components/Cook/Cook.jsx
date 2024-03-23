import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Cook = ({cook,index,handleCookingList}) => {

    // eslint-disable-next-line react/prop-types
    const { recipe_name, preparing_time, calories}=cook;


    const[visit,setvisit]=useState(false);
    const handleClick = () => {
        
        handleCookingList(cook);
        setvisit(!visit);
    

      };
    
    return (
        <tr className={`bg-base-200 ${visit && 'hidden'}`} >
        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={handleClick} className="rounded-full text-base font-semibold btn-preparing mt-4 py-3 px-4 mr-3">Preparing</button></td>
    </tr>
    );
};

export default Cook;