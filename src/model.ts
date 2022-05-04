export default interface MovieInterface {
  id: number;
  original_title: string;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  isFavorite?: boolean;
}
