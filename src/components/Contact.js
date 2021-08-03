import React from 'react';


const Contact = () => {
    return(
        <>
            <div className='container pt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-sm-4'>
                        <h5>Contact Us</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Subject</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Message</label>
                                <textarea className='form-control' rows='3'></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
       
        </>
    );
}

export default Contact;