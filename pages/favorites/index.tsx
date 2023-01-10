import { useEffect, useState } from "react";
//import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritePages = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
       {
        favoritePokemons.length === 0?
        <NoFavorites />:<FavoritePokemons pokemons={favoritePokemons}/>
       }

    </Layout>
  );
};

export default FavoritePages;
