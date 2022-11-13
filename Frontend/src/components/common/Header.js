import React, { useState } from 'react'
import "../Styles/CHeader.css";
import Modal from 'react-modal'
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Link } from 'react-router-dom';

export default function Header() {

  const [isModalOpen,setIsModalOpen]=useState(false);
  const [isRModalOpen,setIsRModalOpen]=useState(false);

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
  return (
    <div>
        <div className="navbar"> 
          <div className='rounded-circle logo2'>
          <Link to={"/"}><div className='logoLetter'>e!</div></Link>
          </div>
          <div>
            <button className='btn btn-danger m-2 border border-white' onClick={()=>setIsModalOpen(true)}>Login</button>
            <button className='btn btn-danger m-2 border border-white' onClick={()=>setIsRModalOpen(true)}>Create an Account</button>
          </div>
        </div>


        <Modal
            isOpen={isModalOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <span className='fs-3 fw-bold text-danger'>Login</span>
            <button className='btn btn-danger float-end mb-2' onClick={()=>setIsModalOpen(false)}>X</button>

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
            isOpen={isRModalOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <span className='fs-3 fw-bold text-danger'>Login</span>
            <button className='btn btn-danger float-end mb-2' onClick={()=>setIsRModalOpen(false)}>X</button>

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
