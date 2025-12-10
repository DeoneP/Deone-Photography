
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type Category = 'Family' | 'Graduation' | 'Portrait' | 'Couples' | 'Wedding' | 'Lifestyle';

export interface PortfolioItem {
  id: string;
  category: Category;
  album?: string;
  image: string;
  title: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  type: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  GALLERY = 'gallery',
  PRICING = 'pricing',
  CONTACT = 'contact',
}
