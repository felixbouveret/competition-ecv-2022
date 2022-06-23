import {
  forWhoStepEnum,
  coffeeStepEnum,
  juiceStepEnum,
  cookStepEnum,
  parfumStepEnum,
  spicesStepEnum,
  rankStepEnum,
  whyStepEnum,
  eatWithStepEnum,
  mealTypeStepEnum,
  meatStepEnum,
  fishStepEnum,
  cheeseStepEnum,
  budgetStepEnum,
  wineTypeStepEnum,
  multipleQuestion,
  transitionSteps,
} from "./stepsAnswers.enum";
import { stepsNameEnum } from "./stepsName.enum";

export interface StepInterface {
  id: stepsNameEnum;
  title: string;
  subtitle: string;
  shouldBeSkipped: (answers: Array<string>) => boolean;
  canGoNext: (answers: Array<string>) => boolean;
}

export type answerId =
  | forWhoStepEnum
  | coffeeStepEnum
  | juiceStepEnum
  | cookStepEnum
  | parfumStepEnum
  | spicesStepEnum
  | rankStepEnum
  | whyStepEnum
  | eatWithStepEnum
  | mealTypeStepEnum
  | meatStepEnum
  | fishStepEnum
  | cheeseStepEnum
  | budgetStepEnum
  | wineTypeStepEnum
  | multipleQuestion
  | transitionSteps;

export interface QuestionStepInterface extends StepInterface {
  titleForOther?: string;
  isMultiple: boolean;
  shouldBeSkipped: (answers: Array<string>) => boolean;
  type: "question";
  answers: Answer[];
}

export interface TransitionStepInterface extends StepInterface {
  description: string;
  index: number;
  image: string;
  type: "transition";
}
export interface LoaderStepInterface extends StepInterface {
  type: "loader";
}

export interface Answer {
  icon: string;
  description: string;
  descriptionForOther?: string;
  id: answerId;
}
