import React, { useState, useEffect } from 'react';
import "./ViewCustomerRate.css";
import Sidebar from '../Sidebar/Sidebar';

const ViewCustomerRate = () => {
  const [customerRates, setCustomerRates] = useState([]);
  const [filteredCustomerRates, setFilteredCustomerRates] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomerRate, setEditedCustomerRate] = useState({});

  useEffect(() => {
    const fetchCustomerRates = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/customer-rate');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomerRates(data);
        setFilteredCustomerRates(data); // Initialize filtered data with all customer rates
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchCustomerRates();
  }, []);

  const filterCustomerRates = () => {
    const filteredData = customerRates.filter((customerRate) => {
      const customerNameMatches = customerRate.customer_Name && customerRate.customer_Name.toLowerCase().includes(searchQuery.toLowerCase());
      // Check if customerRate.customer_Name is defined before using toLowerCase

      // Add more criteria as needed
      return customerNameMatches;
    });

    setFilteredCustomerRates(filteredData);
  };

  useEffect(() => {
    filterCustomerRates();
  }, [searchQuery, customerRates]);

  const handleEditCustomerRate = (customerRate) => {
    setEditedCustomerRate(customerRate);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:7000/api/customer-rate/${editedCustomerRate._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCustomerRate),
      });

      if (response.ok) {
        setCustomerRates(prevCustomerRates =>
          prevCustomerRates.map(customerRate =>
            customerRate._id === editedCustomerRate._id ? editedCustomerRate : customerRate
          )
        );
        setIsEditing(false);
      } else {
        console.error('Error updating customer rate:', response.status);
      }
    } catch (error) {
      console.error('Error updating customer rate:', error);
    }
  };

  // Function to delete a customer rate (example implementation)
  const deleteCustomerRate = (customerRateId) => {
    // Implement your delete logic here
    console.log(`Delete customer rate with ID: ${customerRateId}`);
  };

  return (
    <>
      <Sidebar />
      <div className="customer-Add-container">
        <div className="customer-main-container">
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "8px" }}>View Customer Rate</h2>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by Customer Name "
              className="w-full p-2 rounded border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid-view">
            {filteredCustomerRates.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {filteredCustomerRates.map((customerRate) => (
                  <div key={customerRate._id} className="custom-card bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="custom-card-body p-4">
                      <h5 className="font-semibold">Company Name: {customerRate.company_Name}</h5>
                      <p className="font-semibold">Customer Name: {customerRate.customer_Name}</p>
                      <p className="custom-card-subtitle mb-2">GST_No: {customerRate.GST_No}</p>
                      <p className="custom-card-subtitle mb-2">Mobile Number: {customerRate.mobile_Number}</p>
                      <p className="custom-card-subtitle mb-2">Rate Per KM: {customerRate.rate_per_km}</p>
                      <p className="custom-card-subtitle mb-2">Title: {customerRate.title}</p>
                      <p className="custom-card-subtitle mb-2">Rate: {customerRate.rate}</p>
                      {/* Add more fields as needed */}
                      <div className="flex justify-between">
                        <button className='btn btn-info' onClick={() => handleEditCustomerRate(customerRate)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => handleSave(customerRate._id)}>Save</button>
                        <button className='btn btn-success' onClick={() => deleteCustomerRate(customerRate._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Edit Customer Rate</h2>
            <input
              type="text"
              value={editedCustomerRate.company_Name}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, company_Name: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.customer_Name}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, customer_Name: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.GST_No}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, GST_No: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.mobile_Number}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, mobile_Number: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.rate_per_km}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, rate_per_km: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.title}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, title: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={editedCustomerRate.rate}
              onChange={(e) => setEditedCustomerRate({ ...editedCustomerRate, rate: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 ml-2 bg-red-500 text-white rounded">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCustomerRate;
