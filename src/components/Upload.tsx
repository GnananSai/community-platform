'use client'
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

const Upload = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = (result: any) => {
    if (result.event === 'success' && result.info && result.info.secure_url) {
      const url = result.info.secure_url;
      console.log('Image URL:', url); // Print the URL to the console
      setImageUrl(url); // Store the URL in state
    } else {
      console.error('Upload Error:', result.info);
    }
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset="ml_default"
        onUpload={(result) => {
            handleUpload(result);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105'>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}

export default Upload;
