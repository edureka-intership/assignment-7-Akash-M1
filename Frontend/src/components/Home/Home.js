import React,{useEffect,useState} from 'react'
import Header from './Header'
import "../Styles/MealType.css"
import MealType from './MealType';
// import breakfast from "../../assets/breakfast.png"


export default function Home() {

  const [mealType,setMealType]=useState([]);

  useEffect(() => {
    fetch('http://localhost:2070/mealType',{method:"GET"})
    .then(result=>result.json())
    .then(data=>setMealType(data.data))
    .catch(err=>console.log(err));
  }, []);


  return (
    <div>
        <Header/>
        <MealType items={mealType}/>
    </div>
  )
}
