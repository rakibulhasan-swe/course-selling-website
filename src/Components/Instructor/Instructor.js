import React from 'react';
import { Card } from 'react-bootstrap';

const Instructor = (props) => {
    const {name, image, especialist} = props.instructor;
    return (
        <div className='col-md-4 my-4'>
            <Card className='mx-auto shadow'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        {especialist}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Instructor;