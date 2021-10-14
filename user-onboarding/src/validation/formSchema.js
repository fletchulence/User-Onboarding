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
    .min(7, 'email must be at least 7 characters'),
  password: yup
    .string()
    .trim()
    .required('you need to make a password')
    // .matches(['here'], 'this wont work')
    ,
  serviceTerms: yup
    .boolean()
    .oneOf([true], 'you have to agree to the terms of service')
})

export default formSchema;

