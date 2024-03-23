
const Coocking = ({cookingList,index}) => {
    const {recipe_name, preparing_time, calories } = cookingList;
   
    

    return (
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
        
    );
};
export default Coocking;