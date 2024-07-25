import React from "react";

function Button({ classname , disabled, title, type='button', onClick}) {
    let className = `${classname} rounded-full py-2 px-5 ${disabled && 'hover:bg-grey-500'}`;
    return (
      <button
        className={className}
        disabled={disabled}
        style={{cursor: disabled ? 'not-allowed' : 'pointer'}}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    );
}

export default Button;
