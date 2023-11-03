import React from 'react'
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";
import './styles.css';

const ProductFilter = () => {
    return (

        <div className='base-card product-filter-container'>
            <form className='product-filter-form'>
                <div className='produto-filter-name-container'>
                    <input

                        type="text"
                        className="form-control"
                        placeholder="Nome do produto"
                        name="name"
                    />
                    <SearchIcon />
                </div>
                <div className='product-filter-bottom-container'>
                    <div className='product-filter-category-container'>
                        <select name="" id="">
                            <option value="" key="">Livros</option>
                        </select>
                    </div>
                    <button className='btn btn-ouline-secondary'>Limpar</button>
                </div>

            </form>

        </div>


    )
}

export default ProductFilter;
