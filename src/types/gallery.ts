export interface Photo {
    id: string;
    url: string;
    thumbnailUrl?: string; // For faster loading
    name: string;
    size: number; // in bytes
    type: string; // e.g., 'image/jpeg'
    createdAt: string;
    metadata?: {
        width?: number;
        height?: number;
        description?: string; // AI generated description?
    };
}

export interface Gallery {
    id: string;
    clientName: string;
    title: string;
    date: string;
    coverImage?: string;
    password?: string; // Simple password protection
    photos: Photo[];
    status: 'draft' | 'published' | 'archived';
}

export interface SocialPost {
    id: string;
    galleryId: string;
    selectedPhotoIds: string[];
    caption: string;
    hashtags: string[];
    generatedAt: string;
    platform: 'instagram' | 'facebook' | 'other';
}
