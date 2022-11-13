import React,{useEffect,useState} from 'react'
import Header from '../common/Header'
import '../Styles/RestDetails.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { useParams } from 'react-router-dom'



export default function RestaurantDetails() {

  const {name}=useParams();
  const [restDet,setRestDet]=useState({});

  useEffect(() => {
    fetch(`http://localhost:2070/restaurant/restaurantDetails/${name}`,{method:"GET"})
    .then(result=>result.json())
    .then(data=>setRestDet(data.data[0]))
    .catch(err=>console.log(err));
  }, [name]);
  
  const cuisineValues= !(restDet.Cuisine===undefined ) && restDet.Cuisine.length && restDet.Cuisine.map((item)=><span className="tabcontent ">{item.name + "   "}</span>)
  

  return (
    <div>
      <Header/>
      <div className='d-flex justify-content-around'>
          <img className='rounded m-4' src={restDet.thumb} alt="restaurantimage" width={"1130px"} height={"352"}/>
      </div>

      <div className='headtext'>
        {restDet.name}
      </div>

      <button className='btn btn-danger float-end m-3'>Place Online Order</button>

      <div className='tabwrapper'>
        <Tabs>
          <TabList>
            <Tab><span className='tabs'>Overview</span></Tab>
            <Tab><span className='tabs'>Contact</span></Tab>
          </TabList>

          <TabPanel>
            <div className='tabtitle m-4'>About this place</div>
            <div className='m-4'>
              <div className='tabcontenttitle mb-1'>Cuisine</div>
              {/* <div className='tabcontent'>Bakery, Fast-food</div> */}
              {cuisineValues}
            </div>
            <div className='m-4'>
              <div className='tabcontenttitle mb-1'>Average Cost</div>
              <div className='tabcontent'>&#8377; {restDet.cost} for two people (approx.)</div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='m-4'>
              <div className='tabcontent'>Phone Number</div>
              <div className='text text-danger'>+91 114004566</div>
            </div>

            <div className='m-4'>
              <div className='tabcontenttitle mb-1'>{restDet.name}</div>
              <div className='tabcontent'>{restDet.address}</div>
            </div>
          </TabPanel>
        </Tabs>
      </div>


    </div>
  )
}
