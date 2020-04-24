import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import styled from "styled-components";

import Modal from "./Modal";
import "./Feedback.css";
import Loader from "../Loader/Loader";

const Feedback = (props) => {
  const StyledSpan = styled.span`
    padding-left: 8px;
    padding-top: 2px;
  `;
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [Phone, setPhone] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [Saving, setSaving] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const [ModalHeading, setModalHeading] = React.useState("");
  const [ModalMessage, setModalMessage] = React.useState("");

  const [FormValid, setFormValid] = useState(false);

  const [FirstNameValid, setFirstNameValid] = useState(false);
  const [LastNameValid, setLastNameValid] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);
  const [PhoneValid, setPhoneValid] = useState(false);
  const [FeedbackValid, setFeedbackValid] = useState(false);

  const [FormErrorsObj, setFormErrorsObj] = useState({
    FirstName: {
      maxLength: "",
    },
    LastName: {
      maxLength: "",
    },
    EmailId: {
      pattern: "",
    },
    Phone: {
      maxLength: "",
      pattern: "",
    },
    Feedback: {
      maxLength: "",
    },
  });

  const errorClass = (errorObj) => {
    let errArr = Object.keys(errorObj).map((key, i) => {
      return key, errorObj[key];
    });

    let flag = false;
    for (let i = 0; i < errArr.length; i++) {
      errArr[i] !== "" ? (flag = true) : (flag = false);
    }

    return !flag ? "" : "is-invalid";
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = FormErrorsObj;
    let lengthCheck = false;
    let patternMatch = false;
    switch (fieldName) {
      case "firstName":
        lengthCheck = value.length < 15;
        setFirstNameValid(lengthCheck);
        fieldValidationErrors.FirstName.maxLength = lengthCheck
          ? ""
          : "* First name too long";
        break;

      case "lastName":
        lengthCheck = value.length < 15;
        setLastNameValid(lengthCheck);
        fieldValidationErrors.LastName.maxLength = lengthCheck
          ? ""
          : "* Last name too long";
        break;

      case "emailId":
        patternMatch = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        setEmailValid(patternMatch);
        fieldValidationErrors.EmailId.pattern = patternMatch
          ? ""
          : "* Email id is not valid";
        break;

      case "phone":
        lengthCheck = value.length <= 10;
        patternMatch = value.match(/^[0-9]*$/);
        setPhoneValid(lengthCheck && patternMatch);
        fieldValidationErrors.Phone.maxLength = lengthCheck
          ? ""
          : "* No more than 10 digits are allowed";
        fieldValidationErrors.Phone.pattern = patternMatch
          ? ""
          : "* Only numbers allowed";
        break;

      case "feedback":
        lengthCheck = value.length >= 20;
        setFeedbackValid(lengthCheck);
        fieldValidationErrors.Feedback.maxLength = lengthCheck
          ? ""
          : "* Feedback must be more than 20 characters";
        break;

      default:
        break;
    }

    setFormErrorsObj(fieldValidationErrors);
    setFormValid(
      FirstNameValid && LastNameValid && EmailValid && FeedbackValid
    );
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const handleEmailIdChange = (event) => {
    setEmailId(event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSaving(true);
    let Subject = "";

    Subject = "Feedback Mail for COVIDLY | " + Firstname + " " + Lastname;
    let templateParams = {
      from_email: EmailId,
      from_name: Firstname + " " + Lastname,
      to_name: "visheshpandita9899@gmail.com",
      subject: Subject,
      message_html: Feedback,
      Phone: Phone,
    };

    emailjs
      .send(
        "gmail",
        "template_UCJk77ln",
        templateParams,
        "user_jSNdBF3Hv7OgfyrLJenjR"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
          setModalHeading("Thank you");
          setModalMessage(
            `Your feedback has been successfully sent. Thanks for believing in the scope of improvement`
          );
          setModalShow(true);
          setSaving(false);
        },
        function (error) {
          setModalHeading("Uh Oh!");
          setModalMessage(
            `Sorry, but there was some problem while sending your feedback. Please check back later.`
          );
          setModalShow(true);
          setSaving(false);
          console.log("FAILED...", error);
        }
      );
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmailId("");
    setPhone("");
    setFeedback("");
  };

  return (
    <React.Fragment>
      <main className="container fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="header text-center">
              <h1>Get in touch</h1>
              <hr />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label className="required" htmlFor="firstName">
                First Name :{" "}
              </label>
              <input
                className={`form-control ${errorClass(
                  FormErrorsObj.FirstName
                )}`}
                type="text"
                name="firstName"
                value={Firstname}
                onChange={handleFirstnameChange}
                autoComplete="off"
                placeholder="Your first name..."
              />
              {FormErrorsObj.FirstName.maxLength !== "" ? (
                <StyledSpan className="text-danger">
                  <strong>{FormErrorsObj.FirstName.maxLength}</strong>
                </StyledSpan>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-md-6">
              <label className="required" htmlFor="lastName">
                Last Name :{" "}
              </label>
              <input
                className={`form-control ${errorClass(FormErrorsObj.LastName)}`}
                type="text"
                name="lastName"
                value={Lastname}
                onChange={handleLastnameChange}
                autoComplete="off"
                placeholder="Your last name..."
              />
              {FormErrorsObj.LastName.maxLength !== "" ? (
                <StyledSpan className="text-danger">
                  <strong> {FormErrorsObj.LastName.maxLength}</strong>
                </StyledSpan>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label className="required" htmlFor="emailId">
                Email ID :{" "}
              </label>
              <input
                className={`form-control ${errorClass(FormErrorsObj.EmailId)}`}
                type="text"
                name="emailId"
                value={EmailId}
                onChange={handleEmailIdChange}
                autoComplete="off"
                placeholder="Your email id..."
              />
              {FormErrorsObj.EmailId.pattern !== "" ? (
                <StyledSpan className="text-danger">
                  <strong>{FormErrorsObj.EmailId.pattern}</strong>
                </StyledSpan>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone(Opt.) : </label>
              <input
                className={`form-control ${errorClass(FormErrorsObj.Phone)}`}
                type="text"
                name="phone"
                value={Phone}
                onChange={handlePhoneChange}
                autoComplete="off"
                placeholder="Your phone number..."
              />
              {FormErrorsObj.Phone.maxLength !== "" ? (
                <StyledSpan className="text-danger">
                  <strong>{FormErrorsObj.Phone.maxLength}</strong>
                  <br />
                </StyledSpan>
              ) : (
                ""
              )}
              {FormErrorsObj.Phone.pattern !== "" ? (
                <StyledSpan className="text-danger">
                  <strong>{FormErrorsObj.Phone.pattern}</strong>
                  <br />
                </StyledSpan>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <label className="required" htmlFor="feedback">
                Feedback :{" "}
              </label>
              <textarea
                className={`form-control ${errorClass(FormErrorsObj.Feedback)}`}
                style={{ minHeight: "175px" }}
                type="text"
                name="feedback"
                value={Feedback}
                onChange={handleFeedbackChange}
                autoComplete="off"
                placeholder="Your feedback goes here..."
              />
              {FormErrorsObj.Feedback.maxLength !== "" ? (
                <StyledSpan className="text-danger">
                  <strong>{FormErrorsObj.Feedback.maxLength}</strong>
                </StyledSpan>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <StyledSpan>
                Fields marked with <strong style={{ color: "red" }}>*</strong>{" "}
                are mandatory
              </StyledSpan>
            </div>
            <div className="col-md-6 text-right">
              {Saving ? (
                <Loader />
              ) : (
                <button
                  className="btn btn-sm btn-success"
                  disabled={!FormValid}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        <Modal
          show={modalShow}
          heading={ModalHeading}
          message={ModalMessage}
          onHide={() => setModalShow(false)}
        />
      </main>
    </React.Fragment>
  );
};

export default Feedback;
