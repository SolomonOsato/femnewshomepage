import Link from "next/link";

export default function Aside() {
  const AsideContent = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <aside className="bg-neutral-vdGrayBlue text-white lg:col-span-1">
      <section className="grid gap-2 p-4">
        <h1 className="capitalize text-4xl text-primary-orange font-bold">
          new
        </h1>
        {AsideContent.map((aside, index) => (
          <section
            className={index === 0 ? " border-t-0 py-4 md:py-3" : " border-t py-4 md:py-3"}
            key={index}
          >
            <h2 className="text-lg font-bold">
              <Link
                className="cursor-pointer hover:text-primary-orange active:text-primary-orange"
                href={"/"}
              >
                {aside.title}
              </Link>
            </h2>
            <p className="text-neutral-grayBlue">{aside.content}</p>
          </section>
        ))}
      </section>
    </aside>
  );
}
