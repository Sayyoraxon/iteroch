import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Eleanor Pena",
      src: "/webdev1.png",
    },
    {
      title: "Ralph Edwards",
      src: "/webdev2.png",
    },
    {
      title: "Albert Flores",
      src: "/webdev3.png",
    },
    {
      title: "Jerome Bell",
      src: "/webdev4.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
