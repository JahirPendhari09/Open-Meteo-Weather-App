export type WeatherData = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  temperature_2m_mean: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  apparent_temperature_mean: number[];
};

export type DataTableProps = {
  data: WeatherData;
};

export type DateRangePickerProps = {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
};

export type ErrorMessageProps = {
  message: string;
};

export type GraphDataType = {
  data: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    temperature_2m_mean: number[];
  };
};

export type LocationInputType = {
  latitude: number;
  setLatitude: (value: number) => void;
  longitude: number;
  setLongitude: (value: number) => void;
};