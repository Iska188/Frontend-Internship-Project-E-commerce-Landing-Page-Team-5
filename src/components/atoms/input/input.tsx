// @ts-ignore
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input 
      className={`a-input ${className || ''}`} 
      {...props} 
    />
  );
};