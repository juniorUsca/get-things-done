const validationRegister = (values) => {
  const errorsRegister = {}

  if (!values.nameRegister) {
    errorsRegister.nameRegister = 'El nombre es requerido'
  }
  if (!values.emailRegister) {
    errorsRegister.emailRegister = 'El correo electrónico es requerido'
  } else if (!/\S+@\S+\.\S+/.test(values.emailRegister)) {
    errorsRegister.emailRegister = 'Debe ingresar un correo valido'
  }
  if (!values.passwordRegister) {
    errorsRegister.passwordRegister = 'La contraseña es requerida'
  } else if (values.passwordRegister.length < 5) {
    errorsRegister.passwordRegister = 'La contraseña debe tener más de 5 caracteres'
  }

  return errorsRegister
}

export default validationRegister
