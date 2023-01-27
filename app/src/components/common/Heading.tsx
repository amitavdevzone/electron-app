import React, { ReactNode } from 'react';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}
const Heading: React.FC<Props> = ({ type, text, ...args }) => {
  return (
    <>
      {type == 'h1' && (
        <h1 className="text-4xl font-bold pt-4" {...args}>
          {text}
        </h1>
      )}
    </>
  );
};

export default Heading;
