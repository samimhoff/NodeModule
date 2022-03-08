export interface IWeapon {
    name: string,
    rateOfFire: number,
    countryOfOrigin: string
}

export function isEven (num: number) {
    return num % 2 === 0;
}