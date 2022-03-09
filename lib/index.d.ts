import { WeaponTypes } from "./weapons/weaponTypes";
export interface IWeapon {
    name: string;
    action: action;
    caliber: string | caliber;
    nationOfOrigin: nation;
    effectiveRange: number;
    rateOfFire?: number;
    weight: number;
    capacity: number;
    year: Date;
    description: string;
    weaponType: WeaponTypes;
    crewServed: boolean;
}
export declare enum targets {
    personelle = 0,
    armored = 1
}
export declare enum caliber {
    NineMM = "9mm",
    FortyFiveACP = ".45ACP",
    EightMMMauser = "8mm Mauser"
}
export declare enum action {
    manual = "manual",
    semiAutomatic = "semi automatic",
    automatic = "automatic"
}
export declare enum nation {
    france = "France",
    germany = "Germany",
    unitedStates = "United States",
    unitedKingdom = "United Kingdom",
    sovietUnion = "Soviet Union",
    japan = "Japan",
    poland = "Poland",
    china = "China",
    italy = "Italy",
    vichyFrance = "Vichy France",
    romania = "Romania",
    finland = "Finland",
    india = "India",
    norway = "Norway"
}
export declare enum Faction {
    allies = "Allies",
    axis = "Axis",
    commintern = "Commintern"
}
export interface INation {
    name: string;
    faction: Faction;
    description?: string;
}
export declare const Nations: {
    [name: string]: INation;
};
//# sourceMappingURL=index.d.ts.map