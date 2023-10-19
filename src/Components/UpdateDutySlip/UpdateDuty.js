// UpdateDuty.js

// Import React and useState hook from React
import React, { useState } from 'react';

// Import custom CSS for styling
import './UpdateDuty.css';

// Import Sidebar component
import Sidebar from '../Sidebar/Sidebar';

// Functional component definition
const UpdateDuty = () => {
  // Initial form data state
  const initialFormData = {
    companyname: '',
    dutyslipno: '',
    reportingaddress: '',
    date: '',
    name: '',
    vehicle: '',
    vehiclenumber: '',
    from: '',
    to: '',
    closingkm: '',
    closingtime: '',
    startingkm: '',
    startingtime: '',
    totalkm: '',
    totalhour: '',
    title: '',
    amount: '',
    extrakm: '',
    amount1: '',
    extrahour: '',
    amount2: '',
    totalamount: '',
    advanceamount: '',
    paymentmethod: '',
  };

  // State to manage form data
  const [formData, setFormData] = useState(initialFormData);

  // Handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    // Additional logic for form submission can be added here
  };

  // Return JSX representing the component structure
  return (
    <>
      <Sidebar /> {/* Render the Sidebar component */}

      <div className="update-duty-container">
        <div className="update-duty-form">
          <div className="form-group">
            <div className='d-flex gap-5'>
              <div>  <label htmlFor="companyname" className="update-duty-form-label">
                Company Name:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="companyname"
                  name="companyname"
                  onChange={handleChange}
                  value={formData.companyname}
                /></div>
              <div> <label htmlFor="dutyslipno" className="update-duty-form-label">
                Duty Slip No:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="dutyslipno"
                  name="dutyslipno"
                  onChange={handleChange}
                  value={formData.dutyslipno}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div><label htmlFor="reportingaddress" className="update-duty-form-label">
                Reporting Address:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="reportingaddress"
                  name="reportingaddress"
                  onChange={handleChange}
                  value={formData.reportingaddress}
                /></div>
              <div><label htmlFor="date" className="update-duty-form-label">
                Date:
              </label>
                <input
                  className="update-duty-form-control"
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={formData.date}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div><label htmlFor="name" className="update-duty-form-label">
                Name:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                /></div>
              <div>   <label htmlFor="vehicle" className="update-duty-form-label">
                Vehicle:
              </label>
                <select
                  className="update-duty-form-control"
                  name="vehicle"
                  id="vehicle"
                  onChange={handleChange}
                  value={formData.vehicle}
                >
                  <option value="">Vehicle</option>
                  <option value="Sedan Car">Sedan Car</option>
                  <option value="Mini Car">Mini Car</option>
                  {/* Add other vehicle options */}
                </select></div>
            </div>
            <div className='d-flex gap-5'>
              <div><label htmlFor="vehiclenumber" className="update-duty-form-label">
                Vehicle Number:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="vehiclenumber"
                  name="vehiclenumber"
                  onChange={handleChange}
                  value={formData.vehiclenumber}
                /></div>
              <div><label htmlFor="from" className="update-duty-form-label">
                From:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="from"
                  name="from"
                  onChange={handleChange}
                  value={formData.from}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <label htmlFor="to" className="update-duty-form-label">
                  To:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="to"
                  name="to"
                  onChange={handleChange}
                  value={formData.to}
                /></div>
              <div>
                <label htmlFor="closingkm" className="update-duty-form-label">
                  Closing KM:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="closingkm"
                  name="closingkm"
                  onChange={handleChange}
                  value={formData.closingkm}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div><label htmlFor="closingtime" className="update-duty-form-label">
                Closing Time:
              </label>
                <input
                  className="update-duty-form-control"
                  type="time"
                  id="closingtime"
                  name="closingtime"
                  onChange={handleChange}
                  value={formData.closingtime}
                /></div>
              <div> <label htmlFor="startingkm" className="update-duty-form-label">
                Starting KM:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="startingkm"
                  name="startingkm"
                  onChange={handleChange}
                  value={formData.startingkm}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <label htmlFor="startingtime" className="update-duty-form-label">
                  Starting Time:
                </label>
                <input
                  className="update-duty-form-control"
                  type="time"
                  id="startingtime"
                  name="startingtime"
                  onChange={handleChange}
                  value={formData.startingtime}
                />
                
              </div>
              <div>  <label htmlFor="totalkm" className="update-duty-form-label">
                Total KM:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="totalkm"
                  name="totalkm"
                  onChange={handleChange}
                  value={formData.totalkm}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <label htmlFor="totalhour" className="update-duty-form-label">
                  Total Hour:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="totalhour"
                  name="totalhour"
                  onChange={handleChange}
                  value={formData.totalhour}
                /></div>
              <div><label htmlFor="amount" className="update-duty-form-label">
              Amount:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="amount"
                  name="amount"
                  onChange={handleChange}
                  value={formData.amount}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              {/* <div>   <label htmlFor="title" className="update-duty-form-label">
                Title:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="amount"
                  name="amount"
                  onChange={handleChange}
                  value={formData.amount}
                />
              </div> */}
              <div>   <label htmlFor="title" className="update-duty-form-label">
                Title:
              </label>
                <select
                  className="update-duty-form-control"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={formData.title}
                >
                  <option value="">Title</option>
                  <option value="One Day / 80km">One Day /80km</option>
                  <option value="One Day / 300km">One Day /300km</option>
                  {/* Add other vehicle options */}
                </select></div>
              <div> <label htmlFor="amount1" className="update-duty-form-label">
                Amount:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="amount1"
                  name="amount1"
                  onChange={handleChange}
                  value={formData.amount1}
                />
              </div>
            </div>
            <div className='d-flex gap-5'>
              <div> <label htmlFor="extrakm" className="update-duty-form-label">
              Extra KM:
              </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="extrakm"
                  name="extrakm"
                  onChange={handleChange}
                  value={formData.amount2}
                /></div>
              <div>
                <label htmlFor="amount2" className="update-duty-form-label">
                  Amount:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="amount2"
                  name="amount2"
                  onChange={handleChange}
                  value={formData.amount2}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <label htmlFor="extrahour" className="update-duty-form-label">
                  Extra Hour:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="extrahour"
                  name="extrahour"
                  onChange={handleChange}
                  value={formData.extrahour}
                /></div>
              <div>
                <label htmlFor="totalamount" className="update-duty-form-label">
                  Total Amount:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="totalamount"
                  name="totalamount"
                  onChange={handleChange}
                  value={formData.totalamount}
                /></div>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <label htmlFor="advanceamount" className="update-duty-form-label">
                  Advanced Amount:
                </label>
                <input
                  className="update-duty-form-control"
                  type="text"
                  id="advanceamount"
                  name="advanceamount"
                  onChange={handleChange}
                  value={formData.advanceamount}
                /></div>
              <div> <label htmlFor="paymentmethod" className="update-duty-form-label">
                Payment Method:
              </label>
                <select
                  className="update-duty-form-control"
                  name="paymentmethod"
                  id="paymentmethod"
                  onChange={handleChange}
                  value={formData.paymentmethod}
                >
                  <option value="">Payment Method</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cash">Cash</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="Paytm">Paytm</option>
                  <option value="Phone Pay">Phone Pay</option>
                </select></div>
            </div>

          </div>
        </div>

        {/* Buttons for form actions */}
        <div className="button-container">
          <button type="button" className="btn btn-save" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="btn btn-print" onClick={handleSubmit}>
            Print
          </button>
        </div>
      </div>
    </>
  );
};

// Export the component as the default export
export default UpdateDuty;