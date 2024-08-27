import React, { useEffect, useState } from 'react';
import { fetchCustomerProfiles } from '../services/api';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await fetchCustomerProfiles();
        setCustomers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCustomers();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <a href={`/customer/${customer._id}`} className="btn btn-info">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button  onClick={() => window.location.href = '/feedback'} className="btn btn-info">Feedback</button>
    </div>
  );
};

export default Dashboard;
