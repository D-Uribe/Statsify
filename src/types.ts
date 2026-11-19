export type Image = {
  url: string,
}

export type Artist = {
  id: string,
  name: string,
  images: Image[]

}

export type Song = {
  id: string,
  name: string,
  artists: {name: string}[]
  album: {images: Image[]}
}
