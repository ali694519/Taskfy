import { Droppable } from "react-beautiful-dnd";
import { ToDo } from "../type";
import SingleToDo from "./SingleToDo";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
function ToDoList({
  toDos,
  setToDos,
  completedToDos,
  setCompletedToDos,
}: Props) {
  return (
    <div className="relative">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-1/2 border-r border-gray-300 bg-cyan-600 rounded-sm"
          >
            <span className="text-2xl p-8 font-mono text-white">
              Active Tasks
            </span>
            <div className="flex flex-col gap-2 text-xl p-6">
              {toDos.map((todo, index) => (
                <SingleToDo
                  index={index}
                  todo={todo}
                  key={todo.id}
                  toDos={toDos}
                  setToDos={setToDos}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="bg-red-500 w-1/2 space-y-12  rounded-sm absolute right-0 top-[-1px] "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-2xl p-8 font-mono text-white">
              Completed Tasks
            </span>
            <div className="flex flex-col gap-2 text-xl">
              {completedToDos.map((todo, index) => (
                <SingleToDo
                  index={index}
                  todo={todo}
                  key={todo.id}
                  toDos={completedToDos}
                  setToDos={setCompletedToDos}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ToDoList;
