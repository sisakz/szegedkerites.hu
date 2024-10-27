import { IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ReferenceCard from "./ReferenceCard";
import { references } from "./references";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ReferenceSlider = () => {
  const cards = references.map((reference, index) => (
    <ReferenceCard reference={reference} index={index} />
  ));
  const cardWidth = 720;
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

  const changeCard = (direction: "next" | "previous") => () => {
    setButtonsDisabled(true);
    setTransition(baseTransition);
    setPosition(
      direction === "next" ? position - cardWidth : position + cardWidth
    );
    setTimeout(() => {
      setTransition("");
      setPosition(-cardWidth);
      setCurrentCardIndex(direction === "next" ? nextCardIndex : prevCardIndex);
      setButtonsDisabled(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeCard("next")();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentCardIndex]);

  return (
    <Stack justifyContent="center" alignItems="center" flexDirection="row">
      <IconButton
        aria-label="left"
        disabled={buttonsDisabled}
        onClick={changeCard("previous")}
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
        onClick={changeCard("next")}
        color="primary"
      >
        <ArrowRightIcon />
      </IconButton>
    </Stack>
  );
};
export default ReferenceSlider;
