import React from 'react';

const ContactUs = () => {
    return (
        <div className='container my-5'>
            <h1 class="fs-1 fw-bold text-center mt-5">WE ARE HERE TO HELP YOU</h1>
            <p class="fs-6 fw-light text-center mb-5">We are commited to answering all your questions and meetings any need you may have. We should love to hear from you. Please fill out the form below so we may assist you.</p>
            <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputName4" class="form-label">Name</label>
                  <input type="text" class="form-control" id="inputName4" />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12 mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-dark text-white px-4">Submit</button>
                </div>
              </form>
        </div>
    );
};

export default ContactUs;