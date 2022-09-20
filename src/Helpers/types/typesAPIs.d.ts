export interface RootObject {
    info:    Info;
    results: Result[];
}
export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  null;
}

export interface Result {
    created:  Date;
    episode:  string[];
    gender:   Gender;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  Species;
    status:   Status;
    type:     string;
    url:      string;
    isFavorite: boolean
}

export interface Location {
    name: string;
    url:  string;
}


export type Gender = "Female" | "Male" | "unknown"

export type Species = "Alien" | "Human"


export type Status = "Alive" | "Dead" |"unknown"
