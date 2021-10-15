import React from 'react';

interface Props {
  default: String;
}

const header = (props: Props) => {
  return <div>{props.default}</div>;
};

export default header;
