"use client";

import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-5xl w-screen overflow-x-hidden mx-auto p-4 grid gap-12 bg-neutral-offwhite">
	<Header />
      <div className="grid gap-12 md:gap-6 lg:grid-cols-3">
		<Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
