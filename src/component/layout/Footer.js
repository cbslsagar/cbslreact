import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Your Brand</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna at eros fermentum, nec commodo sem facilisis.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Home</a></li>
              <li><a href="#!" className="text-dark">About</a></li>
              <li><a href="#!" className="text-dark">Services</a></li>
              <li><a href="#!" className="text-dark">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Facebook</a></li>
              <li><a href="#!" className="text-dark">Twitter</a></li>
              <li><a href="#!" className="text-dark">Instagram</a></li>
              <li><a href="#!" className="text-dark">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
