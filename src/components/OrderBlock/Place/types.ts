export interface IPlace {
  name: string
  coord: number[]
}

export interface IDataOrderPlace {
  city: IPlace
  streets: IPlace[]
}
