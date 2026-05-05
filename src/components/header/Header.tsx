import { useState } from 'react';
import HeaderRight from './HeaderRight';
import LogoSection from './LogoSection';
import SearchSection from './SearchSection';

const Header = () => {
    const [showFullSearch, setShowFullSearch] = useState(false);

    const handleShowFullSearch = () => setShowFullSearch((prev) => !prev);
    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <LogoSection showFullSearch={showFullSearch} />
            <SearchSection
                showFullSearch={showFullSearch}
                onShowFullSearch={handleShowFullSearch}
            />
            <HeaderRight
                showFullSearch={showFullSearch}
                onShowFullSearch={handleShowFullSearch}
            />
        </div>
    );
};

export default Header;
