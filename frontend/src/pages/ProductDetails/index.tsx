import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ProductPrice from "components/ProductPrice";

import './styles.css';

const ProductsDetails = () => {
    return (
        <div className='product-details-container'>
            <div className='product-details-card'>
                <div className='goback-container'>
                    <ArrowIcon />
                    <h4>VOLTAR</h4>
                </div>
                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='img-container'>
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Nome do produto" />
                        </div>
                        <div className='name-price-container'>
                            <h2>Nome do produto</h2>
                            <ProductPrice price={2345.67} />
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='description-container'>
                            <h3>Descrição do producto</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails;
