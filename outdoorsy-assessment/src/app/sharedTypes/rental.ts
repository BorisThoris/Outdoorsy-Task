export interface Image {
    id: number;
    url: string;
}

export interface Rental {
    id: number;
    name: string;
    description: string;
    images: Image[];
}
