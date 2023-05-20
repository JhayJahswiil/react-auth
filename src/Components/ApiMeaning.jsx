import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Api.css'

export default function ApiMeaning() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://raw.githubusercontent.com/nully0x/react-api-meaning/main/assigment.json');
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);


  return (
    <div className='main'>
      {data.map((item, index) => (
        <div key={index} className='key'>
          <h2>{Object.keys(item)[0]}</h2>
          <ul>
            {Object.entries(item[Object.keys(item)[0]]).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
