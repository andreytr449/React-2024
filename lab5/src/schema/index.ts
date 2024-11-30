import * as yup from "yup"

export type Inputs = {
    name: string
}

export const schema = yup.object().shape({
    name: yup.string().min(1, 'Enter correct value').max(50, 'Too long name').required(),
})