// src/components/slides/FrontendValidationSlide.jsx
import React from 'react';

const FrontendValidationSlide = () => (
    <div>
        <h2>Frontend Validation</h2>
        <p>Frontend validation ensures that user input is correct before sending it to the server. This prevents unnecessary API calls and improves the user experience by catching errors early.</p>
        
        <h3>Technologies Used:</h3>
        <ul>
            <li><strong>Yup:</strong> Schema-based validation for form fields.</li>
            <li><strong>Formik:</strong> Form library for managing form state and validation.</li>
        </ul>

        <h3>Example: User Registration Form</h3>
        <p>When a user fills out the registration form, the following validations are enforced before the form can be submitted:</p>
        <ul>
            <li><strong>Username:</strong> Required, must be at least 3 characters.</li>
            <li><strong>Email:</strong> Required, must be a valid email format.</li>
            <li><strong>Password:</strong> Required, must be at least 6 characters.</li>
            <li><strong>Profile Picture:</strong> Optional, must be a valid URL.</li>
        </ul>

        <h3>Code Example (Yup + Formik):</h3>
        <pre>
            {`
            const validationSchema = Yup.object({
                username: Yup.string().min(3, 'Username must be at least 3 characters').required('Required'),
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
            });
            `}
        </pre>
    </div>
);

export default FrontendValidationSlide;
