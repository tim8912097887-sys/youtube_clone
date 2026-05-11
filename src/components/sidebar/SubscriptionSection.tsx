import { subscriptions } from '../../data/sidebar';
import LargeSidebarItem from './LargeSidebarItem';
import LargeSidebarSection from './LargeSidebarSection';

type SubscriptionSectionProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const SubscriptionSection = ({
    activeTab,
    setActiveTab,
}: SubscriptionSectionProps) => {
    return (
        <LargeSidebarSection title="Subscriptions" visibleCount={5}>
            {subscriptions.map((sub) => (
                <LargeSidebarItem
                    IconorImageUrl={sub.imgUrl}
                    title={sub.channelName}
                    url="/"
                    key={sub.id}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ))}
        </LargeSidebarSection>
    );
};

export default SubscriptionSection;
