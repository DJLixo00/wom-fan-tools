const OBJ = {
    "magics": {
    "acid":{
        "name":"Acid",
        "damage":0.875,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    //THIS JS IS INCOMPLETE! THE VALUES ARE MOST LIKELY INACCURATE!S
    "ash":{
        "name":"Ash",
        "damage":0.85,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "crystal":{
        "name":"Crystal",
        "damage":0.975,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":.3,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "earth":{
        "name":"Earth",
        "damage":1,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":.3,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "explosion":{
        "name":"Explosion",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "fire":{
        "name":"Fire",
        "damage":0.825,
        "percentDot": 0.1,
        "dotTicks":5,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "glass":{
        "name":"Glass",
        "damage":0.875,
        "percentDot": 0.05,
        "dotTicks":0,
        "bleedThreshold":0,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "gold":{
        "name":"Gold",
        "damage":1.2,
        "percentDot": 0.05,
        "dotTicks":0,
        "bleedThreshold":0.05,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "ink":{
        "name":"Ink",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "ice":{
        "name":"Ice",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "light":{
        "name":"Light",
        "damage":0.825,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "lightning":{
        "name":"Lightning",
        "damage":0.85,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "magma":{
        "name":"Magma",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "iron":{
        "name":"Iron",
        "damage":1.1,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":0.05,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "paper":{
        "name":"Paper",
        "damage":0.85,
        "percentDot": 0.05,
        "dotTicks":10,
        "bleedThreshold":0.1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "plasma":{
        "name":"Plasma",
        "damage":0.775,
        "percentDot": 0.1,
        "dotTicks":5,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "poison":{
        "name":"Poison",
        "damage":0.75,
        "percentDot": 0.05,
        "dotTicks":20,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "sand":{
        "name":"Sand",
        "damage":0.975,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "shadow":{
        "name":"Shadow",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "snow":{
        "name":"Snow",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "water":{
        "name":"Water",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":10,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "wind":{
        "name":"Wind",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    "wood":{
        "name":"Wood",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":0,
        "bleedThreshold":0.3,
        "interactions": {
            "statusBonus":[],
            "status":[]
        },
    },
    },
    "melee":{
        "oldDagger":{
            "name": "Old Dagger",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":26,
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":47
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":54
                }
            }
        },
        "cultureDagger":{
            "name": "Culture Dagger",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":22
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":38
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":38
                }
            }
        },"cultureDualDagger":{
            "name": "Dual Daggers",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":30
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":55
                },
                "throw":{
                    "name":"Throw",
                    "amount":2,
                    "damage":48
                }
            }
        },
        "oldSpear":{
            "name": "Old Spear",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":37
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":56
                }
            }
        },
        "cultureSpear":{
            "name": "Culture Spear",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":37
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":56
                }
            }
        },
        "oldSword":{
            "name": "Old Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":36
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":42
                }
            }
        },
        "cultureSword":{
            "name": "Culture Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":37
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":1000000000000000
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":1000000000000000
                }
            }
        },
        "oldShortSword":{
            "name": "Old Short Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":1
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":1000000000000000
                }
            }
        },
        "axe":{
            "name": "Vastira",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":1000000000000000
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":1000000000000000
                }
            }
        },
        "oath":{
            "name": "Oath Keeper",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":1000000000000000
                },
                "ragingStorm":{
                    "name":"Raging Storm",
                    "amount":1,
                    "damage":1000000000000000
                }
            }
        },
        "sunken":{
            "name": "Sunken Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":1000000000000000
                },
                "throw":{
                    "name":"Throw",
                    "amount":1,
                    "damage":1000000000000000
                }
            }
        },
    },
    "ranged":{
        "branchBow":{
            "name": "Branch Bow",
            "attacks":{
                "shoot":{
                    "name":"shoot",
                    "amount":1,
                    "damage":100
                },
            }
        },
        "cultureBow":{
            "name": "Culture Bow",
            "attacks":{
                "shoot":{
                    "name":"shoot",
                    "amount":1,
                    "damage":100
                }
            }
        },
        "crossBow":{
            "name": "Crossbow",
            "attacks":{
                "shoot":{
                    "name":"shoot",
                    "amount":1,
                    "damage":100
                }
            }
        }
    },
    "status":[
        "Bleeding", "Burning", "Scorched", "Melting", 
        "Corroding", "Poisoned", "Blinded", "Inky",
        "Sandy", "Snowy", "Frozen", "Petrified",
        "Freezing", "Charred", "Soaked", "Drained"
    ]
}

export default{OBJ}