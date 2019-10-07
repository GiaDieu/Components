import React from 'react';

const Personal = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: '5rem',paddingTop:'5rem',borderTop: '1px solid #ccc'}} >
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="col-sm-12" style={{borderRight: '1px solid #ccc'}}>
                        <ul className="list-group text-danger" >
                        <li className="list-group-item"><i className="fa fa-address-card" aria-hidden="true" /><span className="float-left"><h1>Le quang thinh</h1></span></li>
                        <li className="list-group-item"><i className="fa fa-address-book" aria-hidden="true" />gioi tinh : nam</li>
                        <li className="list-group-item">ngày sinh : 24-11</li>
                        <li className="list-group-item">địa chỉ : thủ đức, HCM</li>
                        <li className="list-group-item">Email : lethinh02411</li>
                        <li className="list-group-item">Số điện thoại : 09xxxxxxxxx</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="profile"><img src="a.jpg" alt=" " className="col-sm-10 rounded-circle" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;