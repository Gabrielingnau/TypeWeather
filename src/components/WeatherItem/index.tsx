import './styles.css';

interface Props {
  title: string;
  icon: string;
  value: string;
}

export function WeatherItem({ icon, title, value }: Props) {
  return (
    <div className='weather-item'>
      <img src={icon} alt={title} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}