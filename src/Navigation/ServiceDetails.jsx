import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useServiceContext } from '../serviceContext';
import { FaClipboardList, FaGift, FaHome, FaShoppingCart, FaTasks, FaTools, FaUser, } from 'react-icons/fa';

const ServiceDetail = () => {
  const { id } = useParams();
  const { services } = useServiceContext();

  const service = services.find(service => service.id.toString() === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Map service name to corresponding icon
  const getServiceIcon = (serviceName) => {
    switch (serviceName) {
      case 'Corporate Gifting':
        return <FaUser className="text-4xl text-yellow-600" />;
      case 'Souvenirs for all Events':
        return <FaGift className="text-4xl text-yellow-600" />;
      case 'Amare Shopper':
        return <FaShoppingCart className="text-4xl text-yellow-600" />;
      case 'Amare Household':
        return <FaHome className="text-4xl text-yellow-600" />;
      case 'Amare Concierge Services':
        return <FaTools className="text-4xl text-yellow-600" />;
      case 'Specialized Services':
        return <FaTasks className="text-4xl text-yellow-600" />;
      case 'Project organization Services':
        return <FaClipboardList className="text-4xl text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 justify-center py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#1b1b1b'}}>
      <div className="my-8">
        {/* Render icon based on service name */}
        {getServiceIcon(service.name)}
        <h1 className="text-3xl font-bold mb-4 text-yellow-600">{service.name}</h1>

        <p className="text-lg text-white">{service.description}</p>
        {/* Additional details about the service */}
      </div>
      {/* Back button */}
      <Link to="/businesses" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" style={{ marginRight: 'auto' }}>
  Back
</Link>

    </div>
  );
};

export default ServiceDetail;
