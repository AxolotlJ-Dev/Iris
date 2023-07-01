import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase";
import { Link } from "react-router-dom";
import { Grid, Input, Button, Spacer, Card, Text} from "@nextui-org/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log("Inicio de sesión exitoso:", user);
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al iniciar sesión:", errorCode, errorMessage);
      });
  };

  return (
    <Grid.Container
      gap={2}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "45px",
            border:"1px solid #fff"
          }}
        >
          <Text h3>
            Sign In
          </Text>
          <Spacer y={2} />
          <Input
            css={{ width: "100%" }}
            type="email"
            clearable
            underlined
            labelPlaceholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="secondary"
          />
          <Spacer y={2} />
          <Input.Password
            css={{ width: "100%" }}
            type="password"
            clearable
            underlined
            labelPlaceholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="secondary"
          />
          <Spacer y={2} />

          <Button onPress={handleSignIn} color="secondary" auto ghost >
            <Link to="/"> Iniciar sesión </Link>
          </Button>
          <Spacer y={2} />

          <Link to="SignUp" style={{ color: "#fff" }}>
            Sign Up
          </Link>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default SignIn;
