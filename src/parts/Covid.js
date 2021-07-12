import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Covid = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
          .get(`https://covid.mathdro.id/api`)
          .then((res) => {
            // console.log(res);
            setData(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return (
        <div className="covid">
            <div className="container w-100">
                <h2 className="text-center">Info Covid Global</h2>
                {
                    data ?<img src={data.image || ''} className="w-100" alt="" /> : ''
                }
                
            </div>
        </div>
    )
}

export default Covid;