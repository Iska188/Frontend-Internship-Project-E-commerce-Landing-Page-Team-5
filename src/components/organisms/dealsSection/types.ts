export interface CountdownTime {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

export interface DealProps {
  id: string;
  imageSrc: string;
  title: string;
  vendor: string;
  currentPrice: string;
  originalPrice: string;
  countdown: CountdownTime;
}