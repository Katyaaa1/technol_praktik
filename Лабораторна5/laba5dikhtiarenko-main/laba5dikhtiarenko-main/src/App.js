import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import ProfileForm from "./ProfileForm";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <div className="app-container">
      {!isRegistered ? (
        <RegistrationForm
          onRegister={setIsRegistered}
          setUserData={setUserData}
        />
      ) : (
        <ProfileForm userData={userData} />
      )}
    </div>
  );
}

export default App;
