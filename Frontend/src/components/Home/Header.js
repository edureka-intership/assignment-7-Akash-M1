import React, { Component } from 'react';
import "../Styles/Header.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import FacebookLogin from '@greatsumini/react-facebook-login';


export default class Header extends Component {

    constructor(){
        super();
        this.state={
            restaurants:[],
            locations:[],
            modalIsOpen:false,
            RmodalIsOpen:false
        };
    }

    componentDidMount(){
        fetch('http://127.0.0.1:2070/location',{methods:"GET"}
        ).then(result=>result.json()
        ).then(response=>this.setState({locations:response.data})
        ).catch(err=>console.log(err));
    }

    fetchRestaurants=(event)=>{
        console.log("Hello");
        fetch(`http://localhost:2070/restaurant/${event.target.value}`,{method:"GET"})
        .then(result=>result.json())
        .then(response=>this.setState({restaurants:response.data}))
        .catch(err=>console.log(err));
    }
    render() {

        const customStyles = {
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
        };

        let options = this.state.locations.length && this.state.locations.map(item=>{
            return (<option value={item.city_id} key={item.name}>{item.name}</option>)
        });

        let option1=this.state.restaurants.length && this.state.restaurants.map(item=>{
            return (<li key={item.name} value={item.city}><Link className="dropdown-item" to={`/restaurantDetails/${item.name}`}>{item.name}</Link></li>)
        });

        Modal.setAppElement('#root');

        return (
            <div>
                <div className="container-fluid bgimg">
                    <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-link" id="loginbtn" onClick={()=>this.setState({modalIsOpen:true})}>Login</button>
                            <button type="button" className="btn btn-link" id="signupbtn" onClick={()=>this.setState({RmodalIsOpen:true})}>Create an Account</button>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div className="logo rounded-circle d-flex justify-content-around">
                            <div className="logotxt">e!</div>
                        </div>
                    </div>
                    <div className="inputxt">
                        <select className="form-select loctext mb-2" aria-label="Default select example" onChange={this.fetchRestaurants}>
                            <option selected>Please Select a Location</option>
                            {options}
                        </select>
                        <div className="dropdown searchtext mb-2">
                            <button className="btn btn dropdown-toggle searchtext" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Please Select a Restaurant
                            </button>
                            <ul className="dropdown-menu">
                                {option1}
                            </ul>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <span className='fs-3 fw-bold text-danger'>Login</span>
                    <button className='btn btn-danger float-end mb-2' onClick={()=>this.setState({modalIsOpen:false})}>X</button>

                    <div className="mb-3 row">
                        <label for="exampleFormControlInput1" className="col-form-label">Email address</label>
                        <div className="col-sm-12">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword" placeholder="enter the password"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger mb-3">Submit</button><br/>

                    <FacebookLogin
                        appId="590717856145099"
                        onSuccess={(response) => {
                            console.log('Login Success!', response);
                        }}
                        onFail={(error) => {
                            console.log('Login Failed!', error);
                        }}
                        onProfileSuccess={(response) => {
                            console.log('Get Profile Success!', response);
                        }}
                        style={{
                            backgroundColor: '#4267b2',
                            color: '#fff',
                            fontSize: '16px',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '4px',
                          }}
                    />

                </Modal>


                <Modal
                    isOpen={this.state.RmodalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <span className='fs-3 fw-bold text-danger'>Create an Account</span>
                    <button className='btn btn-danger float-end mb-2' onClick={()=>this.setState({RmodalIsOpen:false})}>X</button>

                    <div className="mb-3 row">
                        <label for="exampleFormControlInput1" className="col-form-label">Name</label>
                        <div className="col-sm-12">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter the name"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="exampleFormControlInput1" className="col-form-label">Email address</label>
                        <div className="col-sm-12">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword" placeholder="enter the password"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-6 col-form-label">Repeat Password</label>
                        <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword" placeholder="re-enter the password"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger mb-3">Submit</button><br/>

                </Modal>

            </div>
        )
    }
}