import React from 'react'

import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
    return (
        <div className="Screen">
            <Header title="Contact Us" />

            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 Block">
                    <h5 className="text-center">
                        Reach out to us here
                    </h5>
                    <hr/>
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Mahesh Patil</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">mahesh.patil@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Gala no 2, Gandharva Plaza</strong><br/>
                                <label className="fs-7">Chintamani nagar</label><br/>
                                <label className="fs-7">Sangli - 416416</label><br/>
                                <label className="fs-7">Maharashtra | India</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> 9685741230 </label><br/>
                                <label className="fs-7"> 0233-2651311 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr/>

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Nitin Patil</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">nitin.patil@grocers.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Car-Cafe, Jay Hind Complex</strong><br/>
                                <label className="fs-7">Ranakala  Tower</label><br/>
                                <label className="fs-7">Kolhapur - 416012</label><br/>
                                <label className="fs-7">Maharashtra | India</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> 9632587410 </label><br/>
                                <label className="fs-7"> 0231-22651311 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr/>

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Abhijit Kalagate</strong><br/>
                                <label className="fs-7">Store Manager</label><br/>
                                <label className="fs-7">abhi.kalagate@gmail.com.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Car-Cafe, Noor Plaza</strong><br/>
                                <label className="fs-7">Shivaji Nagar</label><br/>
                                <label className="fs-7"> Pune -411003</label><br/>
                                <label className="fs-7">Maharashtra | India</label>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br/>
                                <label className="fs-7"> 885511471 </label><br/>
                                <label className="fs-7"> 020-2234534 </label><br/>
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-center">
                        Let us get back to you
                    </h5>
                    <hr/>
                    <div>
                        <br/><br/>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Name</h6>
                            <input className="form-control" type="text" placeholder="Your name" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Email</h6>
                            <input className="form-control" type="email" placeholder="you@gmail.com" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Contact</h6>
                            <input className="form-control" type="number" placeholder="Your mobile" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>What would you like to know?</h6>
                            <textarea  rows="3" className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-outline-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ContactUsScreen
