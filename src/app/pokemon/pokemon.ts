export interface Pokemon {
   id: number;
   name: string;
   hp: number;
   damage: number,
   picture: string;
   types: Array<string>;
   created: Date;
}