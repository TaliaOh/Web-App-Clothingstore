const products = [
  {
    id: 1,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "jacket",
    productName: "Silver Jacket",
    price: 200,
    img: "https://www.factory54.co.il/on/demandware.static/-/Sites-master-catalog/default/dw7c4b06d3/images/large/850171750_P_1.png",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd35cc08d/images/models/850171750_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f7c3d2e/images/large/850171750_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe07b000b/images/models/850171750_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Sweatshirt from Isabel Marant made of a combination of high-quality and pleasant cotton in a gray shade with a logo print on the front. The item has a straight and relaxed cut with a rounded collar and long sleeves with rib sayings. `,
  },
  {
    id: 2,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "jacket",
    productName: "Jeans Jacket",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81f22ea9/images/large/850171769_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw399bf0e0/images/models/850171769_L%20850171697%20850171704%20850171622%20T.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw117c782e/images/models/850171769_L_2.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3cebf58a/images/models/850171769_L_3.JPG?sw=113&sh=170",
    ],
    desc: `Hysterical denim jacket from Isabel Marant made of 100% quality denim cotton in a classic indigo shade and with a slightly worn look for a vintage touch.`,
  },
  {
    id: 3,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "shirt",
    productName: "White T-shirt",
    price: 150,
    img: "https://www.factory54.co.il/on/demandware.static/-/Sites-master-catalog/default/dwf46e83d6/images/large/850171766_P_1.png",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf8a07b4d/images/large/850171766_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw75ce910a/images/models/850171766_L_2.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwff22d337/images/models/850171766_L_3.JPG?sw=113&sh=170",
    ],
    desc: `T-shirt from Isabel Marant made of 100% soft and comfortable cotton fabric in a white shade with a print bearing the brand name on the front side. The item has a straight and relaxed cut with a rounded collar and short sleeves.`,
  },
  {
    id: 4,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "jeans",
    productName: "Jeans",
    price: 300,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa811673e/images/large/850171697_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwede4b3e1/images/large/850171697_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw73c6336d/images/models/850171697_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw94238f82/images/models/850171697_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Vayoneo model jeans from the prestigious Isabel Marant house, made of high-quality denim cotton in an oversized cut and a blue scrubbed wash.`,
  },
  {
    id: 5,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "jacket",
    productName: "Grey Jacket",
    price: 200,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa7a3fd52/images/large/850171539_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa1ece07d/images/large/850171539_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw779cb9cf/images/models/850171539_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc507a25e/images/models/850171539_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Sweatshirt from Isabel Marant made of a combination of high-quality and pleasant cotton in a gray shade with a logo print on the front. The item has a straight and relaxed cut with a rounded collar and long sleeves with rib sayings. `,
  },
  {
    id: 6,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "shirt",
    productName: "Orange T-shirt",
    price: 150,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd7b4cf5e/images/large/850171765_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw20efd375/images/large/850171765_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2073561d/images/models/850171765_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8396159c/images/models/850171765_L_2.JPG?sw=113&sh=170",
    ],
    desc: `T-shirt from Isabel Marant made of 100% soft and comfortable cotton fabric in a white shade with a print bearing the brand name on the front side. The item has a straight and relaxed cut with a rounded collar and short sleeves.`,
  },
  {
    id: 7,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "jeans",
    productName: "Jeans",
    price: 300,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw663fdeb3/images/large/850171603_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcbbf80b9/images/large/850171603_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw20287806/images/models/850171603_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc1f205cf/images/models/850171603_L_2.JPG?sw=113&sh=170",
    ],
    desc: `T-shirt from Isabel Marant made of 100% soft and comfortable cotton fabric in a white shade with a print bearing the brand name on the front side. The item has a straight and relaxed cut with a rounded collar and short sleeves.`,
  },
  {
    id: 8,
    title: "ISABEL MARANT",
    category: "ISABELMARANT",
    type: "shirt",
    productName: "White Shirt",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd4e7d7a3/images/large/850171558_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d401438/images/models/850171558_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw52e54f2d/images/models/850171558_L_2.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d401438/images/models/850171558_L_3.JPG?sw=113&sh=170",
    ],
    desc: `T-shirt from Isabel Marant made of 100% soft and comfortable cotton fabric in a white shade with a print bearing the brand name on the front side. The item has a straight and relaxed cut with a rounded collar and short sleeves.`,
  },
  {
    id: 9,
    title: "LEVIS",
    category: "LEVIS",
    type: "jeans",
    productName: "Jeans",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwca1160be/images/large/550046402_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw49257f15/images/large/550046402_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw24154fa7/images/models/550046402_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c5a4960/images/models/550046402_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Jeans from Levi's. This is the iconic 501 model made of 100% quality denim cotton in a brushed blue shade.`,
  },
  {
    id: 10,
    title: "LEVIS",
    category: "LEVIS",
    type: "jeans",
    productName: "Jeans",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf2c832db/images/large/550045811_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc0562148/images/large/550045811_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw96e00a85/images/models/550045811_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw37cc47d1/images/models/550045811_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Jeans from Levi's. This is the iconic 501 model made of 100% quality denim cotton in a brushed blue shade.`,
  },
  {
    id: 11,
    title: "LEVIS",
    category: "LEVIS",
    type: "jeans",
    productName: "Jeans",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1666f478/images/large/550045638_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw36c587ab/images/large/550045638_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4caebb24/images/models/550045638_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7d54907f/images/models/550045638_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Jeans from Levi's. This is the iconic 501 model made of 100% quality denim cotton in a brushed blue shade.`,
  },
  {
    id: 12,
    title: "LEVIS",
    category: "LEVIS",
    type: "jeans",
    productName: "Jeans",
    price: 250,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe0a67bd9/images/large/550045909_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee4bd18f/images/models/550045909_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee4bd18f/images/models/550045909_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfa51332/images/large/550045909_P_2.png?sw=113&sh=170",
    ],
    desc: `Jeans from Levi's. This is the iconic 501 model made of 100% quality denim cotton in a brushed blue shade.`,
  },
  {
    id: 13,
    title: "LEVIS",
    category: "LEVIS",
    type: "jacket",
    productName: "Jacket",
    price: 200,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwea7ba8c7/images/large/550046555_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd35c4e5c/images/large/550046555_P_2.png?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw755345f4/images/models/550046555_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc74d0957/images/models/550046555_L_2.JPG?sw=113&sh=170",
    ],
    desc: `Sherpa jacket by the American denim brand Levi's made of 100% cotton in a pastel green shade with a lining in a white furry finish. The item has a straight and relaxed cut with a button closure and a pair of front pockets.`,
  },
  {
    id: 14,
    title: "LEVIS",
    category: "LEVIS",
    type: "jacket",
    productName: "Jacket",
    price: 200,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw25706b3d/images/large/550045525_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw301663a1/images/models/550045525_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0d91dee9/images/models/550045525_L_2.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf4a36e89/images/models/550045525_L%20550045899%20550045961%20941000994%20550045998%20T.JPG?sw=113&sh=170",
    ],
    desc: `Sherpa jacket by the American denim brand Levi's made of 100% cotton in a pastel green shade with a lining in a white furry finish. The item has a straight and relaxed cut with a button closure and a pair of front pockets.`,
  },
  {
    id: 15,
    title: "LEVIS",
    category: "LEVIS",
    type: "jacket",
    productName: "Jacket",
    price: 200,
    img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw25706b3d/images/large/550045525_P_1.png?sw=298&sh=447",
    imgList: [
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw301663a1/images/models/550045525_L_3.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0d91dee9/images/models/550045525_L_2.JPG?sw=113&sh=170",
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf4a36e89/images/models/550045525_L%20550045899%20550045961%20941000994%20550045998%20T.JPG?sw=113&sh=170",
    ],
    desc: `Sherpa jacket by the American denim brand Levi's made of 100% cotton in a pastel green shade with a lining in a white furry finish. The item has a straight and relaxed cut with a button closure and a pair of front pockets.`,
  },
];
export default products;
