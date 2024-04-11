import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/styledComponents";
import { matteBlack } from "../../constants/color";
import { DoughnutChart, LineChart } from "../../components/specific/Charts";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        //borderRadius: "1rem",
        bgcolor: matteBlack,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "3rem",
          }}
        />

        <SearchField></SearchField>

        <CurveButton>
          <SearchIcon />
        </CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem "}
      justifyContent="space-between"
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={101} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={12} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={4564} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            sm: "stretch",
          }}
          sx={{
            gap: "2rem",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "41rem",
              //width: { xs: "100%", sm: "50%" },
              bgcolor: matteBlack,
            }}
          >
            <Typography margin={"2rem 0"} variant="h5">
              Last Messages
            </Typography>
            <LineChart value={[2, 6, 5, 7, 4, 8, 6]} />
          </Paper>
          <Paper
            elevation={4}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
              bgcolor: matteBlack,
            }}
          >
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[67, 23]}
            />

            <Stack
              position="absolute"
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing="0.5rem"
              width="100%"
              height="100%"
            >
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={4}
    sx={{
      bgcolor: matteBlack,
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}
  >
    <Stack alignItems="center" spacing="1rem">
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid rgba(0,0,0,0.9)",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="1rem">
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
