import "./pGallery.css"
import images from "../../src/assets/cart.png";
import a from "../../src/assets/a2.jpg";
import a1 from "../../src/assets/a3.png";
import Header from "../header/Header";
import Categories from "../categories/categories"
import { useState } from "react";

function Gallery({Product_Info}){

    
    //   const filteredItems = Product_Info.filter(item=>{
    //     item.title.toLowerCase().includes(query.toLowerCase())
    //   })
      
    //   const [search, setSearch] = useState("");
    const myObj = [...Product_Info]
    const [select, onSelect] = useState("")
    const [selectedData, setSelectedData] = useState(null);
    const handleDataSelect = (data) => {
        setSelectedData(data);
      };
    //   onSelect={handleDataSelect}
    console.log(select)
    return(
        <>
        
        
        <div className="product-list">
        <h1>Into The Shop</h1>
        <div className="products">
        {myObj.map(  info =>
        <div className="box" key={info.id} onClick={() => onSelect(info)}>
            <div className="img_container">
            <img className="p_Img" src={info.image} alt = "..."/>
            </div>
            <div className="box_bottom">
            <div className="attributes">
            <p>{info.name}</p>
            <h5>{info.amount}</h5>
            </div>
            <img className="p_cart" src={images} alt = "addCart" />
            </div>
        </div>
       
        )}
        </div>
       </div>
       <Header Product_Info={Product_Info} selectedData={selectedData} onSelect={handleDataSelect}/>
       </>
    )
}

export default Gallery