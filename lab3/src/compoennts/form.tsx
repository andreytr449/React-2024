import {Container} from "./container.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {formSchema, formType} from "../constans/schema/form-schema.ts";
import {yupResolver} from "@hookform/resolvers/yup";

export function Form() {
    const form = useForm<formType>({
        defaultValues: {
            fullName: '',
            contact: '',
            description: '',
            formatType: '',
            topic: ''
        },
        resolver: yupResolver(formSchema)
    })
    const onSubmit = (data : formType) => {
        console.log(data)
    }

    return (
        <Container>
            <FormProvider  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className=''>
                        123
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}