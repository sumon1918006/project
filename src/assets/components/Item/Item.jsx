// eslint-disable-next-line react/prop-types
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({item, handleWantCook}) => {
    // eslint-disable-next-line react/prop-types
    const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} =item;
    
    const toster = () => toast("Already Order This Item!");
   
   
   return (
       <div className='p-6 card-style space-y-4'>

           <div className='h-[230px]'>
               <img className='rounded-2xl w-full h-full' src={recipe_image} alt="" />
           </div>

           <h1 className='pt-2 text-xl font-semibold'>{recipe_name}</h1>
           <p className='card-peragraph border-b-2 pb-4'>{short_description}</p>
           <div className='border-b-2 pb-4 pt-2'>
               <h1 className='text-lg font-semibold pb-4'>Ingredients</h1>
               <ul className='list-disc space-y-2 pl-7 card-peragraph'>
                   <li>{ingredients[0]}</li>
                   <li>{ingredients[1]}</li>
                   <li>{ingredients[2]}</li>
               </ul>
           </div>

           <div className='flex gap-4 py-2'>
               <span><i className="fa-regular fa-clock"></i> &nbsp;{preparing_time}</span>
               <span className='flex'><img src="https://i.ibb.co/qkJb2tx/Frame.png" alt="" />{calories}</span>
           </div>
           <div>
            <button onClick={()=>handleWantCook(item,toster)} className="common-button">Want to Cook</button>
            <ToastContainer />
           </div>

          

           

       </div>
   );
};

export default Item;