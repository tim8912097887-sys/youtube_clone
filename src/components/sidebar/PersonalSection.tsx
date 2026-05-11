import { Clock, History, Library, ListVideo, PlaySquare } from 'lucide-react';
import LargeSidebarItem from './LargeSidebarItem';
import LargeSidebarSection from './LargeSidebarSection';
import { playlists } from '../../data/sidebar';

type PersonalSectionProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const PersonalSection = ({ activeTab, setActiveTab }: PersonalSectionProps) => {
    return (
        <LargeSidebarSection visibleCount={5} title="Personal Center">
            <LargeSidebarItem
                IconorImageUrl={Library}
                title="Library"
                url="/library"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={History}
                title="History"
                url="/history"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={PlaySquare}
                title="Your Videos"
                url="/your-videos"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <LargeSidebarItem
                IconorImageUrl={Clock}
                title="Watch Later"
                url="/"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {playlists.map((playlist) => (
                <LargeSidebarItem
                    key={playlist.id}
                    IconorImageUrl={ListVideo}
                    title={playlist.name}
                    url="/"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ))}
        </LargeSidebarSection>
    );
};

export default PersonalSection;
