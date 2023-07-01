import React, { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../database/firebase";

const CreatePublication = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleChangeName = (value) => {
    setName(value.target.value); // Actualiza el estado con el valor ingresado por el usuario
  };

  const savePublication = async () => {
    if (name.trim() === "") {
      alert("No puedes dejarlo en vacio");
    } else {
      try {
        // Guarda la publicación en la base de datos con el nombre del usuario
        const docRef = await addDoc(collection(db, "Publicaciones"), {
          publicationUser: name,
          userId: auth.currentUser.uid
        });
        console.log("Conexión correcta", docRef.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div >
      <Button
        ghost
        color="secondary"
        style={{ width: "100%", }}
        auto
        shadow
        onClick={handleOpenModal}
      >
        Crear Publicación
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={handleCloseModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Publica en
            <Text b size={18}>
              Iris
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Que piensas Publicar"
            onChange={handleChangeName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto ghost color="error" onPress={handleCloseModal}>
            Cerrar
          </Button>
          <Button color="secondary" ghost auto onPress={savePublication}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePublication;
