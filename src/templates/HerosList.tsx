"use client";
import { useEffect } from "react";
import { requestHerosList } from "@/api/requests";
import { useModalStore } from "@/store/modalStore";
import { useCardsStore } from "@/store/cardsStore";
import { useJourneyStore } from "@/store/journeyStore";

import HerosCard from "../organisms/HerosCard";
import Header from "@/organisms/Header";
import { useSearchStore } from "@/store/searchStore";
import { useBattleStyleStore } from "@/store/battleStyleStore";

const HerosList = () => {
  const herosJourney = useJourneyStore((state) => state.herosJourney);
  const setHerosJourney = useJourneyStore((state) => state.setHerosJourney);
  const selectedCards = useCardsStore((state) => state.selectedCards);
  const setSelectedCards = useCardsStore((state) => state.setSelectedCards);
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen);
  const searchHero = useSearchStore((state) => state.searchHero);
  const setBattleState = useBattleStyleStore((state) => state.setBattleState);
  const battleState = useBattleStyleStore((state) => state.battleState);

  const handleCardClick = (selectedHero: any) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, selectedHero]);
      setBattleState(selectedHero)
      if (selectedCards.length === 1) {
        setIsModalOpen(!isModalOpen);
      }
    }
  };

  useEffect(() => {
    const handleHerosList = async () => {
      try {
        const heros = await requestHerosList();
        setHerosJourney(heros);
      } catch (error) {
        console.error("erro ao receber herói");
      }
    };
    handleHerosList();
  }, [setHerosJourney]);

  return (
      <div className="flex flex-col items-center justify-center">
        <Header />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-1 lg:gap-3 xl:gap-5 ">
          {searchHero
            ? herosJourney
                .filter((hero) =>
                  hero.name.toLowerCase().includes(searchHero.toLowerCase())
                )
                .map((filteredItem) => (
                  <div key={filteredItem.id}>
                    <div className={battleState === filteredItem ? 'border-[4px] border-red-600' : ''} onClick={() => handleCardClick(filteredItem)}>
                      <HerosCard
                        powerStats={
                          filteredItem.powerstats.intelligence +
                          filteredItem.powerstats.strength +
                          filteredItem.powerstats.speed +
                          filteredItem.powerstats.durability +
                          filteredItem.powerstats.power +
                          filteredItem.powerstats.combat
                        }
                        name={filteredItem.name}
                        image={filteredItem.images.sm}
                      />
                    </div>
                  </div>
                ))
            : herosJourney.map((hero) => (
                <div key={hero.id}>
                  <div className={battleState === hero ? 'border-[4px] border-red-600' : ''} onClick={() => handleCardClick(hero)}>
                    <HerosCard
                      powerStats={
                        hero.powerstats.intelligence +
                        hero.powerstats.strength +
                        hero.powerstats.speed +
                        hero.powerstats.durability +
                        hero.powerstats.power +
                        hero.powerstats.combat
                      }
                      name={hero.name}
                      image={hero.images.sm}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
  );
};

export default HerosList;
