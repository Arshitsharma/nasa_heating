import React from 'react';

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default InfoCard;
