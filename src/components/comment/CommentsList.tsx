import Comment from "./Comment";
import { Comment as CommentType } from "@/types/interfaces";

interface CommentsListProps {
  comments: CommentType[];
  handleEditing: (commentId: number | null) => void;
  editingCommentId: number | null;
  handleSave: (commentId: number, editedText: string) => Promise<void>;
  handleModal: any;
}

const CommentsList = ({
  comments,
  handleEditing,
  editingCommentId,
  handleSave,
  handleModal,
}: CommentsListProps) => {
  return (
    <div className="w-full">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleEditing={handleEditing}
          editingCommentId={editingCommentId}
          handleSave={handleSave}
          handleModal={handleModal}
        />
      ))}
    </div>
  );
};

export default CommentsList;
