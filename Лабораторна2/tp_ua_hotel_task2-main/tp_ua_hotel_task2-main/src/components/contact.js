import React from "react";
import "./contact.css";

function Contact() {
  return (
    <main>
      <section className="contact-hero">
        <h1>Контакти</h1>
        <p>
          Зв’яжіться з нами для отримання додаткової інформації або запитань.
        </p>
      </section>

      <section className="contact-info">
        <h2>Як нас знайти</h2>
        <div className="contact-details">
          <div className="detail">
            <h3>Телефон:</h3>
            <p>+38 (050) 123-45-67</p>
          </div>
          <div className="detail">
            <h3>Email:</h3>
            <p>info@hotels.ua</p>
          </div>
          <div className="detail">
            <h3>Адреса:</h3>
            <p>м. Київ, вул. Хрещатик, 22</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Напишіть нам</h2>
        <form action="#" method="post">
          <label htmlFor="name">Ваше ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Введіть ваше ім'я"
            required
          />

          <label htmlFor="email">Ваш email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введіть вашу пошту"
            required
          />

          <label htmlFor="message">Повідомлення:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Напишіть ваше повідомлення..."
            required
          ></textarea>

          <button type="submit">Надіслати</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
