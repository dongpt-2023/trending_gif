// Use Yup
import * as Yup from 'yup';

export const searchInputValidation = Yup.object({
  keySearch: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})
