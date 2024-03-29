import helperFunctions from "./HelperFunctions";

import HomesImage0 from "../assets/HomesImages/HomesImage0.jpg";
import HomesImage1 from "../assets/HomesImages/HomesImage1.jpg";
import HomesImage2 from "../assets/HomesImages/HomesImage2.jpg";
import HomesImage3 from "../assets/HomesImages/HomesImage3.jpg";
import HomesImage4 from "../assets/HomesImages/HomesImage4.jpg";
import HomesImage5 from "../assets/HomesImages/HomesImage5.jpg";
import HomesImage6 from "../assets/HomesImages/HomesImage6.jpg";
import HomesImage7 from "../assets/HomesImages/HomesImage7.jpg";
import HomesImage8 from "../assets/HomesImages/HomesImage8.jpg";

import bedroom from "../assets/PortugalHome/bedroom.jpg";
import kitchen1 from "../assets/PortugalHome/kitchen1.jpg";
import kitchen2 from "../assets/PortugalHome/kitchen2.jpg";
import lounge1 from "../assets/PortugalHome/lounge1.jpg";
import lounge2 from "../assets/PortugalHome/lounge2.jpg";

import CalicoParkSite from "../assets/SiteGallery/CP/the-campsite.jpeg";
import SignPost from "../assets/SiteGallery/CP/signpost.jpeg";
import Road from "../assets/SiteGallery/CP/road.jpeg";
import FarmersGoats from "../assets/SiteGallery/CP/farmers-goats.jpeg";

const { getDaysArray } = helperFunctions;

const sites = [
  {
    id: 1,
    label: "L’Oceano d’Or",
    address: "84 Rue Georges Clemenceau, 85520 Jard-sur-Mer, France",
  },
  {
    id: 2,
    label: "Les Genets",
    address: "55 Avenue des Épines, 85160 Saint-Jean-de-Monts, France",
  },
  {
    id: 3,
    label: "Calico Park",
    address: "Apartado 51, 8901-907 Vila Nova de Cacela, Portugal",
  },
];

const inventoryFrance = {
  all: [
    "Fridge freezer or fridge",
    "Microwave",
    "1 pair of scissors",
    "Washing up bowl",
    "Clothes pegs",
    "Coat hangers",
    "Dustpan/brush",
    "Long handled broom",
    "Mop and bucket",
    "Lavatory brush",
    "Fire extinguisher",
    "Waste bin",
    "Clothes aire",
    "6 Knives, forks, spoons, tea spoons",
    "2 Serving spoons",
    "1 Bread knife",
    "1 Kitchen knife",
    "1 Bread knife",
    "1 Bottle opener",
    "1 Fish slice",
    "1 Tin opener",
    "1 Wooden spoon and spatula",
    "1 Potato peeler",
    "Cafetiere",
    "1 Frying pan",
    "6 large tumblers",
    "6 small wine glasses",
    "6 dinner plates",
    "6 side plates",
    "6 small plates",
    "6 beakers",
    "6 dessert/cereal bowls",
    "1 small and large bowl",
    "Water jug",
    "3 saucepans",
    "1 kettle",
    "1 measuring jug",
    "1 glass/plastic mixing bowl",
    "1 colander",
    "1 cheese grater",
    "1 bread board",
    "6 pillows",
    "1 double blanket per person",
    "Mattress protector",
    "Parasol (for home with open veranda)",
    "Patio table",
    "6 patio chairs",
  ],
  general: [
    "Fridge freezer or fridge",
    "Microwave",
    "1 pair of scissors",
    "Washing up bowl",
    "Clothes pegs",
    "Coat hangers",
    "Dustpan/brush",
    "Long handled broom",
    "Mop and bucket",
    "Lavatory brush",
    "Fire extinguisher",
    "Waste bin",
    "Clothes aire",
  ],
  cutlery: [
    "6 Knives, forks, spoons, tea spoons",
    "2 Serving spoons",
    "1 Bread knife",
    "1 Kitchen knife",
    "1 Bread knife",
    "1 Bottle opener",
    "1 Fish slice",
    "1 Tin opener",
    "1 Wooden spoon and spatula",
    "1 Potato peeler",
    "Cafetiere",
    "1 Frying pan",
  ],
  crockery: [
    "6 large tumblers",
    "6 small wine glasses",
    "6 dinner plates",
    "6 side plates",
    "6 small plates",
    "6 beakers",
    "6 dessert/cereal bowls",
    "1 small and large bowl",
    "Water jug",
  ],
  cookingEquipment: [
    "3 saucepans",
    "1 kettle",
    "1 measuring jug",
    "1 glass/plastic mixing bowl",
    "1 colander",
    "1 cheese grater",
    "1 bread board",
  ],
  bedding: ["6 pillows", "1 double blanket per person", "Mattress protector"],
  outside: [
    "Parasol (for home with open veranda)",
    "Patio table",
    "6 patio chairs",
  ],
};

const inventoryPortugal = {
  all: [
    "Fridge freezer or fridge",
    "Microwave",
    "1 pair of scissors",
    "Washing up bowl",
    "Clothes pegs",
    "Coat hangers",
    "Dustpan/brush",
    "Long handled broom",
    "Mop and bucket",
    "Lavatory brush",
    "Fire extinguisher",
    "Waste bin",
    "Clothes aire",
    "6 Knives, forks, spoons, tea spoons",
    "2 Serving spoons",
    "1 Bread knife",
    "1 Kitchen knife",
    "1 Bread knife",
    "1 Bottle opener",
    "1 Fish slice",
    "1 Tin opener",
    "1 Wooden spoon and spatula",
    "1 Potato peeler",
    "Cafetiere",
    "1 Frying pan",
    "6 large tumblers",
    "6 small wine glasses",
    "6 dinner plates",
    "6 side plates",
    "6 small plates",
    "6 beakers",
    "6 dessert/cereal bowls",
    "1 small and large bowl",
    "Water jug",
    "3 saucepans",
    "1 kettle",
    "1 measuring jug",
    "1 glass/plastic mixing bowl",
    "1 colander",
    "1 cheese grater",
    "1 bread board",
    "6 pillows",
    "1 double blanket per person",
    "Mattress protector",
    "Parasol (for home with open veranda)",
    "Patio table",
    "6 patio chairs",
  ],
  general: [
    "Air conditioning",
    "Flat screen TV and DVD player with English channels",
    "Washing machine",
    "All bed linen and towels provided",
    "Fridge freezer or fridge",
    "Microwave",
    "1 pair of scissors",
    "Washing up bowl",
    "Clothes pegs",
    "Coat hangers",
    "Dustpan/brush",
    "Long handled broom",
    "Mop and bucket",
    "Lavatory brush",
    "Fire extinguisher",
    "Waste bin",
    "Clothes airer",
  ],
  cutlery: [
    "6 Knives, forks, spoons, tea spoons",
    "2 Serving spoons",
    "1 Bread knife",
    "1 Kitchen knife",
    "1 Bread knife",
    "1 Bottle opener",
    "1 Fish slice",
    "1 Tin opener",
    "1 Wooden spoon and spatula",
    "1 Potato peeler",
    "Cafetiere",
    "1 Frying pan",
  ],
  crockery: [
    "6 large tumblers",
    "6 small wine glasses",
    "6 dinner plates",
    "6 side plates",
    "6 small plates",
    "6 beakers",
    "6 dessert/cereal bowls",
    "1 small and large bowl",
    "Water jug",
  ],
  cookingEquipment: [
    "3 saucepans",
    "1 kettle",
    "1 measuring jug",
    "1 glass/plastic mixing bowl",
    "1 colander",
    "1 cheese grater",
    "1 bread board",
  ],
  outside: [
    "Parasol (for home with open veranda)",
    "Patio table",
    "6 patio chairs",
  ],
};

const faqQuestionsAnswers = [
  {
    "What are your arrival times?":
      "Arrival times are strictly from 4pm onwards.",
  },
  {
    "What are your departure times?":
      "Clients must leave the home before 10am.",
  },
  {
    "Should I book linen in advance?":
      "Linen must be booked at least 6 weeks before the start of your holiday. Please see Prices Page for details and prices.",
  },
  {
    "Are pets allowed?":
      "We do allow a well behaved pet in designated homes. Your dog must be kept on a lead at all times within the campsite, and must not be left unattended in the home. This is a strict campsite policy.",
  },
  {
    "Is Satellite TV available?":
      "We do have a limited number of homes where you can hire Satellite TV with English channels. Please ask at time of booking.",
  },
  {
    "Are deposits refundable?":
      "Your deposit is non-refundable should you cancel your holiday.",
  },
  {
    "When is balance due?":
      "The balance of your holiday payment is due 10 weeks before the holiday start date. We accept all major credit and debit card payments. You can also arrange to pay for your holiday in instalments.",
  },
  {
    "What is your cancellation policy?":
      'In the event of a cancellation, refunds of amounts paid (less the deposit) will be made if Quest en France Holidays are able to re-let the "Mobile Home", and any expenses or losses incurred in so doing will be deducted from the refundable amount. The Client is strongly recommended to arrange a comprehensive travel insurance policy (including cancellation cover) and to have full cover for the party’s personal belongings, public liability etc, since these are not covered by the Owner\'s insurance.',
  },
];

const homesImages = [
  {
    image: HomesImage0,
    homeType: "3 Bedroomed Home",
    room: "Dining Area",
  },
  {
    image: HomesImage1,
    homeType: "Cordelia 3 Bedroomed Home",
    room: "Lounge",
  },
  {
    image: HomesImage2,
    homeType: "Cordelia",
    room: "Lounge Area",
  },
  {
    image: HomesImage3,
    homeType: "Cordelia Riviera",
    room: "Lounge Area",
  },
  {
    image: HomesImage4,
    homeType: "2 Bedroomed Home",
    room: "Lounge & Kitchen Area",
  },
  {
    image: HomesImage5,
    homeType: "Riveria 3 Bedroomed Home",
    room: "Dining Area",
  },
  {
    image: HomesImage6,
    homeType: "",
    room: "Open Veranda",
  },
  {
    image: HomesImage7,
    homeType: "",
    room: "Semi Covered Veranda",
  },
  {
    image: HomesImage8,
    homeType: "",
    room: "Calico Park",
  },
];

const homesPortugal = [
  {
    image: kitchen1,
    home_type: "",
    room: "Kitchen",
  },
  {
    image: lounge2,
    home_type: "",
    room: "Lounge Area",
  },
  {
    image: lounge1,
    home_type: "",
    room: "Lounge Area",
  },
  {
    image: kitchen2,
    home_type: "",
    room: "Kitchen",
  },
  {
    image: bedroom,
    home_type: "",
    room: "Bedroom",
  },
  {
    image: HomesImage8,
    home_type: "",
    room: "Our Home",
  },
];

const siteCodes = [
  { id: 1, key: "LODO", name: "L’Oceano d’Or", url: "loceanodor" },
  { id: 2, key: "LG", name: "Les Genets", url: "lesgenets" },
  { id: 3, key: "CP", name: "Calico Park", url: "calicopark" },
];

const prices = [
  { weekCommencing: new Date("2-May"), 2: 190, 3: 210 },
  { weekCommencing: new Date("9-May"), 2: 190, 3: 210 },
  { weekCommencing: new Date("16-May"), 2: 190, 3: 210 },
  { weekCommencing: new Date("23-May"), 2: 270, 3: 300 },
  { weekCommencing: new Date("30-May"), 2: 240, 3: 265 },
  { weekCommencing: new Date("6-Jun"), 2: 240, 3: 265 },
  { weekCommencing: new Date("13-Jun"), 2: 360, 3: 400 },
  { weekCommencing: new Date("20-Jun"), 2: 460, 3: 500 },
  { weekCommencing: new Date("27-Jun"), 2: 585, 3: 640 },
  { weekCommencing: new Date("4-Jul"), 2: 615, 3: 675 },
  { weekCommencing: new Date("11-Jul"), 2: 640, 3: 700 },
  { weekCommencing: new Date("18-Jul"), 2: 750, 3: 795 },
  { weekCommencing: new Date("25-Jul"), 2: 750, 3: 795 },
  { weekCommencing: new Date("1-Aug"), 2: 750, 3: 795 },
  { weekCommencing: new Date("8-Aug"), 2: 750, 3: 795 },
  { weekCommencing: new Date("15-Aug"), 2: 750, 3: 795 },
  { weekCommencing: new Date("22-Aug"), 2: 595, 3: 625 },
  { weekCommencing: new Date("29-Aug"), 2: 240, 3: 265 },
  { weekCommencing: new Date("5-Sep"), 2: 240, 3: 265 },
];

const siteGallery = {
  LODO: [
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Pool-entertainment.jpg",
      text: "Pool entertainment",
    },
    {
      image: "https://www.questenfrance.com/wp-content/uploads/2015/12/Bar.jpg",
      text: "Bar",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Pool-complex.jpg",
      text: "Pool complex",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Kids-play-area1.jpg",
      text: "Kids playing area",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Main-pool-area.jpg",
      text: "Main pool area",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Kids-activity.jpg",
      text: "Kids activities",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Games-room.jpg",
      text: "Games room",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/View-of-leisure-activities.jpg",
      text: "Leisure activities",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Campsite-entrance.jpg",
      text: "Campsite entrance",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/LOceano-from-air-2.jpg",
      text: "Pool area",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Boules-area.jpg",
      text: "Boules area",
    },
  ],
  LG: [
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/outdoor-pools.jpg",
      text: "Outdoor pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/Kids-play-area.jpg",
      text: "Kids play area",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-Pool-area.jpg",
      text: "Pool area",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-aqua-gym.jpg",
      text: "Aqua gym",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-pool-7.jpg",
      text: "Pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/Outdoor-pool-complex-new.jpg",
      text: "New outdoor pool complex",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-kids-play-2.jpg",
      text: "Kids play area",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-indoor-pool-2.jpg",
      text: "Indoor pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2020/02/New-Pool-Le-Genets.jpg",
      text: "New pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-jacuzzi.jpg",
      text: "Jacuzzi",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-pool4.jpg",
      text: "Pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-chutes-2.jpg",
      text: "Water slides",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2020/02/New-indoor-outdoor-pool-Les-Genets1.jpg",
      text: "New indoor/outdoor pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-bar-2.jpg",
      text: "Bar",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/Les-Genets-Baby-pool.jpg",
      text: "Baby pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/11/lesgenets-outoor-pool.jpg",
      text: "Outdoor pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-table-tennis-room.jpg",
      text: "Table tennis room",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-pool-2.jpg",
      text: "Pool",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-slides.jpg",
      text: "Water slides",
    },
    {
      image:
        "//www.questenfrance.com/wp-content/uploads/2015/12/les-genets-pool-terrace.jpg",
      text: "Pool terrace",
    },
  ],
  CP: [
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/Calico-Park-Pool.jpg",
      text: "Pool",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/cafe-at-the-pool.jpg",
      text: "Cafe at the pool",
    },
    {
      image:
        "https://www.questenfrance.com/wp-content/uploads/2015/12/calico-park-restaurant-.jpg",
      text: "Restaurant",
    },
    { image: CalicoParkSite, text: "The campsite" },
    { image: SignPost, text: "Sign post" },
    { image: Road, text: "Road through park" },
    { image: FarmersGoats, text: "Farm goats" },
  ],
};

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const includedStartDates = [
  ...getDaysArray(
    new Date(currentYear, 4, 2),
    new Date(currentYear, 8, 7),
    "skip",
  ),
  ...getDaysArray(
    new Date(currentYear + 1, 4, 2),
    new Date(currentYear + 1, 8, 7),
    "skip",
  ),
];

const includedEndDates = [
  ...getDaysArray(
    new Date(currentYear, 4, 6),
    new Date(currentYear, 8, 11),
    "skip",
  ),
  ...getDaysArray(
    new Date(currentYear + 1, 4, 2),
    new Date(currentYear + 1, 8, 12),
    "skip",
  ),
];

const contactUsSubjects = [
  { key: "general_enquiry", label: "General enquiry" },
  { key: "booking_issue", label: "Booking issue" },
  { key: "technical_issue", label: "Technical issue" },
  { key: "other", label: "Other" },
];

const config = {
  sites,
  inventoryFrance,
  inventoryPortugal,
  faqQuestionsAnswers,
  homesImages,
  homesPortugal,
  siteCodes,
  prices,
  siteGallery,
  includedStartDates,
  includedEndDates,
  contactUsSubjects,
  currentDay,
  currentMonth,
  currentYear,
};

export default config;
