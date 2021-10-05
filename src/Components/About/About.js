import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Instructor/Instructor';

const About = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructor(data));
    }, []);
    return (
        <div className='container py-5'>
            <h3 className='text-center'>ABOUT US</h3>
            <div className="py-3">
                <h4>Major Goals :</h4>
                <p>The principal mission of online learning at IT-SCHOOL is to enhance student access to the best courses they need. Of equal importance, IT-SCHOOL's online education is intended to help students acquire the technical skills and online learning strategies important to the pursuit of their academic and career goals. By developing and teaching online courses, IT-SCHOOL faculty also acquire new instructional skills important to their professional growth and development. The IT-SCHOOL is committed to providing students and faculty the support and resources they need to succeed as participants in online education.</p>
            </div>
            <div className="py-3">
                <h4 className='text-center'>MEET OUR INSTRUCTOR'S</h4>
                <div className='container'>
                    <div className="row">
                        {
                            instructor.map(instructor => <Instructor key={instructor.id} instructor={instructor}></Instructor>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;