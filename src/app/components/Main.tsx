import Image from "next/image";
import web3Mobile from "../../../public/images/image-web-3-mobile.jpg";
import web3Desktop from "../../../public/images/image-web-3-desktop.jpg";

export default function MainContent() {
  return (
    <main className="md:col-span-2">
      <section className="grid items-start gap-6">
        <Image className="md:hidden" src={web3Mobile} alt="" loading="lazy" />
        <Image
          className="hidden md:block"
          src={web3Desktop}
          alt=""
          loading="lazy"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <h1 className="capitalize font-extrabold text-6xl md:text-5xl [text-wrap:_balance] text-neutral-vdGrayBlue">
            the bright future of web 3.0?
          </h1>
          <div className="grid items-center gap-8 md:gap-6">
            <p className="text-neutral-dGrayBlue max-w-[75ch]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button
              className="w-fit text-center py-4 px-8 md:p-2 bg-primary-red text-white active:bg-neutral-vdGrayBlue capitalize rounded"
              type="button"
            >
              read more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
