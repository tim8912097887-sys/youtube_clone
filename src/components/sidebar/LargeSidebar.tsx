import { useState } from 'react';
import TopSection from './TopSection';
import SubscriptionSection from './SubscriptionSection';
import PersonalSection from './PersonalSection';
import ExploreSection from './ExploreSection';
import useExpand from '../../hooks/useExpand';

const LargeSidebar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const { expand } = useExpand();

    return (
        <aside
            className={`w-56 flex-none flex-col pb-4 px-2 gap-2 custom-sidebar overflow-y-auto bg-white
            hidden lg:flex lg:sticky ${expand && 'sm:flex sm:sticky'} ${!expand && 'lg:hidden'} top-0`}
        >
            <TopSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <hr className="border-neutral-200" />
            <PersonalSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <hr className="border-neutral-200" />
            <SubscriptionSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <hr className="border-neutral-200" />
            <ExploreSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <hr className="border-neutral-200" />
        </aside>
    );
};

export default LargeSidebar;
