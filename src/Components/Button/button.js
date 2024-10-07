import React from "react";

function Button({
  name,
  type,
  color,
  bgColor,
  textColor,
  onClick,
  width,
  disabled,
  children,
  className,
}) {
  return (
    <button
      type={type}
      className={`btn btn-fw ${className ? className : ""}`} // Removing the class-based color option
      onClick={onClick ? onClick : undefined}
      style={{
        width: width ? width : undefined,
        backgroundColor: bgColor ? bgColor : undefined, // Dynamic background color
        color: textColor ? textColor : undefined, // Dynamic text color
      }}
      disabled={disabled}
    >
      {children && children} {name}
    </button>
  );
}

export default Button;
