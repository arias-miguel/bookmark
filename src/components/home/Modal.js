import React from 'react'
import { Button, Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'

const MydModalWithGrid = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Trailer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=KK8FHdFluOQ'
          className='react-player'
          playing
          width='90%'
          height='100%'
        />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MydModalWithGrid