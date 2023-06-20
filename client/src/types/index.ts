export interface DetailListType {
  detail: {
    list: List;
  };
}
export interface ListType {
  list: List;
}

export interface List {
  cover_img: string;
  title: string;
  album: string;
  artist_no: number;
  artist: string;
  lyrics: string;
  file_path: string;
  artist_img: string;
  loading: boolean;
}
