import { Clipboard, Home } from 'lucide-react';
import LargeSidebarItem from './LargeSidebarItem';
import LargeSidebarSection from './LargeSidebarSection';

type TopSectionProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};
const TopSection = ({ activeTab, setActiveTab }: TopSectionProps) => {
    return (
        <LargeSidebarSection visibleCount={4}>
            <LargeSidebarItem
                activeTab={activeTab}
                IconorImageUrl={Home}
                title="Home"
                url="/"
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                activeTab={activeTab}
                IconorImageUrl={Clipboard}
                title="Shorts"
                url="/"
                setActiveTab={setActiveTab}
            />
        </LargeSidebarSection>
    );
};

export default TopSection;
