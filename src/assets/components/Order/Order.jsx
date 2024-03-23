import { useState } from "react";
import Cook from "../Cook/Cook";
import Coocking from "../Cooking/Coocking";

const Order = ({order}) => {
    
    const [orderList, setOrderList] = useState([]);
    const handleCookingList = cook =>{
        // console.log(cook);
        const newCookingList = [...orderList,cook];
        setOrderList(newCookingList)
    };
    
    
    return (
        <div className="w-[514px]">
            <section className="card-style pb-14">
        <div className="flex justify-center text-center pt-8">
                <h1 className=" w-[350px] pb-4 text-2xl font-bold border-b-2">Want to cook : {order.length}</h1>
                </div>
                <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        
                        <tbody className="card-peragraph">
                            {/* row 1 */}
                            
                            {
                                // eslint-disable-next-line react/prop-types
                                order.map((cook,index) =><Cook
                                key={index}
                                index={index}
                                cook ={cook}
                                handleCookingList={handleCookingList} 
                                ></Cook>)
                            }
                            
                           
                        </tbody>
                           
                        
                    </table>
                </div>
            </div>
            <div className="flex justify-center text-center pt-8">
                <h1 className=" w-[350px] pb-4 text-2xl font-bold border-b-2">Currently cooking : {orderList.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="card-peragraph">
                            {/* row 1 */}
                            {
                                orderList.map((cookinglist,index) => <Coocking 
                                key={index}
                                cookingList={cookinglist}
                                index={index}
                               
                                ></Coocking>)
                            }
                          
                        </tbody>
                    </table>
                </div>
            </div>

            
            </section>
            </div>
    );
};

export default Order;