import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
      }

    setIsSubmitting(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form Data:', formData);
      setSubmissionSuccess(true);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({});

    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
        setIsSubmitting(false);
      }

  };
   const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
          });
        setFormErrors({});
        setSubmissionSuccess(false);
      };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contact Us</h2>
          <p className="mt-2 text-center text-gray-600">
                We'd love to hear from you! Please fill out the form below.
              </p>
        {submissionSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your message has been submitted.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={resetForm}>
                  <svg className="fill-current h-6 w-6 text-green-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
                            ${formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                            `}
               aria-invalid={!!formErrors.name}
               aria-describedby="name-error"
            />
             {formErrors.name && <p className="mt-1 text-sm text-red-500" id="name-error">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
                            ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                            `}
              aria-invalid={!!formErrors.email}
              aria-describedby="email-error"
            />
             {formErrors.email && <p className="mt-1 text-sm text-red-500" id="email-error">{formErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
                            ${formErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                            `}
               aria-invalid={!!formErrors.message}
               aria-describedby="message-error"
            ></textarea>
            {formErrors.message && <p className="mt-1 text-sm text-red-500" id="message-error">{formErrors.message}</p>}
          </div>
          <div>
            <button
             type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;