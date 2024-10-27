import PageContainer from "@/components/PageContainer";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const Kapcsolat = () => {
  const cards = [1, 2, 3, 4].map(
    (index) => `url(/src/assets/images/cards/card-${index}.png)`
  );
  console.log({ cards });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  console.log({ currentCardIndex });
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
  const [position, setPosition] = useState(-340);
  const [transition, setTransition] = useState("left 0.3s");
  const baseTransition = "left 0.3s ease-in-out";

  const changeCard = (direction: "next" | "previous") => () => {
    setButtonsDisabled(true);
    setTransition(baseTransition);
    setPosition(direction === "next" ? position - 340 : position + 340);
    setTimeout(() => {
      setTransition("");
      setPosition(-340);
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
  console.log({ transition });

  return (
    <PageContainer>
      <Stack justifyContent="center" alignItems="center" flexDirection="row">
        <button
          onClick={changeCard("previous")}
          style={{ width: "50px" }}
          disabled={buttonsDisabled}
        >
          {"<"}
        </button>
        <Stack
          width={340}
          height={480}
          flexDirection="row"
          sx={{ position: "relative", overflow: "hidden" }}
        >
          <Stack
            width={3 * 340}
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
              <Box
                key={index}
                sx={{
                  backgroundImage: card,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  boxShadow: 1,
                  width: 340,
                  height: 480,
                  p: 2,
                }}
              ></Box>
            ))}
          </Stack>
        </Stack>
        <button
          onClick={changeCard("next")}
          style={{ width: "50px" }}
          disabled={buttonsDisabled}
        >
          {">"}
        </button>
      </Stack>
    </PageContainer>
  );
};
export default Kapcsolat;
