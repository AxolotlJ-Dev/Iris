import React from 'react';

import "../styles/components.css"

import { auth } from '../database/firebase';

const SignOut = (props) => {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Cierre de sesión exitoso
        console.log('Cierre de sesión exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el cierre de sesión
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <button className={` ${ props.btnWFull } btnSignOut`} onClick={handleSignOut}>Cerrar sesión</button>
  );
};

export default SignOut;