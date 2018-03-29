import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';

class ProductActionPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      txtCode: '',
      txtName: '',
      chkbStatus: ''
    };
  }

  componentDidMount() {

    var { match } = this.props;

    if(match){

      console.log('111');

      var service_type_code = match.params.service_type_code;
      console.log(service_type_code);

      callApi(`servicetype/get-by-id/${service_type_code}`, 'GET', null).then(res => {
        console.log(res.data);
        var data = res.data.data;
        this.setState({
          txtCode: data.SERVICETYPE_CODE,
          txtName: data.SERVICETYPE_NAME,
          chkbStatus: data.STATUS
        });
      });

    }else {

      console.log('2222');
    }
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {

    e.preventDefault();
    var {txtCode, txtName, chkbStatus} = this.state;
    var {history} = this.props;

    if(txtCode){ // cập nhật

      console.log('cập nhật');

      callApi('servicetype/update', 'PUT', {
        servicetype_code: txtCode,
        servicetype_name: txtName,
        status: chkbStatus
      }).then(res => {

        if(res.data.statusCode === '00'){
          history.goBack();
        }else{
          console.log(res.data.message);
        }

      });
    }else{ // thêm mới

      console.log('thêm mới');
      callApi('servicetype/create', 'POST', {
        servicetype_code: txtCode,
        servicetype_name: txtName,
        created_by: 'admin'
      }).then(res => {

       if(res.data.statusCode === '00'){
          history.goBack();
        }else{
          console.log(res.data.message);
        }
      });
    }
  }

  render() {

    var {txtCode, txtName, chkbStatus} = this.state;
    var title = '';

    console.log(chkbStatus);

    if(txtCode){
      title = 'Cập nhật';
    }else{
      title = 'Thêm mới';
    }

    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSave}>
            <legend>{title}</legend>
          
            <div className="form-group">
              <label>Mã loại dịch vụ: </label>
              <input type="text" className="form-control" disabled={txtCode} name="txtCode" value={txtCode} onChange={this.onChange} />
            </div>
          
            <div className="form-group">
              <label>Tên loại dịch vụ: </label>
              <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label>Trạng thái: </label>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="chkbStatus" onChange={this.onChange}/>
                  Hoạt động
                </label>
              </div>
            </div>

            
          
            <button type="submit" className="btn btn-primary mr-5">Lưu lại</button>
            <Link to="/product-list" className="btn btn-danger">
              Quay lại
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;
