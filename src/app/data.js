'use strict'

angular.module('inspinia')
.factory('dataService', function(){

	var fac = {};

fac.users =[

  {

    "users": [

      {
        "user_Id": "594b51350addfe76f522d6f1  ",
        "name": "Brittney Orr",
        "modules": [
          {
            "mod_id": "594b51355113f829a378fd52",
            "mod_type": "invest",
            "initialAmt": 29626,
            "term": 20,
            "rate": "",
            "targetAmt": 4.945107196194352e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135178c00b13bb74c40",
            "risk_Lvl": "low",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b513537f59a3438d017f1  ",
        "name": "Mara Lucas",
        "modules": [
          {
            "mod_id": "594b5135c752622e327c247c",
            "mod_type": "debt",
            "initialAmt": 15213,
            "term": 28,
            "rate": "",
            "targetAmt": 4.3772245144171263e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51355ed2677facc723f8",
            "risk_Lvl": "low",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b5135a0a0f2c663351d79  ",
        "name": "Mcgee Logan",
        "modules": [
          {
            "mod_id": "594b51352e7a2f5db12d76ec",
            "mod_type": "debt",
            "initialAmt": 30595,
            "term": 20,
            "rate": "",
            "targetAmt": 2.60987929788423e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51353da92d36be506edb",
            "risk_Lvl": "high",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135c503379c8c5f016e  ",
        "name": "Stein Humphrey",
        "modules": [
          {
            "mod_id": "594b513562297601b8cd5dcc",
            "mod_type": "debt",
            "initialAmt": 42922,
            "term": 21,
            "rate": "",
            "targetAmt": 8.959366168706708e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51357af91d17362897b5",
            "risk_Lvl": "medium",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135f7b439a166998f07  ",
        "name": "Terry Kaufman",
        "modules": [
          {
            "mod_id": "594b5135d9f4e030d77d8b05",
            "mod_type": "invest",
            "initialAmt": 13512,
            "term": 24,
            "rate": "",
            "targetAmt": 669542331939729800000
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51355b817e168aff90e0",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      }
    ]
  },
  {
    "users": [
      {
        "user_Id": "594b51351214049a0420f582  ",
        "name": "Madeleine Carson",
        "modules": [
          {
            "mod_id": "594b51351ef7224d7040c16a",
            "mod_type": "invest",
            "initialAmt": 40005,
            "term": 28,
            "rate": "",
            "targetAmt": 5.856907921551633e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51353cf9a9daae59e9ed",
            "risk_Lvl": "high",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b51359e95b71779edb7cb  ",
        "name": "Krystal Pena",
        "modules": [
          {
            "mod_id": "594b5135e7b4cae2e19ab822",
            "mod_type": "debt",
            "initialAmt": 2455,
            "term": 1,
            "rate": "",
            "targetAmt": 2.699428410256641e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51359bcc38b417640d6c",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b5135d1ab0b7d989460b9  ",
        "name": "Deborah Alford",
        "modules": [
          {
            "mod_id": "594b5135175fe476db50d0c9",
            "mod_type": "invest",
            "initialAmt": 27763,
            "term": 26,
            "rate": "",
            "targetAmt": 6.232954355989044e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135f90b11b184e44080",
            "risk_Lvl": "medium",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b5135e6105cbe06e6defe  ",
        "name": "Abbott Knapp",
        "modules": [
          {
            "mod_id": "594b51352c3df59502b9f9fd",
            "mod_type": "invest",
            "initialAmt": 11607,
            "term": 15,
            "rate": "",
            "targetAmt": 5.129786419645737e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135527180ba79903bde",
            "risk_Lvl": "medium",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b5135c3c3d42c3cbfaa90  ",
        "name": "Audrey Dillard",
        "modules": [
          {
            "mod_id": "594b5135543bcc5d924e93cb",
            "mod_type": "debt",
            "initialAmt": 48766,
            "term": 5,
            "rate": "",
            "targetAmt": 1.2028034779354568e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51351e5780df6dcab690",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      }
    ]
  },
  {
    "users": [
      {
        "user_Id": "594b513535d6dcb58237cb5b  ",
        "name": "Trisha Owens",
        "modules": [
          {
            "mod_id": "594b513565fc05cffff084d7",
            "mod_type": "invest",
            "initialAmt": 37871,
            "term": 9,
            "rate": "",
            "targetAmt": 9.557589215143604e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135aa1e40ae77eb1ae3",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b513579df9b0781130c42  ",
        "name": "Dolly Johnson",
        "modules": [
          {
            "mod_id": "594b5135c98b6dfdf3874c6d",
            "mod_type": "invest",
            "initialAmt": 3330,
            "term": 26,
            "rate": "",
            "targetAmt": 754721509135669700000
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51359ef0af38e0bed22a",
            "risk_Lvl": "low",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b513565a4e0c32a9062a7  ",
        "name": "Genevieve Sandoval",
        "modules": [
          {
            "mod_id": "594b513561b5736d26ade6ff",
            "mod_type": "invest",
            "initialAmt": 12814,
            "term": 4,
            "rate": "",
            "targetAmt": 3.970188505918733e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b513510f5c040df1171fc",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b513568121f7c334373c8  ",
        "name": "Alisha Holmes",
        "modules": [
          {
            "mod_id": "594b51355ea16dfbb4ca2550",
            "mod_type": "invest",
            "initialAmt": 6065,
            "term": 28,
            "rate": "",
            "targetAmt": 43649307807804850000
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b513530fafba4e43b694d",
            "risk_Lvl": "medium",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b513571c93a107f51b3e0  ",
        "name": "Gina Holt",
        "modules": [
          {
            "mod_id": "594b513555f2422dbad692f3",
            "mod_type": "debt",
            "initialAmt": 39135,
            "term": 28,
            "rate": "",
            "targetAmt": 8.341509808098604e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135ae83504785065bb5",
            "risk_Lvl": "medium",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135eabe23868280b002  ",
        "name": "Reeves Richmond",
        "modules": [
          {
            "mod_id": "594b5135454d9f498bf19ba5",
            "mod_type": "invest",
            "initialAmt": 21195,
            "term": 11,
            "rate": "",
            "targetAmt": 5.350020354689355e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51351afe3a21a8eec96b",
            "risk_Lvl": "low",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b513569cdaf0256ff7eb5  ",
        "name": "Sheila Pickett",
        "modules": [
          {
            "mod_id": "594b51353a466c4d47037b21",
            "mod_type": "invest",
            "initialAmt": 29823,
            "term": 1,
            "rate": "",
            "targetAmt": 7.981696865892791e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51357cea217ae131187f",
            "risk_Lvl": "medium",
            "prod_pref": "prod1"
          }
        ]
      }
    ]
  },
  {
    "users": [
      {
        "user_Id": "594b51355d7b7f705394ecfb  ",
        "name": "Colon Nunez",
        "modules": [
          {
            "mod_id": "594b5135a0db85cc7c53fcfc",
            "mod_type": "invest",
            "initialAmt": 28903,
            "term": 5,
            "rate": "",
            "targetAmt": 1.0805531163158145e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135393de938f029ae58",
            "risk_Lvl": "low",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b51358b4f29341399f412  ",
        "name": "Summer Wilkins",
        "modules": [
          {
            "mod_id": "594b51357344232b5486d5cb",
            "mod_type": "invest",
            "initialAmt": 24585,
            "term": 2,
            "rate": "",
            "targetAmt": 7.045036436246241e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135913b749ec809d707",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b51352a3651793992b127  ",
        "name": "Arlene Lowe",
        "modules": [
          {
            "mod_id": "594b5135eb6b53a6f01ca03c",
            "mod_type": "debt",
            "initialAmt": 42471,
            "term": 7,
            "rate": "",
            "targetAmt": 9.001480915041776e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51355a32164f97644a45",
            "risk_Lvl": "low",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135ff24f557138d4c9c  ",
        "name": "Everett Lara",
        "modules": [
          {
            "mod_id": "594b5135fccafe5df6c4b5f1",
            "mod_type": "invest",
            "initialAmt": 26318,
            "term": 15,
            "rate": "",
            "targetAmt": 130114561870209320000
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51355ef8916fe0bd579c",
            "risk_Lvl": "medium",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b5135374efdb50380aeec  ",
        "name": "Santana Beach",
        "modules": [
          {
            "mod_id": "594b513549952d8e2151442d",
            "mod_type": "debt",
            "initialAmt": 18022,
            "term": 5,
            "rate": "",
            "targetAmt": 6.604738202780718e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51351281c4922d8b263f",
            "risk_Lvl": "low",
            "prod_pref": "prod2"
          }
        ]
      }
    ]
  },
  {
    "users": [
      {
        "user_Id": "594b5135f62549d5854fd3fc  ",
        "name": "Barnes Roach",
        "modules": [
          {
            "mod_id": "594b51352e5b3b2e246fd5f7",
            "mod_type": "debt",
            "initialAmt": 21257,
            "term": 9,
            "rate": "",
            "targetAmt": 6.538796764008059e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51358917917b758984bf",
            "risk_Lvl": "high",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b513575dcb439c1180fd0  ",
        "name": "Estela Reilly",
        "modules": [
          {
            "mod_id": "594b5135d0eeb7b80870983c",
            "mod_type": "debt",
            "initialAmt": 25330,
            "term": 27,
            "rate": "",
            "targetAmt": 1.0380485195350375e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135eb400556f0ba2371",
            "risk_Lvl": "high",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135975aa52a4eb99f7e  ",
        "name": "Concepcion Pacheco",
        "modules": [
          {
            "mod_id": "594b5135f03718989fe43a43",
            "mod_type": "debt",
            "initialAmt": 16408,
            "term": 22,
            "rate": "",
            "targetAmt": 4.6664909307805025e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135301e4721b3da5bb6",
            "risk_Lvl": "high",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b51356053c24843b78fe3  ",
        "name": "Tina Lester",
        "modules": [
          {
            "mod_id": "594b51352d29053edfc1cac8",
            "mod_type": "invest",
            "initialAmt": 3849,
            "term": 14,
            "rate": "",
            "targetAmt": 3.8568401406771845e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51359f90ccc9cce9856d",
            "risk_Lvl": "medium",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b5135ef639b7408ce246e  ",
        "name": "Bender Paul",
        "modules": [
          {
            "mod_id": "594b51352aa3a2387347c85e",
            "mod_type": "invest",
            "initialAmt": 7920,
            "term": 28,
            "rate": "",
            "targetAmt": 9.430248787371982e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135581a64acd011b441",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b51359d148524b7db49f6  ",
        "name": "Witt Bush",
        "modules": [
          {
            "mod_id": "594b5135b13b329ef4b308e8",
            "mod_type": "invest",
            "initialAmt": 30063,
            "term": 13,
            "rate": "",
            "targetAmt": 2.9639500905650685e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135f4b10905dc2dd613",
            "risk_Lvl": "medium",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b513581d67863a637bb0d  ",
        "name": "Zamora Berry",
        "modules": [
          {
            "mod_id": "594b5135798c0164274a89a0",
            "mod_type": "debt",
            "initialAmt": 7217,
            "term": 8,
            "rate": "",
            "targetAmt": 3.8285890050905525e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51357fcf74293a21556c",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      }
    ]
  },
  {
    "users": [
      {
        "user_Id": "594b5135458bc4c4eed52bd3  ",
        "name": "Salas Richardson",
        "modules": [
          {
            "mod_id": "594b5135f2b354e593e75cc3",
            "mod_type": "debt",
            "initialAmt": 49479,
            "term": 28,
            "rate": "",
            "targetAmt": 2.947833123970729e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51350097591ffc3c5885",
            "risk_Lvl": "medium",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b5135ecff45f6acb5b7f2  ",
        "name": "Sheri Melendez",
        "modules": [
          {
            "mod_id": "594b513580dfdb36e9df1dbf",
            "mod_type": "invest",
            "initialAmt": 26290,
            "term": 5,
            "rate": "",
            "targetAmt": 8.943767580990773e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51359aa668d4014d727d",
            "risk_Lvl": "low",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b5135b19ea6b4bb893d55  ",
        "name": "Bolton Taylor",
        "modules": [
          {
            "mod_id": "594b5135fe45856a08588b81",
            "mod_type": "invest",
            "initialAmt": 49117,
            "term": 17,
            "rate": "",
            "targetAmt": 3.6932286438415107e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b513511c8db1e4ea4d1f3",
            "risk_Lvl": "medium",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b513578c1b99131e06dce  ",
        "name": "Marks Roy",
        "modules": [
          {
            "mod_id": "594b51356dd4af3f047e3818",
            "mod_type": "invest",
            "initialAmt": 20972,
            "term": 14,
            "rate": "",
            "targetAmt": 8.364127655886327e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51351750d23abd3630ec",
            "risk_Lvl": "low",
            "prod_pref": "prod3"
          }
        ]
      },
      {
        "user_Id": "594b513535bff55cce7912a3  ",
        "name": "Karyn Byrd",
        "modules": [
          {
            "mod_id": "594b5135f43a4cbef21059c7",
            "mod_type": "debt",
            "initialAmt": 25627,
            "term": 1,
            "rate": "",
            "targetAmt": 7.805396046436172e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51358fefa15110356516",
            "risk_Lvl": "high",
            "prod_pref": "prod2"
          }
        ]
      },
      {
        "user_Id": "594b5135781563da789606e5  ",
        "name": "Bauer English",
        "modules": [
          {
            "mod_id": "594b5135ea0e058a0e7c717c",
            "mod_type": "debt",
            "initialAmt": 47449,
            "term": 17,
            "rate": "",
            "targetAmt": 1.6650731011156749e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b5135225cebc88f82b2ea",
            "risk_Lvl": "high",
            "prod_pref": "prod1"
          }
        ]
      },
      {
        "user_Id": "594b51358e4d8a2ff8ffadce  ",
        "name": "Gutierrez Montgomery",
        "modules": [
          {
            "mod_id": "594b5135e6a127e386eba099",
            "mod_type": "invest",
            "initialAmt": 8466,
            "term": 30,
            "rate": "",
            "targetAmt": 4.106162134345119e+21
          }
        ],
        "preferences": [
          {
            "pref_Id": "594b51358d38e7cc2d84140b",
            "risk_Lvl": "low",
            "prod_pref": "prod2"
          }
        ]
      }
    ]
  }
]
return fac;
 });
