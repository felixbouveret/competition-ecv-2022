export interface StepInterface {
  id: string;
  title: string;
  description: string;
  type: "question" | "transition";
}

export interface QuestionStepInterface extends StepInterface {
  answers: {
    icon: string;
    description: string;
    id: string;
  }[];
}

export interface TransitionStepInterface extends StepInterface {
  subtitle: string;
  image: string;
}
