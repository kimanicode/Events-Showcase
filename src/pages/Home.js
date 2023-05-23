import React, { useEffect } from 'react';
import myPic from '/workspaces/codespaces-react/src/pages/banner.png';
import { useState } from "react";
import { Link,useParams } from 'react-router-dom';

const Home = () =>{
  const params= useParams()
    const [events, setEvents] = useState([]);

  // Get the events from the JSON file.
  const getEvents = async () => {
   try{
    const response = await fetch("api/events");
    const data = await response.json();
    setEvents(data.events);
    console.log(data.event_date)
   }
   catch(error){console.error('Error fetching data:', error)}
    
  };
  useEffect(()=>{
    getEvents()
  },[])
 
  
    

    return(
        <div>
            

            <div className='h-48 w-full'>
            <img src={myPic} alt="" className=' w-full h-full '/>
            </div>

            <div>
                <h2 className='text-sky-500 text-center'>Here are upcoming Events</h2>
          <div>
          <div>
      <h1 className='text-center text-green-500' >Events</h1>
      {events.map((event) => (
       <div className='w-full p-6 md:flex'>
       <Link to={`/events/${event.id}`}> <div key={event.id} className='bg-sky-500 md:w-[33%] text-white '>
          <img src={event.event_image} className='w-full' />
          <div className='p-3'>
            <h2 className='text-xl text-green-800 font-bold'>{event.event_name}</h2>
            <p>{event.event_date}</p>
            <p>{event.event_time}</p>
            <p>{event.event_location}</p>
            
          </div>
          
        </div>
        </Link>
        </div>
      ))}
    </div>
           
      
         </div>

                
                
            </div>
        </div>

    )

}

export default Home;
 