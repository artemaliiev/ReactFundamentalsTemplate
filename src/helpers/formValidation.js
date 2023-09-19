export const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;
      
    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors))
  
    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }
  
    const { email, password, confirmPassword } = form;
  
    if (nextErrors.email.dirty && (field ? field === "email" : true)) {
      const emailMessage = emailValidator(email, form);
      nextErrors.email.error = !!emailMessage;
      nextErrors.email.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }
  
    if (nextErrors.password.dirty && (field ? field === "password" : true)) {
      const passwordMessage = passwordValidator(password, form);
      nextErrors.password.error = !!passwordMessage;
      nextErrors.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }
  
    if (
      nextErrors.confirmPassword.dirty &&
      (field ? field === "confirmPassword" : true)
    ) {
      const confirmPasswordMessage = confirmPasswordValidator(
        confirmPassword,
        form
      );
      nextErrors.confirmPassword.error = !!confirmPasswordMessage;
      nextErrors.confirmPassword.message = confirmPasswordMessage;
      if (!!confirmPasswordMessage) isValid = false;
    }
  
    setErrors(nextErrors);
  
    return {
      isValid,
      errors: nextErrors,
    };
  };