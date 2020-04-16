import React, { Component } from "react";

const AboutComponent = (props) => {
  return (
    <React.Fragment>
      <main className="container fadeIn">
        <div className="header text-center">
          <h1>About me</h1>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={require("../../assets/img/Developer.gif")} />
          </div>
          <div className="col-md-12 ">
            <p className="text-center">
              Talking about myself, I am a software engineer by profession, A
              'FULL STACK DEVELOPER'. With around two and a half years of
              experience (as of April 16, 2020) in web technologies, I have
              worked intensively on a lot of projects and technologies like
              dotnet(Web forms, MVC, Core), Angular(6, 7, 8), SQL, Node, React,
              MongoDB. This applcation has been developed as a result of me,
              deciding to learn REACT at the time when we were all sitting at
              our homes (probably), quarantined amidst corona virus fears. Just
              my first project in this library.
            </p>
            <p className="text-center">
              Hope, you like it. For any queries, don't mind to drop an email at
              <strong> visheshpandita9899@gmail.com</strong>. I'm all ears for
              any kind of constructive criticism. But remember, CONSTRUCTIVE!😉
            </p>
            <p className="text-center">
              And yes, take care of yourself and your loved ones during these
              tough times. THIS TOO SHALL PASS.🌍
            </p>
            <p className="text-center">HAPPY CODING!🤖</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutComponent;
