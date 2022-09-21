export interface Characters {
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

export interface Episode {
    air_date:   string;
    characters: string[];
    created:    Date;
    episode:    string;
    id:         number;
    name:       string;
    url:        string;
}


export interface Location {
    name: string;
    url:  string;
}


export type Gender = "Female" | "Male" | "unknown"

export type Species = "Alien" | "Human"


export type Status = "Alive" | "Dead" |"unknown"


export interface payloadData{
    characters:Result[]; 
    page:Page
}

export interface Page{
        pages: number; 
        nextPage: string; 
        prevPage: string;
}

interface DetailAction extends AnyAction{
    type: string;
    payload?:Result
    episodes?:Episode 
}