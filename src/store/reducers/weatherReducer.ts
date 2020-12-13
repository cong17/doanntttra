import { IExtendedForecastData, IWeatherData } from '../../api/types';
import { WeatherActionTypes } from '../actionTypes';

export interface IWeatherState {
  weatherData: IWeatherData;
  extendedWeatherData: IExtendedForecastData[];
  covidData: any;
  NewsBaomoiData: any,
  isError: boolean;
}

const initialState: IWeatherState = {
  weatherData: {
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: '',
      description: '',
      icon: '',
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  },
  extendedWeatherData: [],
  covidData: {
    "VN": {
      "TitleVN": "Việt Nam",
      "SoCaNhiemVN": "Số ca nhiễm 0",
      "DangDieuTriVN": "Đang điều trị 0",
      "KhoiVN": "Khỏi 0",
      "TuVongVN": "Tử vong 0"
    },
    "World": {
      "TitleWorld": "Thế giới",
      "SoCaNhiemWorld": "Tổng ca nhiễm 0",
      "DangDieuTriWorld": "Đang nhiễm 0",
      "KhoiWorld": "Khỏi 0",
      "TuVongWorld": "Tử vong 0"
    },
    "TimeUpdate": "Không thể lấy dữ liệu"
  },
  NewsBaomoiData: {
    chisokhongkhi: [{
      diadiem: "mac dinh",
      chiso: 0
    }],
    cacbaibao: [{
      linkbaiviet: "",
      imgbaiviet: "",
      contentbaiviet: "",
      timebaiviet: ""
    }]
  },
  isError: false,
};

export const weatherReducer = (state: IWeatherState = initialState, action: { type: WeatherActionTypes; payload: any }) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_START:
      return state;
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload.weather,
        extendedWeatherData: action.payload.forecast,
        covidData: action.payload.covidData,
        NewsBaomoiData: action.payload.cacbaibao
      };
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
