function Validation(values) {
  let error = {};
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }
  if (values.user_name === "") {
    error.user_name = "Name should not be empty";
  } else {
    error.name = "";
  }
  if (values.phone_number === "") {
    error.phone_number = "contact should not be empty";
  } else {
    error.contact = "";
  }
  if (values.address === "") {
    error.address = "address should not be empty";
  } else {
    error.address = "";
  }
  return error;
}

export default Validation;
