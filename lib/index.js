"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nations = exports.Faction = exports.nation = exports.action = exports.caliber = exports.targets = void 0;
//-----Enums------------//
var targets;
(function (targets) {
    targets[targets["personelle"] = 0] = "personelle";
    targets[targets["armored"] = 1] = "armored";
})(targets = exports.targets || (exports.targets = {}));
var caliber;
(function (caliber) {
    caliber["NineMM"] = "9mm";
    caliber["FortyFiveACP"] = ".45ACP";
    caliber["EightMMMauser"] = "8mm Mauser";
})(caliber = exports.caliber || (exports.caliber = {}));
var action;
(function (action) {
    action["manual"] = "manual";
    action["semiAutomatic"] = "semi automatic";
    action["automatic"] = "automatic";
})(action = exports.action || (exports.action = {}));
var nation;
(function (nation) {
    nation["france"] = "France";
    nation["germany"] = "Germany";
    nation["unitedStates"] = "United States";
    nation["unitedKingdom"] = "United Kingdom";
    nation["sovietUnion"] = "Soviet Union";
    nation["japan"] = "Japan";
    nation["poland"] = "Poland";
    nation["china"] = "China";
    nation["italy"] = "Italy";
    nation["vichyFrance"] = "Vichy France";
    nation["romania"] = "Romania";
    nation["finland"] = "Finland";
    nation["india"] = "India";
    nation["norway"] = "Norway";
})(nation = exports.nation || (exports.nation = {}));
var Faction;
(function (Faction) {
    Faction["allies"] = "Allies";
    Faction["axis"] = "Axis";
    Faction["commintern"] = "Commintern";
})(Faction = exports.Faction || (exports.Faction = {}));
exports.Nations = {
    france: {
        name: "France",
        faction: Faction.allies,
    },
    germany: {
        name: "Germany",
        faction: Faction.axis
    },
    unitedStates: {
        name: "The United States",
        faction: Faction.allies
    },
    unitedKingdom: {
        name: "The United Kingdom",
        faction: Faction.allies
    },
    sovietUnion: {
        name: "The Soviet Union",
        faction: Faction.commintern
    },
    japan: {
        name: "Japan",
        faction: Faction.axis
    },
    poland: {
        name: "Poland",
        faction: Faction.allies
    },
    china: {
        name: "China",
        faction: Faction.allies
    },
    italy: {
        name: "Italy",
        faction: Faction.axis
    },
    vichyFrance: {
        name: "Vichy France",
        faction: Faction.axis,
        description: "After France surrendered, the southeastern half of France joined the axis powers as a puppet state."
    },
    romania: {
        name: "Romania",
        faction: Faction.axis
    },
    finland: {
        name: "Finland",
        faction: Faction.axis,
        description: "Finland was invaded by the Soviet Union and so joined the Axis out of a desire for self-preservation rather than for aggrandizement or to conquer its neighbors."
    },
    britishIndia: {
        name: "British India",
        faction: Faction.allies,
        description: "Indian colonial troops were employed widely by the United Kingdom."
    },
    norway: {
        name: "Norway",
        faction: Faction.allies
    }
};
//# sourceMappingURL=index.js.map