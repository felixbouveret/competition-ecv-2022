export interface StepInterface {
  id: string;
  title: string;
  description?: string;
  type: "question" | "transition";
}

export interface Answer {
  icon: string;
  description: string;
  id: string;
}

export interface QuestionStepInterface extends StepInterface {
  isMultiple: boolean;
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
