import { IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ReferenceCard, { ReferenceCardType } from "./ReferenceCard";
// import { references } from "./references";
// import { references as referenceCards_ } from "./references";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SingleReferenceCard from "./SingleReferenceCard";
import { useMobile } from "@/hooks/useMobile";

interface ReferenceSliderProps {
  referenceCards: ReferenceCardType[];
}
const ReferenceSlider = ({ referenceCards }: ReferenceSliderProps) => {
  const isMobile = useMobile();
  const cardWidth = isMobile ? 270 : 720;
  const cardsDesktop = referenceCards.map((reference, index) => (
    <ReferenceCard
      reference={reference}
      index={index}
      cardWidth={cardWidth - 20}
    />
  ));
  const cardsMobile: JSX.Element[] = [];
  referenceCards.forEach((reference) => {
    cardsMobile.push(<SingleReferenceCard reference={reference} />);
    cardsMobile.push(<SingleReferenceCard details reference={reference} />);
  });
  const cards = isMobile ? cardsMobile : cardsDesktop;
  const length = cards.length;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const nextCardIndex =
    currentCardIndex < cards.length - 1 ? currentCardIndex + 1 : 0;
  const prevCardIndex =
    currentCardIndex > 0 ? currentCardIndex - 1 : cards.length - 1;

  const currentCards = [
    cards[prevCardIndex],
    cards[currentCardIndex],
    cards[nextCardIndex],
  ];
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [position, setPosition] = useState(-cardWidth);
  const [transition, setTransition] = useState("left 0.3s");
  const baseTransition = "left 0.3s ease-in-out";

  const changeCard = (direction: "next" | "previous", length: number) => {
    setButtonsDisabled(true);
    setTransition(baseTransition);
    setPosition(
      direction === "next" ? position - cardWidth : position + cardWidth
    );
    setTimeout(() => {
      setTransition("");
      setPosition(-cardWidth);
      setCurrentCardIndex((prev) => {
        const nextCardIndex = prev < length - 1 ? prev + 1 : 0;
        const prevCardIndex = prev > 0 ? prev - 1 : length - 1;
        const newIndex = direction === "next" ? nextCardIndex : prevCardIndex;
        return newIndex;
      });
      setButtonsDisabled(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeCard("next", length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <Stack justifyContent="center" alignItems="center" flexDirection="row">
      <IconButton
        aria-label="left"
        disabled={buttonsDisabled}
        onClick={() => changeCard("previous", length)}
        color="primary"
      >
        <ArrowLeftIcon />
      </IconButton>
      <Stack
        width={cardWidth}
        height={480}
        flexDirection="row"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        <Stack
          width={3 * cardWidth}
          height={480}
          flexDirection="row"
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 4fr 4fr 4fr 2fr",
            position: "absolute",
            left: `${position}px`,
            transition: `${transition}`,
          }}
        >
          {currentCards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </Stack>
      </Stack>
      <IconButton
        aria-label="left"
        disabled={buttonsDisabled}
        onClick={() => changeCard("next", length)}
        color="primary"
      >
        <ArrowRightIcon />
      </IconButton>
    </Stack>
  );
};
export default ReferenceSlider;
