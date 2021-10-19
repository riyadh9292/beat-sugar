import React, { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import { useFirebase } from "../../Hooks/useFirebase";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../UI/CusttomButton/CustomButton";

const Login = () => {
  const [errorFireBase, setErrorFireBase] = useState("");
  const googleLogo = <FontAwesomeIcon icon={faGoogle} />;
  const { signinUserUsingPassword, signInUsingGoogle } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signinUserUsingPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        /* setUser(user); */
        setErrorFireBase("");
        history.push(redirect_url);
      })
      .catch((err) => setErrorFireBase(err.message));
  };
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      setErrorFireBase("");
      history.push(redirect_url);
    });
  };

  return (
    <Container className="login-form">
      <h1>Login with your Email and Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        {/* errors will return when field validation fails  */}
        {errors.email && errors.email.type === "required" && (
          <p className="error-message">Email is required.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="error-message">Email is not valid.</p>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
          />
        </FloatingLabel>
        {/* errors will return when field validation fails  */}
        {errors.password && errors.password.type === "required" && (
          <p className="error-message">Password is required.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="error-message">
            Password should be at-least 6 characters.
          </p>
        )}
        <p className="mt-3 side-link">
          Don't have an account? <Link to="/register">Register</Link> here{" "}
        </p>
        <CustomButton
          type="submit"
          className="mt-3 p-2 px-3 fs-3 rounded login-button"
          value="Login"
        />
        {/* if firebase returns any error */}
        {errorFireBase ? <p className="text-danger">{errorFireBase}</p> : ""}
      </form>
      <p className="mt-3 social-media">
        Sign in with google <br />
        <span onClick={handleGoogleLogin}>{googleLogo}</span>
      </p>
    </Container>
  );
};

export default Login;
