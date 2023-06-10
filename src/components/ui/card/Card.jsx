import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbTrashX } from "react-icons/tb";
import { Link } from "react-router-dom";
import dummyImage from "../../../assets/dummy_image.jpg";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { deleteFlashcard } from "../../../redux/actions/actions";

const Card = ({ group, groupDesc, terms, image, id }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sm:w-72 w-full md:w-80 lg:w-80 mx-auto sm:mx-0 bg-white border border-gray-300 shadow-sm rounded-md p-5 pt-8 relative flex flex-col justify-between"
      id={id}
    >
      <div className="absolute top-1 right-1">
        <Button
          type={"button"}
          text={<TbTrashX />}
          fn={() => dispatch(deleteFlashcard(id))}
          btnclass={
            "p-1 rounded-md text-red-500 text-xl hover:bg-gray-100 transition-all active:bg-red-200"
          }
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="w-14 h-14">
          <img
            className="w-14 h-14 min-w-max object-cover aspect-square rounded-full"
            src={!image ? dummyImage : image}
            alt="flashcard-profile"
            title="flashcard-profile"
            loading="lazy"
          />
        </div>
        <div className="break-words line-clamp-1">
          <h2 className="font-bold text-lg break-words line-clamp-1">
            {group}
          </h2>
          <span className="text-gray-500 font-semibold">
            {terms.length} {terms.length <= 1 ? "Term" : "Terms"}
          </span>
        </div>
      </div>

      <div className="my-4">
        <p className="text-gray-600 line-clamp-2">{groupDesc}</p>
        <Link
          to={`/dashboard/${id}`}
          className="flex items-center gap-5 mt-5 text-red-600 font-semibold"
          title="view card details"
        >
          View Card
          <i>
            <BsArrowRight />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
