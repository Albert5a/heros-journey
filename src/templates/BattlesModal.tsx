"use client";
import Box from "@mui/material/Box";
import { useModalStore } from "@/store/modalStore";
import HerosCardModal from "@/organisms/HerosCardModal";
import HerosPowerTypo from "@/atoms/HerosPowerTypo";
import { Dialog, DialogTitle, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useCardsStore } from "@/store/cardsStore";

const BattlesModal = () => {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen);
  const selectedCards = useCardsStore((state) => state.selectedCards);
  const setSelectedCards = useCardsStore((state) => state.setSelectedCards);
  const [powerStatsOne, setPowerStatsOne] = useState(0);
  const [powerStatsTwo, setPowerStatsTwo] = useState(0);
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (selectedCards && selectedCards.length > 1) {
      const powerStatsHeroOne = selectedCards[0]?.powerstats;
      const powerStatsHeroTwo = selectedCards[1]?.powerstats;

      if (powerStatsHeroOne && powerStatsHeroTwo) {
        let sumHeroOne = Object.values(powerStatsHeroOne).reduce(
          (acc: number, val: any | number) => acc + (parseInt(val) || 0),
          0
        );
        let sumHeroTwo = Object.values(powerStatsHeroTwo).reduce(
          (acc: number, val: any | number) => acc + (parseInt(val) || 0),
          0
        );

        setPowerStatsOne(sumHeroOne);
        setPowerStatsTwo(sumHeroTwo);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (powerStatsTwo > 0) {
      if (powerStatsOne > powerStatsTwo) {
        setWinner(selectedCards[0]?.name);
      } else {
        setWinner(selectedCards[1]?.name);
      }
    }
  }, [powerStatsOne, powerStatsTwo, selectedCards, setWinner]);

  const handleClose = () => {
    setSelectedCards([]);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Dialog open={isModalOpen}>
        <DialogTitle fontWeight="bold" textAlign={"center"}>
          {winner}
          <DialogTitle color="green" fontWeight="bold">
            Winner!!!
          </DialogTitle>
          <DialogTitle fontWeight="bold">
            {powerStatsOne} x {powerStatsTwo}
          </DialogTitle>
        </DialogTitle>
        <Box
          width={600}
          bgcolor={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="hidden sm:flex p-2 cursor-pointer"
        >
          {selectedCards && selectedCards[0] && (
            <>
              <HerosCardModal
                name={selectedCards[0].name}
                powerStats={powerStatsOne}
                image={selectedCards[0].images.sm}
              />
              <div className="block">
                <HerosPowerTypo
                  child={selectedCards[0].powerstats.intelligence}
                />
                <HerosPowerTypo child={selectedCards[0].powerstats.strength} />
                <HerosPowerTypo child={selectedCards[0].powerstats.speed} />
                <HerosPowerTypo
                  child={selectedCards[0].powerstats.durability}
                />
                <HerosPowerTypo child={selectedCards[0].powerstats.power} />
                <HerosPowerTypo child={selectedCards[0].powerstats.combat} />
              </div>
            </>
          )}
          <div className="block">
            <HerosPowerTypo child="Intelligence" />
            <HerosPowerTypo child="Strength" />
            <HerosPowerTypo child="Speed" />
            <HerosPowerTypo child="Durability" />
            <HerosPowerTypo child="Power" />
            <HerosPowerTypo child="Combat" />
          </div>
          {selectedCards && selectedCards[1] && (
            <>
              <div className="block">
                <HerosPowerTypo
                  child={selectedCards[1].powerstats.intelligence}
                />
                <HerosPowerTypo child={selectedCards[1].powerstats.strength} />
                <HerosPowerTypo child={selectedCards[1].powerstats.speed} />
                <HerosPowerTypo
                  child={selectedCards[1].powerstats.durability}
                />
                <HerosPowerTypo child={selectedCards[1].powerstats.power} />
                <HerosPowerTypo child={selectedCards[1].powerstats.combat} />
              </div>
              <HerosCardModal
                name={selectedCards[1].name}
                powerStats={powerStatsTwo}
                image={selectedCards[1].images.sm}
              />
            </>
          )}
        </Box>
        <ListItemButton
          className="flex items-center justify-center"
          autoFocus
          onClick={() => handleClose()}
        >
          Continuar batalhando
        </ListItemButton>
      </Dialog>
    </div>
  );
};

export default BattlesModal;
