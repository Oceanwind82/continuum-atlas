import React from 'react';

type Props = {
  type?: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactNode;
};

const Callout: React.FC<Props> = ({ type = 'info', children }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'info':
        return 'border-blue-500 bg-blue-50 text-blue-900'
      case 'warning':
        return 'border-yellow-500 bg-yellow-50 text-yellow-900'
      case 'success':
        return 'border-green-500 bg-green-50 text-green-900'
      case 'error':
        return 'border-red-500 bg-red-50 text-red-900'
      default:
        return 'border-gray-500 bg-gray-50 text-gray-900'
    }
  }

  return (
    <div className={`callout border-l-4 p-6 rounded-r-lg ${getTypeStyles()}`}>
      {children}
    </div>
  )
};

export default Callout;
