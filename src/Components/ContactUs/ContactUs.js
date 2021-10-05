import React from 'react';

const ContactUs = () => {
  return (
    <div className='container my-5'>
      <h1 className="fs-1 fw-bold text-center mt-5">WE ARE HERE TO HELP YOU</h1>
      <p className="fs-6 fw-light text-center mb-5">We are commited to answering all your questions and meetings any need you may have. We should love to hear from you. Please fill out the form below so we may assist you.</p>
      <form className="row g-3">
        <div className="col-md-6">
          <label forhtml="inputName4" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName4" />
        </div>
        <div className="col-md-6">
          <label forhtml="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label forhtml="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12 mb-3">
          <label forhtml="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" forhtml="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="w-100 btn btn-dark text-white px-4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;