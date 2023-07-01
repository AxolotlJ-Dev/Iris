import { Card, Grid, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { db } from "../database/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const PublicationView = () => {
  const [publications, setPublications] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribePublications = onSnapshot(collection(db, "Publicaciones"), (querySnapshot) => {
      const publicationsData = [];
      querySnapshot.forEach((doc) => {
        const { publicationUser, userId } = doc.data();
        publicationsData.push({
          id: doc.id,
          publicationUser,
          userId,
        });
      });

      setPublications(publicationsData);
    });

    const unsubscribeUsers = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const usersData = [];
      querySnapshot.forEach((doc) => {
        const { name, userId } = doc.data();
        usersData.push({
          id: doc.id,
          name,
          userId,
        });
      });

      setUsers(usersData);
    });

    return () => {
      unsubscribePublications();
      unsubscribeUsers();
    };
  }, []);

  return (
    <Grid.Container gap={2} justify="center">
      {publications.map((pub) => {
        const user = users.find((userData) => userData.userId === pub.userId);
        const userName = user ? user.name : "Usuario desconocido";
        // console.log(user)

        return (
          <Grid xs={12} key={pub.id} justify="center" >
            <Card className="custom-card" border="secondary" ghost  css={{  width:"85%", h:"$100" }}>
              <Card.Header>
                <Text>{userName}</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>{pub.publicationUser}</Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default PublicationView;
