import * as yup from "yup";

export const Validation = yup.object().shape({
nom: yup.string()
    .required("nom obligatoire"),
prenom: yup.string()
    .required("prenom obligatoire"),
email: yup.string()
    .required("email obligatoire"),
telephone: yup.number()


});