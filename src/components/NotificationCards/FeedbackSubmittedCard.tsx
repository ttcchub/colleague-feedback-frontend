import { Typography, Card, CardHeader, Avatar, Button } from "@mui/material";
import { Notification, UserContextProps } from "../../types/types";
import { getTodayDate } from "../../utils/formatDate";
import { CardStyle, CardSubheader } from "./constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

type FeedbackSubmittedCardProps = {
  noti: Notification;
};

const FeedbackSubmittedCard = ({ noti }: FeedbackSubmittedCardProps) => {
  let today = getTodayDate();

  const { adminNoti } = useContext<UserContextProps>(UserContext);

  return (
    <Card sx={CardStyle(noti.date === today)}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: "#fcb900",
            }}
          >
            {noti.sender[0].senderName.slice(0, 1)}
          </Avatar>
        }
        title={
          <Typography>
            {adminNoti ? (
              <b>
                <span style={{ color: "#9b51e0" }}>
                  {noti.sender[0].senderName}
                </span>{" "}
                has submitted a feedback for
                <span style={{ color: "#9b51e0" }}>
                  {" "}
                  {noti.receiver[0].receiverName}.
                </span>
              </b>
            ) : (
              <>
                <b>
                  <span style={{ color: "#9b51e0" }}>
                    {noti.sender[0].senderName}
                  </span>{" "}
                  has submitted a feedback for you.
                </b>
              </>
            )}
          </Typography>
        }
        subheader={CardSubheader(noti.date)}
        action={
          <Link to={`/requests/${noti.requestid}`}>
            <Button variant="contained">View request</Button>
          </Link>
        }
      ></CardHeader>
    </Card>
  );
};

export default FeedbackSubmittedCard;
