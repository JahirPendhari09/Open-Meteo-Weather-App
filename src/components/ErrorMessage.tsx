import React from 'react';
import type { ErrorMessageProps } from '../static/types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-100 text-red-700 p-3 rounded my-4 text-center">
    {message}
  </div>
);

export default ErrorMessage;
