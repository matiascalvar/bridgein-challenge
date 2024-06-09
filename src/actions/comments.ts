import axios from "axios";
import { Comment } from "@/types/interfaces";

export const updateComment = async (commentId: number, body: string) => {
  try {
    const res = await axios.patch<Comment>(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        body,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
