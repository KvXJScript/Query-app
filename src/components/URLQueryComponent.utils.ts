import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  url: Yup.string().required('URL is required').url('Please enter a valid URL')
});