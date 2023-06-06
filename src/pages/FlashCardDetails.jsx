// Flashcard detail page that shows flashcard data

import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft, BsDownload, BsPrinter } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import Button from "../components/ui/button/Button";
import { GrNext, GrPrevious } from "react-icons/gr";
import ShareModal from "../components/ui/modal/ShareModal";
import Slider from "../components/ui/slider/Slider";
import PrintTemplate from "../components/template/PrintTemplate";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

const FlashcardDetails = () => {
  const params = useParams();
  const { id } = params;
  const [toggleModal, setToggleModal] = useState("hidden");
  const { flashcards } = useSelector((state) => state.flashCardData);

  // download as pdf
  const pdfRef = useRef();
  const downloadPDF = useReactToPrint({
    content: () => pdfRef.current,
  });

  // download single term
  const termRef = useRef();

  // share, download and print button data
  const SideBtnData = [
    {
      btn_id: 1,
      btn_title: "share the webpage",
      btn_icon: <CiShare2 className="text-blue-600" />,
      btn_text: "Share",
      btn_fn: () => {
        setToggleModal("grid");
      },
    },
    {
      btn_id: 2,
      btn_title: "download as PDF",
      btn_icon: <BsDownload className="text-blue-600" />,
      btn_text: "Download",
      btn_fn: downloadPDF,
    },
    {
      btn_id: 3,
      btn_title: "print",
      btn_icon: <BsPrinter className="text-blue-600" />,
      btn_text: "Print",
      btn_fn: useReactToPrint({
        content: () => termRef.current,
      }),
    },
  ];

  const [state, setState] = useState({
    term: "",
    defination: "",
    image: "",
    index: 0,
    totalTerms: 0,
  });

  const [active, setActive] = useState(null);

  const fetchTermData = (term, defination, image, index, totalTerms) =>
    setState({ term, defination, image, index, totalTerms });

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  const displayData = (newInd) => {
    flashcards.map((item) => {
      return item.terms.map(({ term, defination, image }, index, arr) => {
        if (newInd == index) {
          setActive(newInd);
          const totalTerms = arr.length;
          fetchTermData(term, defination, image, index, totalTerms);
        }
        return null;
      });
    });
  };
  console.log("active", active);

  return (
    <div>
      {/* share modal  */}

      <ShareModal show={toggleModal} hide={setToggleModal} />
      <PrintTemplate pdfRef={pdfRef} />

      {/* title and description */}
      <div className="flex items-start gap-5 mb-10">
        <div>
          <Link to="/dashboard">
            <i className="text-xl text-red-600">
              <BsArrowLeft />
            </i>
          </Link>
        </div>
        <div>
          {flashcards.map((card) => {
            if (card.id == id) {
              return (
                <div key={card.id}>
                  <h3 className="text-2xl font-semibold leading-none capitalize mb-2">
                    {card.groups.group}
                  </h3>
                  <p>{card.groups.groupDesc}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* card details container */}

      <div className="xl:flex xl:gap-3 xl:items-start">
        {/* card list */}
        <div className="bg-white p-4 rounded-md max-h-96">
          <h5 className="text-gray-500 border-b-2 border-b-gray-100 font-semibold">
            Flashcards
          </h5>
          <ul className="flex gap-3 mt-4 font-medium text-gray-600 xl:overflow-y-scroll max-h-80 pb-5 overflow-x-scroll xl:flex-col xl:w-52 xl:overflow-x-auto">
            {flashcards.map((item) => {
              if (item.id == id) {
                return item.terms.map(
                  ({ term, defination, image }, index, arr) => (
                    <li key={index} className="border-b border-gray-100 ">
                      <button
                        type="button"
                        ref={index == 0 ? buttonRef : null}
                        onClick={() => {
                          setActive(index);

                          const totalTerms = arr.length;
                          fetchTermData(
                            term,
                            defination,
                            image,
                            index,
                            totalTerms
                          );
                        }}
                        className={`text-left w-52 bg-gray-200 p-3 rounded-md shadow-sm truncate xl:w-full xl:bg-transparent xl:p-0 xl:pb-1 transition-all xl:hover:text-blue-500 ${
                          active == index && "xl:text-blue-500"
                        }`}
                      >
                        {term}
                      </button>
                    </li>
                  )
                );
              }
              return null;
            })}
          </ul>
        </div>
        {/* slider or middle container that show flashcard defination */}
        <div className="space-y-10 w-full mb-10" id="myId">
          <Slider
            key={id}
            defination={state.defination}
            image={state.image}
            term={state.term}
            termRef={termRef}
          />

          {/*button's to change the term defination */}
          <div className="flex items-center gap-8 justify-center">
            <Button
              type={"button"}
              text={<GrPrevious />}
              fn={() => displayData(active - 1)}
              btnclass={"p-2 rounded-md active:bg-blue-100 hover:bg-gray-200"}
            />
            <span>
              {state.index + 1}/{state.totalTerms}
            </span>
            <Button
              type={"button"}
              text={<GrNext />}
              fn={() => displayData(active + 1)}
              btnclass={"p-2 rounded-md active:bg-blue-100 hover:bg-gray-200"}
            />
          </div>
        </div>
        {/* download, print and share buttons */}
        <div>
          <ul className="flex gap-3 overflow-x-scroll xl:flex-col xl:overflow-x-auto">
            {SideBtnData.map(
              ({ btn_icon, btn_text, btn_title, btn_id, btn_fn }) => (
                <li key={btn_id}>
                  <Button
                    fn={btn_fn}
                    type={"button"}
                    title={`Click here to ${btn_title}`}
                    text={
                      <>
                        {btn_icon}
                        {btn_text}
                      </>
                    }
                    btnclass="flex items-center gap-2 bg-white rounded-md w-full shadow-sm transition-all px-6 py-2"
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDetails;
