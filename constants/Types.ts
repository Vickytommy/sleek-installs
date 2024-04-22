export type ColorScheme = 'light' | 'dark' | undefined | null;

export interface CategoryChanged {
    onCategoryChanged: (category: string) => void
}

export interface CategoryListings {
    listings: any[];
    category: string
}

export interface ShapeListings {
    listings: any[];
    category: string
}