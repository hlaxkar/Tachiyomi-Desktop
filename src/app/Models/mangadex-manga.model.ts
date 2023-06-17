interface MangaAttributes {
    title: string;
    altTitles: string[];
    description: string;
    isLocked: boolean;
    links: string;
    originalLanguage: string;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: string;
    status: string;
    year: number;
    contentRating: string;
    chapterNumbersResetOnNewVolume: boolean;
    latestUploadedChapter: string;
    tags: MangaTag[];
    state: string;
    version: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MangaRelationships {
    monochrome: string;
  }
  
  interface MangaTag {
    id: string;
    type: string;
    attributes: MangaTagAttributes;
    relationships: MangaTagRelationships;
  }
  
  interface MangaTagAttributes {
    name: string;
    description: string;
    group: string;
    version: number;
  }
  
  export interface MangaTagRelationships {
    monochrome: string;
  }
  
  export interface MangaModel {
  
    id: string;
    type: string;
    attributes: MangaAttributes;
    relationships: MangaRelationships;
  
  }