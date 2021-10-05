import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const CoursesCard = ({ course }) => {
    const { name, background, price, registered, instructor, _id, email, enrollUser } = course;
    return (
        <article className="col col-lg-4" lg="4" data-aos="zoom-out-up">
            <Card className="my-3 mx-auto shadow">
                <Card.Img variant="top" src={background} />
                <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Title>Price: ${price}</Card.Title>
                    <div className='fw-light'>
                        <small>Time: {registered}</small> <br />
                        <small>Instructor: {instructor}</small> <br />
                        <small>Contact: {email}</small>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <div>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                        </div>
                        <div>
                            <i className="fas fa-user me-1"></i>
                            <small>{enrollUser}</small>
                        </div>
                    </div>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={_id}>
                                Take Course <strong>{name}</strong>.
                            </Tooltip>
                        }
                    >
                        <button className="mt-3 btn btn-dark w-100 text-capitalize fs-6 mt-1">
                            <i className="fas fa-cart-plus me-2"></i>
                            Enroll Now
                        </button>
                    </OverlayTrigger>
                </Card.Body>
            </Card>
        </article>
    );
};

export default CoursesCard;