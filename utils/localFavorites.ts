const toggleFavorite = (id: number) => {
  console.log("toggleFavorite Llamado");
  let favorite: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorite.includes(id)) {
    favorite = favorite.filter((pokeId) => pokeId !== id);
  } else {
    favorite.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorite));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let favorite: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorite.includes(id);
};

const pokemons = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toggleFavorite,
  existInFavorites,
  pokemons
};
