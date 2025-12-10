import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Gallery, Photo } from '../types/gallery';

// Mock Data for development/fallback
const MOCK_GALLERIES: Gallery[] = [
    {
        id: '1',
        clientName: 'Sarah & Tom',
        title: 'Mountain Wedding',
        date: '2024-05-15',
        coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
        status: 'published',
        photos: [
            {
                id: 'p1',
                url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
                name: 'Wedding 1',
                size: 1024000,
                type: 'image/jpeg',
                createdAt: '2024-05-15T10:00:00Z'
            },
            {
                id: 'p2',
                url: 'https://images.unsplash.com/photo-1511285560982-1934758e841f?auto=format&fit=crop&q=80',
                name: 'Wedding 2',
                size: 2048000,
                type: 'image/jpeg',
                createdAt: '2024-05-15T10:05:00Z'
            }
        ]
    },
    {
        id: '2',
        clientName: 'Acme Corp',
        title: 'Corporate Retreat',
        date: '2024-04-10',
        coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
        status: 'draft',
        photos: []
    }
];

export const galleryService = {
    // Fetch all galleries
    async getGalleries(): Promise<Gallery[]> {
        if (!isSupabaseConfigured()) {
            console.warn('Supabase not configured, using mock data');
            return MOCK_GALLERIES;
        }

        const { data, error } = await supabase!
            .from('galleries')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error('Error fetching galleries:', error);
            throw error;
        }

        return data as Gallery[];
    },

    // Get a single gallery by ID
    async getGalleryById(id: string): Promise<Gallery | undefined> {
        if (!isSupabaseConfigured()) {
            return MOCK_GALLERIES.find(g => g.id === id);
        }

        const { data, error } = await supabase!
            .from('galleries')
            .select('*, photos(*)')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching gallery:', error);
            throw error;
        }

        return data as Gallery;
    },

    // Create a new gallery (Placeholder for Admin)
    async createGallery(gallery: Partial<Gallery>): Promise<Gallery | null> {
        if (!isSupabaseConfigured()) {
            console.log('Mock create gallery:', gallery);
            return { ...gallery, id: Math.random().toString(), status: 'draft', photos: [] } as Gallery;
        }

        // Implementation would go here
        return null;
    }
};
