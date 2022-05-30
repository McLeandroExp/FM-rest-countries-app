// Generated by https://quicktype.io

export interface CountriesResponse {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    DOP?: TartuGecko;
    GHS?: TartuGecko;
    EUR?: TartuGecko;
    KHR?: TartuGecko;
    USD?: TartuGecko;
    BHD?: TartuGecko;
    ILS?: TartuGecko;
    QAR?: TartuGecko;
    RON?: TartuGecko;
    MGA?: TartuGecko;
    NPR?: TartuGecko;
    GBP?: TartuGecko;
    JEP?: TartuGecko;
    UAH?: TartuGecko;
    DKK?: TartuGecko;
    MRU?: TartuGecko;
    LYD?: TartuGecko;
    TMT?: TartuGecko;
    AOA?: TartuGecko;
    SHP?: TartuGecko;
    AMD?: TartuGecko;
    THB?: TartuGecko;
    AZN?: TartuGecko;
    GNF?: TartuGecko;
    KYD?: TartuGecko;
    XCD?: TartuGecko;
    SLL?: TartuGecko;
    CNY?: TartuGecko;
    GEL?: TartuGecko;
    JPY?: TartuGecko;
    FKP?: TartuGecko;
    ERN?: TartuGecko;
    AUD?: TartuGecko;
    KID?: TartuGecko;
    ARS?: TartuGecko;
    PHP?: TartuGecko;
    BND?: TartuGecko;
    SGD?: TartuGecko;
    XOF?: TartuGecko;
    XAF?: TartuGecko;
    KGS?: TartuGecko;
    NAD?: TartuGecko;
    ZAR?: TartuGecko;
    KES?: TartuGecko;
    GIP?: TartuGecko;
    KZT?: TartuGecko;
    KRW?: TartuGecko;
    PKR?: TartuGecko;
    SOS?: TartuGecko;
    ZMW?: TartuGecko;
    MWK?: TartuGecko;
    SSP?: TartuGecko;
    MAD?: TartuGecko;
    TVD?: TartuGecko;
    NGN?: TartuGecko;
    ETB?: TartuGecko;
    CAD?: TartuGecko;
    CVE?: TartuGecko;
    DZD?: TartuGecko;
    PEN?: TartuGecko;
    PLN?: TartuGecko;
    VUV?: TartuGecko;
    BGN?: TartuGecko;
    IMP?: TartuGecko;
    TZS?: TartuGecko;
    NOK?: TartuGecko;
    GGP?: TartuGecko;
    UZS?: TartuGecko;
    TRY?: TartuGecko;
    FJD?: TartuGecko;
    BYN?: TartuGecko;
    GTQ?: TartuGecko;
    UYU?: TartuGecko;
    CKD?: TartuGecko;
    NZD?: TartuGecko;
    TWD?: TartuGecko;
    LSL?: TartuGecko;
    VES?: TartuGecko;
    LKR?: TartuGecko;
    LRD?: TartuGecko;
    CUC?: TartuGecko;
    CUP?: TartuGecko;
    KMF?: TartuGecko;
    KWD?: TartuGecko;
    BMD?: TartuGecko;
    EGP?: TartuGecko;
    JOD?: TartuGecko;
    PGK?: TartuGecko;
    SZL?: TartuGecko;
    VND?: TartuGecko;
    MNT?: TartuGecko;
    YER?: TartuGecko;
    MOP?: TartuGecko;
    BSD?: TartuGecko;
    SAR?: TartuGecko;
    LAK?: TartuGecko;
    MMK?: TartuGecko;
    HRK?: TartuGecko;
    BZD?: TartuGecko;
    MKD?: TartuGecko;
    RSD?: TartuGecko;
    SBD?: TartuGecko;
    LBP?: TartuGecko;
    IRR?: TartuGecko;
    BAM?: BAM;
    HNL?: TartuGecko;
    TJS?: TartuGecko;
    CRC?: TartuGecko;
    MDL?: TartuGecko;
    CHF?: TartuGecko;
    CZK?: TartuGecko;
    BRL?: TartuGecko;
    BWP?: TartuGecko;
    BIF?: TartuGecko;
    GYD?: TartuGecko;
    SYP?: TartuGecko;
    XPF?: TartuGecko;
    HUF?: TartuGecko;
    WST?: TartuGecko;
    TND?: TartuGecko;
    JMD?: TartuGecko;
    KPW?: TartuGecko;
    COP?: TartuGecko;
    OMR?: TartuGecko;
    MZN?: TartuGecko;
    BOB?: TartuGecko;
    UGX?: TartuGecko;
    HTG?: TartuGecko;
    STN?: TartuGecko;
    INR?: TartuGecko;
    PYG?: TartuGecko;
    ANG?: TartuGecko;
    SDG?: BAM;
    ISK?: TartuGecko;
    DJF?: TartuGecko;
    AED?: TartuGecko;
    IQD?: TartuGecko;
    ZWL?: TartuGecko;
    MXN?: TartuGecko;
    MUR?: TartuGecko;
    RUB?: TartuGecko;
    TOP?: TartuGecko;
    SRD?: TartuGecko;
    PAB?: TartuGecko;
    RWF?: TartuGecko;
    TTD?: TartuGecko;
    MYR?: TartuGecko;
    SEK?: TartuGecko;
    ALL?: TartuGecko;
    SCR?: TartuGecko;
    IDR?: TartuGecko;
    BDT?: TartuGecko;
    BBD?: TartuGecko;
    MVR?: TartuGecko;
    CDF?: TartuGecko;
    AWG?: TartuGecko;
    GMD?: TartuGecko;
    HKD?: TartuGecko;
    BTN?: TartuGecko;
    NIO?: TartuGecko;
    CLP?: TartuGecko;
    AFN?: TartuGecko;
    FOK?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
