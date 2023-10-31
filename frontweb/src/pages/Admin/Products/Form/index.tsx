import React from 'react'
import './styles.css';

const Form = () => {
    return (
        <div className='product-crud-container'>
            <div className='base-card product-crud-form'>
                <h1 className='product-crud-form-title'>DADOS DO PRODUTO</h1>

                <form action="">
                    <div className='row product-crud-inputs-left-container'>
                        <div className='col-lg-6'>
                            <div className='margin-bottom-30'>
                                <input type="text" className='form-control base-input' />
                            </div>
                            <div className='margin-bottom-30'>
                                <input type="text" className='form-control base-input' />
                            </div>
                            <div className='margin-bottom-30'>
                                <input type="text" className='form-control base-input' />
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <textarea name="" rows={10} className='form-control base-input h-auto' ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='procut-crud-buttons-container'>
                        <button className='btn btn-outline-danger procut-crud-button'>CANCELAR</button>
                        <button className='btn btn-primary procut-crud-button text-white'>SALVAR</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default Form;
