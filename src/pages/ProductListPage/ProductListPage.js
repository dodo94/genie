import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

class ProductListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount(){

    callApi('servicetype/list?current_page=1&page_size=10', 'GET', null).then(res => {
      if(res.data.statusCode === '00'){
        // setTimeout(() => {
          this.setState({
            products : res.data.data,
            loading: false
          });
        // }, 2000)
      }
    });
  }

  // function xóa sản phẩm 
  onDelete = (id) => {

    console.log('service_code: ' + id);

    var { products } = this.state;

    callApi(`servicetype/delete/${id}`, 'DELETE', null).then(res => {
      if(res.data.statusCode === '00'){

        // Xóa luôn 1 phần tử của mảng products => đỡ Request lên server 1 lần nữa
        var index = this.findIndex(products, id);
        if(index !== -1){
          products.splice(index, 1);
          this.setState({
            products: products
          });
        }
      }
    });
  };

  // tìm kiếm index của mảng
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if(product.id === id){
        result = index;
      }
      return result;
    });
  };

  render() {

    var { products, loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div className='sweet-loading'>
          <HashLoader
            className="spinners"
            color={'#337ab7'} 
            loading={this.state.loading} 
          />
        </div>
      )
    }

    return (

      <div className="main-content-inner">
        <div className="breadcrumbs ace-save-state" id="breadcrumbs">
          <ul className="breadcrumb">
            <li>
              <i className="ace-icon fa fa-home home-icon"></i>
              <a href="javascript:;">Trang chủ</a>
            </li>
            <li className="active">Quản lý người sử dụng</li>
          </ul>

          <div className="nav-search" id="nav-search">
            <form className="form-search">
              <span className="input-icon">
                <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" />
                <i className="ace-icon fa fa-search nav-search-icon"></i>
              </span>
            </form>
          </div>
        </div>

        <div className="page-content">
          <div className="row">
            <div className="col-xs-12">
              
              <Link to="/product/add" className="btn btn-info mb-10">
                Thêm mới
              </Link>
              <ProductList>
                {this.showProducts(products)}
              </ProductList>

            </div>
          </div>
        </div>
      </div>

    );
  }

  showProducts(products){
    var result = null;
    if(products.length > 0){
      result = products.map((product, index) => {
        return (
          <ProductItem 
            key={index}
            product={product}
            index={index}
            onDelete = {this.onDelete}
          />
        );
      });
    }

    return result;
  }
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
};

export default connect(mapStateToProps, null)(ProductListPage);
