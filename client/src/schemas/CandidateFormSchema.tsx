import * as YupObj from "yup";

export const CandidateFormSchema = YupObj.object().shape ({
    nameUser: YupObj.string()
        .matches(/^'?(?:\p{L}\p{M}*)+(?:['\s](?:\p{L}\p{M}*)+)*'?$/u, "This entry can only contain letters."),
    email: YupObj.string()
        .email(),
    age: YupObj.number().positive(),
    tel: YupObj.string()
        .min(9, 'Enter correct phone number.')
        .max(9, 'Enter correct phone number.')
});
