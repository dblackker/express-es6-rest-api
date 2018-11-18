// our example model is just an Array
const pets = [
  [
    {
      id: 1,
      name: "Roxy",
      breed: "affenpinscher",
      image: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg",
      image_thumb: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg"
    },
    {
      id: 2,
      name: "George",
      breed: "african",
      image: "https://images.dog.ceo/breeds/african/n02116738_10024.jpg",
      image_thumb: "https://images.dog.ceo/breeds/african/n02116738_10024.jpg"
    },
    {
      id: 3,
      name: "Winnie",
      breed: "airedale",
      image: "https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg",
      image_thumb: "https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg"
    },
    {
      id: 4,
      name: "Sparky",
      breed: "akita",
      image: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
      image_thumb: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg"
    },
    {
      id: 5,
      name: "Cali",
      breed: "appenzeller",
      image: "https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg",
      image_thumb: "https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg"
    },
    {
      id: 6,
      name: "Bubba",
      breed: "basenji",
      image: "https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg",
      image_thumb: "https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg"
    },
    {
      id: 7,
      name: "Tyson",
      breed: "beagle",
      image: "https://images.dog.ceo/breeds/beagle/n02088364_10108.jpg",
      image_thumb: "https://images.dog.ceo/breeds/beagle/n02088364_10108.jpg"
    },
    {
      id: 8,
      name: "Copper",
      breed: "bluetick",
      image: "https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg",
      image_thumb: "https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg"
    },
    {
      id: 9,
      name: "Luke",
      breed: "borzoi",
      image: "https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg",
      image_thumb: "https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg"
    },
    {
      id: 10,
      name: "Tucker",
      breed: "bouvier",
      image: "https://images.dog.ceo/breeds/bouvier/n02106382_1000.jpg",
      image_thumb: "https://images.dog.ceo/breeds/bouvier/n02106382_1000.jpg"
    },
    {
      id: 11,
      name: "Duke",
      breed: "boxer",
      image: "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg",
      image_thumb: "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg"
    },
    {
      id: 12,
      name: "Walter",
      breed: "brabancon",
      image: "https://images.dog.ceo/breeds/brabancon/n02112706_1041.jpg",
      image_thumb: "https://images.dog.ceo/breeds/brabancon/n02112706_1041.jpg"
    },
    {
      id: 13,
      name: "Maya",
      breed: "briard",
      image: "https://images.dog.ceo/breeds/briard/n02105251_12.jpg",
      image_thumb: "https://images.dog.ceo/breeds/briard/n02105251_12.jpg"
    },
    {
      id: 14,
      name: "Sam",
      breed: "bulldog",
      image: "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg",
      image_thumb: "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg"
    },
    {
      id: 15,
      name: "Moose",
      breed: "bullterrier",
      image:
        "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_10078.jpg"
    },
    {
      id: 16,
      name: "Jake",
      breed: "cairn",
      image: "https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg",
      image_thumb: "https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg"
    },
    {
      id: 17,
      name: "Tyson",
      breed: "cattledog",
      image: "https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.JPG",
      image_thumb: "https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.JPG"
    },
    {
      id: 18,
      name: "Archie",
      breed: "chihuahua",
      image: "https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg",
      image_thumb: "https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg"
    },
    {
      id: 19,
      name: "Elvis",
      breed: "chow",
      image: "https://images.dog.ceo/breeds/chow/n02112137_1005.jpg",
      image_thumb: "https://images.dog.ceo/breeds/chow/n02112137_1005.jpg"
    },
    {
      id: 20,
      name: "Scout",
      breed: "clumber",
      image: "https://images.dog.ceo/breeds/clumber/n02101556_1018.jpg",
      image_thumb: "https://images.dog.ceo/breeds/clumber/n02101556_1018.jpg"
    },
    {
      id: 21,
      name: "Willow",
      breed: "cockapoo",
      image: "https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg",
      image_thumb: "https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg"
    },
    {
      id: 22,
      name: "Athena",
      breed: "collie",
      image: "https://images.dog.ceo/breeds/collie-border/brodie.jpg",
      image_thumb: "https://images.dog.ceo/breeds/collie-border/brodie.jpg"
    },
    {
      id: 23,
      name: "Boomer",
      breed: "coonhound",
      image: "https://images.dog.ceo/breeds/coonhound/n02089078_1021.jpg",
      image_thumb: "https://images.dog.ceo/breeds/coonhound/n02089078_1021.jpg"
    },
    {
      id: 24,
      name: "Chico",
      breed: "corgi",
      image: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg",
      image_thumb: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg"
    },
    {
      id: 25,
      name: "Ginger",
      breed: "cotondetulear",
      image: "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg",
      image_thumb: "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg"
    },
    {
      id: 26,
      name: "Katie",
      breed: "dachshund",
      image: "https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg",
      image_thumb: "https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg"
    },
    {
      id: 27,
      name: "Milo",
      breed: "dalmatian",
      image: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
      image_thumb: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg"
    },
    {
      id: 28,
      name: "Holly",
      breed: "dane",
      image: "https://images.dog.ceo/breeds/dane-great/n02109047_1005.jpg",
      image_thumb: "https://images.dog.ceo/breeds/dane-great/n02109047_1005.jpg"
    },
    {
      id: 29,
      name: "Rusty",
      breed: "deerhound",
      image:
        "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_10060.jpg"
    },
    {
      id: 30,
      name: "Cookie",
      breed: "dhole",
      image: "https://images.dog.ceo/breeds/dhole/n02115913_1010.jpg",
      image_thumb: "https://images.dog.ceo/breeds/dhole/n02115913_1010.jpg"
    },
    {
      id: 31,
      name: "Buster",
      breed: "dingo",
      image: "https://images.dog.ceo/breeds/dingo/n02115641_10021.jpg",
      image_thumb: "https://images.dog.ceo/breeds/dingo/n02115641_10021.jpg"
    },
    {
      id: 32,
      name: "Baby",
      breed: "doberman",
      image: "https://images.dog.ceo/breeds/doberman/n02107142_10009.jpg",
      image_thumb: "https://images.dog.ceo/breeds/doberman/n02107142_10009.jpg"
    },
    {
      id: 33,
      name: "Cody",
      breed: "elkhound",
      image:
        "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1110.jpg"
    },
    {
      id: 34,
      name: "Oliver",
      breed: "entlebucher",
      image: "https://images.dog.ceo/breeds/entlebucher/n02108000_1011.jpg",
      image_thumb: "https://images.dog.ceo/breeds/entlebucher/n02108000_1011.jpg"
    },
    {
      id: 35,
      name: "Mac",
      breed: "eskimo",
      image: "https://images.dog.ceo/breeds/eskimo/n02109961_10021.jpg",
      image_thumb: "https://images.dog.ceo/breeds/eskimo/n02109961_10021.jpg"
    },
    {
      id: 36,
      name: "Ginger",
      breed: "frise",
      image:
        "https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg"
    },
    {
      id: 37,
      name: "Sierra",
      breed: "germanshepherd",
      image: "https://images.dog.ceo/breeds/germanshepherd/n02106662_10122.jpg",
      image_thumb: "https://images.dog.ceo/breeds/germanshepherd/n02106662_10122.jpg"
    },
    {
      id: 38,
      name: "Maggie",
      breed: "greyhound",
      image:
        "https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg"
    },
    {
      id: 39,
      name: "Gizmo",
      breed: "groenendael",
      image: "https://images.dog.ceo/breeds/groenendael/n02105056_1018.jpg",
      image_thumb: "https://images.dog.ceo/breeds/groenendael/n02105056_1018.jpg"
    },
    {
      id: 40,
      name: "Lulu",
      breed: "hound",
      image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      image_thumb: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
    },
    {
      id: 41,
      name: "Dixie",
      breed: "husky",
      image: "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
      image_thumb: "https://images.dog.ceo/breeds/husky/20180901_150234.jpg"
    },
    {
      id: 42,
      name: "Charlie",
      breed: "keeshond",
      image: "https://images.dog.ceo/breeds/keeshond/n02112350_10023.jpg",
      image_thumb: "https://images.dog.ceo/breeds/keeshond/n02112350_10023.jpg"
    },
    {
      id: 43,
      name: "Annie",
      breed: "kelpie",
      image: "https://images.dog.ceo/breeds/kelpie/n02105412_1031.jpg",
      image_thumb: "https://images.dog.ceo/breeds/kelpie/n02105412_1031.jpg"
    },
    {
      id: 44,
      name: "Jasper",
      breed: "komondor",
      image: "https://images.dog.ceo/breeds/komondor/n02105505_1018.jpg",
      image_thumb: "https://images.dog.ceo/breeds/komondor/n02105505_1018.jpg"
    },
    {
      id: 45,
      name: "Gracie",
      breed: "kuvasz",
      image: "https://images.dog.ceo/breeds/kuvasz/n02104029_1075.jpg",
      image_thumb: "https://images.dog.ceo/breeds/kuvasz/n02104029_1075.jpg"
    },
    {
      id: 46,
      name: "Moose",
      breed: "labrador",
      image: "https://images.dog.ceo/breeds/labrador/n02099712_1150.jpg",
      image_thumb: "https://images.dog.ceo/breeds/labrador/n02099712_1150.jpg"
    },
    {
      id: 47,
      name: "Bailey",
      breed: "leonberg",
      image: "https://images.dog.ceo/breeds/leonberg/n02111129_1.jpg",
      image_thumb: "https://images.dog.ceo/breeds/leonberg/n02111129_1.jpg"
    },
    {
      id: 48,
      name: "Jack",
      breed: "lhasa",
      image: "https://images.dog.ceo/breeds/lhasa/n02098413_10144.jpg",
      image_thumb: "https://images.dog.ceo/breeds/lhasa/n02098413_10144.jpg"
    },
    {
      id: 49,
      name: "Emma",
      breed: "malamute",
      image: "https://images.dog.ceo/breeds/malamute/n02110063_10025.jpg",
      image_thumb: "https://images.dog.ceo/breeds/malamute/n02110063_10025.jpg"
    },
    {
      id: 50,
      name: "Marley",
      breed: "malinois",
      image: "https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg",
      image_thumb: "https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg"
    },
    {
      id: 51,
      name: "Gunner",
      breed: "maltese",
      image: "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg",
      image_thumb: "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg"
    },
    {
      id: 52,
      name: "Murphy",
      breed: "mastiff",
      image: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1013.jpg",
      image_thumb: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1013.jpg"
    },
    {
      id: 53,
      name: "Buddy",
      breed: "mexicanhairless",
      image: "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1006.jpg",
      image_thumb: "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1006.jpg"
    },
    {
      id: 54,
      name: "Scout",
      breed: "mix",
      image: "https://images.dog.ceo/breeds/mix/Galaxy.jpg",
      image_thumb: "https://images.dog.ceo/breeds/mix/Galaxy.jpg"
    },
    {
      id: 55,
      name: "Winston",
      breed: "mountain",
      image: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_1003.jpg",
      image_thumb: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_1003.jpg"
    },
    {
      id: 56,
      name: "Mocha",
      breed: "newfoundland",
      image: "https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg",
      image_thumb: "https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg"
    },
    {
      id: 57,
      name: "Duke",
      breed: "otterhound",
      image: "https://images.dog.ceo/breeds/otterhound/n02091635_1043.jpg",
      image_thumb: "https://images.dog.ceo/breeds/otterhound/n02091635_1043.jpg"
    },
    {
      id: 58,
      name: "Baxter",
      breed: "papillon",
      image: "https://images.dog.ceo/breeds/papillon/n02086910_10147.jpg",
      image_thumb: "https://images.dog.ceo/breeds/papillon/n02086910_10147.jpg"
    },
    {
      id: 59,
      name: "Trixie",
      breed: "pekinese",
      image: "https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg"
    },
    {
      id: 60,
      name: "Chase",
      breed: "pembroke",
      image: "https://images.dog.ceo/breeds/pembroke/n02113023_10636.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pembroke/n02113023_10636.jpg"
    },
    {
      id: 61,
      name: "Pebbles",
      breed: "pinscher",
      image:
        "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_105.jpg"
    },
    {
      id: 62,
      name: "Scout",
      breed: "pointer",
      image: "https://images.dog.ceo/breeds/pointer-german/n02100236_1054.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pointer-german/n02100236_1054.jpg"
    },
    {
      id: 63,
      name: "Bonnie",
      breed: "pomeranian",
      image: "https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg"
    },
    {
      id: 64,
      name: "Rusty",
      breed: "poodle",
      image: "https://images.dog.ceo/breeds/poodle-miniature/n02113712_1036.jpg",
      image_thumb: "https://images.dog.ceo/breeds/poodle-miniature/n02113712_1036.jpg"
    },
    {
      id: 65,
      name: "Ginger",
      breed: "pug",
      image: "https://images.dog.ceo/breeds/pug/brody-rufferee.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pug/brody-rufferee.jpg"
    },
    {
      id: 66,
      name: "Chico",
      breed: "puggle",
      image: "https://images.dog.ceo/breeds/puggle/IMG_041234.jpg",
      image_thumb: "https://images.dog.ceo/breeds/puggle/IMG_041234.jpg"
    },
    {
      id: 67,
      name: "Heidi",
      breed: "pyrenees",
      image: "https://images.dog.ceo/breeds/pyrenees/n02111500_1031.jpg",
      image_thumb: "https://images.dog.ceo/breeds/pyrenees/n02111500_1031.jpg"
    },
    {
      id: 68,
      name: "Harley",
      breed: "redbone",
      image: "https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg",
      image_thumb: "https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg"
    },
    {
      id: 69,
      name: "Marley",
      breed: "retriever",
      image:
        "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1024.jpg"
    },
    {
      id: 70,
      name: "Dixie",
      breed: "ridgeback",
      image:
        "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_10014.jpg"
    },
    {
      id: 71,
      name: "Sam",
      breed: "rottweiler",
      image: "https://images.dog.ceo/breeds/rottweiler/n02106550_10048.jpg",
      image_thumb: "https://images.dog.ceo/breeds/rottweiler/n02106550_10048.jpg"
    },
    {
      id: 72,
      name: "Brutus",
      breed: "saluki",
      image: "https://images.dog.ceo/breeds/saluki/n02091831_10215.jpg",
      image_thumb: "https://images.dog.ceo/breeds/saluki/n02091831_10215.jpg"
    },
    {
      id: 73,
      name: "Lacey",
      breed: "samoyed",
      image: "https://images.dog.ceo/breeds/samoyed/Ollie_Samoyed.jpg",
      image_thumb: "https://images.dog.ceo/breeds/samoyed/Ollie_Samoyed.jpg"
    },
    {
      id: 74,
      name: "Athena",
      breed: "schipperke",
      image: "https://images.dog.ceo/breeds/schipperke/n02104365_10071.jpg",
      image_thumb: "https://images.dog.ceo/breeds/schipperke/n02104365_10071.jpg"
    },
    {
      id: 75,
      name: "Brody",
      breed: "schnauzer",
      image: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1032.jpg",
      image_thumb: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1032.jpg"
    },
    {
      id: 76,
      name: "Blue",
      breed: "setter",
      image: "https://images.dog.ceo/breeds/setter-english/n02100735_10030.jpg",
      image_thumb: "https://images.dog.ceo/breeds/setter-english/n02100735_10030.jpg"
    },
    {
      id: 77,
      name: "Lucky",
      breed: "sheepdog",
      image:
        "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg"
    },
    {
      id: 78,
      name: "Oscar",
      breed: "shiba",
      image: "https://images.dog.ceo/breeds/shiba/shiba-1.jpg",
      image_thumb: "https://images.dog.ceo/breeds/shiba/shiba-1.jpg"
    },
    {
      id: 79,
      name: "Otis",
      breed: "shihtzu",
      image: "https://images.dog.ceo/breeds/shihtzu/n02086240_1011.jpg",
      image_thumb: "https://images.dog.ceo/breeds/shihtzu/n02086240_1011.jpg"
    },
    {
      id: 80,
      name: "Tank",
      breed: "spaniel",
      image: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1002.jpg",
      image_thumb: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1002.jpg"
    },
    {
      id: 81,
      name: "Lola",
      breed: "springer",
      image: "https://images.dog.ceo/breeds/springer-english/n02102040_1055.jpg",
      image_thumb: "https://images.dog.ceo/breeds/springer-english/n02102040_1055.jpg"
    },
    {
      id: 82,
      name: "Sydney",
      breed: "stbernard",
      image: "https://images.dog.ceo/breeds/stbernard/n02109525_10032.jpg",
      image_thumb: "https://images.dog.ceo/breeds/stbernard/n02109525_10032.jpg"
    },
    {
      id: 83,
      name: "Chester",
      breed: "terrier",
      image:
        "https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg"
    },
    {
      id: 84,
      name: "Grace",
      breed: "vizsla",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10249.jpg",
      image_thumb: "https://images.dog.ceo/breeds/vizsla/n02100583_10249.jpg"
    },
    {
      id: 85,
      name: "Stella",
      breed: "weimaraner",
      image: "https://images.dog.ceo/breeds/weimaraner/n02092339_1013.jpg",
      image_thumb: "https://images.dog.ceo/breeds/weimaraner/n02092339_1013.jpg"
    },
    {
      id: 86,
      name: "Oliver",
      breed: "whippet",
      image: "https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg",
      image_thumb: "https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg"
    },
    {
      id: 87,
      name: "Dakota",
      breed: "wolfhound",
      image: "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      image_thumb: "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg"
    }
  ]
];
export default pets;
