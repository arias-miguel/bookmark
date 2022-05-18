import React, { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import MydModalWithGrid from './Modal';

const Carrusel = () => {
const [modalShow, setModalShow] = useState(false);
  return (
    <>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853700/bookmarkmovies/mulan_zx9zq6.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Ver Trailer
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853700/bookmarkmovies/raya_oxgmu3.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Mulan</h3>
      <>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Ver Trailer
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853700/bookmarkmovies/unidos_dhydpq.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <>
      <Button variant="warning" onClick={() => setModalShow(true)}>
        Ver Trailer
      </Button>

      <MydModalWithGrid show={modalShow} key={1} onHide={() => setModalShow(false)} />
    </>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Carrusel
