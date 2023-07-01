import React, { useState, useEffect } from "react";
import { Card, Spacer, Text } from "@nextui-org/react";
import { db } from "../database/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const MessageList = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribeMessages = onSnapshot(collection(db, "messages"), (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        const { publicationMessage, userId } = doc.data();
        messagesData.push({
          id: doc.id,
          messageUser: publicationMessage, // Renombrar la propiedad publicationMessage a messageUser
          userId,
        });
      });

      setMessages(messagesData);
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
      unsubscribeMessages();
      unsubscribeUsers();
    };
  }, []);

  return (
    <div>
      {messages.map((msg) => {
        const user = users.find((userData) => userData.userId === msg.userId);
        const userName = user ? user.name : "Usuario desconocido";

        return (
          <Card
            key={msg.id}
            style={{
              backgroundColor: "var(--nextui-colors-blue50)",
              borderRadius: "5px",
              padding: "5px",
              marginTop: "15px"
            }}
          >
            <Text color="red">
                {userName}
            </Text>
            <Spacer y={0.3} />
            <Text>{msg.messageUser}</Text>
          </Card>
        );
      })}
    </div>
  );
};

export default MessageList;
