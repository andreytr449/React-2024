import {object, string, InferType} from "yup";

export const formSchema = object({
    fullName: string(),
    contact: string().required("Це поле обов'язкове"),
    formatType: string().required("Це поле обов'язкове"),
    topic: string().min(2, 'Введить коректну тему').required("Це поле обов'язкове"),
    description: string()
})

export type formType = InferType<typeof formSchema>