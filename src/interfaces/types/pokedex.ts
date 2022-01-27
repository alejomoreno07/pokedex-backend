export interface PokedexQuery{
    limit: number;
    offset: number;
}

export interface PokedexItemLink {
    name: string;
    url: string;
}

export interface PokedexListing {
    count: number;
    next: string | null;
    previous: string | null;
    results: [PokedexItemLink]   
}