export interface RickPage {
    info: Info,
    results: Array<Character>
}

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: Array<string>,
    url: string,
    create: Date
}

export interface Info {
    count: number,
    pages: number,
    next: string,
    prev: string | null
};
