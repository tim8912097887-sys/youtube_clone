import { useState, type PropsWithChildren } from 'react';
import { ExpandContext } from '../contexts';

const ExpandProvider = ({ children }: PropsWithChildren) => {
    const [expand, setExpand] = useState<boolean>(false);

    const toggleExpand = () =>
        setExpand((prev) => {
            if (prev === null) return true;
            return !prev;
        });
    return (
        <ExpandContext value={{ expand, toggleExpand }}>
            {children}
        </ExpandContext>
    );
};

export default ExpandProvider;
