import React from 'react';

type Props = {
  label: string;
  htmlFor: string;
};

const Label: React.FC<Props> = (props) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className="block mb-2 text-sm font-bold text-gray-700"
    >
      {props.label}
    </label>
  );
};

export default Label;
