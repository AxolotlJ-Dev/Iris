import React, { useState } from "react";
import { auth, db } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Card, Grid, Input, Spacer, Button,Text } from "@nextui-org/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Cuenta creada exitosamente:", user);

        const userRef = collection(db, "users");
        addDoc(userRef, { name: name, userId: user.uid })
          .then((docRef) => {
            console.log("Nombre agregado a la base de datos:", docRef.id);
          })
          .catch((error) => {
            console.error(
              "Error al agregar el nombre a la base de datos:",
              error
            );
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al crear cuenta:", errorCode, errorMessage);
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
            border: "1px solid #fff",
          }}
        >
          <Text h3 > Sign Up</Text>
          <Spacer y={2} />
          <Input
            css={{ width: "100%" }}
            color="secondary"
            clearable
            underlined
            labelPlaceholder="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Spacer y={2} />
          <Input
          css={{ width: "100%" }}
            color="secondary"
            type="email"
            clearable
            underlined
            labelPlaceholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer y={2} />
          <Input.Password
            css={{ width: "100%" }}
            color="secondary"
            labelPlaceholder="Password"
            clearable
            underlined
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={2} />
            <Button color="secondary" auto ghost onPress={handleSignUp}>Crear cuenta</Button>
          <Spacer y={2} />
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default SignUp;
