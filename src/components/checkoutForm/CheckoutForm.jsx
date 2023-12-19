import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import './CheckoutForm.css';
import SuccessModal from '../successModal/SuccessModal';

function CheckoutForm({ onSubmit }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const formElementsConfiguration = {
    fullName: { labelText: 'Full Name', inputType: 'text' },
    city: {
      labelText: 'City',
      inputType: 'select',
      options: ['', 'Dnipro', 'Kharkiv', 'Kyiv', 'Lviv', 'Odessa'],
    },
    warehouse: {
      labelText: 'Delivery Warehouse',
      inputType: 'select',
      options: ['', 'Warehouse №1', 'Warehouse №2', 'Warehouse №3', 'Warehouse №4', 'Warehouse №5'],
    },
    payment: {
      labelText: 'Payment Method',
      inputType: 'select',
      options: ['', 'Cash on Delivery', 'Card Payment'],
    },
  };

  const initialValues = {
    fullName: '',
    city: '',
    warehouse: '',
    payment: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[\p{L}\s-]+$/u, 'Invalid characters in Full Name')
      .required('Full Name is required'),
    city: Yup.string().required('City is required'),
    warehouse: Yup.string().required('Delivery Warehouse is required'),
    payment: Yup.string().required('Payment Method is required'),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push(values);
      localStorage.setItem('orders', JSON.stringify(orders));

      setShowSuccessModal(true);

      if (onSubmit) {
        await onSubmit(values);
      }

      if (resetForm) {
        resetForm();
      }
    } catch (error) {
      // Handle errors
    } finally {
      setSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setShowForm(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={`checkout-form ${showForm ? '' : 'hidden'}`}>
        <h2>Checkout Form</h2>
        {Object.keys(formElementsConfiguration).map((key) => {
          const { labelText, inputType, options } = formElementsConfiguration[key];
          const isSelect = inputType === 'select';

          return (
            <div key={key} className={`form-element ${key}`}>
              <label htmlFor={key}>{labelText}</label>
              {isSelect ? (
                <Field as="select" name={key} id={key} className="form-field">
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              ) : (
                <Field type={inputType} name={key} id={key} className="form-field" />
              )}
              <ErrorMessage name={key} component="div" className="error-message" />
            </div>
          );
        })}
        <button type="submit" className="submit-button">
          Submit Order
        </button>
        {showSuccessModal && <SuccessModal onClose={handleSuccessModalClose} />}
      </Form>
    </Formik>
  );
}

CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutForm;
