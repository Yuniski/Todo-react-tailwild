import CrossIcon from "../components/icons/CrossIcon";

const TodoList = () => {
  return (
    <div className="bg-white rounded-md [&>article]:p-4">
      <article className="flex gap-4 border-b border-b-gray-400">
        <button className=" flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-600 grow">Complete online Javascript</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>

      <article className="flex gap-4 border-b border-b-gray-400">
        <button className=" flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-600 grow">Complete online Javascript</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>

      <article className="flex gap-4 border-b border-b-gray-400">
        <button className=" flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
        <p className="text-gray-600 grow">Complete online Javascript</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>
    </div>
  );
};

export default TodoList;
