import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
    
    if(confirm('Bạn chắc chắn muốn xóa ?')){ //eslint-disable-line
      this.props.onDelete(id);
    }

  };

  render() {
    
    var { product, index } = this.props;
    var statusName = '';
    var statusClass = '';

    if(product.STATUS === '1'){

      statusName = 'Hoạt động';
      statusClass = 'success';
    }else{

      statusName = 'Không hoạt động';
      statusClass = 'danger';
    }

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.SERVICETYPE_CODE}</td>
        <td>{product.SERVICETYPE_NAME}</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <Link 
            to={`/product/${product.SERVICETYPE_CODE}/edit`}
            className="btn btn-success mr-5"
          >
            Sửa
          </Link>
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={() => this.onDelete(product.SERVICETYPE_CODE) }
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
