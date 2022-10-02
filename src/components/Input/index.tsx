import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {

} from "./styled";

export const renderSufixedType = (
  type: string,
  sufixed: string,
  showPassword: boolean,
  handleClickShowPassword: Function
) => {

  return (
    type === 'password' ? (
    <InputAdornment position="end">
      {/* @ts-ignore */}
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
    ) : (
      <InputAdornment position="end">{sufixed}</InputAdornment>
    )
  )
}

export type InputProps = {
  label: string;
  type: string;
  name?: string,
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  size?: string | any;
  prefixed?: string;
  sufixed?: string;
  multiline?: boolean;
  maskFormat?: string | any
};

export const InputText = ({
  label,
  type = 'text',
  name = '',
  required = false,
  disabled = false,
  error = false,
  helperText = '',
  placeholder = '',
  size = 'normal',
  prefixed = '',
  sufixed = '',
  multiline = false,
  maskFormat = '',
}:InputProps ) => {
  const [value, setValue] = useState('');
  const [typeInput, setTypeInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setTypeInput(!showPassword ? "password" : "text");
  }, [showPassword]);

  useEffect(() => {
    setTypeInput(type);
  },[type]);

  return (
    maskFormat ? (
      <InputMask
        mask={maskFormat}
        maskChar=""
        disabled={disabled}
        value={value}
        onChange={handleChange}
      >
        {/* @ts-ignore */}
        {() =>
          <TextField
            label={label}
            name={name}
            type={typeInput}
            required={required}
            error={error}
            helperText={helperText}
            size={size}
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: prefixed && <InputAdornment position="start">{prefixed}</InputAdornment>,
              endAdornment: renderSufixedType(type, sufixed, showPassword, handleClickShowPassword),
            }}
          />
        }
      </InputMask>
    ) : (
      <TextField
        label={label}
        name={name}
        type={typeInput}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        size={size}
        fullWidth
        variant={multiline ? "outlined" : "standard"}
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment: prefixed && <InputAdornment position="start">{prefixed}</InputAdornment>,
          endAdornment: renderSufixedType(type, sufixed, showPassword, handleClickShowPassword),
        }}
        multiline={multiline}
        rows={4}
      />
    )
  )
}