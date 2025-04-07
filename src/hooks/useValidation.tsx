import { useState } from 'react';

type ValidationErrors = {
  Fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  newPassword?: string;
};

const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (values: { [key: string]: string }) => {
    let valid = true;
    const newErrors: ValidationErrors = {};

    if (!values.Fname?.trim()) {
      newErrors.Fname = 'First Name is required.';
      valid = false;
    }
    if (!values.lname?.trim()) {
      newErrors.lname = 'Last Name is required.';
      valid = false;
    }
    if (values.newPassword) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,}$/;
      if (!passwordRegex.test(values.newPassword)) {
        newErrors.newPassword = 'Password must be at least 6 characters and include a capital letter, a lowercase letter, a number, and a special character.';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  return { errors, validate };
};

export default useValidation;
