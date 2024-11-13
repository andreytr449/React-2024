import {FormProvider, useForm} from "react-hook-form";
import {formSchema, formType} from "../../constans/schema/form-schema.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputBlock} from "./input-block.tsx";
import {Button} from "../ui";
import {Block, Container} from "./index.ts";


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
    const onSubmit = (data: formType) => {
        console.log(data)
    }

    return (
        <Container>
            <FormProvider  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-5'>
                        <Block>
                            <div>
                                <h1 className='text-3xl mb-4 font-semibold'>Call for papers BeerJS Zhytomyr</h1>
                                <div className='text-sm'>
                                    <p>Якщо маєш бажання розповісти про щось, але є сумніви. Ми допоможемо.</p>
                                    <p>Якщо хочеш ревью чи прогон, все буде.</p>
                                    <p>Якщо хочеш почати, це реально. Адже бір - це експериментальна площадка</p>
                                </div>
                            </div>
                        </Block>

                        <Block>
                            <div>Call for papers BeerJS Zhytomyr</div>
                            <div className='flex justify-center'>
                                <img width={500} src='/BeerJSLogo.jpg' alt='BeerJSLogo'/>
                            </div>
                        </Block>

                        <InputBlock inputName='fullName'  {...form.register('fullName')} label='Прізвище, ім’я'/>
                        <InputBlock inputName='contact'  {...form.register('contact')}
                                    label='Мій контакт, по якому зручно спілкуватись' required/>
                        <InputBlock inputName='formatType'  {...form.register('formatType')}
                                    label='Мій формат (доповідь, дискусія, панель, клуб тощо)' required/>
                        <InputBlock inputName='topic'  {...form.register('topic')} label='Тема доповіді' required/>
                        <InputBlock inputName='description'  {...form.register('description')}
                                    label='Короткий опис, ідея'/>

                    </div>

                    <div className='flex justify-between mt-4 '>
                        <Button type='submit'>Відправити</Button>
                        <span onClick={() => form.reset()}
                              className='text-[#5b3aa1] cursor-pointer text-sm'>Очистити Форму</span>
                    </div>

                </form>
            </FormProvider>
        </Container>
    )
}