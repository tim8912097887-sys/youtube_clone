import {
    Film,
    Flame,
    Gamepad2,
    Lightbulb,
    Music2,
    Newspaper,
    Podcast,
    Radio,
    Shirt,
    ShoppingBag,
    Trophy,
} from 'lucide-react';
import LargeSidebarItem from './LargeSidebarItem';
import LargeSidebarSection from './LargeSidebarSection';

type ExploreSectionProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ExploreSection = ({ activeTab, setActiveTab }: ExploreSectionProps) => {
    return (
        <LargeSidebarSection visibleCount={5} title="Explore">
            <LargeSidebarItem
                IconorImageUrl={Flame}
                title="Trending"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={ShoppingBag}
                title="Shopping"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Music2}
                title="Music"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Film}
                title="Movies & TV"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Radio}
                title="Live"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Gamepad2}
                title="Gaming"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Newspaper}
                title="News"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Trophy}
                title="Sports"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Lightbulb}
                title="Learning"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Shirt}
                title="Fashion & Beauty"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Podcast}
                title="Podcasts"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </LargeSidebarSection>
    );
};

export default ExploreSection;
