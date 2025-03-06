export default interface IFavoriteUser {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  isFavorite?: boolean;
  userId?: string;
}
