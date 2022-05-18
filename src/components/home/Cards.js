import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { image, ranking, titulo, year} = this.props.producto;
        // const id = this.key
        return (
            <div>
                <Card style={{ margin:'0.7rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px black'}}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="bg-dark text-warning">
                        <Card.Title>
                            {titulo}
                        </Card.Title>
                        <Card.Text>
                            Rank {ranking} -- year {year}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}