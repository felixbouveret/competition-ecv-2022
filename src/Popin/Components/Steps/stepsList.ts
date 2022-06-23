import {
  TransitionStepInterface,
  QuestionStepInterface,
} from "../../../types/step.interface";
import {
  budgetStepEnum,
  cheeseStepEnum,
  coffeeStepEnum,
  cookStepEnum,
  eatWithStepEnum,
  fishStepEnum,
  forWhoStepEnum,
  juiceStepEnum,
  mealTypeStepEnum,
  meatStepEnum,
  multipleQuestion,
  parfumStepEnum,
  rankStepEnum,
  spicesStepEnum,
  whyStepEnum,
  wineTypeStepEnum,
} from "../../../types/stepsAnswers.enum";
import { stepsNameEnum } from "../../../types/stepsName.enum";

export const getSteps = (): Array<
  QuestionStepInterface | TransitionStepInterface
> => [
  {
    id: stepsNameEnum.FOR_WHO_STEP,
    title: "Pour qui cherchez-vous du vin ?",
    type: "question",
    isMultiple: false,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Pour moi",
        descriptionForOther: "",
        id: forWhoStepEnum.ME,
      },
      {
        icon: "/",
        description: "Quelqu'un d'autre ",
        id: forWhoStepEnum.OTHER,
      },
    ],
  },
  {
    id: stepsNameEnum.COFFEE_STEP,
    title: "Comment aimez-vous votre café le matin ?",
    type: "question",
    isMultiple: true,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => true,
    answers: [
      {
        icon: "/",
        description: "Noir",
        id: coffeeStepEnum.BLACK,
      },
      {
        icon: "/",
        description: "Avec du lait",
        id: coffeeStepEnum.LACTOSE,
      },
      {
        icon: "/",
        description: "Avec du sucre",
        id: coffeeStepEnum.SUGAR,
      },
      {
        icon: "/",
        description: "Je n'en bois pas",
        id: coffeeStepEnum.NO_COFFEE,
      },
    ],
  },
  {
    id: stepsNameEnum.JUICE_STEP,
    title: "Vous préférez...",
    type: "question",
    isMultiple: false,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => true,
    answers: [
      {
        icon: "/",
        description: "Le jus de pamplemousse",
        id: juiceStepEnum.GRAPFRUIT,
      },
      {
        icon: "/",
        description: "Le jus de pomme",
        id: juiceStepEnum.APPLE,
      },
      {
        icon: "/",
        description: "Le jus de fruits exotiques",
        id: juiceStepEnum.EXOTIC,
      },
    ],
  },
  {
    id: stepsNameEnum.COOK_STEP,
    title: "Vous aimez la cuisine...",
    type: "question",
    isMultiple: true,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Française",
        id: cookStepEnum.FRENCH,
      },
      {
        icon: "/",
        description: "Asiatique",
        id: cookStepEnum.ASIAN,
      },
      {
        icon: "/",
        description: "Américaine",
        id: cookStepEnum.AMERICAN,
      },
      {
        icon: "/",
        description: "Italienne",
        id: cookStepEnum.ITALIAN,
      },
      {
        icon: "/",
        description: "Végé",
        id: cookStepEnum.VEG,
      },
    ],
  },
  {
    id: stepsNameEnum.PARFUM_STEP,
    title: "Quel parfum préférez-vous ?",
    type: "question",
    isMultiple: false,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Boisé, terreux",
        id: parfumStepEnum.DIRT,
      },
      {
        icon: "/",
        description: "Caramel, chocolat",
        id: parfumStepEnum.CHOCOLATE,
      },
      {
        icon: "/",
        description: "Herbacé, à base de plantes",
        id: parfumStepEnum.GRASS,
      },
      {
        icon: "/",
        description: "Floral, fruité",
        id: parfumStepEnum.FRUITY,
      },
    ],
  },
  {
    id: stepsNameEnum.SPICES_STEP,
    title: "Quelles sont vos épices préférées ?",
    type: "question",
    isMultiple: false,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Thym et sauge",
        id: spicesStepEnum.SAGE,
      },
      {
        icon: "/",
        description: "Paprika fumé et piment chipotle",
        id: spicesStepEnum.SMOCKED_PAPRIKA,
      },
      {
        icon: "/",
        description: "Basilic et origan",
        id: spicesStepEnum.BASIL,
      },
      {
        icon: "/",
        description: "Aneth et persil",
        id: spicesStepEnum.PARSLEY,
      },
    ],
  },
  {
    id: stepsNameEnum.RANK_STEP,
    title: "En matière de vin, vous êtes plutôt ?",
    type: "question",
    isMultiple: false,
    subtitle: "VOs GOÛTs",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Débutant(e)",
        id: rankStepEnum.BEGINNER,
      },
      {
        icon: "/",
        description: "Amateur(rice)",
        id: rankStepEnum.AMATEUR,
      },
      {
        icon: "/",
        description: "Passioné(e)",
        id: rankStepEnum.KEEN,
      },
    ],
  },
  {
    id: stepsNameEnum.WHY_STEP,
    title: "Quel type de vin cherchez-vous ?",
    type: "question",
    isMultiple: false,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "A garder",
        id: whyStepEnum.KEEP,
      },
      {
        icon: "/",
        description: "Prêt à boire",
        id: whyStepEnum.READY_DRINK,
      },
    ],
  },
  {
    id: stepsNameEnum.EAT_WITH_STEP,
    title: "Avec quoi avez-vous prévu de le boire ?",
    type: "question",
    isMultiple: true,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "De la viande",
        id: eatWithStepEnum.MEAT,
      },
      {
        icon: "/",
        description: "Produits de la mer",
        id: eatWithStepEnum.SEAFOOD,
      },
      {
        icon: "/",
        description: "Légumes",
        id: eatWithStepEnum.VEGETABLE,
      },
      {
        icon: "/",
        description: "Fromages",
        id: eatWithStepEnum.CHEESE,
      },
      {
        icon: "/",
        description: "Dessert",
        id: eatWithStepEnum.DESSERT,
      },
      {
        icon: "/",
        description: "Je ne sais pas",
        id: multipleQuestion.I_DONT_KNOW,
      },
    ],
  },
  {
    id: stepsNameEnum.MEAL_TYPE_STEP,
    title: "Vous préférez avoir...",
    type: "question",
    isMultiple: false,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Un seul vin pour le repas",
        id: mealTypeStepEnum.FULL,
      },
      {
        icon: "/",
        description: "Un vin par plat",
        id: mealTypeStepEnum.SPECIFIC,
      },
    ],
  },
  {
    id: stepsNameEnum.MEAT_STEP,
    title: "Quelle viande allez-vous consommer ?",
    type: "question",
    isMultiple: true,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean =>
      !answers.includes(eatWithStepEnum.MEAT),
    answers: [
      {
        icon: "/",
        description: "Viande rouge grillée",
        id: meatStepEnum.BEEF_GRILLED,
      },
      {
        icon: "/",
        description: "Viande rouge mijotée",
        id: meatStepEnum.BEEF_SIMMERED,
      },
      {
        icon: "/",
        description: "Viande blanche",
        id: meatStepEnum.WHITE,
      },
      {
        icon: "/",
        description: "Volaille",
        id: meatStepEnum.CHICKEN,
      },
      {
        icon: "/",
        description: "Gibier",
        id: meatStepEnum.PREY,
      },
    ],
  },
  {
    id: stepsNameEnum.FISH_STEP,
    title: "Quel poisson allez-vous consommer ?",
    type: "question",
    isMultiple: true,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean =>
      !answers.includes(eatWithStepEnum.SEAFOOD),
    answers: [
      {
        icon: "/",
        description: "Poisson maigre",
        id: fishStepEnum.LEAN,
      },
      {
        icon: "/",
        description: "Poisson gras",
        id: fishStepEnum.BOLD,
      },
      {
        icon: "/",
        description: "Fruits de mer",
        id: fishStepEnum.SEA_FOOD,
      },
    ],
  },
  {
    id: stepsNameEnum.CHEESE_STEP,
    title: "Quel fromage allez-vous consommer ?",
    type: "question",
    isMultiple: true,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean =>
      !answers.includes(eatWithStepEnum.CHEESE),
    answers: [
      {
        icon: "/",
        description: "Fromage de chèvre",
        id: cheeseStepEnum.GOAT,
      },
      {
        icon: "/",
        description: "Fromage affiné et à pâte dure",
        id: cheeseStepEnum.HARD,
      },
      {
        icon: "/",
        description: "Fromage doux et à pâte molle",
        id: cheeseStepEnum.SOFT,
      },
    ],
  },
  {
    id: stepsNameEnum.BUDGET_STEP,
    title: "Quel est votre budget ?",
    type: "question",
    isMultiple: false,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Moins de 10€",
        id: budgetStepEnum.VERY_LOW,
      },
      {
        icon: "/",
        description: "10€-15€",
        id: budgetStepEnum.LOW,
      },
      {
        icon: "/",
        description: "15€-20€",
        id: budgetStepEnum.MEDIUM,
      },
      {
        icon: "/",
        description: "20€-50€",
        id: budgetStepEnum.LOW,
      },
      {
        icon: "/",
        description: "Plus de 50€",
        id: budgetStepEnum.HIGH,
      },
    ],
  },
  {
    id: stepsNameEnum.WINE_TYPE_STEP,
    title: "Vous avez une préférence pour…",
    type: "question",
    isMultiple: true,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    answers: [
      {
        icon: "/",
        description: "Un vin rouge",
        id: wineTypeStepEnum.RED,
      },
      {
        icon: "/",
        description: "Un vin blanc",
        id: wineTypeStepEnum.WHITE,
      },
      {
        icon: "/",
        description: "Un vin rosé",
        id: wineTypeStepEnum.ROSE,
      },
      {
        icon: "/",
        description: "Un champagne",
        id: wineTypeStepEnum.SPARKLING,
      },
    ],
  },
];
