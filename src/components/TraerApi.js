import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig';
import useForm from '../hooks/useForm';


const TraerApi = () => {

    let [formValue, handleInputChange, rest] = useForm({
        api: '',
        vueltas: ''
    })
    const { api, vueltas } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(api, vueltas)
        cargarApi(api, vueltas)
        rest()
    }
    const cargarApi = async (api, vueltas) => {
        for (let i = 1; i <= vueltas; i++) {
            const resp = await fetch(api)
            const data = await resp.json()
            enviarFirestore(data.items)

        }
    }
    const enviarFirestore = (data) => {
        data.forEach(card => {
            const { id, title, imDbRating, year, image } = card
    
            //asignar lo que tengo en mi api
            ///lo voy enviar a la colleccion de Firestore
    
            const cargar = {
                year: year,
                image: image,
                ranking: imDbRating,
                titulo: title,
                id: id
            }
    
            addDoc(collection(db, "peliculas"), cargar)
                .then(resp => { console.log('dato cargado') })
                .catch(error => { console.log(error) })
    
        })
    }

return (
    <div>
        <h1>Enviar Api a firebase</h1>
        <Form onSubmit={handleSubmit}>
            <input
                type="number"
                name="vueltas"
                placeholder='Ingresa el numero de veces a cargar la api'
                value={vueltas}
                onChange={handleInputChange}

            />
            <input
                type="text"
                name="api"
                placeholder='Ingrese url de api'
                value={api}
                onChange={handleInputChange}

            />
            <Button type="submit">Enviar</Button>
        </Form>
    </div>
);
};

export default TraerApi;