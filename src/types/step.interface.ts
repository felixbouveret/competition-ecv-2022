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
} from "./stepsAnswers.enum";
import { stepsNameEnum } from "./stepsName.enum";

export interface StepInterface {
  id: stepsNameEnum;
  title: string;
  type: "question" | "transition";
  shouldBeSkipped: (answers: Array<string>) => boolean;
  answers?: {
    icon: string;
    description: string;
    descriptionForOther?: string;
    id: answerId;
  }[];
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
  | multipleQuestion;

export interface QuestionStepInterface extends StepInterface {
  titleForOther?: string;
  isMultiple: boolean;
  shouldBeSkipped: (answers: Array<string>) => boolean;
}

export interface TransitionStepInterface extends StepInterface {
  description: string;
  subtitle: string;
  image: string;
}
