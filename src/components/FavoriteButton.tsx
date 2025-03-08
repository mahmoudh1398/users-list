import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk-store";
import { toggle } from "@/store/favorites/favorites-slice";
import { TFavoriteUser } from "@/types/favorite-user.type";

type TProps = {
  user: TFavoriteUser;
};

export default function FavoriteButton({ user }: TProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = favorites?.some((favorite) => favorite.id === user.id);

  return (
    <IconButton
      color="error"
      aria-label={isFavorite ? "favorite" : "unfavorite"}
      onClick={() => dispatch(toggle(user))}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}
