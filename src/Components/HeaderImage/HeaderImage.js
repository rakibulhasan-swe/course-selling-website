import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderImage = ({title, button}) => {
    return (
        <div>
            <Row
                data-aos="zoom-out-up"
                className="d-flex align-items-center bgImg"
                style={{ height: "600px" }}
            >
                <Col md={6} className="ms-5">
                    <h1 className="text-light fs-2 lh-base ">{title}</h1>
                    {button && (
                        <Link to="/courses" type="button" className="mt-3 px-5 btn btn-danger">
                            <span className="me-2">{button}</span>
                        </Link>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default HeaderImage;