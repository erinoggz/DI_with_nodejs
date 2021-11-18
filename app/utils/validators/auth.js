"use strict";

module.exports.validateRegisterInput = (
  firstname, lastname,
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {}
  if (username.trim() === '') {
    errors.username = 'Username must not be empty'
  }
  if (firstname.trim() === '') {
    errors.firstname = 'Firstname must not be empty'
  }
  if (lastname.trim() === '') {
    errors.lastname = 'Lastname must not be empty'
  }
  if (email.trim() === '') {
    errors.email = 'Email cannot be empty'
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (!email.match(regEx)) {
      errors.email = 'Must be a valid email address'
    }
  }
  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  if (!password.match(passRegEx)) {
    errors.password = 'Password must have six or more characters with one letter and one number'
  }
  if (password === '') {
    errors.password = 'Password cannot be empty'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match'
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}

module.exports.validateLoginInput = (email, password) => {
  const errors = {}
  if (email.trim() === '') {
    errors.email = 'Email must not be empty'
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty'
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}
