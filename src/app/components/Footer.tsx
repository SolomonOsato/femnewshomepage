import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const FooterContent = [
    {
      img: "/images/image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      content: "What happens old PCs are given modern upgrades?",
    },
    {
      img: "/images/image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
    },
    {
      img: "/images/image-gaming-growth.jpg",
      title: "The Hrowth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <footer className="grid gap-8 md:gap-4 md:grid-cols-3">
      {FooterContent.map((footer, index) => (
        <section
          className="grid grid-cols-[auto_1fr] items-center gap-4"
          key={index}
        >
          <Image
            src={footer.img}
            alt={footer.title}
            width={200 * 0.5}
            height={254 * 0.5}
            loading="lazy"
          />
          <div className="grid gap-1">
            <span className="text-xl text-neutral-grayBlue font-bold grid gap-2">
              {index > 8 ? index + 1 : `0${index + 1}`}
            </span>
            <h2 className="text-neutral-vdGrayBlue text-sm font-bold">
              <Link
                className="cursor-pointer hover:text-primary-orange active:text-primary-orange capitalize"
                href={"/"}
              >
                {footer.title}
              </Link>
            </h2>

            <p className="text-neutral-dGrayBlue text-xs">{footer.content}</p>
          </div>
        </section>
      ))}
    </footer>
  );
}
