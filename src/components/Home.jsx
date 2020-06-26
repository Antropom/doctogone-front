import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  const [nbPatient, setNbPatient] = useState(0);
  const [nbProjected, setNbProjected] = useState(0);
  const [cost, setCost] = useState(0);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
    if (scrollPosition > 511) {
      setIsScrolling(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const oneByOne = setInterval(() => {
      if (isScrolling) {
        if (nbPatient < 50) {
          setNbPatient(nbPatient + 1);
        }
        if (nbProjected < 100) {
          setNbProjected(nbProjected + 1);
        }
        if (cost < 250.174) {
          setCost(cost + 2);
        } else {
          setCost(250.174);
        }
      }
    }, 10);
    return () => {
      clearInterval(oneByOne);
    };
  }, [nbPatient, nbProjected, cost, isScrolling]);

  return (
    <div>
      <div className="home">
        <div className="logo">
          <img src="/icons/logo-2.svg"></img>
        </div>
        <section className="item">
          <div className="item-text hello">
            <h1>Hello !</h1>
            <p>Tell us who you are ?</p>
          </div>
          {/* <Link to="/login" type="button"> */}
          <Link to="/user" type="button">
            <div className="button light">
              <img src="/icons/fleche-green.svg"></img>
              <p>I am a patient</p>
            </div>
          </Link>
          {/* <Link to="/login2" type="button"> */}
          <Link to="/caregiver" type="button">
            <div className="button">
              <img src="/icons/fleche-white.svg"></img>
              <p>I am a caregiver</p>
            </div>
          </Link>
        </section>

        <div className="illustration-home">
          <img className="w-100-img " src="/img/home.png"></img>
        </div>

        <div></div>
      </div>

      <div className="light">
        <div className="container">
          <h1>Why Finding Memo ? </h1>
          <p className="textSizeLight">
            To support our loved ones through Alzheimer's
          </p>
          <div className="button">
            <img src="/icons/fleche-white.svg"></img>
            <p>More information</p>
          </div>
        </div>
      </div>

      <div className="img-block">
        <img className="w-100-img " src="/img/home-2.png"></img>
      </div>

      <div className="data-number">
        <div className="infosStat">
          <img
            className={!isScrolling ? "isOpac" : "isVisible"}
            src="/icons/a.svg"
          ></img>
          <h1 className={!isScrolling ? "isOpac" : "isVisible"}>
            {nbPatient} million
          </h1>
          <p className={!isScrolling ? "isOpac" : "isVisible"}>
            The number of Alzheimer's patients in the World
          </p>
        </div>

        <div className="infosStat">
          <img
            className={!isScrolling ? "isOpac" : "isVisible"}
            src="/icons/b.svg"
          ></img>
          <h1 className={!isScrolling ? "isOpac" : "isVisible"}>
            {nbProjected} million
          </h1>
          <p className={!isScrolling ? "isOpac" : "isVisible"}>
            Projected number of Alzheimer's patients in 2040
          </p>
        </div>

        <div className="infosStat">
          <img
            className={!isScrolling ? "isOpac" : "isVisible"}
            src="/icons/c.svg"
          ></img>
          <h1 className={!isScrolling ? "isOpac" : "isVisible"}>${cost}</h1>
          <p className={!isScrolling ? "isOpac" : "isVisible"}>
            The total lifetime cost estimation of care for someone with
            Alzheimer dementia in 2018.
          </p>
        </div>

        <p className="copyright">Copyright - 2020 Doctogone</p>
      </div>
    </div>
  );
}

export default Home;
