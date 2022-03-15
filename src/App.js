
import React from "react";
import "./index.css";

export default function App() {
  return (
    <div >
      <form class="register-form">
        
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
    

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
                <input
          id="num tel"
          class="form-field"
          type="text"
          placeholder="num tel"
          name="num tel "
        />
    
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}