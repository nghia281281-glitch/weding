
export interface RSVPData {
  name: string;
  phone: string;
  guests: number;
  attendance: 'yes' | 'no';
  message: string;
}

export interface CoupleInfo {
  groom: string;
  bride: string;
  date: string;
  venue: string;
  address: string;
}

export enum SectionType {
  HERO = 'hero',
  STORY = 'story',
  DETAILS = 'details',
  GALLERY = 'gallery',
  RSVP = 'rsvp',
  AI_WISHES = 'ai-wishes'
}
