import React from 'react';
import { useFormik } from 'formik';
import { sendFeedback } from '../services/api';

const FeedbackAndQueries = () => {
  const formik = useFormik({
    initialValues: { feedback: '', email: '' },
    onSubmit: async (values) => {
      try {
        await sendFeedback(values);
        alert('Feedback sent successfully!');
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="container">
      <h2>Feedback and Queries</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            onChange={formik.handleChange}
            value={formik.values.feedback}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackAndQueries;
