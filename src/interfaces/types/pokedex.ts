import { string } from "joi"

export interface PokedexQuery{
    limit?: number;
    offset?: number;
    page?: number;
}

export interface NamedApiResource {
    name: string;
    url: string;
}

export interface PokedexListing {
    count: number;
    next: string | null;
    previous: string | null;
    results: [NamedApiResource]   
}

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedApiResource;
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedApiResource;
}

export interface PokemonHeldItemVersion {
    version: NamedApiResource;
    rarity: number;
}

export interface PokemonHeldItem {
    item: NamedApiResource;
    version_details: PokemonHeldItemVersion;
}

export interface PokemonMoveVersion {
    move_learn_method: NamedApiResource;
    version_group: NamedApiResource;
    level_learned_at: number;
}

export interface PokemonMove {
    move: NamedApiResource;
    version_group_details: PokemonMoveVersion
}

export interface PokemonType {
    slot: number;
    type: NamedApiResource;
}

export interface PokemonTypePast {
    generation: NamedApiResource;
    types: [PokemonType]
}

export interface PokemonOfficialArtwork {
    "front-default": string;
}

export interface PokemonSpritesOther {
    "official-artwork": PokemonOfficialArtwork 
}

export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
    other: PokemonSpritesOther;
}

export interface PokemonStat{
    stat: NamedApiResource;
    effort: number;
    base_stat: number;
}



export interface Pokemon{
    id: number;
    name: string;
    base_experience?: number;
    height?: number;
    is_default?: boolean;
    order?: number;
    weight?: number;
    abilities?: [PokemonAbility];
    forms?: [NamedApiResource];
    game_indices?:[VersionGameIndex];
    held_items?:[PokemonHeldItem];
    location_area_encounters?:string;
    moves?:[PokemonMove];
    past_types?:[PokemonTypePast];
    sprites?: PokemonSprites;
    species?:NamedApiResource;
    stats?:[PokemonStat];
    types?:[PokemonType]
}