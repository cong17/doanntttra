import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import { changeDegreeType } from '../../store/actions/app';
import { AppStore } from '../../store/appStore';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { statusWeatherToString } from '../../utils/convertWeatherToString'
import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  SectionLoiKhuyen,
  WeatherContainer,
  WeatherDegree,
} from './styled';
import Temperature from './Temperature';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';

const Weather: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector((store: AppStore) => ({
    weather: store.weather.weatherData,
    degreeType: store.app.tempUnit,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('Không thể tải nhiệt độ khu vực hiện tại');
    }
  }, [isError]);

  if (isInitial) return <></>;
  let Advice: Array<string> = [];
  Advice.push(`\n Dự báo ${statusWeatherToString(weather.weather.id)}`)


  return (


    <WeatherContainer>


      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Thời tiết hiện nay</SectionTitle>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeDegreeType())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeather>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
        </CurrentWeather>

        <CurrentWeatherInfo>
          <FeelsLike>
            Cảm giác như <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Độ ẩm
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Sức gió
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS ? weather.wind.speed : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Áp suất
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>

        </CurrentWeatherInfo>
      </CurrentWeatherContainer>

      <div style={{ textAlign: 'center' }}>

        {Advice.map((item, i) => {

          return (
            <SectionLoiKhuyen key={i}>{item}</SectionLoiKhuyen>
          );
        })}
      </div>
    </WeatherContainer >
  );
};

export default Weather;
