import React, { useState, useEffect } from "react";
import { auth } from "../database/firebase"; // Importa la instancia de autenticación de Firebase
import SignIn from "../components/SignIn";
import Nav from "../components/Nav";
import TextChatCard from "../components/TextChatCard";

const ChatRoom = () => {
  const [user, setUser] = useState(null); // Estado local para almacenar el usuario

  // Función para verificar si el usuario está autenticado
  const checkAuthentication = () => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const userEmail = currentUser.email; // Obtener el correo electrónico del usuario autenticado
        setUser({ email: userEmail });
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    // Verificar la autenticación al cargar el componente
    checkAuthentication();
  }, []);

  return (
    <div>
      {user ? (
        <div className="ChatRoom">
          <Nav Email={ user.email } />
          <TextChatCard />

          {/* {user.email} */}
        </div>
      ) : (
        <SignIn onSignIn={checkAuthentication} />
      )}
    </div>
  )
}

export default ChatRoom