import Head from "next/head";
import { useForm } from 'react-hook-form';

const RegisterForm = () => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
    }
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        First Name:
                        <input
                            type='text'
                            {...register('firstName', {
                                required: `Can't be blank`,
                                maxLength: {
                                    value: 60,
                                    message: `Is too long (maximum is 60 characters)`
                                }
                            })}
                        />
                    </label>
                    <div style={{ height: 40, color: 'red' }}>
                        {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                    </div>
                    <label>
                        Last Name:
                        <input
                            type='text'
                            {...register('lastName', {
                                required: `Can't be blank`,
                                maxLength: {
                                    value: 60,
                                    message: `Is too long (maximum is 60 characters)`
                                }
                            })}
                        />
                    </label>
                    <div style={{ height: 40, color: 'red' }}>
                        {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                    </div>
                    <br />
                    <input type='submit' value='Ղրգա' />
                </form>
            </div>
        </>
    )
}

export default RegisterForm;