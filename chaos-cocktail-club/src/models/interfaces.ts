export interface ICocktail {
  id?: string;
  name: string;
  description?: string;
  ingredients?: IIngredient[];
  instructions?: string[];
  category?: string;
  imagePath?: string;
}

export interface IIngredient {
  name: string;
  quantity: number;
  unit: string;
}
