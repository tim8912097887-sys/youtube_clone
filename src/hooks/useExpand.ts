import { useContext } from 'react';
import { ExpandContext } from '../contexts';

const useExpand = () => {
    const context = useContext(ExpandContext);

    if (!context) {
        throw new Error('useExpand must be used within a ExpandProvider');
    }
    return context;
};

export default useExpand;
