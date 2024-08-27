import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCustomerProfile } from '../services/api';

const CustomerProfile = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const response = await fetchCustomerProfile(id);
        setCustomer(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCustomer();
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Customer Profile</h2>
      <div>
        <h3>{customer.name}</h3>
        <p>Email: {customer.email}</p>
        <p>Address: {customer.address}</p>
        <p>Preferences: {customer.preferences}</p>
        <p>Storename:{customer.storename}</p>
        <p>Storemanager:{customer.storemanager}</p>
      </div>
    </div>
  );
};

export default CustomerProfile;
