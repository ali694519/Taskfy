import { useRef } from "react";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}

function InputField({ toDo, setToDo, handelAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full p-8">
      <form
        action=""
        className="flex justify-between gap-2"
        onSubmit={(e) => handelAdd(e)}
      >
        <input
          ref={inputRef}
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="Enter a task..."
          className="w-full border border-blue-500 p-4 focus:outline-none bg-slate-100 rounded-lg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300">
          Go
        </button>
      </form>
    </div>
  );
}

export default InputField;
