import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function RegistrationForm({ onRegister, setUserData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = (data) => {
    if (step === 1) {
      setPhone(data.phone);
      setStep(2);
    } else if (step === 2) {
      if (code === "1234") {
        setStep(3);
      } else {
        alert("❌ Невірний код, спробуйте ще раз!");
      }
    } else if (step === 3) {
      setUserData({ phone, ...data });
      onRegister(true);
    }
  };

  return (
    <div className="form-container">
      <h2>📋 Реєстрація</h2>

      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>
            <FaPhoneAlt /> Введіть номер телефону
          </label>
          <input
            type="text"
            {...register("phone", { required: "Телефон обов'язковий" })}
            className="input-field"
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
          <button type="submit" className="submit-button">
            🔄 Надіслати код
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>
            <MdVerified /> Введіть код підтвердження
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">
            ✅ Підтвердити
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email обов'язковий" })}
            className="input-field"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <label>
            <FaLock /> Пароль
          </label>
          <input
            type="password"
            {...register("password", { required: "Пароль обов'язковий" })}
            className="input-field"
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <button type="submit" className="submit-button">
            🎉 Зареєструватися
          </button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
