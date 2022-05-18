import React, { useEffect, useState } from 'react'

import { getData } from '../crud/Crud';
import Cards from './Cards';

const MenosValoradas = () => {
    const[peliculas, setPeliculas]= useState(null);
    useEffect(() => {
      getPeliculas();
    }, [])
    
   
    const getPeliculas = async () =>{
        const p = await getData();
        console.log(p.docs[5].data())
        let element=[];
        for (let index = 0; index < 99; index++) {
            if(p.docs[index].data().ranking<3){
            element.push(p.docs[index].data());}
        }
        setPeliculas(element);
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
export default MenosValoradas