import Comment from "./Comment";
import commentsJson from "../data/comments.json";

export default function CommentSection() {
  return (
    <div className="section">
      {commentsJson.map((comment) => {
        return (
          <Comment
            sx={{ marginBottom: "8px" }}
            key={comment.id}
            comment={comment}
          />
        );
      })}
    </div>
  );
}
