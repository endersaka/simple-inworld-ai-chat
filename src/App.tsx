import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

function App() {
  const [model, setModel] = useState();

  return (
    <>
      <MainContainer responsive>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "Just now",
                sender: "Raimond Scarf",
                direction: "incoming",
                position: "normal",
              }}
            />
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </>
  );
}

export default App;
