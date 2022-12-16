import React from "react";
import { Typography, Avatar, IconButton, Box } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Comment({ comment }) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(comment.isLike);
  const [isUnLike, setIsUnLike] = React.useState(comment.isUnlike);
  const ThumbUpIcon = isLike ? ThumbUpAltIcon : ThumbUpAltOutlinedIcon;
  const ThumbDownIcon = isUnLike ? ThumbDownAltIcon : ThumbDownAltOutlinedIcon;
  const ExpandIcon = isExpanded ? ArrowDropUpIcon : ArrowDropDownIcon;
  return (
    <Box sx={{ width: "500px", display: "flex" }}>
      <Avatar
        alt={comment.user.name}
        src={comment.user.imageUrl}
        sx={{ width: 36, height: 36, marginRight: "8px" }}
      />
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {comment.user.username}
          </Typography>
          &nbsp;
          <Typography variant="body2">
            {comment.timeAgo} {comment.isEdited ? "(edited)" : ""}
          </Typography>
        </Box>
        <Typography variant="body1">{comment.detail}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => setIsLike((state) => !state)}>
            <ThumbUpIcon />
          </IconButton>
          {comment.likecount && (
            <Typography variant="body2">{comment.likecount}</Typography>
          )}
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
        {comment.replies?.length > 0 && (
          <IconButton onClick={() => setExpanded((state) => !state)}>
            <ExpandIcon />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {comment.replies.length} replies
            </Typography>
          </IconButton>
        )}
        {isExpanded && (
          <Box>
            {comment.replies?.map((r) => (
              <Comment key={r.id} comment={r} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
