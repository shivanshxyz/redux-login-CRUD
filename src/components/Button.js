/* eslint-disable no-template-curly-in-string */
import React from 'react';
import classnames from 'classnames';

const Button = ({ size, bgColor, textColor, click, children }) => {
  return (
    <button
      onClick={click}
      className={classnames(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded mr-2`,
        {
          'text-xs': size === 'sm',
          'text-xl': size === 'lg'
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
