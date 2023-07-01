import {
  Card,
  Grid,
  Text,
  Row,
  Input,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../database/firebase";
import MessageList from "./MessageList";

function Chat() {
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setMessage(event.target.value); // Actualiza el estado con el valor ingresado por el usuario
  };

  const saveMessage = async () => {
    if (message.trim() === "") {
      alert("No puedes dejarlo en vacío");
    } else {
      try {
        // Guarda la publicación en la base de datos con el nombre del usuario
        const docRef = await addDoc(collection(db, "messages"), {
          publicationMessage: message,
          userId: auth.currentUser.uid,
        });
        console.log("Conexión correcta", docRef.id);

        // Limpiar el estado del mensaje después de enviarlo
        setMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid.Container gap={2}>
      <Grid xs={12} style={{ height: "89vh" }}>
        <Card>
          <Card.Header>
            <Text>Message Room</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            {/* messages */}
            <MessageList />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Grid style={{ width: "100%" }}>
                <Input
                  css={{ width: "90%" }}
                  underlined
                  labelPlaceholder="Escribe Mensaje"
                  color="secondary"
                  value={message} // Asignar el valor del estado al valor del Input
                  onChange={handleChangeName}
                  contentRight={
                    <Button color="secondary" auto ghost onPress={saveMessage}>
                      Send
                    </Button>
                  }
                />
              </Grid>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default Chat;
