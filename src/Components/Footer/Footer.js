import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark p-5'>
            <footer>
                <div className="container-fluid p-0">
                    <div className="row text-left">
                        <div className="col-md-5 col-sm-12">
                            <h1 className="text-light">IT-School</h1>
                            <p className="text-muted">IT school is one of the best online learning platform in Bangladesh. It has almost 3000+ students. Qualifide and experienced instructors.</p>
                            <p className="pt-4 text-muted">Copyright &copy; 2021 All rights reserved | This template is made by
                                <span> Md Rakibul Hasan</span></p>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <h4 className="text-light">Newsletter</h4>
                            <p className="text-muted">Stay Updated</p>
                            <form className="form-inline">
                                <div className="col pl-">
                                    <div className="input-group pr-5">
                                        <input className="form-control bg-dark text-white" type="text" placeholder="E-mail" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-2 col-sm-12">
                            <h4 className="text-light">Follow us</h4>
                            <p className="text-muted">Let us be social</p>
                            <div className="column text-light">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-instagram mx-2"></i>
                                <i className="fab fa-twitter mx-2"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;