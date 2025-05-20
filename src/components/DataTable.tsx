import React, { useState } from 'react';
import type { DataTableProps } from '../static/types';



const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const total = data.time.length;
  const pages = Math.ceil(total / pageSize);
  const start = page * pageSize;
  const end = start + pageSize;

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Weather Data Table</h2>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border p-1 rounded"
        >
          {[10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size} rows
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Max Temp</th>
              <th className="border p-2">Min Temp</th>
              <th className="border p-2">Mean Temp</th>
              <th className="border p-2">Max Apparent Temp</th>
              <th className="border p-2">Min Apparent Temp</th>
              <th className="border p-2">Mean Apparent Temp</th>
            </tr>
          </thead>
          <tbody>
            {data.time.slice(start, end).map((date, idx) => (
              <tr key={date}>
                <td className="border p-2">{date}</td>
                <td className="border p-2">{data.temperature_2m_max[start + idx]}</td>
                <td className="border p-2">{data.temperature_2m_min[start + idx]}</td>
                <td className="border p-2">{data.temperature_2m_mean[start + idx]}</td>
                <td className="border p-2">{data.apparent_temperature_max[start + idx]}</td>
                <td className="border p-2">{data.apparent_temperature_min[start + idx]}</td>
                <td className="border p-2">{data.apparent_temperature_mean[start + idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {pages}
        </span>
        <button
          disabled={page + 1 === pages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
