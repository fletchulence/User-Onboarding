import * as yup from 'yup';

const formSchema = yup.object().shape({
  firstName: yup 
    .string()
    .trim()
    .required('first name is required')
    .min(2, 'first name must be greater than 2 character'),
  lastName: yup
    .string()
    .trim()
    .required("last name is required"),
  email: yup
    .string()
    .trim()
    .email('valid emails are example@example.ex')
    // .oneOf(['waffle@syrup.com'], 'That email is already taken')
    .required('email is required'),
  password: yup
    .string()
    .trim()
    // .matches(['%'], 'password must contain a %')
    .required('a password is required')
    ,
  serviceTerms: yup
    .boolean()
    .oneOf([true], 'you have to agree to the terms of service')
})

export default formSchema;

