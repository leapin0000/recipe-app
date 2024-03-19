export interface RecipeResponse {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Hit[];
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  digest: Digest[];
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: Sub[];
}

export interface Sub {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

export interface TotalDaily {
  ENERC_KCAL: ENERCKCAL;
  FAT: ENERCKCAL;
  FASAT: ENERCKCAL;
  CHOCDF: ENERCKCAL;
  FIBTG: ENERCKCAL;
  PROCNT: ENERCKCAL;
  CHOLE: ENERCKCAL;
  NA: ENERCKCAL;
  CA: ENERCKCAL;
  MG: ENERCKCAL;
  K: ENERCKCAL;
  FE: ENERCKCAL;
  ZN: ENERCKCAL;
  P: ENERCKCAL;
  VITA_RAE: ENERCKCAL;
  VITC: ENERCKCAL;
  THIA: ENERCKCAL;
  RIBF: ENERCKCAL;
  NIA: ENERCKCAL;
  VITB6A: ENERCKCAL;
  FOLDFE: ENERCKCAL;
  VITB12: ENERCKCAL;
  VITD: ENERCKCAL;
  TOCPHA: ENERCKCAL;
  VITK1: ENERCKCAL;
}

export interface TotalNutrients {
  ENERC_KCAL: ENERCKCAL;
  FAT: ENERCKCAL;
  FASAT: ENERCKCAL;
  FATRN: ENERCKCAL;
  FAMS: ENERCKCAL;
  FAPU: ENERCKCAL;
  CHOCDF: ENERCKCAL;
  "CHOCDF.net": ENERCKCAL;
  FIBTG: ENERCKCAL;
  SUGAR: ENERCKCAL;
  PROCNT: ENERCKCAL;
  CHOLE: ENERCKCAL;
  NA: ENERCKCAL;
  CA: ENERCKCAL;
  MG: ENERCKCAL;
  K: ENERCKCAL;
  FE: ENERCKCAL;
  ZN: ENERCKCAL;
  P: ENERCKCAL;
  VITA_RAE: ENERCKCAL;
  VITC: ENERCKCAL;
  THIA: ENERCKCAL;
  RIBF: ENERCKCAL;
  NIA: ENERCKCAL;
  VITB6A: ENERCKCAL;
  FOLDFE: ENERCKCAL;
  FOLFD: ENERCKCAL;
  FOLAC: ENERCKCAL;
  VITB12: ENERCKCAL;
  VITD: ENERCKCAL;
  TOCPHA: ENERCKCAL;
  VITK1: ENERCKCAL;
  WATER: ENERCKCAL;
}

export interface ENERCKCAL {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ingredient {
  text: string;
  quantity: number;
  measure?: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}
