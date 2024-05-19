interface MangaAttributes {
    title: {[key:string]:string};
    altTitles?: string[];
    description: string;
    isLocked?: boolean;
    links?: string;
    originalLanguage?: string;
    lastVolume?: string;
    lastChapter?: string;
    publicationDemographic?: string;
    status: string;
    year?: number;
    contentRating?: string;
    chapterNumbersResetOnNewVolume?: boolean;
    latestUploadedChapter?: string;
    tags?: MangaTag[];
    state?: string;
    version?: number;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface MangaRelationships {
    monochrome: string;
  }
  
  interface MangaTag {
    id: string;
    type: string;
    attributes: MangaTagAttributes;
    relationships: MangaTagRelationships;
  }
  
  interface MangaTagAttributes {
    name: string;
    description: string;
    group: string;
    version: number;
  }
  
  export interface MangaTagRelationships {
    monochrome: string;
  }
  
  export interface MangaModel {
  
    id: string;
    type: string;
    attributes: MangaAttributes;
    relationships?: MangaRelationships;
  
  }

  // {
  //   "result": "ok",
  //   "response": "entity",
  //   "data": {
  //     "id": "d1a9fdeb-f713-407f-960c-8326b586e6fd",
  //     "type": "manga",
  //     "attributes": {
  //       "title": {
  //         "en": "Vagabond"
  //       },
  //       "altTitles": [
  //         {
  //           "fr": "Avare"
  //         },
  //         {
  //           "vi": "Lãng Khách"
  //         },
  //         {
  //           "ru": "Бродяга"
  //         },
  //         {
  //           "ar": "المتشرد"
  //         },
  //         {
  //           "th": "วากาบอนด์"
  //         },
  //         {
  //           "ja": "バガボンド"
  //         },
  //         {
  //           "zh": "浪客行"
  //         },
  //         {
  //           "ko": "베가본드"
  //         },
  //         {
  //           "es-la": "Vagabundo"
  //         },
  //         {
  //           "es": "Vagabundo"
  //         },
  //         {
  //           "tr": "Avare"
  //         },
  //         {
  //           "tr": "Serseri"
  //         }
  //       ],
  //       "description": {
  //         "en": "Growing up in the late 16th century Sengoku era Japan, Shinmen Takezou is shunned by the local villagers as a devil child due to his wild and violent nature. Running away from home with a fellow boy at age 17, Takezo joins the Toyotomi army to fight the Tokugawa clan at the Battle of Sekigahara. However, the Tokugawa win a crushing victory, leading to nearly three hundred years of Shogunate rule. Takezo and his friend manage to survive the battle and afterwards swear to do great things with their lives. However, after their paths separate, Takezo becomes a wanted criminal and must change his name and his nature in order to escape an ignoble death.  \n  \n**Awards:**\n- Won the 24th Kodansha Manga Award in the general category in 2000.\n- Won the Tezuka Osamu Cultural Prize in 2002 \n**Note:** was nominated for the 2003 Eisner Award in the Best Writer/Artist category.",
  //         "es": "Creciendo en el Japón de la era Sengoku de finales del siglo XVI, Shinmen Takezou es rechazado por los aldeanos locales como un niño demonio debido a su naturaleza salvaje y violenta. A los 17 años, Takezou se escapa de casa con un compañero y se une al ejército Toyotomi para luchar contra el clan Tokugawa en la batalla de Sekigahara. Sin embargo, los Tokugawa obtienen una aplastante victoria, lo que da lugar a casi trescientos años de gobierno del Shogunato. Takezou y su amigo consiguen sobrevivir a la batalla y después juran hacer grandes cosas con sus vidas. Sin embargo, cuando sus caminos se separan, Takezou se convierte en un criminal buscado y debe cambiar su nombre y su naturaleza para escapar de una muerte innoble.  \n  \n**Premios:**\n    - Ganó el 24º Premio Kodansha de Manga en la categoría general en 2000.\n    - Ganó el Premio Cultural Tezuka Osamu en 2002\n    **Nota:** fue nominado al Premio Eisner 2003 en la categoría de Mejor Escritor/Artista.",
  //         "es-la": "Creciendo en el Japón de la era Sengoku de finales del siglo XVI, Shinmen Takezou es rechazado por los aldeanos locales como un niño demonio debido a su naturaleza salvaje y violenta. A los 17 años, Takezou se escapa de casa con un compañero y se une al ejército Toyotomi para luchar contra el clan Tokugawa en la batalla de Sekigahara. Sin embargo, los Tokugawa obtienen una aplastante victoria, lo que da lugar a casi trescientos años de gobierno del Shogunato. Takezou y su amigo consiguen sobrevivir a la batalla y después juran hacer grandes cosas con sus vidas. Sin embargo, cuando sus caminos se separan, Takezou se convierte en un criminal buscado y debe cambiar su nombre y su naturaleza para escapar de una muerte innoble.  \n  \n**Premios:**\n    - Ganó el 24º Premio Kodansha de Manga en la categoría general en 2000.\n    - Ganó el Premio Cultural Tezuka Osamu en 2002\n    **Nota:** fue nominado al Premio Eisner 2003 en la categoría de Mejor Escritor/Artista."
  //       },
  //       "isLocked": true,
  //       "links": {
  //         "al": "30656",
  //         "ap": "vagabond",
  //         "kt": "1482",
  //         "mu": "387",
  //         "amz": "https://www.amazon.co.jp/dp/4063286193/",
  //         "cdj": "http://www.cdjapan.co.jp/product/NEOBK-1934430",
  //         "mal": "656",
  //         "engtl": "https://www.viz.com/vagabond"
  //       },
  //       "originalLanguage": "ja",
  //       "lastVolume": "",
  //       "lastChapter": "",
  //       "publicationDemographic": "seinen",
  //       "status": "hiatus",
  //       "year": 1999,
  //       "contentRating": "safe",
  //       "tags": [
  //         {
  //           "id": "0a39b5a1-b235-4886-a747-1d05d216532d",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Award Winning"
  //             },
  //             "description": {},
  //             "group": "format",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "33771934-028e-4cb3-8744-691e866a923e",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Historical"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Action"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Psychological"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Martial Arts"
  //             },
  //             "description": {},
  //             "group": "theme",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Adventure"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "97893a4c-12af-4dac-b6be-0dffb353568e",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Sexual Violence"
  //             },
  //             "description": {},
  //             "group": "content",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Gore"
  //             },
  //             "description": {},
  //             "group": "content",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Drama"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         },
  //         {
  //           "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //           "type": "tag",
  //           "attributes": {
  //             "name": {
  //               "en": "Tragedy"
  //             },
  //             "description": {},
  //             "group": "genre",
  //             "version": 1
  //           },
  //           "relationships": []
  //         }
  //       ],
  //       "state": "published",
  //       "chapterNumbersResetOnNewVolume": false,
  //       "createdAt": "2018-02-09T05:29:14+00:00",
  //       "updatedAt": "2023-04-12T09:27:48+00:00",
  //       "version": 21,
  //       "availableTranslatedLanguages": [
  //         "it",
  //         "pt-br",
  //         "es-la",
  //         "en",
  //         "pl",
  //         "hu",
  //         "el",
  //         "ka",
  //         "uk",
  //         "id",
  //         "ar",
  //         "tr"
  //       ],
  //       "latestUploadedChapter": "98588ec0-b7ac-469f-ba18-867bc1791913"
  //     },
  //     "relationships": [
  //       {
  //         "id": "0b59098f-13c0-41cb-a110-9cbcec72dc0c",
  //         "type": "author",
  //         "attributes": {
  //           "name": "Inoue Takehiko",
  //           "imageUrl": null,
  //           "biography": {
  //             "en": "Takehiko Inoue (井上 雄彦, Inoue Takehiko, born 12 January 1967) is a Japanese manga artist. He is best known for the basketball series [Slam Dunk (1990–1996)](https://mangadex.org/title/319df2e2-e6a6-4e3a-a31c-68539c140a84/slam-dunk), and the jidaigeki manga [Vagabond](https://mangadex.org/title/d1a9fdeb-f713-407f-960c-8326b586e6fd/vagabond), which are two of the best-selling manga series in history. Many of his works are about basketball, Inoue himself being a huge fan of the sport. His works sold in North America through Viz Media are **Slam Dunk**, **Vagabond** and [Real](https://mangadex.org/title/62b74aa6-24df-4b91-b76d-39e7ab3c3ca5/real), although **Slam Dunk** was earlier translated by **Gutsoon! Entertainment**. In 2012, Inoue became the first recipient of the Cultural Prize at the Asia Cosmopolitan Awards.\n\n---\nHis real name is **Nariai Takehiko (成合雄彦)**.\n\nInoue Takehiko first started playing basketball in high school as a means to winning attention from the opposite sex, he was in kendo club in elementary school and junior high. After being immersed in the competitive sport, he became a huge basketball fan. His love for the sport can be easily seen both from his choice in using it as a central theme in his works, as well as the unmistakable ability in capturing the details of it all.\n\nHe went to Kumamoto University but dropped out, and became assistant to [Hojo Tsukasa](https://mangadex.org/author/bdd3b599-48be-49d2-8bea-877e38704ad6/tsukasa-hojo) for ten months during [City Hunter](https://mangadex.org/title/f1c716b5-e82f-4625-a646-280cfa66abad/city-hunter).\n\n[Hara Yasuhisa](https://mangadex.org/author/6637c726-8d02-456f-b837-65e1b190d0af/hara-yasuhisa), [Tatsuzawa Katsumi](https://www.mangaupdates.com/authors.html?id=6613), [Mihara Kazuto](https://mangadex.org/author/345dc961-0229-40a5-8419-14cd2e94774a/mihara-kazuto) and [Yuki Izumi](https://mangadex.org/author/b6b68daf-f191-44fc-9ef6-b01376160bd5/yuki-izumi) are former assistants of his.\n\n[Mizushima Shinji](https://mangadex.org/author/370fdd0d-ff84-4edf-beb5-db78cdca3f85/mizushima-shinji)’s [Dokaben](https://www.mangaupdates.com/series.html?id=84088) was one of the works that made him to become a mangaka.\n\nHe is the artist for the X360 RPG \"[Lost Odyssey](https://www.xbox.com/en-US/games/store/lost-odyssey/BZB4S8FS8T5B)\".\n\nMarried and has a son. \n"
  //           },
  //           "twitter": "https://twitter.com/inouetake",
  //           "pixiv": null,
  //           "melonBook": null,
  //           "fanBox": null,
  //           "booth": null,
  //           "namicomi": null,
  //           "nicoVideo": null,
  //           "skeb": null,
  //           "fantia": null,
  //           "tumblr": null,
  //           "youtube": null,
  //           "weibo": null,
  //           "naver": null,
  //           "website": "https://itplanning.co.jp/",
  //           "createdAt": "2021-04-19T21:59:45+00:00",
  //           "updatedAt": "2022-02-17T13:41:00+00:00",
  //           "version": 4
  //         }
  //       },
  //       {
  //         "id": "d0afd13f-36dd-4723-8e73-ea9d338b2492",
  //         "type": "author",
  //         "attributes": {
  //           "name": "Yoshikawa Eiji",
  //           "imageUrl": null,
  //           "biography": {},
  //           "twitter": null,
  //           "pixiv": null,
  //           "melonBook": null,
  //           "fanBox": null,
  //           "booth": null,
  //           "namicomi": null,
  //           "nicoVideo": null,
  //           "skeb": null,
  //           "fantia": null,
  //           "tumblr": null,
  //           "youtube": null,
  //           "weibo": null,
  //           "naver": null,
  //           "website": null,
  //           "createdAt": "2021-04-19T21:59:45+00:00",
  //           "updatedAt": "2021-04-19T21:59:45+00:00",
  //           "version": 1
  //         }
  //       },
  //       {
  //         "id": "0b59098f-13c0-41cb-a110-9cbcec72dc0c",
  //         "type": "artist",
  //         "attributes": {
  //           "name": "Inoue Takehiko",
  //           "imageUrl": null,
  //           "biography": {
  //             "en": "Takehiko Inoue (井上 雄彦, Inoue Takehiko, born 12 January 1967) is a Japanese manga artist. He is best known for the basketball series [Slam Dunk (1990–1996)](https://mangadex.org/title/319df2e2-e6a6-4e3a-a31c-68539c140a84/slam-dunk), and the jidaigeki manga [Vagabond](https://mangadex.org/title/d1a9fdeb-f713-407f-960c-8326b586e6fd/vagabond), which are two of the best-selling manga series in history. Many of his works are about basketball, Inoue himself being a huge fan of the sport. His works sold in North America through Viz Media are **Slam Dunk**, **Vagabond** and [Real](https://mangadex.org/title/62b74aa6-24df-4b91-b76d-39e7ab3c3ca5/real), although **Slam Dunk** was earlier translated by **Gutsoon! Entertainment**. In 2012, Inoue became the first recipient of the Cultural Prize at the Asia Cosmopolitan Awards.\n\n---\nHis real name is **Nariai Takehiko (成合雄彦)**.\n\nInoue Takehiko first started playing basketball in high school as a means to winning attention from the opposite sex, he was in kendo club in elementary school and junior high. After being immersed in the competitive sport, he became a huge basketball fan. His love for the sport can be easily seen both from his choice in using it as a central theme in his works, as well as the unmistakable ability in capturing the details of it all.\n\nHe went to Kumamoto University but dropped out, and became assistant to [Hojo Tsukasa](https://mangadex.org/author/bdd3b599-48be-49d2-8bea-877e38704ad6/tsukasa-hojo) for ten months during [City Hunter](https://mangadex.org/title/f1c716b5-e82f-4625-a646-280cfa66abad/city-hunter).\n\n[Hara Yasuhisa](https://mangadex.org/author/6637c726-8d02-456f-b837-65e1b190d0af/hara-yasuhisa), [Tatsuzawa Katsumi](https://www.mangaupdates.com/authors.html?id=6613), [Mihara Kazuto](https://mangadex.org/author/345dc961-0229-40a5-8419-14cd2e94774a/mihara-kazuto) and [Yuki Izumi](https://mangadex.org/author/b6b68daf-f191-44fc-9ef6-b01376160bd5/yuki-izumi) are former assistants of his.\n\n[Mizushima Shinji](https://mangadex.org/author/370fdd0d-ff84-4edf-beb5-db78cdca3f85/mizushima-shinji)’s [Dokaben](https://www.mangaupdates.com/series.html?id=84088) was one of the works that made him to become a mangaka.\n\nHe is the artist for the X360 RPG \"[Lost Odyssey](https://www.xbox.com/en-US/games/store/lost-odyssey/BZB4S8FS8T5B)\".\n\nMarried and has a son. \n"
  //           },
  //           "twitter": "https://twitter.com/inouetake",
  //           "pixiv": null,
  //           "melonBook": null,
  //           "fanBox": null,
  //           "booth": null,
  //           "namicomi": null,
  //           "nicoVideo": null,
  //           "skeb": null,
  //           "fantia": null,
  //           "tumblr": null,
  //           "youtube": null,
  //           "weibo": null,
  //           "naver": null,
  //           "website": "https://itplanning.co.jp/",
  //           "createdAt": "2021-04-19T21:59:45+00:00",
  //           "updatedAt": "2022-02-17T13:41:00+00:00",
  //           "version": 4
  //         }
  //       },
  //       {
  //         "id": "8e74a0f1-09a0-407f-9bfd-d4dc961e54e9",
  //         "type": "cover_art",
  //         "attributes": {
  //           "description": "",
  //           "volume": "37",
  //           "fileName": "05f8dcb4-8ea1-48db-a0b1-3a8fbf695e5a.jpg",
  //           "locale": "ja",
  //           "createdAt": "2022-07-24T22:10:43+00:00",
  //           "updatedAt": "2022-07-24T22:10:43+00:00",
  //           "version": 1
  //         }
  //       },
  //       {
  //         "id": "6e5ddee5-eccb-48cc-b6bb-43488cc9791f",
  //         "type": "manga",
  //         "related": "colored",
  //         "attributes": {
  //           "title": {
  //             "en": "Vagabond (Hong Kong Colored Version)"
  //           },
  //           "altTitles": [
  //             {
  //               "ja": "バガボンド"
  //             },
  //             {
  //               "fr": "Avare"
  //             },
  //             {
  //               "vi": "Lãng Khách"
  //             },
  //             {
  //               "ru": "Бродяга"
  //             },
  //             {
  //               "ar": "المتشرد"
  //             },
  //             {
  //               "zh-hk": "浪客行 (Hong Kong)"
  //             },
  //             {
  //               "ko": "베가본드"
  //             },
  //             {
  //               "zh-hk": "浪人劍客 (Taiwan)"
  //             },
  //             {
  //               "kk": "Кезбе (Түрлі түсті)"
  //             }
  //           ],
  //           "description": {
  //             "en": "Growing up in the late 16th century Sengoku era Japan, Shinmen Takezo is shunned by the local villagers as a devil child due to his wild and violent nature. Running away from home with a fellow boy at age 17, Takezo joins the Toyotomi army to fight the Tokugawa clan at the Battle of Sekigahara. However, the Tokugawa win a crushing victory, leading to nearly three hundred years of Shogunate rule. Takezo and his friend manage to survive the battle and afterwards swear to do great things with their lives. However, after their paths separate, Takezo becomes a wanted criminal and must change his name and his nature in order to escape an ignoble death.  \n  \nNote: Won the 24th Kodansha Manga Award in the general category in 2000. Won the Tezuka Osamu Cultural Prize in 2002 and was nominated for the 2003 Eisner Award in the Best Writer/Artist category.\n\n---\nThis was never released in japan\n---"
  //           },
  //           "isLocked": false,
  //           "links": {},
  //           "originalLanguage": "zh-hk",
  //           "lastVolume": "",
  //           "lastChapter": "",
  //           "publicationDemographic": "seinen",
  //           "status": "hiatus",
  //           "year": null,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Psychological"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Romance"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Comedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adventure"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "97893a4c-12af-4dac-b6be-0dffb353568e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Sexual Violence"
  //                 },
  //                 "description": {},
  //                 "group": "content",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Gore"
  //                 },
  //                 "description": {},
  //                 "group": "content",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f5ba408b-0e7a-484d-8d49-4e9125ac96de",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Full Color"
  //                 },
  //                 "description": {},
  //                 "group": "format",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Tragedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2020-11-23T14:42:05+00:00",
  //           "updatedAt": "2023-12-07T21:07:25+00:00",
  //           "version": 10,
  //           "availableTranslatedLanguages": [
  //             "fa",
  //             "ar",
  //             "kk",
  //             "pt-br",
  //             "en"
  //           ],
  //           "latestUploadedChapter": "496a20f5-cec5-45cc-adf0-3517ecfc17bd"
  //         }
  //       },
  //       {
  //         "id": "88b6fcca-57dd-4df2-aac5-8935eaa6c34d",
  //         "type": "manga",
  //         "related": "alternate_story",
  //         "attributes": {
  //           "title": {
  //             "en": "Musashi (MOTOMIYA Hiroshi)"
  //           },
  //           "altTitles": [
  //             {
  //               "ja": "武蔵"
  //             }
  //           ],
  //           "description": {
  //             "en": "Based on the life story of the swordsman Miyamoto Musashi.\n\n(from ebookjapan):\n\nIn the summer of 1600, just before the Battle of Sekigahara, the young men of Aida-goori in Mimasaka Province were looking for their last chance to become samurai. While the 200 young men were arguing over who would be chosen as their commander, Benzo (later to become Miyamoto Musashi), the most violent man in Miyamoto Village, came forward to take his place. In order to show his skills, he provokes Kihei Arima, a Shintoryu who was staying in the village, and summons him to a shrine... Hiroshi Motomiya's version of \"Musashi Miyamoto\" depicts the anguish and growth of youth through Benzo."
  //           },
  //           "isLocked": false,
  //           "links": {
  //             "al": "116194",
  //             "bw": "series/7225/list",
  //             "mu": "85883",
  //             "amz": "https://www.amazon.co.jp/-/en/dp/B074CHM3GV?binding=kindle_edition&qid=1652641456&sr=1-1&ref=dbs_dp_rwt_sb_pc_tukn",
  //             "ebj": "https://ebookjapan.yahoo.co.jp/books/112182/A000028749/",
  //             "mal": "111820"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "3",
  //           "lastChapter": "9",
  //           "publicationDemographic": "shounen",
  //           "status": "completed",
  //           "year": 1973,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "07251805-a27e-4d59-b488-f0bfbec15168",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Thriller"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Psychological"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adventure"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Military"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Gore"
  //                 },
  //                 "description": {},
  //                 "group": "content",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Tragedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2019-03-09T14:15:40+00:00",
  //           "updatedAt": "2022-06-18T22:22:35+00:00",
  //           "version": 9,
  //           "availableTranslatedLanguages": [
  //             "en"
  //           ],
  //           "latestUploadedChapter": "efcda64c-0a12-487e-ba52-7b0b76204f85"
  //         }
  //       },
  //       {
  //         "id": "9560d60b-bc1f-4a4f-9420-c8eae79f8104",
  //         "type": "manga",
  //         "related": "side_story",
  //         "attributes": {
  //           "title": {
  //             "en": "The Book of Five Rings (Variety Art Works)"
  //           },
  //           "altTitles": [
  //             {
  //               "es": "O Livro dos Cinco Anéis"
  //             },
  //             {
  //               "ja-ro": "Go Rin no Sho"
  //             },
  //             {
  //               "ja": "五輪書"
  //             }
  //           ],
  //           "description": {},
  //           "isLocked": false,
  //           "links": {
  //             "mu": "133936"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "1",
  //           "lastChapter": "6",
  //           "publicationDemographic": null,
  //           "status": "completed",
  //           "year": 2009,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Survival"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "69964a64-2f90-4d33-beeb-f3ed2875eb4c",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Sports"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Military"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Philosophical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "caaa44eb-cd40-4177-b930-79d3ef2afe87",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "School Life"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f4122d1c-3b44-44d0-9936-ff7502c39ad3",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adaptation"
  //                 },
  //                 "description": {},
  //                 "group": "format",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2020-03-09T15:39:10+00:00",
  //           "updatedAt": "2022-09-02T18:18:16+00:00",
  //           "version": 4,
  //           "availableTranslatedLanguages": [
  //             "en"
  //           ],
  //           "latestUploadedChapter": "cc258e78-087a-4714-a905-822e029f4a24"
  //         }
  //       },
  //       {
  //         "id": "9843917a-1546-4672-b5ad-3ecc5f7020af",
  //         "type": "manga",
  //         "related": "alternate_story",
  //         "attributes": {
  //           "title": {
  //             "en": "Miyamoto Musashi (ISHInoMORI Shotaro)"
  //           },
  //           "altTitles": [
  //             {
  //               "en": "Miyamoto Musashi"
  //             },
  //             {
  //               "en": "Miyamoto Musashi 1971"
  //             },
  //             {
  //               "ja": "宮本武蔵"
  //             },
  //             {
  //               "ru": "Мусаси Миямото"
  //             }
  //           ],
  //           "description": {
  //             "en": "(from ebookjapan):\n\n Musashi (Takezo) was born in Miyamoto Village, Sangan County, Mimasaka Province (Okayama Prefecture), and spent his days being bullied by his stepmother. Taking advantage of his strength, he was a nuisance in the village, committing all kinds of violent acts. \n\n One day, he is captured and punished by the monk Sozen of a nearby temple. Musashi was told by the monk that his strength was the strength of a monster, not a human being, and set off on a journey in search of what true strength was. \n\n  Shotaro Ishinomori vividly depicts the tumultuous life of Miyamoto Musashi!"
  //           },
  //           "isLocked": false,
  //           "links": {
  //             "al": "47718",
  //             "ap": "miyamoto-musashi",
  //             "bw": "series/312383/list",
  //             "kt": "5244",
  //             "mu": "99876",
  //             "amz": "https://www.amazon.co.jp/gp/product/B074CKBY7C",
  //             "cdj": "https://www.cdjapan.co.jp/product/NEOBK-223792?s_ssid=e3298b628150e67a79",
  //             "ebj": "https://ebookjapan.yahoo.co.jp/books/269685/",
  //             "mal": "17718"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "2",
  //           "lastChapter": "6",
  //           "publicationDemographic": "shounen",
  //           "status": "completed",
  //           "year": 1971,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Romance"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Comedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Survival"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adventure"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Military"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Philosophical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Gore"
  //                 },
  //                 "description": {},
  //                 "group": "content",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f4122d1c-3b44-44d0-9936-ff7502c39ad3",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adaptation"
  //                 },
  //                 "description": {},
  //                 "group": "format",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Tragedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2019-11-22T20:25:26+00:00",
  //           "updatedAt": "2023-02-19T06:13:00+00:00",
  //           "version": 12,
  //           "availableTranslatedLanguages": [],
  //           "latestUploadedChapter": null
  //         }
  //       },
  //       {
  //         "id": "a2a9216f-6a8d-4b28-bb9f-8ee549245787",
  //         "type": "manga",
  //         "related": "alternate_story",
  //         "attributes": {
  //           "title": {
  //             "en": "Miyamoto Musashi"
  //           },
  //           "altTitles": [
  //             {
  //               "ja": "宮本武蔵"
  //             }
  //           ],
  //           "description": {},
  //           "isLocked": false,
  //           "links": {
  //             "al": "153350",
  //             "bw": "de63696b01-57c5-494e-bd1d-96ee6147772d",
  //             "amz": "https://www.amazon.co.jp/-/en/dp/B077L6ZW8Q?binding=kindle_edition&ref_=dbs_s_ks_series_rwt_tkin&qid=1709939175&sr=1-11",
  //             "ebj": "https://ebookjapan.yahoo.co.jp/books/731883/"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "9",
  //           "lastChapter": "71",
  //           "publicationDemographic": "seinen",
  //           "status": "completed",
  //           "year": 1980,
  //           "contentRating": "suggestive",
  //           "tags": [
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adventure"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2024-03-08T23:10:42+00:00",
  //           "updatedAt": "2024-03-08T23:31:48+00:00",
  //           "version": 2,
  //           "availableTranslatedLanguages": [],
  //           "latestUploadedChapter": null
  //         }
  //       },
  //       {
  //         "id": "a9bf14be-fcff-4eea-9c45-ba3e40d399fa",
  //         "type": "manga",
  //         "related": "alternate_story",
  //         "attributes": {
  //           "title": {
  //             "en": "Musashi (KAWASAKI Noboru)"
  //           },
  //           "altTitles": [
  //             {
  //               "ja": "ムサシ"
  //             }
  //           ],
  //           "description": {
  //             "en": "(from ebookjapan):\n\nHow was Sasaki Kojiro a different person? Musashi was a member of a gang of juvenile thieves who attacked villages, until he met Kojiro at a young age and eventually became famous throughout Japan as a master swordsman. \n\nKazuo Koike and Noboru Kawasaki present a new interpretation of the story of the great swordsman Musashi Miyamoto. Includes many color pages at the beginning of the book!"
  //           },
  //           "isLocked": false,
  //           "links": {
  //             "mu": "z1es72f",
  //             "amz": "https://www.amazon.co.jp/%E3%83%A0%E3%82%B5%E3%82%B7-%E5%B0%8F%E6%B1%A0%E4%B8%80%E5%A4%AB-%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF-%E5%85%A810%E5%B7%BB%E5%AE%8C%E7%B5%90%E3%82%BB%E3%83%83%E3%83%88-%E3%83%9B%E3%83%BC%E3%83%A0%E7%A4%BE%E6%BC%AB%E7%94%BB%E6%96%87%E5%BA%AB/dp/B00BXWDMNG/ref=monarch_sidesheet",
  //             "ebj": "https://ebookjapan.yahoo.co.jp/books/103933/",
  //             "raw": "https://order.mandarake.co.jp/order/detailPage/item?itemCode=1135628337"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "14",
  //           "lastChapter": "",
  //           "publicationDemographic": "shounen",
  //           "status": "completed",
  //           "year": 1974,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "07251805-a27e-4d59-b488-f0bfbec15168",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Thriller"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Psychological"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Comedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "5ca48985-9a9d-4bd8-be29-80dc0303db72",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Crime"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Survival"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adventure"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Military"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Philosophical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Gore"
  //                 },
  //                 "description": {},
  //                 "group": "content",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "da2d50ca-3018-4cc0-ac7a-6b7d472a29ea",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Delinquents"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Slice of Life"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Tragedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2022-09-02T18:13:07+00:00",
  //           "updatedAt": "2022-09-02T18:16:25+00:00",
  //           "version": 3,
  //           "availableTranslatedLanguages": [],
  //           "latestUploadedChapter": null
  //         }
  //       },
  //       {
  //         "id": "fe18fe91-fa82-441c-9d87-66414d59a622",
  //         "type": "manga",
  //         "related": "same_franchise",
  //         "attributes": {
  //           "title": {
  //             "en": "Vagabond: The LAST Manga Exhibition Complete Catalogue"
  //           },
  //           "altTitles": [
  //             {
  //               "ja": "バガボンド 最後のマンガ展"
  //             },
  //             {
  //               "ja-ro": "Vagabond: Saigo no Manga-ten"
  //             }
  //           ],
  //           "description": {
  //             "en": "The \"true\" final chapter of Vagabond by Takehiko Inoue, which was shown in The LAST Manga Exhibition that took place in Ueno Royal Museum in 2008 as well as The LAST Manga Exhibition Complete Catalogue; a printed catalogue that included all the artworks showcased in the exhibition, however due to the limited number of copies, only a very small number of fans were able to get their hands on it."
  //           },
  //           "isLocked": false,
  //           "links": {
  //             "mu": "0roff6s",
  //             "raw": "http://www.flow-er.co.jp/last-manga/"
  //           },
  //           "originalLanguage": "ja",
  //           "lastVolume": "",
  //           "lastChapter": "",
  //           "publicationDemographic": "seinen",
  //           "status": "completed",
  //           "year": 2008,
  //           "contentRating": "safe",
  //           "tags": [
  //             {
  //               "id": "07251805-a27e-4d59-b488-f0bfbec15168",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Thriller"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "33771934-028e-4cb3-8744-691e866a923e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Historical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "391b0423-d847-456f-aff0-8b0cfc03066b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Action"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Psychological"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Survival"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Martial Arts"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "81183756-1453-4c81-aa9e-f6e1b63be016",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Samurai"
  //                 },
  //                 "description": {},
  //                 "group": "theme",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Philosophical"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Drama"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f4122d1c-3b44-44d0-9936-ff7502c39ad3",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Adaptation"
  //                 },
  //                 "description": {},
  //                 "group": "format",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             },
  //             {
  //               "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
  //               "type": "tag",
  //               "attributes": {
  //                 "name": {
  //                   "en": "Tragedy"
  //                 },
  //                 "description": {},
  //                 "group": "genre",
  //                 "version": 1
  //               },
  //               "relationships": []
  //             }
  //           ],
  //           "state": "published",
  //           "chapterNumbersResetOnNewVolume": false,
  //           "createdAt": "2020-12-19T20:13:37+00:00",
  //           "updatedAt": "2022-09-15T04:52:23+00:00",
  //           "version": 7,
  //           "availableTranslatedLanguages": [
  //             "pt-br",
  //             "en",
  //             "it",
  //             "fr"
  //           ],
  //           "latestUploadedChapter": "cbde71a6-561e-4a1e-923a-a7d6a5cf049f"
  //         }
  //       }
  //     ]
  //   }
  // }