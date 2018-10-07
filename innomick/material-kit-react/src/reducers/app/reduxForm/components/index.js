import { Button, Card, CardText, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import InputMask from "react-input-mask";
import moment from "moment";
import "react-select/dist/react-select.css";
import React from "react";
import Select from "react-select";
export const renderField = ({ maxlength, plaeholder, input, label, type, classes, onChangeEvent, fieldValue, value, meta: { touched, error, warning } }) => (
  <FormGroup>
    <label>{label}</label>
    <input className={touched && error ? classes.errorClass : classes.formControl}
      {...input} placeholder={plaeholder} type={type}
      maxLength={maxlength ? maxlength : "30"}
    // value={fieldValue}
    // onChange={onChangeEvent}
    />
    {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>
);

export const renderFieldWithoutValue = ({ plaeholder, input, label, type, classes, onChangeEvent, fieldValue, value, meta: { touched, error, warning } }) => (
  <FormGroup>
    <label>{label}</label>
    <input className={touched && error ? classes.errorClass : classes.formControl}
      {...input} placeholder={plaeholder} type={type}
      value={fieldValue}
      maxLength="30"
      onChange={onChangeEvent}
    />
    {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>
);

export const renderUploadField = ({ plaeholder, input, label, type, classes, fieldValue, value, meta: { touched, error, warning } }) => (
  <FormGroup>
    <label>{label}</label>
    <input {...input} placeholder={plaeholder} type={type} value={value} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>
);

export const renderSelectField = ({ input, label, classes, selectedValue, type, emptyValue, templateList, meta: { touched, error, warning } }) => (
  <div>
    {/* {templateList = templateList ? templateList : []}*/}
    <label>{label}</label>
    <div>
      <select {...input}
        // value={selectedValue}
        className={classes.dropdownDesign}>
        <option value="">{emptyValue}</option>
        {
          templateList.map((type, index) => {
            return (<option key={index} value={type.id}>{type.value}</option>);
          })
        }
      </select>
      {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderAsyncSelectField = ({ input, label, classes, loadOptions, selectedValue, onChangeSelect, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <Select.Async onChange={onChangeSelect} valueKey="id" labelKey="login" loadOptions={loadOptions} value={selectedValue} />
      {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const RadioButton = ({ input, checked, id, children, meta: { touched, error, warning } }) =>
  <div>
    <input
      {...input}
      id={id}
      type="radio" checked={checked} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    <label htmlFor={id}>{children}</label>
  </div>;


export const maskInputField = ({ input, maskFormat, label, classes, placeholder, fieldValue, meta: { touched, error, warning } }) =>
  <FormGroup>
    <label>{label}</label>
    <InputMask {...input} mask={maskFormat} placeholder={placeholder} maskChar="_" />
    {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>;


export const renderDynamicRadio = ({ name, input, label, classes, type, emptyValue, templateList, meta: { touched, error, warning } }) => (
  <div>
    <label>label</label>
    <div>
      {

        templateList.map((type, index) => {
          return (
            <div>
              <Field
                name={name}
                component="input"
                type="radio"
                id={"radio-" + index}
                className="radio-custom"
                value="1"
                checked={this.state.gender === "1" ? true : false}
                onClick={() => this.setState({ gender: "1" })}
              />
              <label htmlFor={"radio-" + index} className="radio-custom-label">Male</label>
            </div>
          );
        })
      }
    </div>
  </div>
);

export const renderFieldTmp = ({ name, input, plaeholder, label, classes, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input}
        className={touched && error ? classes.errorClass : classes.formControl}
        placeholder={plaeholder}
      />
      {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);


export const renderTextArea = ({ name, input, plaeholder, label, classes, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      {/* <input
        className={touched && error ? classes.errorClass : classes.formControl}
        placeholder={plaeholder}
      />*/}
      <Input {...input} type="textarea" />
      {touched && ((error && <span className={classes.redColor}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
