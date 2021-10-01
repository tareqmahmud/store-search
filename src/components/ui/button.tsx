import React from 'react';

type Props = {
  label: string;
  className?: string;
};

const Button: React.FC<Props> = (props) => {
  const { label, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-0 ${className}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
