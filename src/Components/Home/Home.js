import React from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import HeaderImage from '../HeaderImage/HeaderImage';

const Home = () => {
    return (
        <main>
            <HeaderImage title="The New Way to Learn Properly With Us! Learn New Skills Online with Top Educators From IT-School" button="Get Started" />
            <h1 className="text-center my-5">Our <span className="text-danger fw-bold">Courses</span></h1>
            <Courses item="6" />
            <div className="text-center p-4">
                <Link to="/courses" className="btn btn-dark">
                    <i className="fas fa-book me-1"></i> Click here to see the course list
                </Link>
            </div>
        </main>
    );
};

export default Home;