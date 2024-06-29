import React, { useState } from 'react';
import Upload from '../Upload';

const BusinessSell = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { name, description, image_url: imageUrl };

    const response = await fetch('/api/business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      // Handle successful form submission
      console.log('Business listed successfully:', result.business);
      setShowSuccessPopup(true);
    } else {
      // Handle form submission error
      console.error('Error listing business:', result.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-10 flex flex-col bg-white border border-t-4 border-t-blue-gray-800 shadow-xl rounded-xl items-center justify-center p-5">
        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            Buisiness Name
          </h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Name of the Business to be listed"
            required
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">Description</h1>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give a brief descriptio"
            required
          />
          {imageUrl && (
            <div className="mb-3">
              <img src={imageUrl} alt="Uploaded" className="max-w-full h-auto" />
            </div>
          )}
          <div className='mt-4 flex items-center gap-7 '>
            <Upload onUpload={(url: string) => setImageUrl(url)} />
            <p>Upload images of the item</p>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="m-3 bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900">
              List your item
            </button>
          </div>
        </div>
      </form>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-xl font-bold mb-4">Business Listed Successfully!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSell;
