import { storageService } from '../util-srvs/async-storage.service';
import { httpService } from "../util-srvs/http.service";

const STORAGE_KEY = 'camp'

export const campListService = {
    query,
    getCampById,
}

async function query() {
    // return await httpService.get('board/')
    // console.log(boards)
    // const boards = await storageService.query(STORAGE_KEY)
    return startCamps
}

async function getCampById(id) {
    let camp = {}
    for (let i = 0; i < startCamps.length; i++) {
        if (startCamps[i]._id === id) {
            camp = startCamps[i]
            // console.log(camp)
            return camp
        }
    }
    // console.log(camp)
    return camp
}

function _createCamp(userCamp) {
    return {
        "_id": userCamp.id,
        "title": userCamp.title,
        "createdAt": Date.now(),
        "createdBy": "user from a getUser func",
        "overview": userCamp.overview,
        "background": "/media/imgs/default-bg.jpg",
        "players": userCamp.players || [
            {
                "id": "p1001",
                "name": "Floony",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1002",
                "name": "mcFlooniloo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1003",
                "name": "Jimbo teh Himbo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            }
        ],
        "campResources": {
            "maps": [
                {
                    "id": "m1001",
                    "title": "Epic place",
                    "img": "imgURL"
                },
                {
                    "id": "m1002",
                    "title": "Sea of Waters",
                    "img": "imgURL"
                },
                {
                    "id": "m1003",
                    "title": "Legends hill",
                    "img": "imgURL"
                }
            ],
            "npcs": [
                {
                    "id": "n1001",
                    "name": "Bob",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1002",
                    "name": "Bom",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1003",
                    "name": "Bop",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                }
            ],
            "mobs": [
                {
                    "id": "mob1001",
                    "title": "Skittle Beetle",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1002",
                    "title": "Momo (dragon, Named)",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1003",
                    "title": "Drunkephant",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                }
            ],
            "quests": [
                {
                    "id": "q1001",
                    "title": "D-gons of Shmaland",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                },
                {
                    "id": "q1002",
                    "title": "Sorcs of Loremia",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": true
                },
                {
                    "id": "q1003",
                    "title": "Wiz of Yadabla",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                }
            ]
        },
        "storySoFar": [],
    };
}

function addNewCamp(userCamp){
    const newCamp = _createCamp(userCamp)
    startCamps.push(newCamp)
}

var startCamps = [
    {
        "_id": "i12345",
        "title": "The Hootnanies of Shenanigania",
        "createdAt": "timestamp",
        "createdBy": "user from a getUser func",
        "overview": "a beautiful story of nincompoopness and tomfoolery, about a group of moronic ipsums",
        "background": "/media/imgs/default-bg2.jpg",
        "players": [
            {
                "id": "p1001",
                "name": "Floony",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1002",
                "name": "mcFlooniloo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1003",
                "name": "Jimbo teh Himbo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            }
        ],
        "campResources": {
            "maps": [
                {
                    "id": "m1001",
                    "title": "Epic place",
                    "img": "imgURL"
                },
                {
                    "id": "m1002",
                    "title": "Sea of Waters",
                    "img": "imgURL"
                },
                {
                    "id": "m1003",
                    "title": "Legends hill",
                    "img": "imgURL"
                }
            ],
            "npcs": [
                {
                    "id": "n1001",
                    "name": "Bob",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1002",
                    "name": "Bom",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1003",
                    "name": "Bop",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                }
            ],
            "mobs": [
                {
                    "id": "mob1001",
                    "title": "Skittle Beetle",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1002",
                    "title": "Momo (dragon, Named)",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1003",
                    "title": "Drunkephant",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                }
            ],
            "quests": [
                {
                    "id": "q1001",
                    "title": "D-gons of Shmaland",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                },
                {
                    "id": "q1002",
                    "title": "Sorcs of Loremia",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": true
                },
                {
                    "id": "q1003",
                    "title": "Wiz of Yadabla",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                }
            ]
        },
        "storySoFar": [
            {
                "id": "ep1001",
                "ep": 1,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "Our group of brave ipsums set to fight the terrible lorem"
            },
            {
                "id": "ep1002",
                "ep": 2,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "they encountered a curious thingamajig that told them he could help"
            },
            {
                "id": "ep1003",
                "ep": 3,
                "isCurr": true,
                "createdAt": "timestamp",
                "story": "the thingamajig betrayed them, revealing SHE was the evil monstrous lorem"
            }
        ],
    },
    {
        "_id": "i12346",
        "title": "Hootnanies of Shenanigania",
        "createdAt": "timestamp",
        "createdBy": "user from a getUser func",
        "overview": "a beautiful story of nincompoopness and tomfoolery, about a group of moronic ipsums",
        "background": "/media/imgs/default-bg1.jpg",
        "players": [
            {
                "id": "p1001",
                "name": "Floony",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1002",
                "name": "mcFlooniloo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1003",
                "name": "Jimbo teh Himbo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            }
        ],
        "campResources": {
            "maps": [
                {
                    "id": "m1001",
                    "title": "Epic place",
                    "img": "imgURL"
                },
                {
                    "id": "m1002",
                    "title": "Sea of Waters",
                    "img": "imgURL"
                },
                {
                    "id": "m1003",
                    "title": "Legends hill",
                    "img": "imgURL"
                }
            ],
            "npcs": [
                {
                    "id": "n1001",
                    "name": "Bob",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1002",
                    "name": "Bom",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1003",
                    "name": "Bop",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                }
            ],
            "mobs": [
                {
                    "id": "mob1001",
                    "title": "Skittle Beetle",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1002",
                    "title": "Momo (dragon, Named)",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1003",
                    "title": "Drunkephant",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                }
            ],
            "quests": [
                {
                    "id": "q1001",
                    "title": "D-gons of Shmaland",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                },
                {
                    "id": "q1002",
                    "title": "Sorcs of Loremia",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": true
                },
                {
                    "id": "q1003",
                    "title": "Wiz of Yadabla",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                }
            ]
        },
        "storySoFar": [
            {
                "id": "ep1001",
                "ep": 1,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "Our group of brave ipsums set to fight the terrible lorem"
            },
            {
                "id": "ep1002",
                "ep": 2,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "they encountered a curious thingamajig that told them he could help"
            },
            {
                "id": "ep1003",
                "ep": 3,
                "isCurr": true,
                "createdAt": "timestamp",
                "story": "the thingamajig betrayed them, revealing SHE was the evil monstrous lorem"
            }
        ],
    },
    {
        "_id": "i12347",
        "title": "Shenanigania's Stories",
        "createdAt": "timestamp",
        "createdBy": "user from a getUser func",
        "overview": "a beautiful story of nincompoopness and tomfoolery, about a group of moronic ipsums",
        "background": "/media/imgs/default-bg4.jpg",
        "players": [
            {
                "id": "p1001",
                "name": "Floony",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1002",
                "name": "mcFlooniloo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1003",
                "name": "Jimbo teh Himbo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            }
        ],
        "campResources": {
            "maps": [
                {
                    "id": "m1001",
                    "title": "Epic place",
                    "img": "imgURL"
                },
                {
                    "id": "m1002",
                    "title": "Sea of Waters",
                    "img": "imgURL"
                },
                {
                    "id": "m1003",
                    "title": "Legends hill",
                    "img": "imgURL"
                }
            ],
            "npcs": [
                {
                    "id": "n1001",
                    "name": "Bob",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1002",
                    "name": "Bom",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1003",
                    "name": "Bop",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                }
            ],
            "mobs": [
                {
                    "id": "mob1001",
                    "title": "Skittle Beetle",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1002",
                    "title": "Momo (dragon, Named)",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1003",
                    "title": "Drunkephant",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                }
            ],
            "quests": [
                {
                    "id": "q1001",
                    "title": "D-gons of Shmaland",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                },
                {
                    "id": "q1002",
                    "title": "Sorcs of Loremia",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": true
                },
                {
                    "id": "q1003",
                    "title": "Wiz of Yadabla",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                }
            ]
        },
        "storySoFar": [
            {
                "id": "ep1001",
                "ep": 1,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "Our group of brave ipsums set to fight the terrible lorem"
            },
            {
                "id": "ep1002",
                "ep": 2,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "they encountered a curious thingamajig that told them he could help"
            },
            {
                "id": "ep1003",
                "ep": 3,
                "isCurr": true,
                "createdAt": "timestamp",
                "story": "the thingamajig betrayed them, revealing SHE was the evil monstrous lorem"
            }
        ],
    },
    {
        "_id": "i12349",
        "title": "The Hootnanies of Shenanigania & The magic that brings it together",
        "createdAt": "timestamp",
        "createdBy": "user from a getUser func",
        "overview": "a beautiful story of nincompoopness and tomfoolery, about a group of moronic ipsums",
        "background": "/media/imgs/default-bg3.jpg",
        "players": [
            {
                "id": "p1001",
                "name": "Floony",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1002",
                "name": "mcFlooniloo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            },
            {
                "id": "p1003",
                "name": "Jimbo teh Himbo",
                "statSheet": {
                    "type": "player",
                    "src": "fileURL"
                },
            }
        ],
        "campResources": {
            "maps": [
                {
                    "id": "m1001",
                    "title": "Epic place",
                    "img": "imgURL"
                },
                {
                    "id": "m1002",
                    "title": "Sea of Waters",
                    "img": "imgURL"
                },
                {
                    "id": "m1003",
                    "title": "Legends hill",
                    "img": "imgURL"
                }
            ],
            "npcs": [
                {
                    "id": "n1001",
                    "name": "Bob",
                    "function": "Quest Giver",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1002",
                    "name": "Bom",
                    "function": "Merchant",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                },
                {
                    "id": "n1003",
                    "name": "Bop",
                    "function": "Interaction",
                    "quest": "questURL.name",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    }
                }
            ],
            "mobs": [
                {
                    "id": "mob1001",
                    "title": "Skittle Beetle",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1002",
                    "title": "Momo (dragon, Named)",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                },
                {
                    "id": "mob1003",
                    "title": "Drunkephant",
                    "statSheet": {
                        "type": "mob",
                        "src": "fileURL"
                    },
                }
            ],
            "quests": [
                {
                    "id": "q1001",
                    "title": "D-gons of Shmaland",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                },
                {
                    "id": "q1002",
                    "title": "Sorcs of Loremia",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": true
                },
                {
                    "id": "q1003",
                    "title": "Wiz of Yadabla",
                    "giver": "npcURL.name or empty",
                    "loc": "mapURL.title or empty",
                    "obj": "story",
                    "reward": "The Sword of Redundancy",
                    "isDone": false
                }
            ]
        },
        "storySoFar": [
            {
                "id": "ep1001",
                "ep": 1,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "Our group of brave ipsums set to fight the terrible lorem"
            },
            {
                "id": "ep1002",
                "ep": 2,
                "isCurr": false,
                "createdAt": "timestamp",
                "story": "they encountered a curious thingamajig that told them he could help"
            },
            {
                "id": "ep1003",
                "ep": 3,
                "isCurr": true,
                "createdAt": "timestamp",
                "story": "the thingamajig betrayed them, revealing SHE was the evil monstrous lorem all along"
            }
        ],
    }
];


// localStorage.clear()
// storageService.post(STORAGE_KEY, BOARD)