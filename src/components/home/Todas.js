
import React, { useEffect, useState } from 'react'

import { getData } from '../crud/Crud';
import Cards from './Cards';


const Todas = () => {



    const[peliculas, setPeliculas]= useState(null);
    useEffect(() => {
      getPeliculas();
    }, [])
    
   
    const getPeliculas = async () =>{
        const p = await getData();
        console.log(p.docs[5].data())
        let element=[];
        for (let index = 0; index < 99; index++) {
            element.push(p.docs[index].data());
        }
        console.log(element)
        setPeliculas(element);
        console.log(peliculas)
    }
    
  return (
    <div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {

                peliculas && peliculas.map((items, index) => (
                    <Cards producto={items} key={index}
                    />
                ))
            }

                    
        </div>
    </div>
  )
}

export default Todas