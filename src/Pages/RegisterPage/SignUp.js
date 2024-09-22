import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import validation from './Validation'; // Ensure validation logic includes new fields
import "../RegisterPage/RegisterPage.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [familyStatus, setFamilyStatus] = useState('yes'); // State for family status, default is 'yes'

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    familyName: "", // For creating a family
    familyDescription: "", // Family description if creating
    familyCode: ""  // For joining a family
  });

  const handleChange = (e) => {
    const newObj = { ...data, [e.target.name]: e.target.value };
    setData(newObj);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(validation(data, familyStatus)); // Ensure validation checks for family fields
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      navigate("/home");
    }
  }, [error]);

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <p>Please fill the inputs below.</p>

          <div className="inputBox">
            <AiOutlineUser className='fullName' />
            <input type='text'
              name="fullname"
              id="fullname"
              onChange={handleChange}
              placeholder='Full Name'
            />
          </div>
          {error.fullname && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.fullname}</span>}

          <div className="inputBox">
            <FiMail className='mail' />
            <input type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder='Email'
            />
          </div>
          {error.email && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.email}</span>}

          <div className="inputBox">
            <RiLockPasswordLine className='password' />
            <input type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
          {error.password && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.password}</span>}

          <div className="inputBox">
            <RiLockPasswordLine className='password' />
            <input type="password"
              name="confirmpassword"
              id="confirmPassword"
              onChange={handleChange}
              placeholder='Confirm Password'
            />
          </div>
          {error.confirmpassword && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.confirmpassword}</span>}

          {/* Radio Button Group */}
          <div className="familyStatus">
            <p>Is your family already on Family Gram?</p>
            <label>
              <input type="radio" name="familyStatus" value="yes" 
                     checked={familyStatus === 'yes'} 
                     onChange={() => setFamilyStatus('yes')} />
              Yes
            </label>
            <label>
              <input type="radio" name="familyStatus" value="no" 
                     checked={familyStatus === 'no'} 
                     onChange={() => setFamilyStatus('no')} />
              No
            </label>
          </div>

          {/* Conditional Fields Based on Family Status */}
          {familyStatus === 'yes' ? (
            <div className="inputBox">
              <input type="text"
                name="familyCode"
                id="familyCode"
                onChange={handleChange}
                placeholder='Enter Family Code to Join'
              />
              {error.familyCode && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.familyCode}</span>}
            </div>
          ) : (
            <>
              <div className="inputBox">
                <input type="text"
                  name="familyName"
                  id="familyName"
                  onChange={handleChange}
                  placeholder='Family Name'
                />
                {error.familyName && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.familyName}</span>}
              </div>

              <div className="inputBox">
                <input type="text"
                  name="familyDescription"
                  id="familyDescription"
                  onChange={handleChange}
                  placeholder='Family Description'
                />
                {error.familyDescription && <span style={{ color: "red", display: "block", marginTop: "5px" }}>{error.familyDescription}</span>}
              </div>
            </>
          )}

          <div className='divBtn'>
            <small className='FG'>Forgot Password?</small>
            <button className='loginBtn'>SIGN UP</button>
          </div>
        </form>

        <div className='dont'>
          <p>Already have an account? <Link to="/"><span>Sign in</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
