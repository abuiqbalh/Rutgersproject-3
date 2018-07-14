
import React from "react";



const Footer = () => (
 

   
    <footer className="page-footer font-small blue pt-4">
        <div className='row card text-white bg-success '>
           
            <div className="card-body col-5 ">
                <h3 className="card-title">Dream Elements</h3>
                <h6 className="card-subtitle mb-2 text-muted">The Pioneer in IT</h6>
                <p className="card-text">We solve any IT Problem</p>
                <a href="/" className="card-link">Home</a>
                <a href="/Products" className="card-link">Products and Serivices</a>
                <a href="/About" className="card-link">About Us</a>
                <a href="/login" className="card-link">Log in</a>
            </div>
           
            <div className="col-7" style={{alignSelf: 'flex-end'}}>
             <a href="https://faccebook.com"><img src='facebook'/></a>
             <a href="https://twitter.com"><img src='./image/twitter.jpg'/></a>
             <a href="https://instagram.com"><img src='./image/instagram.jpg'/></a>
             <a href="#"><img src='./image/email.jpg'/></a>
             
            </div>
        
        </div>
       
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https:">Dream Elements</a>
        </div>
        

    </footer>
    

 
)

export default Footer;