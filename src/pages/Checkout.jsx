import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <div className="hero">
                <div className='container d-flex justify-content-center align-items-center flex-column'>
                    <div className="col-5 my-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Pari Abbaszada"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+994 55 555 55 55"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>

                            <div className="mb-3 d-flex justify-content-between">
                                <div className="col-6">
                                    <label className="form-label">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>

                            <Link to='/succesfulcheckout' type="submit" className="btn btn-success text-center w-100">
                                Check Out
                            </Link>

                            <div className="mt-3 text-center ">
                                <Link to="/" className='text-danger'>Cancel and Return to Home</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
