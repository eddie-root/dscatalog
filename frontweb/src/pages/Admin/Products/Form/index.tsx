import './styles.css';
import { AxiosRequestConfig } from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Product } from 'types/product';
import { requestBackend } from 'util/requests';


const Form = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<Product>();

    const onSubmit = (formData: Product) => {
        const data = { ...formData, categories: [{ id: 1, name: "" }] }

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/products",
            data: data,
            withCredentials: true
        };

        requestBackend(config)
            .then(response => {
                console.log(response.data);
            })

    };

    const handleCancel = () => {
        history.push('/admin/products');
    }

    return (
        <div className='product-crud-container'>
            <div className='base-card product-crud-form'>
                <h1 className='product-crud-form-title'>DADOS DO PRODUTO</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row product-crud-inputs-left-container'>
                        <div className='col-lg-6'>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("name", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Nome do produto"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>
                                <input
                                    {...register("price", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.price ? 'is-invalid' : ''}`}
                                    placeholder="Preço"
                                    name="price"
                                />
                                <div className='invalid-feedback d-block'>{errors.price?.message}</div>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <textarea
                                    rows={10}
                                    {...register("description", {
                                        required: 'Campo obrigatório',
                                    })}
                                    className={`form-control base-input h-auto ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Descrição"
                                    name="description"
                                />
                                <div className='invalid-feedback d-block'>{errors.description?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className='procut-crud-buttons-container'>
                        <button
                            className='btn btn-outline-danger procut-crud-button'
                            onClick={handleCancel}
                        >CANCELAR</button>
                        <button className='btn btn-primary procut-crud-button text-white'>SALVAR</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default Form;
