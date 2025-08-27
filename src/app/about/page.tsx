"use client";
import { useEffect, useState } from 'react';
import React from 'react';


const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
    const fetchPage = async () => {
        const result = await fetch('/api/users');
        const response = await result.json();
        setData(response);
        setLoading(false);
        console.log(response)
    }
    fetchPage();
},[])

if(loading) {
  return (
    <p className='text-center mt-3 text-green-400'>Loading...</p>
  )
}

  return (
    <div>
      <div className='text-center'>
        {data.length > 0 && (
           data.map((item, index) => (
            <div className='' key={index}>
              <h3 className='text-2xl'>{item.name}</h3>
              <p>{item.email}</p>
            </div>
           ))
        )}
      </div>
    </div>
  )
}

export default About;
