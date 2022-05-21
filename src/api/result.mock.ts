import { SearchResult } from "./search";

export const searchResultMock: SearchResult = {
  "iphone 1": {
    id: "iphone_1",
    name: "Iphone 1",
    brand: "Apple",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
  },
  "iphone 2": {
    id: "iphone_2",
    name: "Iphone 2",
    brand: "Apple",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
  },
  "iphone 3": {
    id: "iphone_3",
    name: "Iphone 3",
    brand: "Apple",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
  },
  "iphone 4": {
    id: "iphone_4",
    name: "Iphone 3",
    brand: "Apple",
    imageUrl:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
  },
};

export const detailsResultMock = {
  status: true,
  data: {
    brand: "Apple",
    phone_name: "iPhone 12 Pro Max",
    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
    phone_images: [
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-4.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-6.jpg",
    ],
    release_date: "Released 2020, November 13",
    dimension: "228g, 7.4mm thickness",
    os: "iOS 14.1, up to iOS 15.5",
    storage: "128GB/256GB/512GB storage, no card slot",
    specifications: [
      {
        title: "Network",
        specs: [
          { key: "Technology", val: ["GSM / CDMA / HSPA / EVDO / LTE / 5G"] },
          {
            key: "2G bands",
            val: [
              "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) - for China",
              "CDMA 800 / 1900 ",
            ],
          },
          {
            key: "3G bands",
            val: [
              "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 ",
              "CDMA2000 1xEV-DO ",
            ],
          },
          {
            key: "4G bands",
            val: [
              "1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66, 71 - A2342",
              "1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2411, A2412",
              "1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66, 71 - A2410",
            ],
          },
          {
            key: "5G bands",
            val: [
              "1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 38, 40, 41, 66, 71, 77, 78, 79, 260, 261 Sub6/mmWave - A2342",
              "1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 38, 40, 41, 66, 77, 78, 79 Sub6 - A2410, A2411, A2412",
            ],
          },
          {
            key: "Speed",
            val: ["HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps"],
          },
        ],
      },
      {
        title: "Launch",
        specs: [
          { key: "Announced", val: ["2020, October 13"] },
          { key: "Status", val: ["Available. Released 2020, November 13"] },
        ],
      },
      {
        title: "Body",
        specs: [
          {
            key: "Dimensions",
            val: ["160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in)"],
          },
          { key: "Weight", val: ["228 g (8.04 oz)"] },
          {
            key: "Build",
            val: [
              "Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame",
            ],
          },
          {
            key: "SIM",
            val: [
              "Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China",
            ],
          },
          {
            key: "Other",
            val: [
              "IP68 dust/water resistant (up to 6m for 30 mins)\nApple Pay (Visa, MasterCard, AMEX certified)",
            ],
          },
        ],
      },
      {
        title: "Display",
        specs: [
          {
            key: "Type",
            val: [
              "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
            ],
          },
          {
            key: "Size",
            val: ["6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)"],
          },
          {
            key: "Resolution",
            val: ["1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)"],
          },
          {
            key: "Protection",
            val: ["Scratch-resistant ceramic glass, oleophobic coating"],
          },
          { key: "Other", val: ["Wide color gamut\nTrue-tone"] },
        ],
      },
      {
        title: "Platform",
        specs: [
          { key: "OS", val: ["iOS 14.1, upgradable to iOS 15.5"] },
          { key: "Chipset", val: ["Apple A14 Bionic (5 nm)"] },
          {
            key: "CPU",
            val: ["Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)"],
          },
          { key: "GPU", val: ["Apple GPU (4-core graphics)"] },
        ],
      },
      {
        title: "Memory",
        specs: [
          { key: "Card slot", val: ["No"] },
          {
            key: "Internal",
            val: ["128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM"],
          },
          { key: "Other", val: ["NVMe"] },
        ],
      },
      {
        title: "Main Camera",
        specs: [
          {
            key: "Quad",
            val: [
              '12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS\n12 MP, f/2.2, 65mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2.5x optical zoom\n12 MP, f/2.4, 13mm, 120˚ (ultrawide), 1/3.6"\nTOF 3D LiDAR scanner (depth)',
            ],
          },
          {
            key: "Features",
            val: ["Dual-LED dual-tone flash, HDR (photo/panorama)"],
          },
          {
            key: "Video",
            val: [
              "4K@24/30/60fps, 1080p@30/60/120/240fps, 10‑bit HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
            ],
          },
        ],
      },
      {
        title: "Selfie camera",
        specs: [
          {
            key: "Dual",
            val: [
              '12 MP, f/2.2, 23mm (wide), 1/3.6"\nSL 3D, (depth/biometrics sensor)',
            ],
          },
          { key: "Features", val: ["HDR"] },
          {
            key: "Video",
            val: ["4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS"],
          },
        ],
      },
      {
        title: "Sound",
        specs: [
          { key: "Loudspeaker", val: ["Yes, with stereo speakers"] },
          { key: "3.5mm jack", val: ["No"] },
        ],
      },
      {
        title: "Comms",
        specs: [
          {
            key: "WLAN",
            val: ["Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot"],
          },
          { key: "Bluetooth", val: ["5.0, A2DP, LE"] },
          { key: "GPS", val: ["Yes, with A-GPS, GLONASS, GALILEO, QZSS"] },
          { key: "NFC", val: ["Yes"] },
          { key: "Radio", val: ["No"] },
          { key: "USB", val: ["Lightning, USB 2.0"] },
        ],
      },
      {
        title: "Features",
        specs: [
          {
            key: "Sensors",
            val: [
              "Face ID, accelerometer, gyro, proximity, compass, barometer",
            ],
          },
          { key: "Other", val: ["Ultra Wideband (UWB) support"] },
        ],
      },
      {
        title: "Battery",
        specs: [
          { key: "Type", val: ["Li-Ion 3687 mAh, non-removable (14.13 Wh)"] },
          {
            key: "Charging",
            val: [
              "Fast charging 22W, 50% in 30 min (advertised)\nUSB Power Delivery 2.0\nMagSafe wireless charging 15W\nQi magnetic fast wireless charging 7.5W",
            ],
          },
        ],
      },
      {
        title: "Misc",
        specs: [
          { key: "Colors", val: ["Silver, Graphite, Gold, Pacific Blue"] },
          { key: "Models", val: ["A2411, A2342, A2410, A2412, iPhone13,4"] },
          {
            key: "SAR EU",
            val: ["0.99 W/kg (head)     0.99 W/kg (body)     "],
          },
          {
            key: "Price",
            val: [
              "$ 984.93 / C$ 1,059.00 / £ 969.00 / € 1,343.03 / ₹ 149,900 / Rp 20,299,000",
            ],
          },
        ],
      },
      {
        title: "Tests",
        specs: [
          {
            key: "Performance",
            val: [
              "\nAnTuTu: 638584 (v8)\nGeekBench: 4240 (v5.1)\nGFXBench: 55fps (ES 3.1 onscreen)",
            ],
          },
          { key: "Display", val: ["\nContrast ratio: Infinite (nominal)"] },
          { key: "Camera", val: ["\nPhoto / Video"] },
          { key: "Loudspeaker", val: ["\n-23.8 LUFS (Very good)\n\n"] },
          { key: "Battery life", val: ["\n\nEndurance rating 95h\n\n"] },
          { key: "Other", val: [""] },
        ],
      },
    ],
  },
};
