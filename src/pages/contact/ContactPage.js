import React from "react";
import "./contactpage.css";

const ContactPage = () => {
  return (
    <div class="contact-container">
      <div class="form-container">
        <h2 class="page-title">Contact Form</h2>
        <hr />
        <form class="form">
          <div class="block">
            <span class="inner-element">
              <h4>First Name</h4>
              <input type="text" id="fname" placeholder="first name" />
            </span>
            <span class="inner-element">
              <h4>Last Name</h4>
              <input type="text" id="lname" placeholder="last name" />
            </span>
          </div>
          <div class="block">
            <span class="inner-element">
              <h4>Email</h4>
              <input type="email" id="email" placeholder="Email" />
            </span>
            <span class="inner-element">
              <h4>Phone Number</h4>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </span>
          </div>
          <div class="block">
            <span class="inner-element">
              <h4>Address</h4>
              <input type="text" id="address" placeholder="Address" />
            </span>
            <span class="inner-element">
              <h4>Subject</h4>
              <input type="text" id="subject" placeholder="Subject" />
            </span>
          </div>
          <h2>Gender</h2>
          <div class="gender">
            <input type="radio" id="male" name="gender" />
            <span id="male">Male</span>
            <input type="radio" id="female" name="gender" />
            <span id="female">Female</span>
            <input type="radio" id="other" name="gender" />
            <span id="other">Other</span>
          </div>

          <button class="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
