import { AxiosRequestConfig } from 'axios';
import './styles.css';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/product';
import { requestBackend } from 'util/requests';
import Pagination from 'components/Pagination';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';

type ControlComponentsData = {
    activePage: number;
    filterData: ProductFilterData;
}

const List = () => {
    const [page, setPage] = useState<SpringPage<Product>>();

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
        activePage: 0,
        filterData: { name: '', category: null },
    });

    const handleChangePage = (pageNumber: number) => {
        setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
    }

    const handleSubmitFilter = (data: ProductFilterData) => {
        setControlComponentsData({ activePage: 0, filterData: data });
    }

    const getProducts = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/products",
            params: {
                page: controlComponentsData.activePage,
                size: 3,
                name: controlComponentsData.filterData.name,
                categoryId: controlComponentsData.filterData.category?.id,
            },
        };

        requestBackend(config)
            .then((response) => {
                setPage(response.data);
            });
    }, [controlComponentsData]);

    useEffect(() => {
        getProducts();

    }, [getProducts]);



    return (
        <div className='product-crud-container'>
            <div className='product-crud-bar-container'>
                <Link to='/admin/products/create'>
                    <button className='btn btn-primary text-white btn-crud-card'>ADICIONAR</button>
                </Link>
                <ProductFilter onSubmitFilter={handleSubmitFilter} />
            </div>

            <div className='row'>
                {page?.content.map((product) => (
                    <div key={product.id} className='col-sm-6 col-md-12'>
                        <ProductCrudCard product={product}
                            onDelete={() => { getProducts() }} />
                    </div>
                ))};
            </div>
            <Pagination
                pageCount={(page) ? page.totalPages : 0}
                range={3}
                onChange={handleChangePage}
                forcePage={page?.number}
            />
        </div>
    );
};

export default List;
