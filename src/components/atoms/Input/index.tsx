import React, { forwardRef } from 'react';

import Icon from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

/**
 * USEFUL PROPS IN SCOPE
 * Attribute: name, id, disabled, placeholder, value, maxLength, autoComplete,
 * Events handler: onChange, onBlur, onFocus
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  modifiers?: 'primary' | 'secondary' | 'dark';
  id: string;
  label?: string;
  error?: string;
  colorError?: 'white';
  isSearch?: boolean;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    modifiers,
    label,
    id,
    error,
    colorError,
    disabled,
    placeholder,
    value,
    maxLength,
    autoComplete,
    name,
    isSearch,
    onBlur,
    onFocus,
    onKeyPress,
    onChange,
    required,
  },
  ref,
) => (
  <div
    className={mapModifiers(
      'a-input',
      type,
      modifiers,
      error && 'error',
      disabled && 'disabled',
      isSearch && 'search',
    )}
  >
    {label && (
      <div className="a-input_label">
        <label htmlFor={id}>{label}</label>
        {required && <span className="a-input_label-required">*</span>}
      </div>
    )}
    <div className="a-input_wrap">
      <input
        className="a-input_input"
        type={type}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        name={name}
        onKeyPress={onKeyPress}
      />
      {isSearch && (
        <button className="a-input_searchBtn" type="submit">
          <Icon iconName="search" size="16" />
        </button>
      )}
    </div>
    {error && <span className={mapModifiers('a-input_message-error', colorError)}>{error}</span>}
  </div>
);
const Input = forwardRef(InputRef);

Input.defaultProps = {
  type: 'text',
  error: undefined,
  modifiers: 'primary',
};

export default Input;
