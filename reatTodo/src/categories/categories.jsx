import './categories.css'
import Oerview from "../home_page/overview";
import Gallery from '../products/pGallery'
import { useState } from 'react'
import apples from '../../src/assets/apples.jpg'
import bananas from '../../src/assets/bananas.jpg'
import belpaper from '../../src/assets/belpaper.jpg'
import blackberries from '../../src/assets/blackberries.jpg'
import blueberries from '../../src/assets/blueberries.jpg'
import bread from '../../src/assets/bread.jpg'
import broccoli from '../../src/assets/broccoli.jpg'
import butter from '../../src/assets/butter.jpg'
import carrots from '../../src/assets/carrots.jpg'
import cauliflower from '../../src/assets/cauliflower.jpg'
import celerry from '../../src/assets/celerry.jpg'
import cheese from '../../src/assets/cheese.jpg'
import cucumbers from '../../src/assets/cucumbers.jpg'
import eggs from '../../src/assets/eggs.jpg'
import grapes from '../../src/assets/grapes.jpg'
import heavycream from '../../src/assets/heavycream.jpg'
import letuce from '../../src/assets/letuce.jpg'
import mangoes from '../../src/assets/mangoes.jpg'
import milk from '../../src/assets/milk.jpg'
import mushroom from '../../src/assets/mushroom.jpg'
import onions from '../../src/assets/onions.jpg'
import oranges from '../../src/assets/oranges.jpg'
import pineapples from '../../src/assets/pineapples.jpg'
import potatoes from '../../src/assets/potatoes.jpg'
import raspberries from '../../src/assets/raspberries.jpg'
import rice from '../../src/assets/rice.jpg'
import sourcream from '../../src/assets/sourcream.jpg'
import strawberries from '../../src/assets/strawberries.jpg'
import tomatoes from '../../src/assets/tomatoes.jpg'
import yoghurt from '../../src/assets/yoghurt.jpg'
import zucchini from '../../src/assets/zucchini.jpg'


function Categories(){
    const category = [
        {id: 1, image:grapes, name:"Fruits"},
        {id: 2, image:cauliflower, name:"Vegetables"},
        {id: 3, image:yoghurt, name:"Dairy"},
        {id: 4, image:bread, name:"Grains"}
        // {id: 5, image:"", name:""},
        // {id: 6, image:"", name:""},
        // {id: 7, image:"", name:""}
    ]

    const Product_Info = [
        // {id: 1, title: "name 1",  amount: "KES.0.00", category: "flower"},
        // {id: 2, title: "name 2",  amount: "KES.0.00", category: "flower"},
        // {id: 3, title: "name 3",  amount: "KES.0.00",category: "beverages"},
        // {id: 4, title: "name 4",  amount: "KES.0.00", category: "flower"},
        // {id: 5, title: "name 5",  amount: "KES.0.00", category: "fruits"},
        // {id: 6, title: "name 6",  amount: "KES.0.00", category: "vegetables"},
        // {id: 7, title: "name 7",  amount: "KES.0.00", category: "vegetables"},
        // {id: 8,},
        // {id: 9,},
        // {id: 10,},
        // {id: 11,},
        // {id: 12,},
        // {id: 13,},
        // {id: 14,},
        // {id: 15,},
        // {id: 16,},
        // {id: 17,},
        // {id: 18,},
        // {id: 19,}
        {
            "id": 1,
            "name": "Apples",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:apples
        },
        {
            "id": 2,
            "name": "Bananas",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:bananas
        },
        {
            "id": 3,
            "name": "Oranges",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:oranges
        },
        {
            "id": 4,
            "name": "Grapes",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:grapes
        },
        {
            "id": 5,
            "name": "Strawberries",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:strawberries
        },
        {
            "id": 6,
            "name": "Blueberries",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:blueberries
        },
        {
            "id": 7,
            "name": "Blackberries",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:blackberries
        },
        {
            "id": 8,
            "name": "Raspberries",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:raspberries
        },
        {
            "id": 9,
            "name": "Mangoes",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:mangoes
        },
        {
            "id": 10,
            "name": "Pineapples",
            "category": "Fruits",
            "amount":"KES 50.00",
            image:pineapples
        },
        {
            "id": 11,
            "name": "Potatoes",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:potatoes
        },
        {
            "id": 12,
            "name": "Onions",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:onions
        },
        {
            "id": 13,
            "name": "Carrots",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:carrots
        },
        {
            "id": 14,
            "name": "Celery",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:celerry
        },
        {
            "id": 15,
            "name": "Lettuce",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:letuce
        },
        {
            "id": 16,
            "name": "Tomatoes",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:tomatoes
        },
        {
            "id": 17,
            "name": "Cucumbers",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:cucumbers
        },
        {
            "id": 18,
            "name": "Zucchini",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:zucchini
        },
        {
            "id": 19,
            "name": "Broccoli",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:broccoli
        },
        {
            "id": 20,
            "name": "Cauliflower",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:cauliflower
        },
        {
            "id": 21,
            "name": "Bell peppers",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:belpaper
        },
        {
            "id": 22,
            "name": "Mushrooms",
            "category": "Vegetables",
            "amount":"KES 50.00",
            image:mushroom
        },
        {
            "id": 23,
            "name": "Milk",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:milk
        },
        {
            "id": 24,
            "name": "Eggs",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:eggs
        },
        {
            "id": 25,
            "name": "Cheese",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:cheese
        },
        {
            "id": 26,
            "name": "Yogurt",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:yoghurt
        },
        {
            "id": 27,
            "name": "Butter",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:butter
        },
        {
            "id": 28,
            "name": "Sour cream",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:sourcream
        },
        {
            "id": 29,
            "name": "Heavy cream",
            "category": "Dairy",
            "amount":"KES 50.00",
            image:heavycream
        },
        {
            "id": 30,
            "name": "Bread",
            "category": "Grains",
            "amount":"KES 50.00",
            image:bread
        },
        {
            "id": 31,
            "name": "Rice",
            "category": "Grains",
            "amount":"KES 50.00",
            image:rice
        }
      ]
   const [search, setSearch] = useState(Product_Info)
//    function filter(e){
//     if (e ===1){
        
//     }
//    }
const handleClick =(id)=>{
    setSearch(  Product_Info.filter((li)=> li.category === id))
    
}
//   }
    return(
        <div className='home_page'>
        <Oerview/>
        <div className='containers'>
        <div className='category_list'>
        {category.map(item=>
        <div className="category" key={item.id} onClick={(e)=>{
            console.log(item.id)
           handleClick(item.name);
        }}>
            <img src={item.image} />
            <h4>{item.name}</h4>
        </div>
        )}

        </div>
        <Gallery Product_Info={search}/>
        </div>
        </div>
    )
}

export default Categories