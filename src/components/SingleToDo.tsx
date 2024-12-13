import React, { useState } from "react";
import { ToDo } from "../type";
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;

  todo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

function SingleToDo({ todo, toDos, setToDos, index }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.name);

  const HandelDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handelDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, name: editToDo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
          className="flex flex-col  border-2 border-white p-1 rounded-lg hover:bg-slate-400"
          onSubmit={(e) => handelEdit(e, todo.id)}
        >
          <div className="flex justify-between p-2 ">
            {edit ? (
              <input
                className="border border-white focus:outline-none"
                type="text"
                value={editToDo}
                onChange={(e) => setEditToDo(e.target.value)}
              />
            ) : todo.isDone ? (
              <s>{todo.name}</s>
            ) : (
              <span>{todo.name}</span>
            )}

            <div className="flex justify-end gap-4 text-xl">
              <span
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <CiEdit />
              </span>
              <span
                className="hover:cursor-pointer"
                onClick={() => handelDelete(todo.id)}
              >
                <FaDeleteLeft />
              </span>
              <span
                className="hover:cursor-pointer"
                onClick={() => HandelDone(todo.id)}
              >
                <IoMdDoneAll />
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
}

export default SingleToDo;
