import React from 'react';
import type { DateRangePickerProps } from '../static/types';


const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default DateRangePicker;
