const PRODUCTS = [
    {
        name: "HP Pavilion",
        price: 70000,
        type: "Laptop",
        desc: "12th Gen Intel Core i5-1235U 8GB RAM 512GB SSD 14-inch (35.6 cm) Multitouch-Enabled Micro-Edge FHD Laptop Intel Iris Xe Graphics Backlit KB B&O Win 11 MSO 2021 Space Blue 14-ek0086TU",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/q/b/-original-imagp7pfjb8utket.jpeg?q=70"
      },
      {
        name: "HP 15s",
        price: 45000,
        type: "Laptop",
        desc: "Core i3 11th Gen - (8 GB 512 GB SSD Windows 10 Home) 15s-FQ2072TU Thin and Light Laptop (15.6 inch Jet Black 1.69 kg With MS Office)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/t/u/-original-imagp7pghddyrv3r.jpeg?q=70"
      },
      {
        name: "Lenovo IdeaPad",
        price: 65000,
        type: "Laptop",
        desc: "Ryzen 5 Hexa Core 5600H - (8 GB 512 GB SSD Windows 10 Home 4 GB Graphics NVIDIA GeForce RTX 3050) 15ACH6 Gaming Laptop (15.6 inch Shadow Black 2.25 kg With MS Office)",
        image: "https://rukminim2.flixcart.com/image/416/416/ks99aq80/computer/y/z/7/na-gaming-laptop-lenovo-original-imag5ve3jvhgvsnx.jpeg?q=70"
      },
      {
        name: "Lenovo Yoga Slim 7",
        price: 75000,
        type: "Laptop",
        desc: "Intel Evo Core i5 11th Gen - (16 GB 512 GB SSD Windows 11 Home) 14IHU5 Thin and Light Laptop (14 Inch Slate Grey 1.3 Kg With MS Office)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/o/q/c/-original-imagr6utxjr6javh.jpeg?q=70"
      },
      {
        name: "Dell 15 Laptop",
        price: 40000,
        type: "Laptop",
        desc: "Intel Core i3-1115G4 8GB 1TB + 256GB SSD 15.6\" (39.62cm) FHD Comfortview to Reduce Harmful Blue Light Mobile Connect Windows 11 + MSO'21 15 Month McAfee Carbon 1.69kg",
        image: "https://rukminim2.flixcart.com/image/416/416/krdtlzk0/computer/l/k/r/na-laptop-dell-original-imag57f9psmfjcxs.jpeg?q=70"
      },
      {
        name: "Dell G15",
        price: 120000,
        type: "Laptop",
        desc: "G15-5530 Core i7 13th Gen - (16 GB 512 GB SSD Windows 11 Home 6 GB Graphics NVIDIA GeForce RTX 4050 120 Hz) 5530 Gaming Laptop (15.6 inch Dark Shadow Gray With Black Thermal Shelf 2.81 kg With MS Office)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/s/x/z/g15-gaming-laptop-dell-original-imagqzfysgpzsjuc.jpeg?q=70"
      },
      {
        name: "Apple MacBook AIR M2",
        price: 110000,
        type: "Laptop",
        desc: "8 GB 256 GB SSD Mac OS Monterey) MLY33HN/A (13.6 Inch Midnight 1.24 Kg) 13.6 Inch Liquid Retina Display LED-backlit display with IPS technology 500 nits brightness Wide colour (P3) True Tone technology",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70"
      },
      {
        name: "Apple Macbook Air M1",
        price: 80000,
        type: "Laptop",
        desc: "8 GB 256 GB SSD Mac OS Big Sur) MGN63HN/A (13.3 inch Space Grey 1.29 kg) 13.3 inch Quad LED Backlit IPS Display (227 PPI 400 nits Brightness Wide Colour (P3) True Tone Technology)",
        image: "https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
      },
      {
        name: "APPLE MacBook Pro M2 Pro",
        price: 150000,
        type: "Laptop",
        desc: "16 GB 512 GB SSD macOS Ventura) MPHE3HN/A (14 Inch Space Grey 1.60 Kg) 14 Inch Liquid Retina XDR display 1000000:1 contrast ratio XDR brightness: 1000 nits sustained full screen 1600 nits peak2 (HDR content only) SDR brightness: 500 nits",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/i/y/mphg3hn-a-thin-and-light-laptop-apple-original-imagmfhepavqyfyy.jpeg?q=70"
      },
      {
        name: "Lenovo Intel Celeron",
        price: 35000,
        type: "Laptop",
        desc: "Dual Core - (8 GB 256 GB SSD Windows 11 Home) 15IGL05 Laptop (15.6 Inch Platinum Grey 1.7 Kg With MS Office) Light Laptop without Optical Disk Drive 15.6 Inch HD TN (220nits Anti-glare)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/z/b/z/-original-imagmmng8dppnn4v.jpeg?q=70"
      },
      {
        name: "Acer Aspire 7",
        price: 55000,
        type: "Laptop",
        desc: "Core i5 12th Gen - (16 GB 512 GB SSD Windows 11 Home 4 GB Graphics NVIDIA GeForce GTX 1650 60 Hz) A715-76G Gaming Laptop (15.6 Inch Charcoal Black 2.1 Kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/k/c/x/-original-imagqf3ahw9bfjn9.jpeg?q=70"
      },
      {
        name: "ASUS TUF Gaming F15",
        price: 100000,
        type: "Laptop",
        desc: "Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050 Ti/144 Hz) FX577ZE-HN056W Gaming Laptop (15.6 inch, Jaeger Gray, 2.20 kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/computer/l/7/m/-original-imagetj2awbvdju6.jpeg?q=70"
      },
      {
        name: "Acer One Core",
        price: 30000,
        type: "Laptop",
        desc: "i3 11th Gen - (8 GB 256 GB SSD Windows 11 Home) One 14 Z8-415 Thin and Light Laptop  (14 Inch Silver 1.49 Kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/w/u/0/-original-imagqyfdvgcwc54x.jpeg?q=70"
      },
      {
        name: "Acer Aspire 3 Core",
        price: 48000,
        type: "Laptop",
        desc: "i5 11th Gen - (8 GB 256 GB SSD Windows 11 Home) One 14 Z8-415 Thin and Light Laptop  (14 Inch Silver 1.49 Kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/a/x/l/-original-imagqbud3jqmhdet.jpeg?q=70"
      },
      {
        name: "ASUS Vivobook 16X",
        price: 64000,
        type: "Laptop",
        desc: "Ryzen 7 Octa Core AMD Ryzen 7 5800H - (16 GB 512 GB SSD Windows 11 Home) M1603QA-MB712WS Notebook  (16 inch Transparent Silver 1.8 kg With MS Office)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70"
      },
      {
        name: "ASUS Vivobook 15",
        price: 50000,
        type: "Laptop",
        desc: "Core i5 12th Gen - (8 GB 512 GB SSD Windows 11 Home) X1502ZA-EJ515WS Thin and Light Laptop  (Icelight Silver 1.7 Kg With MS Office) 15.6 Inch FHD (1920 x 1080) 16 9 aspect ratio LED Backlit LCD Anti-glare display 220nits Brightness 82 % Screen-to-body ratio",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/t/b/-original-imagpxgqjeghkq7b.jpeg?q=70"
      },
      {
        name: "SAMSUNG Galaxy Book3",
        price: 90000,
        type: "Laptop",
        desc: "Core i7 Core i7 13th Gen - (16 GB 512 GB SSD Windows 11 Home) Galaxy Book3 Thin and Light Laptop  (15.6 Inch Silver 1.58 Kg With MS Office)  Finger Print Sensor for Faster System Access",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/y/f/galaxy-book3-thin-and-light-laptop-samsung-original-imagnb277ppuutjd.jpeg?q=70"
      },
      {
        name: "HP Pavilion Plus",
        price: 80000,
        type: "Laptop",
        desc: "OLED Eyesafe (2023) Intel H-Series Core i5 12th Gen - (16 GB 512 GB SSD Windows 11 Home) 14-eh0037TU Thin and Light Laptop  14 Inch 2.8K OLED 90 Hz UWVA micro-edge BrightView Low Blue Light SDR Brightness 400 nits HDR Brightness 500 nits 243 ppi Color Gamut 100% DCI-P3",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/o/f/-original-imagp7pfpfw7vdky.jpeg?q=70"
      },
      {
        name: "MSI Bravo 15",
        price: 60000,
        type: "Laptop",
        desc: "Ryzen 7 Octa Core 5800H - (8 GB 512 GB SSD Windows 11 Home 4 GB Graphics AMD Radeon RX6500M 144 Hz) Bravo 15 B5ED-034IN Gaming Laptop  (15.6 inch Black 2.35 Kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/d/h/q/-original-imagrmhu8wvhykb7.jpeg?q=70"
      },
      {
        name: "MSI Katana 15",
        price: 85000,
        type: "Laptop",
        desc: "Core i5 12th Gen - (16 GB 512 GB SSD Windows 11 Home 6 GB Graphics NVIDIA GeForce RTX 3050) Katana 15 B12UDXK-1005IN Gaming Laptop  (15.6 Inch Black 2.25 Kg)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/e/6/c/-original-imags9wbfxv6hydz.jpeg?q=70"
      },
       {
        name: "SAMSUNG Galaxy F14 5G",
        price: 15000,
        type: "Phone",
        desc: "6 GB RAM 128 GB ROM Expandable Upto 1 TB 16.76 cm (6.6 inch) Full HD+ Display 50MP + 2MP 13MP Front Camera 6000 mAh Battery Exynos 1330 Octa Core Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/b/r/galaxy-f14-5g-sm-e146bzkhins-samsung-original-imagnzdkvrt2sxrq.jpeg?q=70"
      },
      {
        name: "SAMSUNG Galaxy M04",
        price: 8500,
        type: "Phone",
        desc: "4 GB RAM 64 GB ROM Expandable Upto 1 TB 16.51 cm (6.5 inch) HD+ Display 13MP + 2MP 5MP Front Camera 5000 mAh Battery MediaTek Helio P35 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/n/h/galaxy-m04-sm-m045f-samsung-original-imagh8ghfyxznzyu.jpeg?q=70"
      },
      {
        name: "REDMI 11",
        price: 10000,
        type: "Phone",
        desc: "4 GB RAM 128 GB ROM Expandable Upto 1 TB 17.25 cm (6.79 inch) Full HD+ Display 50MP + 8MP + 2MP 8MP Front Camera 5000 mAh Battery Helio G88 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70"
      },
      {
        name: "REDMI Note 12 Pro 5G",
        price: 24000,
        type: "Phone",
        desc: "6 GB RAM 128 GB ROM 16.94 cm (6.67 inch) Full HD+ AMOLED Display 50MP (OIS) + 8MP + 2MP 16MP Front Camera 5000 mAh Lithium Polymer Battery Mediatek Dimensity 1080 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70"
      },
      {
        name: "Xiaomi 12 Pro 5G",
        price: 45000,
        type: "Phone",
        desc: "12 GB RAM 256 GB ROM 17.09 cm (6.73 inch) Full HD+ Display 50MP + 50MP + 50MP 32MP Front Camera 4600 mAh Lithium Polymer Battery Snapdragon 8 Gen 1 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/y/u/-original-imagqmtfu8gt62yv.jpeg?q=70"
      },
      {
        name: "SAMSUNG Galaxy A54 5G",
        price: 40000,
        type: "Phone",
        desc: "8 GB RAM 256 GB ROM Expandable Upto 1 TB 16.26 cm (6.4 inch) Full HD+ Display 50MP + 12MP + 5MP 32MP Front Camera 5000 mAh Battery Exynos 1380 Octa Core Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70"
      },
      {
        name: "OnePlus NORD CE2 LITE",
        price: 20000,
        type: "Phone",
        desc: "6 GB RAM 128 GB ROM 16.74 cm (6.59 inch) Display 64MP Rear Camera 5000 mAh Battery",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/m/6/one-plus-nord-ce2-lite-5g-ce2-lite-oneplus-original-imagrr9tkfg7hbwh.jpeg?q=70"
      },
      {
        name: "APPLE iPhone 14 Plus",
        price: 75000,
        type: "Phone",
        desc: "128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP 12MP Front Camera A15 Bionic Chip 6 Core Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/b/0/-original-imaghx9qnhzxegu2.jpeg?q=70"
      },
      {
        name: "APPLE iPhone 12",
        price: 55000,
        type: "Phone",
        desc: "128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP 12MP Front Camera A14 Bionic Chip with Next Generation Neural Engine Processor Ceramic Shield Industry-leading IP68 Water Resistance All Screen OLED Display 12MP TrueDepth Front Camera with Night Mode 4K Dolby Vision HDR Recording",
        image: "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70"
      },
      {
        name: "OPPO Reno10 5G",
        price: 32000,
        type: "Phone",
        desc: "8 GB RAM 256 GB ROM 17.02 cm (6.7 inch) Full HD+ Display 64MP + 32MP + 8MP 32MP Front Camera 5000 mAh Battery Dimensity 7050 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/d/-original-imagrn6d7ggk4wjp.jpeg?q=70"
      },
      {
        name: "MOTOROLA G32",
        price: 12000,
        type: "Phone",
        desc: "8 GB RAM 128 GB ROM 16.51 cm (6.5 inch) Full HD+ Display 50MP + 8MP + 2MP 16MP Front Camera 5000 mAh Lithium Polymer Battery Qualcomm Snapdragon 680 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70"
      },
      {
        name: "MOTOROLA e13",
        price: 8000,
        type: "Phone",
        desc: "4 GB RAM 64 GB ROM Expandable Upto 1 TB 16.51 cm (6.5 inch) HD+ Display 13MP Rear Camera 5MP Front Camera 5000 mAh Battery Unisoc T606 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=70"
      },
      {
        name: "POCO C51",
        price: 7000,
        type: "Phone",
        desc: "4 GB RAM 64 GB ROM Expandable Upto 1 TB 16.56 cm (6.52 inch) HD+ Display 8MP Dual Rear Camera 5MP Front Camera 5000 mAh Battery Helio G36 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/v/0/c51-mzb0dxkin-poco-original-imagzdpycgrcdc8z.jpeg?q=70"
      },
      {
        name: "POCO C55",
        price: 9000,
        type: "Phone",
        desc: "6 GB RAM 128 GB ROM Expandable Upto 1 TB 17.04 cm (6.71 inch) HD+ Display 50MP Dual Rear Camera 5MP Front Camera 5000 mAh Battery Mediatek Helio G85 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70"
      },
      {
        name: "MOTOROLA Edge 40",
        price: 30000,
        type: "Phone",
        desc: "8 GB RAM 256 GB ROM 16.51 cm (6.5 inch) Full HD+ Display 50MP + 13MP 32MP Front Camera 4400 mAh Battery Dimensity 8020 Processor Vegan Leather",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70"
      },
      {
        name: "MOTOROLA Edge 30 Ultra",
        price: 50000,
        type: "Phone",
        desc: "12 GB RAM 256 GB ROM 16.94 cm (6.67 inch) Full HD+ Display 200MP + 50MP + 12MP 60MP Front Camera 4610 mAh Lithium Battery Qualcomm Snapdragon 8+ Gen 1 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/x/l/-original-imaggfmg9yqbyphj.jpeg?q=70"
      },
      {
        name: "APPLE iPhone 13",
        price: 60000,
        type: "Phone",
        desc: "128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP 12MP Front Camera A15 Bionic Chip Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
      },
      {
        name: "SAMSUNG Galaxy S20",
        price: 80000,
        type: "Phone",
        desc: "8 GB RAM 128 GB ROM Expandable Upto 1 TB 16.51 cm (6.5 inch) Full HD+ Display 12MP + 12MP + 8MP Rear Camera 32MP Front Camera 4500 mAh Lithium Ion Battery Exynos Octa Core Processor Super AMOLED Display 120 Hz Rate IP68 Rating",
        image: "https://rukminim2.flixcart.com/image/416/416/kg15ocw0/mobile/j/n/e/samsung-galaxy-s20-fe-sm-g780flvnins-original-imafwd2jr9hyc77a.jpeg?q=70"
      },
      {
        name: "SAMSUNG Galaxy S22 Ultra 5G",
        price: 85000,
        type: "Phone",
        desc: "12 GB RAM 256 GB ROM 17.27 cm (6.8 inch) Quad HD+ Display 108MP + 12MP + 10MP + 10MP 40MP Front Camera 5000 mAh Lithium-ion Battery Octa Core Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/t/r/-original-imaggj68cgtdacxn.jpeg?q=70"
      },
      {
        name: "realme GT 2",
        price: 27000,
        type: "Phone",
        desc: "12 GB RAM 256 GB ROM 16.81 cm (6.62 inch) Full HD+ AMOLED Display 50MP + 8MP + 2MP 16MP Front Camera 5000 mAh Lithium Ion Battery Qualcomm Snapdragon 888 Processor",
        image: "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/mobile/m/o/3/-original-imagetmeb3y23xhb.jpeg?q=70"
      },
      {
        name: "realme Buds Air 3 Neo",
        price: 2000,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.2 Wireless range 10 m Battery life 30 hrs Charging time 2 hrs 10mm Bass Boost Drivers Dolby Audio (on supported devices) IPX5 Water Resistant Super Low Latency Gaming Mode realme Link App Connectivity (for Android devices only)",
        image: "https://rukminim2.flixcart.com/image/416/416/l572ufk0/headphone/x/o/p/air-3-neo-realme-original-imagfxcbkt8rmqbg.jpeg?q=70"
      },
      {
        name: "truke Air Buds",
        price: 900,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.1 Wireless range 10 m Battery life 48 hrs Charging time 1.5 hrs Quad MEMS MIC with ENC for Clear Calls Auto in-ear Detection with Bluetooth 5.1 48hours Long Lasting Battery 10hours playtime on single charge. 10mm Speaker Driver Providing Powerful Music Along with 20 Preset EQ modes via Smart Application",
        image: "https://rukminim2.flixcart.com/image/416/416/l2hwwi80/headphone/b/m/i/air-buds-truke-original-imagdtv45zttzkzd.jpeg?q=70"
      },
      {
        name: "Noise Air Buds Mini 2",
        price: 1400,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version v5.3 Wireless range 10 m Battery life 45 hrs Charging time 1.5 hrs Battery life 45 hrs Playtime ENC with Quad Mic Driver Size Immersive Audio with 13mm driver Instacharge 10-min = 120-min playtime Hyper Sync Low Latency(Upto 50ms)",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/o/w/-original-imagrchrvbxyxgu5.jpeg?q=70"
      },
      {
        name: "boAt Airdopes 161",
        price: 1000,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.1 Battery life 40 Hours Wireless Range 10m Battery Time upto 40 Hours ASAP Charge 5 mins = 90 mins 10mm Drivers IPX5 Water & Sweat Resistance",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/y/c/-original-imagrkek2hhfjr7z.jpeg?q=70"
      },
      {
        name: "Tunifi Gaming Pro 60",
        price: 600,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.2 Wireless range 15 m Battery life 48 hr Charging time 1Hr",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/6/0/x/gaming-pro-60-with-40h-playtime-quad-mic-enc-game-mode-13mm-original-imagny4hhtfsaqzz.jpeg?q=70"
      },
      {
        name: "Xezbi Earpod AIR-PRO",
        price: 500,
        type: "Airbuds",
        desc: "With Mic Yes  Bluetooth version 5.0 Wireless range 10 m Battery life 4 hr Charging time 2 Hours Case, 1 Hour Buds",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/2/v/4/earpod-air-pro-buds-wireless-earbuds-bass-4-h-playtime-bt-5-1-original-imagpckxefupgfzw.jpeg?q=70"
      },
      {
        name: "realme Buds Air 3",
        price: 3000,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.2 Wireless range 10 m Battery life 30 hrs Charging time 1 hours Active Noise Cancellation (up to 42dB) 10mm Dynamic Bass Boost Drivers Up to 30hrs Non-stop Playback Charging Time - 1 hour Fast Charging Supported - 10min charge for 100mins playback Dual Device Pairing Smart Wear Detection with Google Fast Pair Customized Music Tuning & Dolby Audio (on supported devices) IPX5 Water Resistant Super Low Latency Gaming Mode realme Link App Connectivity",
        image: "https://rukminim2.flixcart.com/image/416/416/l1dwknk0/headphone/j/d/y/-original-imagcyzhybgpe3yn.jpeg?q=70"
      },
      {
        name: "Portronics Harmonics Twins S3",
        price: 2200,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.2 Wireless range 10 m Charging time 1 hr Quad MEMS MIC with ENC for Clear Calls",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/0/l/harmonics-twins-s3-portronics-original-imagnys7yxnqdhss.jpeg?q=70"
      },
      {
        name: "Earboss AirDoze",
        price: 750,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.3 Wireless range 10 m Battery life 10000 hr Charging time 1.5 Hours Game Mode(45ms), Quad Mic ENC, 40 Hours Playback & LED Lights",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/s/h/s/airdoze-music-with-game-mode-45ms-quad-mic-enc-40-hours-playback-original-imagmzxqjggyaext.jpeg?q=70"
      },
      {
        name: "boAt Airdopes 192",
        price: 1600,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.3 Wireless range 10 m Playback Upto 30 Hours Beast Mode 40ms Super Low Latency for Gaming Quad Mics ENx Technology Clear Voice Calls 13mm Drivers",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/j/e/-original-imagnfufffaczakh.jpeg?q=70"
      },
      {
        name: "Boult Audio Airbass Z35",
        price: 1300,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.3 Wireless range 10 m Battery life 32 hrs Zen Tech ENC mic 45ms Ultra-Low Latency Gaming 32Hrs Playtime Lightning Boult Type-C Fastest Charging 10 Mins Charge = 150 Mins Playtime 13mm Drivers Sub-woofer BoomX Tech for Supreme Bass IPX5 Water Resistant Voice Assistant Touch Control",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/c/t/w/-original-imaghhvfaxyhdezb.jpeg?q=70"
      },
      {
        name: "realme Buds Air 3S",
        price: 2500,
        type: "Airbuds",
        desc: "With Mic Yes Bluetooth version 5.3 Wireless range 10 m Battery life 30 hrs Charging time 1.30 hrs 11mm Liquid Silicone Triple Titanium Bass Driver Quad-Mic AI ENC for Crystal Clear Calls. Dual device pairing Intelligent Touch Controls realme Link App connectivity IPX5 Water Resistant Super Low Latency Gaming Mode",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/u/g/s/-original-imagkk85dakgphwm.jpeg?q=70"
      }
];
