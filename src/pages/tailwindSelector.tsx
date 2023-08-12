import { NextPage } from "next";

const Selector: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:bg-indigo-600 open:text-white">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <input
        type="file"
        className="file:cursor-pointer file:rounded-md file:border-0 file:bg-purple-500 file:text-xs file:text-white file:transition-colors"
      />
      <p className="first-letter:text-7xl first-letter:hover:text-purple-500">
        Lalalalal
      </p>
    </div>
  );
};
export default Selector;
