import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  // Initialize useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // On form submit
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format'
              }
            })}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters long' }
            })}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
