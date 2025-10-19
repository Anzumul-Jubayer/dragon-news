import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HLayout = () => {
  
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-4">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-4  grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-2 h-fit ">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HLayout;
