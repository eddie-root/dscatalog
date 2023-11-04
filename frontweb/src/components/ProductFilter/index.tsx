import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";
import './styles.css';
import { Category } from 'types/category';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { requestBackend } from 'util/requests';

export type ProductFilterData = {
    name: string;
    category: Category | null;
}

type Props = {
    onSubmitFilter: (data: ProductFilterData) => void;
}

const ProductFilter = ({ onSubmitFilter }: Props) => {

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        getValues
    } = useForm<ProductFilterData>();

    useEffect(() => {
        requestBackend({ url: '/categories' })
            .then(response => {
                setSelectCategories(response.data.content);
            });
    }, []);

    const handleChangeCategory = (value: Category) => {
        setValue('category', value);

        const obj: ProductFilterData = {
            name: getValues('name'),
            category: getValues('category')
        }

        onSubmitFilter(obj);
    }

    const onSubmit = (resultData: ProductFilterData) => {
        onSubmitFilter(resultData);
    }

    const handleFormClear = () => {
        setValue('name', "");
        setValue('category', null);
    }

    return (

        <div className='base-card product-filter-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='product-filter-form'>
                <div className='produto-filter-name-container'>
                    <input
                        {...register('name')}
                        type="text"
                        className="form-control"
                        placeholder="Nome do produto"
                        name="name"
                    />
                    <button className='product-filter-search-icon'>
                        <SearchIcon />

                    </button>
                </div>
                <div className='product-filter-bottom-container'>
                    <div className='product-filter-category-container'>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <Select {...field}
                                    options={selectCategories}
                                    isClearable
                                    onChange={value => handleChangeCategory(value as Category)}
                                    placeholder="Categoria..."
                                    classNamePrefix="product-filter-select"
                                    getOptionLabel={(item: Category) => item.name}
                                    getOptionValue={(item: Category) => String(item.id)}
                                />

                            )}
                        />
                    </div>
                    <button
                        onClick={handleFormClear}
                        className='btn btn-ouline-secondary btn-product-filter-clear'>
                        LIMPAR
                        <span className='btn-product-filter-word'>FILTRO</span>
                    </button>
                </div>

            </form>

        </div>


    )
}

export default ProductFilter;
