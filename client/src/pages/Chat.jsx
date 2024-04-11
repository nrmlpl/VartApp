import {
  AddReaction as AddReactionIcon,
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { Fragment, useRef } from "react";
import FileMenu from "../components/dialogs/FileMenu";
import AppLayout from "../components/layout/AppLayout";
import MessageComponent from "../components/shared/MessageComponent";
import { InputBox } from "../components/styles/styledComponents";
import { jetBlack, lightGray, mahony } from "../constants/color";
import { sampleMessage } from "../constants/sampleData";

const user ={
  _id: "shdvuhsjdvhdv",
  name: "NIrmal Pal",
}

const Chat = () => {
  const containerRef = useRef(null)

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={jetBlack}
        height={"93%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map(i => (
            <MessageComponent key={i._id} message={i} user={user} />
          ))
        }
      </Stack>

      <form
        style={{
          height: "7%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          position={"relative"}
          bgcolor={jetBlack}
          padding={"0.2rem"}
        >
          <IconButton
            sx={{
              color: lightGray,
              bgcolor: mahony,
              //position: "absolute",
              //left: "0.75rem",
              marginLeft: "0.5rem",
              padding: "0.35rem",
            }}
          >
            <AddReactionIcon />
          </IconButton>
          <IconButton
            sx={{
              rotate: "90deg",
              color: lightGray,
              bgcolor: mahony,
              //position: "absolute",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              padding: "0.35rem",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type message here..." />
          <IconButton
            sx={{
              //rotate: "-30deg",
              color: lightGray,
              bgcolor: mahony,
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              padding: "0.45rem",
            }}
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  );
}

export default AppLayout()(Chat);
