import React from "react";
import { Typography, Avatar, IconButton, Box } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Comment() {
  const [isExpanded, setExpanded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);
  const [isUnLike, setIsUnLike] = React.useState(false);
  const ThumbUpIcon = isLike ? ThumbUpAltIcon : ThumbUpAltOutlinedIcon;
  const ThumbDownIcon = isUnLike ? ThumbDownAltIcon : ThumbDownAltOutlinedIcon;
  const ExpandIcon = isExpanded ? ArrowDropUpIcon : ArrowDropDownIcon;
  return (
    <Box sx={{ width: "500px", display: "flex" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://yt3.googleusercontent.com/FUdEvDEqiyssPrROTDOOKcNMuS01g32jMwI0RxU0vxtDbaU_rjLLWMPeKputWh3M8oXveTGs=s176-c-k-c0x00ffffff-no-rj"
        sx={{ width: 36, height: 36, marginRight: "8px" }}
      />
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            @helloworld
          </Typography>
          &nbsp;
          <Typography variant="body2">2 days ago (edited)</Typography>
        </Box>
        <Typography variant="body1">
          Absolutely love how the anime doesn’t use the opening and the ending
          as often for extra minutes. And when they do use the ending, they just
          use it in the background. Masterpiece.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => setIsLike((state) => !state)}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton
            sx={{ marginLeft: "8px", marginRight: "8px" }}
            onClick={() => setIsUnLike((state) => !state)}
          >
            <ThumbDownIcon />
          </IconButton>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Reply
          </Typography>
        </Box>
        <IconButton onClick={() => setExpanded((state) => !state)}>
          <ExpandIcon />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            41 replies
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
}
