"use client";
import { useEffect } from "react";
import { requestHerosList } from "@/api/requests";
import { useModalStore } from "@/store/modalStore";
import { useCardsStore } from "@/store/cardsStore";
import { useBattleStore } from "@/store/battleStore";

import HerosCard from "../organisms/HerosCard";
import BattlesModal from "./BattlesModal";
import Header from "@/organisms/Header";
import { useSearchStore } from "@/store/searchStore";

const HerosList = () => {
  const herosBattle = useBattleStore((state) => state.herosBattle);
  const setHerosBattle = useBattleStore((state) => state.setHerosBattle);
  const selectedCards = useCardsStore((state) => state.selectedCards);
  const setSelectedCards = useCardsStore((state) => state.setSelectedCards);
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen);
  const searchHero = useSearchStore((state) => state.searchHero);

  const handleCardClick = (selectedHero: any) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, selectedHero]);
      if (selectedCards.length === 1) {
        setIsModalOpen(!isModalOpen);
      }
    }
  };

  useEffect(() => {
    const handleHerosList = async () => {
      try {
        const heros = await requestHerosList();
        setHerosBattle(heros);
      } catch (error) {
        console.error("erro ao receber herói");
      }
    };
    handleHerosList();
  }, [setHerosBattle]);

  return (
    <div>
      <div className="block">
        <Header />
        <div className="grid grid-cols-2 gap-2">
          {searchHero
            ? herosBattle
                .filter((hero) =>
                  hero.name.toLowerCase().includes(searchHero.toLowerCase())
                )
                .map((filteredItem) => (
                  <div key={filteredItem.id}>
                    <div onClick={() => handleCardClick(filteredItem)}>
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
            : herosBattle.map((hero) => (
                <div key={hero.id}>
                  <div onClick={() => handleCardClick(hero)}>
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
      <BattlesModal />
    </div>
  );
};

export default HerosList;
