import React, { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useFirebase } from "../../Hooks/useFirebase";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../UI/CusttomButton/CustomButton";
import PopUpModal from "../UI/Modal/PopUpModal";

const Register = () => {
  /* this component is much similar to login component */

  const [showModal, setShowModal] = useState(false);
  const googleLogo = <FontAwesomeIcon icon={faGoogle} />;
  const { emailAndPasswordRegister, signInUsingGoogle } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailAndPasswordRegister(data.email, data.password);
    setShowModal(true);
    console.log(data);
  };

  return (
    <Container className="login-form">
      {showModal ? (
        <PopUpModal
          setShowModal={setShowModal}
          header="Check Your Email"
          bodyHeader="Email verification processing"
          text="A verification email has been sent to your email. You have to confirm
          your email to continue further."
        />
      ) : (
        ""
      )}
      <h1>Register with your Email and Password</h1>
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
          =
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
          Already have an account? <Link to="/login">Login here</Link> here{" "}
        </p>
        <CustomButton
          type="submit"
          value="Register"
          className="mt-3 p-2 px-3 fs-3 rounded"
        />
      </form>
      <p className="mt-3 social-media">
        Sign in with google <br />
        <span onClick={signInUsingGoogle}>{googleLogo}</span>
      </p>
    </Container>
  );
};

export default Register;
