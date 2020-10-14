import React from 'react'
import './css/Contact.css'
export default class Contact extends React.Component{
  render(){
    return (
        <div>
            <html lang="en" class="full-height"/>

{/* <!--Main Navigation--> */}
<header>
  <div class="view intro-2">
    <div class="full-bg-img">
      <div class="mask rgba-black-strong flex-center">
        <div class="container">
          <div class="white-text text-center wow fadeInUp">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

</header>
{/* <!--Main Navigation--> */}

{/* <!--Main Layout--> */}
<main class="text-center my-5">

  <div class="container">
    <div class="row">
      <div class="col-md-12">
      <section id="contact" class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card p-4">
            <div class="card-body">
              <p>Get In Touch</p>
              <h5>MyForestry</h5>
              <br></br>
              <p>Address</p>
              <h5>Forest Department, Mumbai</h5>
              <br></br>
              <p>Email</p>
              <h5>myforestry@gmail.com</h5>
              <br></br>
              <p>Phone</p>
              <h5>123 456 7891</h5>            
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card p-4">
            <div class="card-body">
              <h3 class="text-center">Please fill out this form to contact us</h3>
              <hr></hr>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="First Name"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Last Name"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone Number"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <input type="submit" class="btn btn-info btn-block" value="submit"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      </div>
    </div>
  </div>

</main>

{/* <!--Main Layout-->     */}
<footer id="main-footer" class="text-center p-4">
  <div class="container">
    <div class="row">
      <div class="col">
        <h6>Copyright 2020 © MyForestry</h6>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}
}