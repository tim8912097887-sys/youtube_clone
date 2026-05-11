import { createContext } from 'react';

type ExpandContextType = {
    expand: boolean;
    toggleExpand: () => void;
};

export const ExpandContext = createContext<ExpandContextType | null>(null);
