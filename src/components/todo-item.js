import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-black text-white p-3 mb-1">
      <div>{text}</div>
      <div className="flex items-center">
        <AiFillEdit
          className="mr-2 text-blue-400 cursor-pointer"
          onClick={updateMode}
        />
        <FaRegTrashAlt
          className="text-red-400 cursor-pointer"
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoItem;
