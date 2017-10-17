import * as React from 'react';
// import * as classnames from 'classnames';

export interface Props {
  input: {};
  type: string;
  placeholder: string;
  meta: {touched: string, error: string, warning: string};
}

export const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }: Props) => (
  <div className="form-group">
    <label className="control-label">{placeholder}</label>
    <div>
      <input {...input}  type={type} className="form-control"/>
      {touched && ((error && <span className="help-block">{error}</span>))}
    </div>
  </div>
);