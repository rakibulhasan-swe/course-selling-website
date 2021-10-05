import React from 'react';
import notFoundImage from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="container-fluid text-center">
                <img className='' src={notFoundImage} alt="" />
            </div>
        </div>
    );
};

export default NotFound;