// store.js
import { atom } from 'jotai';

// Define atoms (state)
export const cityAtom = atom(''); // Current city
export const coordsAtom = atom({ lat: 21.2514, lng: 81.6296 }); // Coordinates
export const darkModeAtom = atom(false); // Dark mode state
