import { MdArrowOutward } from "react-icons/md";
import { HoverEffect } from "./ui/card-hover-effect";


export function Projects() {
  return (
    <div id="projects" className="px-3 w-full py-[140px]" style={{ backgroundImage: "url(/BG.png)" }}>
      <div className="max-w-[1296px] mx-auto">
        <p className="font-semibold text-[18px] leading-[26px] text-[#ff8911]">
          PROJECTS
        </p>
        <p className="mt-4 max-w-[736px] font-semibold text-[64px] leading-[72px] text-white">
          Awesome works for our Clients
        </p>
        <div className="mt-4 w-full flex justify-between items-center">
                    <p className="w-[736px] font-normal text-base leading-6 text-white">
                        Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.
                    </p>
                    <button className="flex items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#ff8911]">
                        <MdArrowOutward className="w-7 h-7"/>
                        VIEW ALL
                    </button>
                </div>
        <HoverEffect items={projects} />
      </div>

    </div>
  );
}
export const projects = [
  {
    title: "Tech Cover Industry",
    description:
      "There are many variations of passages",
    link: "/card1.png",
  },
  {
    title: "Application Integration",
    description:
      "There are many variations of passages",
    link: "/card2.png",
  },
  {
    title: "Application Integration",
    description:
      "There are many variations of passages",
    link: "/card3.png",
  },
  {
    title: "Database Design",
    description:
      "There are many variations of passages",
    link: "/card4.png",
  },
  {
    title: "Tech Cover Industry",
    description:
      "There are many variations of passages",
    link: "/card5.png",
  },
  {
    title: "Database Design",
    description:
      "There are many variations of passages",
    link: "/card1.png",
  },
];
