import React, { Component } from 'react';
import styled from 'styled-components';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import Menu from './../../components/Menu/Menu';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import './../../App.css';
import callApi from './../../utils/apiCaller';

class ProductListPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            products: []
        };
    }

    // Mock data API    
    componentDidMount () {
        callApi('product-list', 'GET', null).then((response) => {
            this.setState({ 
                products: response.data
            });
        });
    }

    onDelete = (id) => {
        var {products} = this.state;
        callApi(`product-list/${id}`, 'DELETE', null).then((response) => {
            if(response.status === 200) {// OK
                var index = this.findIndex(products, id);
                    if(index !== -1){
                        products.splice(index, 1);
                        this.setState({products: products});
                    }
            }
        });
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id){
                result = index;
            }
        });
        return result;
    }

    render() {
         // Create a Title component that'll render an <h1> tag with some styles
        const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
         `;

        const Wrapper = styled.section`
            padding: 4em;
            background: #FFF;
        `;

        var {products} = this.state;
        return (
            <>
                <Menu />
                <Wrapper>
                    <Title>
                    Product List
                    </Title>
                    <Link to='/product/add' className="mb-10" variant="outline-primary">+AddProduct</Link>
                    <ProductList>
                        { this.showProducts(products) }
                    </ProductList>
                 </Wrapper>
            </>
        )
    }

    showProducts(products) {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return(
                    <ProductItem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null) (ProductListPage);