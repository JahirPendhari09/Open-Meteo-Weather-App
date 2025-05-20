import React, { type ChangeEvent } from 'react';
import type { LocationInputType } from '../static/types';

const LocationInput: React.FC<LocationInputType> = ({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) => {

  const handleLatitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) setLatitude(value);
  };

  const handleLongitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) setLongitude(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="number"
        step="any"
        value={latitude}
        onChange={handleLatitudeChange}
        placeholder="Latitude (-90 to 90)"
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        step="any"
        value={longitude}
        onChange={handleLongitudeChange}
        placeholder="Longitude (-180 to 180)"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default LocationInput;
