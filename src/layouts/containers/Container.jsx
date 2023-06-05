import React from "react";

// This function imports the `SubNav` and `Routes` components from the `components/ui/navigation` and `routes` directories, respectively.
import SubNav from "../../components/ui/navigation/SubNav";
import Routes from "../../routes/routes";

// This function defines a `Container` component.
// The `Container` component is a wrapper for all of the other components in the application.
const Container = () => {
  // This function returns a `main` element that contains a `section` element.
  // The `section` element has the following CSS classes:
  // * `max-w-screen-2xl` - The section is set to a maximum width of 1440px.
  // * `px-3` - The section has 3px of padding on all sides.
  // * `mx-auto` - The section is centered horizontally.
  // * `my-8` - The section has 8px of margin on the top and bottom.
  // * `mt-20` - The section has 20px of margin on the top.
  // * `xl:px-20` - The section has 20px of padding on all sides on screens that are larger than 1440px.
  // * `lg:px-14` - The section has 14px of padding on all sides on screens that are larger than 1024px but smaller than 1440px.
  // * `md:px-10` - The section has 10px of padding on all sides on screens that are smaller than 1024px.
  return (
    <main>
      <section className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10">
        {/* Render the SubNav component */}
        <SubNav />
        {/* Render the Routes component */}
        <Routes />
      </section>
    </main>
  );
};

export default Container;
