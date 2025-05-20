import { useState, type ChangeEvent } from 'react';
import axios from 'axios';
import LocationInput from './components/LocationInput';
import DateRangePicker from './components/DateRangePicker';
import Graph from './components/Graph';
import DataTable from './components/DataTable';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidLatLng = (lat: number, lng: number) => {
    return (
      !isNaN(lat) &&
      !isNaN(lng) &&
      lat >= -90 &&
      lat <= 90 &&
      lng >= -180 &&
      lng <= 180
    );
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    const url = `https://archive-api.open-meteo.com/v1/archive`;

    const params = {
      latitude,
      longitude,
      start_date: startDate,
      end_date: endDate,
      daily: [
        'temperature_2m_max',
        'temperature_2m_min',
        'temperature_2m_mean',
        'apparent_temperature_max',
        'apparent_temperature_min',
        'apparent_temperature_mean',
      ].join(','),
      timezone: 'auto',
    };

    try {
      const response = await axios.get(url, { params });
      const data = response.data;

      if (data && data.daily) {
        setWeatherData(data.daily);
      } else {
        setError('No data found for the given inputs.');
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err?.response?.data?.error || 'Failed to fetch data. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (latitude === '' || longitude === '') {
      setError('Please enter both latitude and longitude.');
      return;
    }

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (!isValidLatLng(lat, lng)) {
      setError('Invalid latitude or longitude.');
      return;
    }

    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Historical Weather Dashboard
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded shadow-md max-w-2xl mx-auto"
      >
        <LocationInput
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Fetch Weather Data
        </button>
      </form>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <div className="mt-8">
          <Graph data={weatherData} />
          <DataTable data={weatherData} />
        </div>
      )}
    </div>
  );
};

export default App;
