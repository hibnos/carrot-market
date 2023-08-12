import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid  gap-10 bg-slate-400 px-10 py-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className="flex flex-col justify-center rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <ul>
          {[1, 2].map(i => (
            <div
              key={i}
              className="my-2 flex justify-between odd:bg-blue-50 even:bg-gray-100"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$170</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 flex justify-between border-t-2 border-dashed font-semibold">
          <span>Total</span>
          <span>$970</span>
        </div>
        <button className="mx-auto mt-5 block w-2/4 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black">
          Checkout
        </button>
      </div>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-40">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-green-400 group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-12 flex flex-col items-center">
            <span className="font-semibold">Tony Molloy</span>
            <span className="text-gray-400">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex items-center justify-between">
          <span>&larr;</span>
          <div className="mb-3 space-x-3">
            <span>🎇 4.9</span>
            <span className="rounded-md p-2 shadow-xl">❤</span>
          </div>
        </div>
        <div className="mb-5 h-80 bg-blue-400" />
        <div>
          <span className="flex flex-col text-xl font-semibold">
            Swoon Lounge
          </span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mb-5 mt-3 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex aspect-square w-7 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-7 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">$450</span>
            <button className="rounded-lg bg-blue-500 px-8 py-2 text-center text-base text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
