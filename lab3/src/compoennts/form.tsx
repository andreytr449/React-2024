import {Container} from "./container.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {formSchema, formType} from "../constans/schema/form-schema.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputBlock} from "./input-block.tsx";

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
                    <div className='flex flex-col gap-5'>
                        <InputBlock inputName='fullName'  {...form.register('fullName')}  label='Прізвище, ім’я'  />
                        <InputBlock inputName='contact'  {...form.register('contact')}  label='Мій контакт, по якому зручно спілкуватись' required/>
                        <InputBlock inputName='formatType'  {...form.register('formatType')}  label='Мій формат (доповідь, дискусія, панель, клуб тощо)' required/>
                        <InputBlock inputName='topic'  {...form.register('topic')}  label='Тема доповіді' required/>
                        <InputBlock inputName='description'  {...form.register('description')}  label='Короткий опис, ідея' />
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}