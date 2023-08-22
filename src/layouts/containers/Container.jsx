import React from "react";
import SubNav from "../../components/ui/navigation/SubNav";
import Routes from "../../routes/routes";

const Container = () => {  
  return (
    <main>
      <section className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10">
        <SubNav />
        <Routes />
      </section>
    </main>
  );
};

export default Container;
