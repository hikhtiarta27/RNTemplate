import React, {createRef, useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import ButtonOpacity from '../button-opacity/ButtonOpacity';
import _style from './Styles';
import _s from '../../styles';
import ErrorText from '../text/ErrorText';
import {stringToCurrency, stringToPhoneNumber} from '../../utilities';
import PropTypes from 'prop-types';
import {Text} from '..';

let currencyPattern = Yup.string()
  .matches(/^[0-9]+$/, 'Only number')
  .transform(value => value.replace(/[^\d]/g, ''));
let stringPattern = Yup.string();
let alphabetPattern = Yup.string().matches(/^[a-zA-Z ]+$/, 'Only Alphabet');
let numberPattern = Yup.string().matches(/^[0-9]+$/, 'Only number');
let emailPattern = Yup.string().matches(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'Email not valid',
);
let phoneNumberPattern = Yup.string()
  .matches(/^[0-9]+$/, 'Only number')
  .matches(/^(62|0)\d{9,12}$/, 'Phone number not valid')
  .transform(value => value.replace(/[^\d]/g, ''));

function Form(props) {
  const {listFields, onSubmit, trigger, reset} = props;
  const [focusField, setFocusField] = useState(null);
  const focusFieldRef = useRef([]);

  // list fields = {key, name, initialValue, type, required}

  useEffect(() => {
    focusFieldRef.current.slice(0, listFields.length);
  }, []);

  let initialTouched = {};
  let initialValues = listFields.reduce((obj, item) => {
    if (item.initialValue != undefined || item.initialValue != null) {
      obj[item.key] = item.initialValue.toString();
      initialTouched[item.key] = true;
    }
    return obj;
  }, {});

  let validationSchemaTemp = listFields.reduce((obj, item) => {
    let tmp =
      item.type == 'currency'
        ? currencyPattern
        : item.type == 'string'
        ? stringPattern
        : item.type == 'number'
        ? numberPattern
        : item.type == 'email'
        ? emailPattern
        : item.type == 'alphabet'
        ? alphabetPattern
        : item.type == 'phone'
        ? phoneNumberPattern
        : null;
    tmp = item.required ? tmp.required('Required') : tmp;
    obj[item.key] = tmp;
    return obj;
  }, {});

  let validationSchema = Yup.object().shape(validationSchemaTemp);

  const formik = useFormik({
    initialValues,
    initialTouched,
    validationSchema,
    onSubmit,
  });

  const keyboardType = listFields.reduce((x, item) => {
    let tmp =
      item.type == 'currency'
        ? 'numeric'
        : item.type == 'string' || item.type == 'alphabet'
        ? 'default'
        : item.type == 'number'
        ? 'numeric'
        : item.type == 'email'
        ? 'email-address'
        : item.type == 'phone'
        ? 'phone-pad'
        : 'default';
    x[item.key] = tmp;
    return x;
  }, {});

  const onSubmitEditingHandler = index => {
    if (index != listFields.length - 1) {
      setFocusField(listFields[index + 1].key);
      focusFieldRef.current[index + 1].focus();
    } else {
      formik.handleSubmit();
    }
  };

  useEffect(() => {
    formik.handleSubmit();
  }, [trigger]);

  useEffect(() => {    
    formik.resetForm();
  }, [reset]);  

  return (
    <>
      {listFields.map((item, index, arr) => (
        <View key={index} style={_s.fieldContainer}>
          <Text value={item.name} style={_s.fieldHeaderText} />
          <TextInput
            style={[_s.field, focusField == item.key ? _s.fieldFocus : null]}
            placeholder={item.name}
            editable={item.editable != undefined ? item.editable : true}
            onChangeText={text => {
              if (item.type == 'currency') text = stringToCurrency(text);
              else if(item.type == 'phone') text = stringToPhoneNumber(text);
              formik.setFieldValue(item.key, text);
            }}
            onBlur={formik.handleBlur(item.key)}
            value={formik.values[item.key]}
            keyboardType={keyboardType[item.key]}
            clearButtonMode="while-editing"
            onFocus={() => setFocusField(item.key)}
            autoCapitalize="none"
            returnKeyType={index != listFields.length - 1 ? 'next' : 'done'}
            onSubmitEditing={() => onSubmitEditingHandler(index)}
            blurOnSubmit={true}
            ref={el => (focusFieldRef.current[index] = el)}
            secureTextEntry={
              item.secureText != undefined ? item.secureText : false
            }
          />
          {formik.errors[item.key] && formik.touched[item.key] ? (
            <ErrorText text={formik.errors[item.key]} />
          ) : null}
        </View>
      ))}

      {trigger == null && (
        <ButtonOpacity
          type={
            formik.isValid &&
            Object.keys(formik.touched).length == listFields.length
              ? 'Primary'
              : 'Disable'
          }
          disabled={!formik.isValid}
          text="submit"
          onPress={formik.handleSubmit}
          style={_s.mt10}
        />
      )}
    </>
  );
}

Form.propTypes = {
  /**
   * List field
   * Param : [{}]
   * - key String
   * - name String
   * - initialValue String
   * - type Enum (currency | string | number | email | alphabet | Phone)
   * - secureText Boolean
   * - Required Boolean
   */
  listFields: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  trigger: PropTypes.number,
  reset: PropTypes.number
};

Form.defaultProps = {
  trigger: null,
  reset: null,
};

export default Form;
