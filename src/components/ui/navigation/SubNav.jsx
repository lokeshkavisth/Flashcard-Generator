import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubNav = () => {
  const { pathname } = useLocation();
  const homePages = [
    {
      title: "Create New",
      path: "/",
    },
    {
      title: "My Flashcard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="mb-10">
      <div>
        <h2 className="text-3xl font-bold mb-10">Create Flashcard</h2>
      </div>

      <nav>
        <ul className="flex items-center gap-4 border-b-2 pb-2 border-gray-300">
          {homePages.map(({ title, id, path }) => {
            return (
              <li key={title} className="text-lg font-semibold text-gray-500">
                <NavLink
                  to={path}
                  className={
                    pathname == path &&
                    "border-b-4 pb-2 text-red-500 border-red-500"
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
