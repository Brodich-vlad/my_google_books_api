export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const MAX_RESULTS = 30;

export function createUrl(){
    const url =  'https://www.googleapis.com/books/v1/volumes?q=search+subject:""&maxResults=30&startIndex=0';
};
