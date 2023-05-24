import React from "react";

const Myflashcard = () => {
  return (
    <div className="flex flex-col justify-center items-center p-7 space-y-3  text-center bg-white rounded-md text-black w-72 sm:w-96 relative border-2 border-slate-200">
      <div className="absolute -top-9">
        <img
          className="rounded-full w-16 object-cover aspect-square"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XhmHVK5ZbLk-6c6i1V9sSvSFJjjBTvb1ZU3CSqP_DOKFZZyoYw-6yRNzCtjJhG-RBw5HAzVK3AA&usqp=CAU&ec=48600113"
          alt="img"
        />
      </div>
      <h2 className="font-bold text-lg">GroupName</h2>
      <p className="text-center font-medium text-sm text-slate-500 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        aliquam, autem unde, minus dolorem velit illum dolor praesentium fuga
        reprehenderit perferendis? Quaerat obcaecati tenetur rerum cum sunt sit
        iusto voluptatem!
      </p>
      <div className="flex flex-col items-center gap-3">
        <span className="font-medium text-sm text-slate-600">
          Number of Cards
        </span>

        <button className="py-1 sm:px-16 px-14 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600">
          View Cards
        </button>
      </div>
    </div>
  );
};

export default Myflashcard;
