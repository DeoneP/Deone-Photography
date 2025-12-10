
export interface ClientGalleryConfig {
    id: string;
    name: string;
    pin: string;
    coverImage: string;
    images: string[];
}

export const CLIENT_GALLERIES: ClientGalleryConfig[] = [
    {
        id: 'demo',
        name: 'Smith Family',
        pin: '1234',
        coverImage: 'https://i.postimg.cc/k5q3NLcf/Lifestyle-361.jpg',
        images: [
            'https://i.postimg.cc/k5q3NLcf/Lifestyle-361.jpg',
            'https://i.postimg.cc/VvpPj6G6/Alberts-020.jpg',
            'https://i.postimg.cc/brWfQJC1/Alberts-096.jpg'
            // Add more as needed
        ]
    }
];
