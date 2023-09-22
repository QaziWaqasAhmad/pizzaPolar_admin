import { TextField } from "@mui/material";
import React from "react";

const TextFeilds = ({ label, type, placeholder, id, className, size }) => {
  return (
    <>
      <div className="mb-3">
        <TextField
          id={id}
          type={type}
          label={label}
          placeholder={placeholder}
          className={className}
          fullWidth
          size={size}
        />
      </div>
    </>
  );
};

export default TextFeilds;
