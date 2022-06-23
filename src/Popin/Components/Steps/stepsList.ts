import {
  TransitionStepInterface,
  QuestionStepInterface,
  LoaderStepInterface,
} from "@/types/step.interface";
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
  transitionSteps,
  whyStepEnum,
  wineTypeStepEnum,
} from "@/types/stepsAnswers.enum";
import { stepsNameEnum } from "@/types/stepsName.enum";

export const getSteps = (): Array<
  | QuestionStepInterface
  | TransitionStepInterface
  | LoaderStepInterface
  | IntroductionStepInterface
> => [
  {
    id: stepsNameEnum.LOADER_STEP,
    title: "Merci pour votre temps",
    type: "loader",
    subtitle:
      "D’après ces informations, je pense que le vin qui vous correspondrait le mieux serait...",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(transitionSteps.LOADER_PASSED),
  },
  {
    id: stepsNameEnum.INTRODUCTION_STEP,
    title: "Besoin d’aide ?",
    type: "introduction",
    description:
      "Julie, caviste chez Le Puits d’Amour, vous guide dans le choix de vin afin qu’il soit plus adapté à vos goûts et vos envies.",
    subtitle: "Durée du test : ~ 6 minutes",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(transitionSteps.INTRODUCTION_PASSED),
  },
  {
    id: stepsNameEnum.TASTES_TRANSITION_STEP,
    title: "Regardons ensemble quelles sont vos préférences",
    type: "transition",
    description:
      "J’ai besoin d’en apprendre un peu plus sur vous afin de trouver un vin qui vous correspond.",
    image: "",
    subtitle: "Vos gouts",
    index: 1,
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(transitionSteps.TASTE_PASSED),
  },
  {
    id: stepsNameEnum.NEEDS_TRANSITION_STEP,
    title: "Une envie particulière ? Un repas de prévu ?",
    type: "transition",
    description:
      "Affinons vos recherches en fonction de ce que vous avez de prévu.",
    image: "",
    subtitle: "Vos besoins",
    index: 2,
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(transitionSteps.NEEDS_PASSED),
  },
  {
    id: stepsNameEnum.FOR_WHO_STEP,
    title: "Pour qui cherchez-vous du vin ?",
    type: "question",
    isMultiple: false,
    subtitle: "",
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(forWhoStepEnum.ME) ||
      answers.includes(forWhoStepEnum.OTHER),
    answers: [
      {
        icon: "/icn_me.svg",
        description: "Pour moi",
        descriptionForOther: "",
        id: forWhoStepEnum.ME,
      },
      {
        icon: "/icn_gift.svg",
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
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(coffeeStepEnum.BLACK) ||
      answers.includes(coffeeStepEnum.LACTOSE) ||
      answers.includes(coffeeStepEnum.NO_COFFEE) ||
      answers.includes(coffeeStepEnum.SUGAR),
    answers: [
      {
        icon: "/icn_coffee.svg",
        description: "Noir",
        id: coffeeStepEnum.BLACK,
      },
      {
        icon: "/icn_milk.svg",
        description: "Avec du lait",
        id: coffeeStepEnum.LACTOSE,
      },
      {
        icon: "/icn_sugar.svg",
        description: "Avec du sucre",
        id: coffeeStepEnum.SUGAR,
      },
      {
        icon: "/icn_idk.svg",
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
    shouldBeSkipped: (answers: Array<string>): boolean => false,
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(juiceStepEnum.GRAPFRUIT) ||
      answers.includes(juiceStepEnum.APPLE) ||
      answers.includes(juiceStepEnum.EXOTIC),
    answers: [
      {
        icon: "/icn_grapefruit.svg",
        description: "Le jus de pamplemousse",
        id: juiceStepEnum.GRAPFRUIT,
      },
      {
        icon: "/icn_apple.svg",
        description: "Le jus de pomme",
        id: juiceStepEnum.APPLE,
      },
      {
        icon: "/icn_papaye.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(cookStepEnum.FRENCH) ||
      answers.includes(cookStepEnum.ASIAN) ||
      answers.includes(cookStepEnum.AMERICAN) ||
      answers.includes(cookStepEnum.ITALIAN) ||
      answers.includes(cookStepEnum.VEG),
    answers: [
      {
        icon: "/icn_french.svg",
        description: "Française",
        id: cookStepEnum.FRENCH,
      },
      {
        icon: "/icn_sushis.svg",
        description: "Asiatique",
        id: cookStepEnum.ASIAN,
      },
      {
        icon: "/icn_burger.svg",
        description: "Américaine",
        id: cookStepEnum.AMERICAN,
      },
      {
        icon: "/icn_pizza.svg",
        description: "Italienne",
        id: cookStepEnum.ITALIAN,
      },
      {
        icon: "/icn_vegetables.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(parfumStepEnum.DIRT) ||
      answers.includes(parfumStepEnum.CHOCOLATE) ||
      answers.includes(parfumStepEnum.GRASS) ||
      answers.includes(parfumStepEnum.FRUITY),
    answers: [
      {
        icon: "/icn_fire.svg",
        description: "Boisé, terreux",
        id: parfumStepEnum.DIRT,
      },
      {
        icon: "/icn_chocolate.svg",
        description: "Caramel, chocolat",
        id: parfumStepEnum.CHOCOLATE,
      },
      {
        icon: "/icn_sage.svg",
        description: "Herbacé, à base de plantes",
        id: parfumStepEnum.GRASS,
      },
      {
        icon: "/icn_flowers.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(spicesStepEnum.SAGE) ||
      answers.includes(spicesStepEnum.SMOCKED_PAPRIKA) ||
      answers.includes(spicesStepEnum.BASIL) ||
      answers.includes(spicesStepEnum.PARSLEY),
    answers: [
      {
        icon: "/icn_sage.svg",
        description: "Thym et sauge",
        id: spicesStepEnum.SAGE,
      },
      {
        icon: "/icn_pepper.svg",
        description: "Paprika fumé et piment chipotle",
        id: spicesStepEnum.SMOCKED_PAPRIKA,
      },
      {
        icon: "/icn_basil.svg",
        description: "Basilic et origan",
        id: spicesStepEnum.BASIL,
      },
      {
        icon: "/icn_parsley.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(rankStepEnum.BEGINNER) ||
      answers.includes(rankStepEnum.AMATEUR) ||
      answers.includes(rankStepEnum.KEEN),

    answers: [
      {
        icon: "/icn_grape.svg",
        description: "Débutant(e)",
        id: rankStepEnum.BEGINNER,
      },
      {
        icon: "/icn_bottle.svg",
        description: "Amateur(rice)",
        id: rankStepEnum.AMATEUR,
      },
      {
        icon: "/icn_glass.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(whyStepEnum.KEEP) ||
      answers.includes(whyStepEnum.READY_DRINK),
    answers: [
      {
        icon: "/icn_wine.svg",
        description: "A garder",
        id: whyStepEnum.KEEP,
      },
      {
        icon: "/icn_red-wine.svg",
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
    shouldBeSkipped: (answers: Array<string>): boolean =>
      answers.includes(whyStepEnum.KEEP),
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(eatWithStepEnum.MEAT) ||
      answers.includes(eatWithStepEnum.SEAFOOD) ||
      answers.includes(eatWithStepEnum.VEGETABLE) ||
      answers.includes(eatWithStepEnum.CHEESE) ||
      answers.includes(multipleQuestion.I_DONT_KNOW) ||
      answers.includes(eatWithStepEnum.DESSERT),

    answers: [
      {
        icon: "/icn_meat.svg",
        description: "De la viande",
        id: eatWithStepEnum.MEAT,
      },
      {
        icon: "/icn_fish.svg",
        description: "Produits de la mer",
        id: eatWithStepEnum.SEAFOOD,
      },
      {
        icon: "/icn_vegetables.svg",
        description: "Légumes",
        id: eatWithStepEnum.VEGETABLE,
      },
      {
        icon: "/icn_cheese.svg",
        description: "Fromages",
        id: eatWithStepEnum.CHEESE,
      },
      {
        icon: "/icn_dessert.svg",
        description: "Dessert",
        id: eatWithStepEnum.DESSERT,
      },
      {
        icon: "/icn_idk.svg",
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
    shouldBeSkipped: (answers: Array<string>): boolean =>
      answers.includes(whyStepEnum.KEEP),
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(mealTypeStepEnum.FULL) ||
      answers.includes(mealTypeStepEnum.SPECIFIC),

    answers: [
      {
        icon: "/icn_bottle_2.svg",
        description: "Un seul vin pour le repas",
        id: mealTypeStepEnum.FULL,
      },
      {
        icon: "/icn_plate.svg",
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

    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(meatStepEnum.BEEF_GRILLED) ||
      answers.includes(meatStepEnum.BEEF_SIMMERED) ||
      answers.includes(meatStepEnum.WHITE) ||
      answers.includes(meatStepEnum.CHICKEN) ||
      answers.includes(meatStepEnum.PREY),

    answers: [
      {
        icon: "/icn_red-meat.svg",
        description: "Viande rouge grillée",
        id: meatStepEnum.BEEF_GRILLED,
      },
      {
        icon: "/icn_cooked-meat.svg",
        description: "Viande rouge mijotée",
        id: meatStepEnum.BEEF_SIMMERED,
      },
      {
        icon: "/icn_turkey.svg",
        description: "Viande blanche",
        id: meatStepEnum.WHITE,
      },
      {
        icon: "/icn_poultry.svg",
        description: "Volaille",
        id: meatStepEnum.CHICKEN,
      },
      {
        icon: "/icn_game.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(fishStepEnum.LEAN) ||
      answers.includes(fishStepEnum.BOLD) ||
      answers.includes(fishStepEnum.SEA_FOOD),
    answers: [
      {
        icon: "/icn_white-fish.svg",
        description: "Poisson maigre",
        id: fishStepEnum.LEAN,
      },
      {
        icon: "/icn_fish.svg",
        description: "Poisson gras",
        id: fishStepEnum.BOLD,
      },
      {
        icon: "/icn_seafood.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(cheeseStepEnum.GOAT) ||
      answers.includes(cheeseStepEnum.HARD) ||
      answers.includes(cheeseStepEnum.SOFT),
    answers: [
      {
        icon: "/icn_goat_cheese.svg",
        description: "Fromage de chèvre",
        id: cheeseStepEnum.GOAT,
      },
      {
        icon: "/icn_strong_cheese.svg",
        description: "Fromage affiné et à pâte dure",
        id: cheeseStepEnum.HARD,
      },
      {
        icon: "/icn_sweet_cheese.svg",
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(budgetStepEnum.VERY_LOW) ||
      answers.includes(budgetStepEnum.LOW) ||
      answers.includes(budgetStepEnum.MEDIUM) ||
      answers.includes(budgetStepEnum.HIGH) ||
      answers.includes(budgetStepEnum.VERY_HIGH),
    answers: [
      {
        icon: "/icn_5.svg",
        description: "Moins de 10€",
        id: budgetStepEnum.VERY_LOW,
      },
      {
        icon: "/icn_10.svg",
        description: "10€-15€",
        id: budgetStepEnum.LOW,
      },
      {
        icon: "/icn_20.svg",
        description: "15€-20€",
        id: budgetStepEnum.MEDIUM,
      },
      {
        icon: "/icn_50.svg",
        description: "20€-50€",
        id: budgetStepEnum.HIGH,
      },
      {
        icon: "/icn_50+.svg",
        description: "Plus de 50€",
        id: budgetStepEnum.VERY_HIGH,
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
    canGoNext: (answers: Array<string>): boolean =>
      answers.includes(wineTypeStepEnum.RED) ||
      answers.includes(wineTypeStepEnum.WHITE) ||
      answers.includes(wineTypeStepEnum.RED) ||
      answers.includes(wineTypeStepEnum.SPARKLING),
    answers: [
      {
        icon: "/icn_bottle-red.svg",
        description: "Un vin rouge",
        id: wineTypeStepEnum.RED,
      },
      {
        icon: "/icn_bottle-white.svg",
        description: "Un vin blanc",
        id: wineTypeStepEnum.WHITE,
      },
      {
        icon: "/icn_bottle-rose.svg",
        description: "Un vin rosé",
        id: wineTypeStepEnum.ROSE,
      },
      {
        icon: "/icn_bottle-champagne.svg",
        description: "Un champagne",
        id: wineTypeStepEnum.SPARKLING,
      },
    ],
  },
];
