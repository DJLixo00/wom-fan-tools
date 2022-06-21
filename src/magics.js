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
                    "strMul":1               
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":47,
                    "strMul":1
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":54,
                    "strMul":1,
                }
            }
        },
        "cultureDagger":{
            "name": "Culture Dagger",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":22,     
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":38,
                    "strMul":1
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":38,
                    "strMul":1
                }
            }
        },"cultureDualDagger":{
            "name": "Dual Daggers",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":30,             
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":55,
                    "strMul":1
                },
                "skill":{
                    "name":"Throw",
                    "amount":2,
                    "damage":48,
                    "strMul":1
                }
            }
        },
        "oldSpear":{
            "name": "Old Spear",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":37,           
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "skill":{
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
                    "damage":37,            
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "skill":{
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
                    "damage":36,              
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "skill":{
                    "name":"Great Spin",
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
                    "damage":37,               
                    "strMul":1                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67
                },
                "skill":{
                    "name":"Great Spin",
                    "amount":1,
                    "damage":42
                }
            }
        }, "club":{
            "name": "Club",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":36,
                    "strMul":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":67,
                    "strMul":1
                },
            }
        },
        "oldShortSword":{
            "name": "Old Short Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":34,
                    "strMul":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":63,
                    "strMul":1
                },
            }
        },
        "axe":{
            "name": "Vastira",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":43,
                    "strMul":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":76,
                    "strMul":1 
                },
                "skill":{
                    "name":"Mighty Clash",
                    "amount":1,
                    "damage":60,
                    "strMul":1
                }
            }
        },
        "oath":{
            "name": "Oath Keeper",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":40,
                    "strMul":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":73,
                    "strMul":1
                },
                "skill":{
                    "name":"Raging Storm",
                    "amount":7,
                    "damage":22,
                    "strMul":0.4,
                }
            }
        },
        "sunken":{
            "name": "Sunken Sword",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":40,
                    "strMul":1
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":74,
                    "strMul":1
                },
                "skill":{
                    "name":"Rising Tide",
                    "amount":1,
                    "damage":42,
                    "strMul":1
                }
            }
        },
    },
    "ranged":{
        "branchBow":{
            "name": "Branch Bow",
            "attacks":{
                "arrow":{
                    "name":"Arrow",
                    "amount":1,
                    "damage":35,
                    "strMul":0.6,
                },
                "smoke":{
                    "name":"Smoke",
                    "amount":1,
                    "damage":30,
                    "strMul":0.6,
                },
            }
        },
        "cultureBow":{
            "name": "Culture Bow",
            "attacks":{
                "arrow":{
                    "name":"Arrow",
                    "amount":1,
                    "damage":34,
                    "strMul":0.6,
                },
                "smoke":{
                    "name":"Smoke",
                    "amount":1,
                    "damage":29,
                    "strMul":0.6,
                },
            }
        },
        "crossBow":{
            "name": "Crossbow",
            "attacks":{
                "arrow":{
                    "name":"Arrow",
                    "amount":1,
                    "damage":45,
                    "strMul":1
                },
                "smoke":{
                    "name":"Smoke",
                    "amount":1,
                    "damage":40,
                    "strMul":1
                },
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