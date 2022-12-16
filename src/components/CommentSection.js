import Comment from "./Comment";

export default function CommentSection() {
  const comments = [{}, {}];
  return (
    <div className="section">
      {comments.map((c) => {
        return <Comment />;
      })}
    </div>
  );
}
