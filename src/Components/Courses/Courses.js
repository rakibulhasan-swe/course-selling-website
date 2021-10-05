import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";

const Courses = ({ item }) => {
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("courses.json")
            .then((res) => res.json())
            .then((data) => {
                setCourse(data.splice(0, item === undefined ? data.length : item));
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <Container>
            <Row className="mt-3">
                {loading ? (
                    <Spinner className="mx-auto my-5" animation="border" />
                ) : (
                    course.map((item) => (
                        <CourseCard key={item._id} course={item}></CourseCard>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Courses;