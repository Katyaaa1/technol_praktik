import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Готелі України</h1>
        <p>Відчуйте комфорт та гостинність у найкращих готелях країни</p>
        <a href="#services" className="btn">
          Дізнатися більше
        </a>
      </div>
      <div className="hero-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKEz6j5zknpafQZJg87_d6ka0cd4HEsqWt0jxdHQW4BMMPQcV88TmMBJyFC5qayFUhh8&usqp=CAU"
          alt="Зображення готелю"
        />
      </div>
    </section>
  );
}

export default Hero;
