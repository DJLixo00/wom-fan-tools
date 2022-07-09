const OBJ = {
    "magics": {
    "acid":{
        "name":"Acid",
        "damage":0.875,
        "percentDot": 0.05,
        "dotTicks":10,
        "dotName":"Corroding",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[15,25,10,25,0,10,0,-5,-10,0,20,40,0,10,-10,0],
            "status":[]
        },
    },
    "ash":{
        "name":"Ash",
        "damage":0.85,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,20,10,10,10,0,0,0,10,0,-90,0,-10,10,-10,0],
            "status":[]
        },
    },
    "crystal":{
        "name":"Crystal",
        "damage":0.975,
        "percentDot": 0,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":.3,
        "interactions": {
            "statusBonus":[25,0,0,10,10,0,0,0,10,0,30,0,0,0,0,0],
            "status":[]
        },
    },
    "earth":{
        "name":"Earth",
        "damage":1,
        "percentDot": 0,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":.3,
        "interactions": {
            "statusBonus":[25,0,0,10,10,0,0,0,10,0,40,0,0,0,0,0],
            "status":[]
        },
    },
    "explosion":{
        "name":"Explosion",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,20,10,10,10,0,0,-5,-10,0,50,40,-10,0,-10,0],
            "status":[]
        },
    },
    "fire":{
        "name":"Fire",
        "damage":0.825,
        "percentDot": 0.1,
        "dotTicks":5,
        "dotName":"Burning",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,0,25,25,25,25,0,-5,-20,0,-10,20,-10,20,-10,0],
            "status":[]
        },
    },
    "glass":{
        "name":"Glass",
        "damage":0.875,
        "percentDot": 0.05,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":0,
        "interactions": {
            "statusBonus":[0,0,0,20,20,0,0,10,10,0,-80,0,10,0,0,0],
            "status":[]
        },
    },
    "gold":{
        "name":"Gold",
        "damage":1.2,
        "percentDot": 0.05,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":0.05,
        "interactions": {
            "statusBonus":[0,0,0,30,30,0,0,0,10,0,90,0,0,0,0,0],
            "status":[]
        },
    },
    "ink":{
        "name":"Ink",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[15,-20,-30,-5,-5,10,0,0,-10,0,-40,-10,10,-10,-10,0],
            "status":[]
        },
    },
    "ice":{
        "name":"Ice",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[40,-10,-20,0,0,0,0,10,0,0,25,-10,0,-10,25,0],
            "status":[]
        },
    },
    "light":{
        "name":"Light",
        "damage":0.825,
        "percentDot": 0.05,
        "dotTicks":10,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[0,0,0,0,0,0,0,0,0,0,-30,0,0,0,0,-20],
            "status":[]
        },
    },
    "lightning":{
        "name":"Lightning",
        "damage":0.85,
        "percentDot": 0.05,
        "dotTicks":10,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,0,10,10,10,0,0,15,25,0,50,-10,0,0,25,0],
            "status":[]
        },
    },
    "magma":{
        "name":"Magma",
        "damage":0.925,
        "percentDot": 0.05,
        "dotTicks":10,
        "dotName":"Melting",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[20,25,0,0,25,10,0,-2.5,-10,0,-5,40,-5,20,-5,0],
            "status":[]
        },
    },
    "iron":{
        "name":"Iron",
        "damage":1.1,
        "percentDot": 0.05,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":0.05,
        "interactions": {
            "statusBonus":[0,0,0,20,20,0,0,0,10,0,80,0,0,0,0,0],
            "status":[]
        },
    },
    "paper":{
        "name":"Paper",
        "damage":0.85,
        "percentDot": 0.05,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":0.1,
        "interactions": {
            "statusBonus":[0,-30,-40,10,10,0,0,10,0,0,-90,0,0,0,-10,0],
            "status":[]
        },
    },
    "plasma":{
        "name":"Plasma",
        "damage":0.775,
        "percentDot": 0.1,
        "dotTicks":5,
        "dotName":"Scorched",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[20,0,0,20,20,10,0,0,0,0,0,20,-5,20,-5,0],
            "status":[]
        },
    },
    "poison":{
        "name":"Poison",
        "damage":0.75,
        "percentDot": 0.05,
        "dotTicks":20,
        "dotName":"Poisoned",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[25,-10,0,0,0,0,0,10,0,0,-90,0,0,0,0,0],
            "status":[]
        },
    },
    "sand":{
        "name":"Sand",
        "damage":0.975,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,10,0,10,10,0,0,-10,0,0,-60,20,0,20,-20,0],
            "status":[]
        },
    },
    "shadow":{
        "name":"Shadow",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[0,0,0,0,0,0,-30,0,0,0,-30,0,0,0,0,0],
            "status":[]
        },
    },
    "snow":{
        "name":"Snow",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[0,-10,-20,-10,-10,0,0,0,0,0,-60,-20,25,-20,10],
            "status":[]
        },
    },
    "water":{
        "name":"Water",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":10,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[10,-20,-30,-10,-10,0,0,-10,-20,20,-50,-10,30,-10,0,0],
            "status":[]
        },
    },
    "wind":{
        "name":"Wind",
        "damage":0.925,
        "percentDot": 0,
        "dotTicks":0,
        "dotName":"N/A",
        "bleedThreshold":-1,
        "interactions": {
            "statusBonus":[0,-10,10,0,0,-10,0,-5,-10,10,-50,40,20,10,-10,0],
            "status":[]
        },
    },
    "wood":{
        "name":"Wood",
        "damage":0.950,
        "percentDot": 0,
        "dotTicks":5,
        "dotName":"Bleeding",
        "bleedThreshold":0.3,
        "interactions": {
            "statusBonus":[30,30,30,15,15,0,0,0,20,0,0,20,0,10,0,0],
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
                    "strMul":0.6,
                    "rounding":"floor"               
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":47,
                    "strMul":0.6,
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":54,
                    "strMul":0.6,
                    "rounding":"ceiling" 
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
                    "strMul":0.6,
                    "rounding":"floor"                 
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":38,
                    "strMul":0.6,
                    "rounding":"ceiling" 
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":38,
                    "strMul":0.6,
                    "rounding":"ceiling" 
                }
            }
        },"cultureDualDagger":{
            "name": "Dual Daggers",
            "attacks":{
                "light":{
                    "name":"Slash",
                    "amount":1,
                    "damage":30,             
                    "strMul":0.6                
                },
                "heavy":{
                    "name":"Heavy Slash",
                    "amount":1,
                    "damage":55,
                    "strMul":0.6
                },
                "skill":{
                    "name":"Throw",
                    "amount":2,
                    "damage":48,
                    "strMul":0.6
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
                    "damage":67,
                    "strMul":1
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":56,
                    "strMul":1
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
                    "damage":67,
                    "strMul":1
                },
                "skill":{
                    "name":"Throw",
                    "amount":1,
                    "damage":56,
                    "strMul":1
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
                    "damage":67,
                    "strMul":1
                },
                "skill":{
                    "name":"Great Spin",
                    "amount":1,
                    "damage":42,
                    "strMul":1
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
                    "damage":67,
                    "strMul":1
                },
                "skill":{
                    "name":"Great Spin",
                    "amount":1,
                    "damage":42,
                    "strMul":1
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

export default {OBJ}