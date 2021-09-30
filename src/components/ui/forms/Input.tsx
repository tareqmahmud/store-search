import React from 'react';

type Props = {
  type?: string;
  id?: string;
  placeholder?: string;
};

const Input: React.FC<Props> = (props) => {
  const { type, ...rest } = props;
  return (
    <input
      type={props.type || 'text'}
      {...rest}
      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-opacity-0"
    />
  );
};

export default Input;
