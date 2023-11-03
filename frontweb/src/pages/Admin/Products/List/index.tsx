import { AxiosRequestConfig } from 'axios';
import './styles.css';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/product';
import { requestBackend } from 'util/requests';
import Pagination from 'components/Pagination';

type ControlComponentsData = {
    activePage: number;
}

const List = () => {
    const [page, setPage] = useState<SpringPage<Product>>();

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
        { activePage: 0 }
    );

    const handleChangePage = (pageNumber: number) => {
        setControlComponentsData({ activePage: pageNumber });
    }

    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/products",
            params: {
                page: controlComponentsData.activePage,
                size: 3,
            },
        };

        requestBackend(config)
            .then((response) => {
                setPage(response.data);
            });

    }, [controlComponentsData]);



    return (
        <div className='product-crud-container'>
            <div className='product-crud-bar-container'>
                <Link to='/admin/products/create'>
                    <button className='btn btn-primary text-white btn-crud-card'>ADICIONAR</button>
                </Link>
                <div className='base-card product-filter-container'>Search bar</div>
            </div>

            <div className='row'>
                {page?.content.map((product) => (
                    <div key={product.id} className='col-sm-6 col-md-12'>
                        <ProductCrudCard product={product}
                            onDelete={() => { }} />
                    </div>
                ))};
            </div>
            <Pagination
                pageCount={(page) ? page.totalPages : 0}
                range={3}
                onChange={handleChangePage}
            />
        </div>
    );
};

export default List;
