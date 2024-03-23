import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

// eslint-disable-next-line react/prop-types
const Items = ({handleWantCook}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('Items.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div >
            <div className="grid grid-cols-2 gap-6 md:w-[782px]">
            {
                items.map(item => <Item
                    key={item.recipe_id}
                handleWantCook={handleWantCook}
                    item={item}>

                    </Item>)
            }
            </div>
           
        </div>
    );
};

export default Items;