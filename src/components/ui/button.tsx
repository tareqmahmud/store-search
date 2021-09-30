import React from 'react';

type Props = {
  label: string;
};

const Button: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <button
      {...rest}
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-0"
    >
      {props.label}
    </button>
  );
};

export default Button;
