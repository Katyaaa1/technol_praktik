import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ProfileForm({ userData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries] = useState([
    "USA",
    "Canada",
    "Ukraine",
    "Germany",
    "France",
    "Italy",
  ]);
  const [cities, setCities] = useState([]);
  const [step, setStep] = useState(1); // Додаємо етапи
  const [profileData, setProfileData] = useState({});

  const citiesByCountry = {
    USA: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary"],
    Ukraine: ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro"],
    Germany: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    France: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
    Italy: ["Rome", "Milan", "Naples", "Florence", "Venice"],
  };

  const onSubmit = (data) => {
    if (step === 1) {
      setProfileData({ ...profileData, ...data });
      setStep(2); // Переходимо до наступного етапу
    } else if (step === 2) {
      setProfileData({ ...profileData, ...data });
      setStep(3); // Переходимо до наступного етапу
    } else if (step === 3) {
      setProfileData({ ...profileData, ...data });
      console.log({ ...userData, ...profileData, ...data });
      alert("Profile Saved!");
    }
  };

  return (
    <div className="form-container">
      <h2>Profile Info</h2>
      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className="input-field"
          />
          {errors.fullName && (
            <span className="error">{errors.fullName.message}</span>
          )}

          <label>Country</label>
          <select
            {...register("country", { required: "Country is required" })}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            className="input-field"
          >
            <option value="">Select a country</option>
            {countries.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className="error">{errors.country.message}</span>
          )}

          <label>City</label>
          <select
            {...register("city", { required: "City is required" })}
            className="input-field"
          >
            <option value="">Select a city</option>
            {selectedCountry && citiesByCountry[selectedCountry]
              ? citiesByCountry[selectedCountry].map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))
              : null}
          </select>
          {errors.city && <span className="error">{errors.city.message}</span>}

          <button type="submit" className="submit-button">
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input-field"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <label>Phone</label>
          <input
            type="text"
            {...register("phone", { required: "Phone is required" })}
            className="input-field"
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}

          <button type="submit" className="submit-button">
            Next
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <label>Social Network</label>
          <select
            {...register("socialNetwork", {
              required: "Select a social network",
            })}
            className="input-field"
          >
            <option value="">Select a social network</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
          </select>
          {errors.socialNetwork && (
            <span className="error">{errors.socialNetwork.message}</span>
          )}

          <label>Nickname</label>
          <input
            type="text"
            {...register("nickname", { required: "Nickname is required" })}
            className="input-field"
          />
          {errors.nickname && (
            <span className="error">{errors.nickname.message}</span>
          )}

          <label>Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="input-field"
          />
          {errors.address && (
            <span className="error">{errors.address.message}</span>
          )}

          <label>ZIP Code</label>
          <input
            type="text"
            {...register("zipCode", { required: "ZIP Code is required" })}
            className="input-field"
          />
          {errors.zipCode && (
            <span className="error">{errors.zipCode.message}</span>
          )}

          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default ProfileForm;
