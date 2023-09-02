import React from "react";

const GifModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-transparent w-3/4 md:w-1/2 lg:w-1/3 rounded-md shadow-lg p-4">
        <img
          onClick={onClose}
          src="./terminal.gif"
          alt="GIF"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GifModal;
