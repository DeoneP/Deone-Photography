
import { PortfolioItem, PricingPackage, Testimonial } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    // --- FAMILY: Alberts ---
    { id: 'alberts-1', category: 'Family', album: 'Alberts', title: 'The Alberts', image: 'https://i.postimg.cc/VvpPj6G6/Alberts-020.jpg' },
    { id: 'alberts-2', category: 'Family', album: 'Alberts', title: 'Alberts Family', image: 'https://i.postimg.cc/J0vCbn6y/Alberts-023.jpg' },
    { id: 'alberts-3', category: 'Family', album: 'Alberts', title: 'Generations', image: 'https://i.postimg.cc/nrgfvzRL/Alberts-082.jpg' },
    { id: 'alberts-4', category: 'Family', album: 'Alberts', title: 'Laughter', image: 'https://i.postimg.cc/brWfQJC1/Alberts-096.jpg' },
    { id: 'alberts-5', category: 'Family', album: 'Alberts', title: 'Together', image: 'https://i.postimg.cc/Kjwhnzqn/Alberts-097.jpg' },
    { id: 'alberts-6', category: 'Family', album: 'Alberts', title: 'Joy', image: 'https://i.postimg.cc/QNyDL48h/Alberts-213.jpg' },
    { id: 'alberts-7', category: 'Family', album: 'Alberts', title: 'Connection', image: 'https://i.postimg.cc/ryPT6n8B/Alberts-322.jpg' },

    // --- FAMILY: Viljoen ---
    { id: 'vil-1', category: 'Family', album: "The Viljoen's", title: 'Viljoen Family', image: 'https://i.postimg.cc/vBZJk9C1/Viljoen-Familie-Photo.jpg' },
    { id: 'vil-2', category: 'Family', album: "The Viljoen's", title: 'Smiles', image: 'https://i.postimg.cc/FRHM8cws/Viljoen-Familie-Photo-(1).jpg' },
    { id: 'vil-3', category: 'Family', album: "The Viljoen's", title: 'Moments', image: 'https://i.postimg.cc/mDgvJMKr/Viljoen-Familie-Photo-(2).jpg' },

    // --- FAMILY: Christmas Shoot ---
    { id: 'af-1', category: 'Family', album: 'Christmas Shoot', title: 'Christmas Baby', image: 'https://i.postimg.cc/5y6MYv3c/AF-025.jpg' },
    { id: 'af-2', category: 'Family', album: 'Christmas Shoot', title: 'Festive', image: 'https://i.postimg.cc/HnVCc52H/AF-213.jpg' },

    // --- FAMILY: VDM ---
    { id: 'vdm-1', category: 'Family', album: "The Van der Merwe's", title: 'VDM', image: 'https://i.postimg.cc/JzwW0sH3/VDM-021.jpg' },
    { id: 'vdm-2', category: 'Family', album: "The Van der Merwe's", title: 'Studio', image: 'https://i.postimg.cc/Z5khnWv8/VDM-156.jpg' },
    { id: 'vdm-3', category: 'Family', album: "The Van der Merwe's", title: 'Look', image: 'https://i.postimg.cc/Mpk8HnfN/VDM-271.jpg' },
    { id: 'vdm-4', category: 'Family', album: "The Van der Merwe's", title: 'Style', image: 'https://i.postimg.cc/rw6LsDt6/VDM-340.jpg' },
    { id: 'vdm-5', category: 'Family', album: "The Van der Merwe's", title: 'Pose', image: 'https://i.postimg.cc/NjhwFKrQ/VDM-449.jpg' },
    { id: 'vdm-6', category: 'Family', album: "The Van der Merwe's", title: 'Classic', image: 'https://i.postimg.cc/L8zF1mjr/VDM-511.jpg' },

    // --- PORTRAIT: Jesse (Moved from Family/Kids) ---
    { id: 'jesse-1', category: 'Portrait', album: 'Jesse', title: 'Jesse', image: 'https://i.postimg.cc/xj4QrxfX/Jesse-242.jpg' },
    { id: 'jesse-2', category: 'Portrait', album: 'Jesse', title: 'Focus', image: 'https://i.postimg.cc/L4bSdC9Y/Jesse-264.jpg' },
    { id: 'jesse-3', category: 'Portrait', album: 'Jesse', title: 'Style', image: 'https://i.postimg.cc/xTN29v81/Jesse-318.jpg' },
    { id: 'jesse-4', category: 'Portrait', album: 'Jesse', title: 'B&W', image: 'https://i.postimg.cc/zXHrqCvz/Jesse-333.jpg' },


    // --- PORTRAIT: Samkelo (Moved from Family/Kids, Renamed from Sam) ---
    { id: 'sam-1', category: 'Portrait', album: 'Samkelo', title: 'Samkelo', image: 'https://i.postimg.cc/7L3PwgB2/Sam-032.jpg' },
    { id: 'sam-2', category: 'Portrait', album: 'Samkelo', title: 'Joy', image: 'https://i.postimg.cc/LXm9Xn7c/Sam-089.jpg' },
    { id: 'sam-3', category: 'Portrait', album: 'Samkelo', title: 'Laugh', image: 'https://i.postimg.cc/FKyFNjPg/Sam-099.jpg' },
    { id: 'sam-4', category: 'Portrait', album: 'Samkelo', title: 'Candid', image: 'https://i.postimg.cc/1zGRspWW/Sam-177.jpg' },
    { id: 'sam-5', category: 'Portrait', album: 'Samkelo', title: 'Warmth', image: 'https://i.postimg.cc/s2Yfspnt/Sam-186.jpg' },


    // --- PORTRAIT: Angelique ---
    { id: 'ang-1', category: 'Graduation', album: 'Angelique', title: 'Angelique', image: 'https://i.postimg.cc/R07C4cPc/Angelique-078.jpg' },
    { id: 'ang-2', category: 'Graduation', album: 'Angelique', title: 'Pose', image: 'https://i.postimg.cc/CKTM3v4S/Angelique-152.jpg' },
    { id: 'ang-3', category: 'Graduation', album: 'Angelique', title: 'Grace', image: 'https://i.postimg.cc/JhN7MbT5/Angelique-156.jpg' },
    { id: 'ang-4', category: 'Graduation', album: 'Angelique', title: 'Light', image: 'https://i.postimg.cc/nL4Vpvd2/Angelique-246.jpg' },

    // --- PORTRAIT: Lydia ---
    { id: 'lyd-1', category: 'Portrait', album: 'Lydia', title: 'Lydia', image: 'https://i.postimg.cc/B6JS6Xk8/Lydia-188.jpg' },
    { id: 'lyd-2', category: 'Portrait', album: 'Lydia', title: 'Nature', image: 'https://i.postimg.cc/mDVbFTW2/Lydia-263.jpg' },
    { id: 'lyd-3', category: 'Portrait', album: 'Lydia', title: 'Soft', image: 'https://i.postimg.cc/LXvHZmFh/Lydia-383.jpg' },

    // --- PORTRAIT: Danya ---
    { id: 'dan-1', category: 'Portrait', album: 'Danya', title: 'Danya', image: 'https://i.postimg.cc/Nf2cQ6Fx/Danya-082.jpg' },
    { id: 'dan-2', category: 'Portrait', album: 'Danya', title: 'Profile', image: 'https://i.postimg.cc/RVJBv7hR/Danya-084.jpg' },
    { id: 'dan-3', category: 'Portrait', album: 'Danya', title: 'Smile', image: 'https://i.postimg.cc/vHxsGrTh/Danya-086.jpg' },

    // --- PORTRAIT: Highlights (Moved from Graduation Highlights) ---
    { id: 'grad-misc-1', category: 'Portrait', album: 'Highlights', title: 'Done!', image: 'https://i.postimg.cc/3RxsVpzT/Done-Graduation.jpg' },
    { id: 'grad-misc-2', category: 'Portrait', album: 'Highlights', title: 'Celebration', image: 'https://i.postimg.cc/VNgyK4GG/IMGrad.jpg' },
    { id: 'grad-misc-4', category: 'Portrait', album: 'Highlights', title: 'UPSO Dinner', image: 'https://i.postimg.cc/G2mWVY6R/UPSO-Dinner-Highlights.jpg' },


    // --- GRADUATION: Jess (Moved from Family/Kids) ---
    { id: 'jess-6', category: 'Graduation', album: 'Jess', title: 'Jess', image: 'https://i.postimg.cc/K8nhMmnS/Jess-242.jpg' },
    { id: 'jess-7', category: 'Graduation', album: 'Jess', title: 'Smile', image: 'https://i.postimg.cc/zGnYgqn8/Jess-346.jpg' },

    // --- COUPLES: Marnu (Moved from Graduation) ---
    { id: 'marnu-1', category: 'Couples', album: 'Marnu', title: 'Marnu', image: 'https://i.postimg.cc/85w1rTgJ/Marnu-MA-013.jpg' },
    { id: 'marnu-2', category: 'Couples', album: 'Marnu', title: 'Degree', image: 'https://i.postimg.cc/wvF6s9Yt/Marnu-MA-056.jpg' },
    { id: 'marnu-3', category: 'Couples', album: 'Marnu', title: 'Proud', image: 'https://i.postimg.cc/Y98pmtBW/Marnu-MA-063.jpg' },
    { id: 'marnu-4', category: 'Couples', album: 'Marnu', title: 'Campus', image: 'https://i.postimg.cc/FRG9JhXS/Marnu-MA-118.jpg' },
    { id: 'marnu-5', category: 'Couples', album: 'Marnu', title: 'Achievement', image: 'https://i.postimg.cc/B6Nq1Jfc/Marnu-MA-144.jpg' },
    { id: 'marnu-6', category: 'Couples', album: 'Marnu', title: 'Smile', image: 'https://i.postimg.cc/gJ4Y6GbN/Marnu-MA-167.jpg' },

    // --- GRADUATION: Chiara (Renamed from C Series) ---
    { id: 'wed-1', category: 'Graduation', album: 'Chiara', title: 'Ceremony', image: 'https://i.postimg.cc/xTN29v88/C-051.jpg' },
    { id: 'wed-2', category: 'Graduation', album: 'Chiara', title: 'Vows', image: 'https://i.postimg.cc/QxK3jQCV/C-052.jpg' },
    { id: 'wed-3', category: 'Graduation', album: 'Chiara', title: 'Reception', image: 'https://i.postimg.cc/nc9Jn4rC/C-066.jpg' },
    { id: 'wed-4', category: 'Graduation', album: 'Chiara', title: 'Details', image: 'https://i.postimg.cc/9Fwhcd0T/C-112.jpg' },
    { id: 'wed-5', category: 'Graduation', album: 'Chiara', title: 'Party', image: 'https://i.postimg.cc/RVJBv7hw/C-121.jpg' },
    { id: 'wed-6', category: 'Graduation', album: 'Chiara', title: 'Dance', image: 'https://i.postimg.cc/wTRp9XMN/C-141.jpg' },
    { id: 'wed-7', category: 'Graduation', album: 'Chiara', title: 'Forever', image: 'https://i.postimg.cc/qM6Tpsqy/C-147.jpg' },

    { id: 'life-l-1', category: 'Graduation', album: 'Larissa', title: 'Life', image: 'https://i.postimg.cc/J02MPKh9/L-012.jpg' },
    { id: 'life-l-2', category: 'Graduation', album: 'Larissa', title: 'Motion', image: 'https://i.postimg.cc/wMGg0FBC/L-017.jpg' },
    { id: 'life-l-3', category: 'Graduation', album: 'Larissa', title: 'Candid', image: 'https://i.postimg.cc/PJRT2KxJ/L-048.jpg' },
    { id: 'life-l-4', category: 'Graduation', album: 'Larissa', title: 'Fun', image: 'https://i.postimg.cc/T14fCQwh/L-053.jpg' },
    { id: 'life-l-5', category: 'Graduation', album: 'Larissa', title: 'Quiet', image: 'https://i.postimg.cc/L5b2NvXn/L-067.jpg' },
    { id: 'life-l-6', category: 'Graduation', album: 'Larissa', title: 'Nature', image: 'https://i.postimg.cc/hv5cpMjJ/L-115.jpg' },
    { id: 'life-l-7', category: 'Graduation', album: 'Larissa', title: 'Walk', image: 'https://i.postimg.cc/dQHssQ9B/L-238.jpg' },

    // Menlo (Moved from Highlights to Chiara)
    { id: 'grad-misc-3', category: 'Graduation', album: 'Chiara', title: 'Chiara', image: 'https://i.postimg.cc/ZR5G23Xn/Menlo-457.jpg' },


    // --- COUPLES: T & W ---
    { id: 'tw-1', category: 'Couples', album: 'Tamar & Wentzel', title: 'Tamar & Wentzel', image: 'https://i.postimg.cc/wv9qv7PS/T-amp-W-014.jpg' },
    { id: 'tw-2', category: 'Couples', album: 'Tamar & Wentzel', title: 'Us', image: 'https://i.postimg.cc/76qH6fdv/T-amp-W-020.jpg' },
    { id: 'tw-3', category: 'Couples', album: 'Tamar & Wentzel', title: 'Classic', image: 'https://i.postimg.cc/vBGYBckF/T-amp-W-034.jpg' },
    { id: 'tw-4', category: 'Couples', album: 'Tamar & Wentzel', title: 'Portrait', image: 'https://i.postimg.cc/SsmSsJ3m/T-amp-W-085.jpg' },
    { id: 'tw-5', category: 'Couples', album: 'Tamar & Wentzel', title: 'Love', image: 'https://i.postimg.cc/Qtj8tHws/T-amp-W-153.jpg' },

    // --- COUPLES: B & R ---
    { id: 'br-1', category: 'Couples', album: 'Behandri & Reece', title: 'Behandri & Reece', image: 'https://i.postimg.cc/SNHm9Z3Y/B-R-094.jpg' },
    { id: 'br-2', category: 'Couples', album: 'Behandri & Reece', title: 'In Love', image: 'https://i.postimg.cc/Qxvj76wQ/B-R-10.jpg' },
    { id: 'br-3', category: 'Couples', album: 'Behandri & Reece', title: 'Moments', image: 'https://i.postimg.cc/FswhSP8B/B-R-418.jpg' },

    // --- COUPLES: F & Z ---
    { id: 'fz-1', category: 'Couples', album: 'Francois & Zonja', title: 'Forest Walk', image: 'https://i.postimg.cc/TYBTbkFZ/F-Z-152.jpg' },
    { id: 'fz-2', category: 'Couples', album: 'Francois & Zonja', title: 'Quiet', image: 'https://i.postimg.cc/pdJvgPTK/F-Z-244.jpg' },
    { id: 'fz-3', category: 'Couples', album: 'Francois & Zonja', title: 'Close', image: 'https://i.postimg.cc/9fhV8DWy/F-Z-429.jpg' },
    { id: 'fz-4', category: 'Couples', album: 'Francois & Zonja', title: 'Happy', image: 'https://i.postimg.cc/MGSxPnWs/F-Z-435.jpg' },
    { id: 'fz-5', category: 'Couples', album: 'Francois & Zonja', title: 'Together', image: 'https://i.postimg.cc/d0YvHhq9/F-Z-446.jpg' },

    { id: 'vbal-1', category: 'Couples', album: 'Valentines ball', title: 'Event', image: 'https://i.postimg.cc/76qH6fdh/V-bal-077.jpg' },
    { id: 'vbal-2', category: 'Couples', album: 'Valentines ball', title: 'Dance', image: 'https://i.postimg.cc/85w1rTgN/V-bal-162.jpg' },
    { id: 'vbal-3', category: 'Couples', album: 'Valentines ball', title: 'Night', image: 'https://i.postimg.cc/ZRJbRC2Y/V-bal-186.jpg' },

    // --- WEDDINGS: M & S ---
    { id: 'ms-1', category: 'Wedding', album: 'Matt & Savannah', title: 'M & S', image: 'https://i.postimg.cc/zvBqC4qW/M-amp-S-0033.jpg' },
    { id: 'ms-2', category: 'Wedding', album: 'Matt & Savannah', title: 'The Look', image: 'https://i.postimg.cc/KjzmPCmt/M-amp-S-0059.jpg' },
    { id: 'ms-3', category: 'Wedding', album: 'Matt & Savannah', title: 'Holding Hands', image: 'https://i.postimg.cc/tJT9389t/M-amp-S-0074.jpg' },
    { id: 'ms-4', category: 'Wedding', album: 'Matt & Savannah', title: 'Warmth', image: 'https://i.postimg.cc/T1wTVBTj/M-amp-S-1308.jpg' },
    { id: 'ms-5', category: 'Wedding', album: 'Matt & Savannah', title: 'Together', image: 'https://i.postimg.cc/MHTz7gzd/M-amp-S-1383.jpg' },
    { id: 'ms-6', category: 'Wedding', album: 'Matt & Savannah', title: 'Sunset', image: 'https://i.postimg.cc/zvBqC4qt/M-amp-S-1400.jpg' },
    { id: 'ms-7', category: 'Wedding', album: 'Matt & Savannah', title: 'Golden', image: 'https://i.postimg.cc/FzRhywhC/M-amp-S-1405.jpg' },
    { id: 'ms-8', category: 'Wedding', album: 'Matt & Savannah', title: 'Embrace', image: 'https://i.postimg.cc/gjJGV1GQ/M-amp-S-1429.jpg' },
    { id: 'ms-9', category: 'Wedding', album: 'Matt & Savannah', title: 'Laughter', image: 'https://i.postimg.cc/sxX3YbVR/M-amp-S-1484.jpg' },
    { id: 'ms-10', category: 'Wedding', album: 'Matt & Savannah', title: 'Walk', image: 'https://i.postimg.cc/C51wG9Fg/M-amp-S-1790.jpg' },


    // --- LIFESTYLE ---

    { id: 'lpo-1', category: 'Lifestyle', album: 'Events', title: 'Orchestra', image: 'https://i.postimg.cc/BZV3WYS3/LPO-088.jpg' },
    { id: 'lpo-2', category: 'Lifestyle', album: 'Events', title: 'Music', image: 'https://i.postimg.cc/dQxFMHs3/LPO-242.jpg' },
    { id: 'jesse-5', category: 'Portrait', album: 'Jesse', title: 'Highlights', image: 'https://i.postimg.cc/cHkpSCNY/Jesse-Highlights-Singles.jpg' },

    // --- LIFESTYL: Lifestyle (Moved from Lifestyle category) ---
    { id: 'life-gen-1', category: 'Lifestyle', album: 'Lifestyle', title: 'Jacarandas', image: 'https://i.postimg.cc/25rRdgw1/Lifestyle-180.jpg' },
    { id: 'life-gen-2', category: 'Lifestyle', album: 'Lifestyle', title: 'Moments', image: 'https://i.postimg.cc/8CNQdxH5/Lifestyle-10.jpg' },
    { id: 'life-gen-4', category: 'Lifestyle', album: 'Lifestyle', title: 'Park', image: 'https://i.postimg.cc/ht9RdK9d/Lifestyle-7.jpg' },
    { id: 'life-gen-5', category: 'Lifestyle', album: 'Lifestyle', title: 'Warmth', image: 'https://i.postimg.cc/k5q3NLcf/Lifestyle-361.jpg' },
    { id: 'life-gen-6', category: 'Lifestyle', album: 'Lifestyle', title: 'Texture', image: 'https://i.postimg.cc/W4TLmxnC/Lifestyle-520.jpg' },
    { id: 'life-gen-7', category: 'Lifestyle', album: 'Lifestyle', title: 'Detail', image: 'https://i.postimg.cc/s2mFTKHR/Lifestyle-522.jpg' },
    { id: 'life-gen-8', category: 'Lifestyle', album: 'Lifestyle', title: 'Play', image: 'https://i.postimg.cc/K8nhMmnK/Lifestyle-6.jpg' },
    { id: 'life-gen-9', category: 'Lifestyle', album: 'Lifestyle', title: 'Light', image: 'https://i.postimg.cc/R04512Rp/Lifestyle-673.jpg' },
    { id: 'life-gen-10', category: 'Lifestyle', album: 'Lifestyle', title: 'Field', image: 'https://i.postimg.cc/SKd0gV10/Lifestyle-799.jpg' },
    { id: 'life-gen-11', category: 'Lifestyle', album: 'Lifestyle', title: 'Smile', image: 'https://i.postimg.cc/6QtJVF0G/Lifestyle-461.jpg' },


    { id: 'eur-1', category: 'Lifestyle', album: 'Europa', title: 'Europa', image: 'https://i.postimg.cc/90rjRTBx/Europa-(11).jpg' },
    { id: 'eur-2', category: 'Lifestyle', album: 'Europa', title: 'Gown', image: 'https://i.postimg.cc/BbXGLDCV/Europa-(139).jpg' },
    { id: 'eur-3', category: 'Lifestyle', album: 'Europa', title: 'Evening', image: 'https://i.postimg.cc/T1pXLmc9/Europa-(147).jpg' },
    { id: 'eur-4', category: 'Lifestyle', album: 'Europa', title: 'Stunning', image: 'https://i.postimg.cc/PJPkpZMc/Europa-1205.jpg' },
    { id: 'eur-5', category: 'Lifestyle', album: 'Europa', title: 'Details', image: 'https://i.postimg.cc/PJPkpZ4s/Europa-1596.jpg' },
    { id: 'eur-6', category: 'Lifestyle', album: 'Europa', title: 'Night', image: 'https://i.postimg.cc/3rchMS8r/Europa-2375.jpg' },
];

export const PACKAGES: PricingPackage[] = [
    {
        name: 'Portrait Shoot',
        price: 'R700',
        description: 'Per Hour. Perfect for solo portraits and headshots.',
        features: ['65-85 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: false
    },
    {
        name: 'Couple Shoot',
        price: 'R1,000',
        description: 'Per Hour. Capture your love story.',
        features: ['70-100 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: true
    },
    {
        name: 'Engagement Shoot',
        price: 'R1,000',
        description: 'Per Hour. Celebrate your "Yes!" moment.',
        features: ['80-100 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: false
    },
    {
        name: 'Family Shoot',
        price: 'R1,000',
        description: 'Per Hour. Timeless memories with those who matter most.',
        features: ['70-100 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: false
    },
    {
        name: 'Friend Shoot',
        price: 'R800',
        description: 'Per Hour. Fun, candid moments with your besties.',
        features: ['65-85 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: false
    },
    {
        name: 'Matric Dance',
        price: 'Starting at R700',
        description: 'Per couple/hour. Capture the glamour of the night.',
        features: ['70-100 Photos', '1 Couple: R700/h', '2-3 Couples: R600/couple/h', '4+ Couples: R550/couple/h', 'Family photos included'],
        recommended: false
    },
    {
        name: 'Graduation',
        price: 'Starting at R700',
        description: 'Per grad/hour. Celebrate your achievement.',
        features: ['1 Grad: R700/h', '2 Grads: R1200/h', '3 Grads: R1650/h', '4 Grads: R2000/h', '4+ Grads: R450/grad/h', 'Family photos included'],
        recommended: false
    },
    {
        name: 'Events & Concerts',
        price: 'Starting at R1,000',
        description: 'Per Hour. Coverage for your special occasions.',
        features: ['70-100 Professionally Edited Photos', 'Online Gallery', 'First 10km travel included'],
        recommended: false
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        text: "Deoné made us feel so comfortable in front of the camera! The photos capture our family perfectly—messy hair, big laughs, and all.",
        author: "Su-Maré",
        type: "Family Shoot"
    },
    {
        id: '2',
        text: "I usually hate having my photo taken, but this session felt like a walk in the park with a friend. The results are absolutely stunning.",
        author: "Jess",
        type: "Portrait"
    },
    {
        id: '3',
        text: "Booked for our engagement shoot and we couldn't be happier. She found the perfect light and the most beautiful spots in Pretoria.",
        author: "Tamar & Wentzel",
        type: "Couples"
    }
];
