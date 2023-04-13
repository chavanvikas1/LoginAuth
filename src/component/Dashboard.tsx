import React from 'react'
import "./dashStyle.css"
export default function Dashboard() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="#"><i className="bi bi-unity"></i></a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </div>
        </nav>
        <div>
            <h3><span className='text-danger'>Welcome</span> To Our <span className='text-success'>Page</span></h3>
        </div>
    <div className='footer '>
<div className='textfooter'>
<a href="">Login Page</a> 
<a href="">Ragister Page</a>
<a href="">Footer</a>
<a href="">Header</a>
</div>
<div className='mt-5'>
    <input type="text" placeholder='contact' className='form-control' />
    <button className='btn btn-outline-light mt-2'>submit</button>
</div>
    </div>
    </div>
  )
}
