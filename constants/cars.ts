interface CarModels {
  [make: string]: {
    [model: string]: string[];
  };
}

export const carModels: CarModels = {
  Ford: {
    Mustang: ["EcoBoost", "GT", "Shelby GT500"],
    F150: ["XL", "XLT", "Lariat", "Platinum", "Limited", "Raptor"],
    Focus: ["S", "SE", "Titanium", "ST", "RS"],
  },
  Chevrolet: {
    Camaro: ["1LS", "1LT", "2LT", "SS", "ZL1"],
    Silverado: ["WT", "Custom", "LT", "RST", "High Country"],
    Corvette: ["Stingray", "Z06", "ZR1"],
  },
  Toyota: {
    Corolla: ["L", "LE", "XLE", "SE", "XSE"],
    Camry: ["LE", "SE", "XSE", "TRD"],
    LandCruiser: ["Base", "Heritage Edition"],
    Prius: ["L Eco", "LE", "XLE", "Limited", "Prime"],
  },
  BMW: {
    "3 Series": ["330i", "330e", "M340i"],
    "5 Series": ["530i", "540i", "M550i"],
    X5: ["sDrive40i", "xDrive40i", "M50i"],
  },
  MercedesBenz: {
    CClass: ["C300", "AMG C43", "AMG C63"],
    EClass: ["E350", "E450", "AMG E53"],
    GClass: ["G550", "AMG G63"],
  },
  Honda: {
    Civic: ["LX", "Sport", "EX", "Touring", "Si", "Type R"],
    Accord: ["LX", "Sport", "EX-L", "Touring"],
    CRV: ["LX", "EX", "EX-L", "Touring"],
  },
  Tesla: {
    ModelS: ["Long Range", "Plaid"],
    Model3: ["Standard Range Plus", "Long Range", "Performance"],
    ModelX: ["Long Range", "Plaid"],
    ModelY: ["Long Range", "Performance"],
  },
  Nissan: {
    Altima: ["S", "SV", "SR", "SL", "Platinum"],
    GTR: ["Premium", "NISMO"],
    Leaf: ["S", "SV", "SL Plus"],
  },
  Volkswagen: {
    Golf: ["S", "SE", "GTI", "R"],
    Jetta: ["S", "SE", "R-Line", "SEL"],
    Passat: ["S", "SE", "R-Line"],
  },
  Ferrari: {
    488: ["GTB", "Spider", "Pista"],
    Portofino: ["Base", "M"],
    Roma: ["Base"],
  },
  Porsche: {
    911: ["Carrera", "Carrera S", "Turbo", "GT3"],
    Cayenne: ["Base", "S", "Turbo", "E-Hybrid"],
    Macan: ["Base", "S", "GTS", "Turbo"],
  },
  Hyundai: {
    Elantra: ["SE", "SEL", "Limited", "N Line"],
    Sonata: ["SE", "SEL", "Limited", "N Line"],
    Tucson: ["SE", "SEL", "Limited", "N Line"],
  },
  Kia: {
    Soul: ["LX", "S", "EX", "GT-Line", "Turbo"],
    Optima: ["LX", "S", "EX", "SX"],
    Sportage: ["LX", "S", "EX", "SX Turbo"],
  },
  Subaru: {
    Impreza: ["Base", "Premium", "Sport", "WRX", "STI"],
    Forester: ["Base", "Premium", "Sport", "Limited", "Touring"],
    Outback: ["Base", "Premium", "Onyx Edition XT", "Touring"],
  },
  Lexus: {
    RX: ["350", "350L", "450h", "450hL"],
    ES: ["250", "350", "300h"],
    IS: ["300", "350", "500 F Sport"],
  },
  Volvo: {
    XC90: ["Momentum", "R-Design", "Inscription", "Recharge"],
    S60: ["Momentum", "R-Design", "Inscription", "Polestar"],
    V60: ["Cross Country", "Inscription", "Polestar"],
  },
  Jaguar: {
    XF: ["P300 R-Dynamic", "S"],
    FType: ["P300", "P450", "P575 R"],
    IPace: ["S", "SE", "HSE"],
  },
  LandRover: {
    RangeRover: ["Velar", "Sport", "Autobiography", "Evoque"],
    Defender: ["90", "110", "130"],
    Discovery: ["Base", "S", "HSE", "Landmark Edition"],
  },
  AlfaRomeo: {
    Giulia: ["Sprint", "Ti", "Quadrifoglio"],
    Stelvio: ["Sprint", "Ti", "Quadrifoglio"],
    fourC: ["Spider", "Coupe"],
  },
  Fiat: {
    "500": ["Pop", "Lounge", "Abarth"],
    Panda: ["Easy", "Lounge", "4x4"],
    Tipo: ["Street", "Mirror", "S-Design"],
  },
  Maserati: {
    Ghibli: ["GT", "Modena", "Trofeo"],
    Levante: ["GT", "Modena", "Trofeo"],
    Quattroporte: ["GT", "Modena", "Trofeo"],
  },
  AstonMartin: {
    Vantage: ["Coupe", "Roadster", "AMR"],
    DB11: ["V8", "V12", "Volante"],
    DBS: ["Superleggera", "Volante"],
  },
  Bentley: {
    Continental: ["GT V8", "GT W12", "Speed"],
    Bentayga: ["V8", "Hybrid", "Speed"],
    FlyingSpur: ["V8", "W12", "Hybrid"],
  },
  Dodge: {
    Challenger: [
      "SXT",
      "GT",
      "R/T",
      "Scat Pack",
      "Hellcat",
      "Hellcat Redeye",
      "Super Stock",
    ],
    Charger: ["SXT", "GT", "R/T", "Scat Pack", "Hellcat", "Hellcat Redeye"],
    Durango: ["SXT", "GT", "Citadel", "R/T", "SRT 392", "SRT Hellcat"],
    Ram1500: ["Tradesman", "Big Horn", "Laramie", "Rebel", "Limited", "TRX"],
  },
};

export const fuelType = [
  "Gasoline(Petrol)",
  "Diesel",
  "Hybrid",
  "Electric",
  "Plug-in Hubrid (PHEV)",
  "CNG",
];

export const years = Array.from(
  { length: new Date().getFullYear() - 1990 + 1 },
  (_, index) => 1990 + index
);
