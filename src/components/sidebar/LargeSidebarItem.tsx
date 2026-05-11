import type { ElementType } from 'react';

type LargeSidebarItemProps = {
    IconorImageUrl: ElementType | string;
    title: string;
    url: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const LargeSidebarItem = ({
    IconorImageUrl,
    title,
    url,
    activeTab,
    setActiveTab,
}: LargeSidebarItemProps) => {
    const isActive = activeTab.toLowerCase() === title.toLowerCase();

    return (
        <a href={url} className="rounded-lg w-full">
            <button
                onClick={() => setActiveTab(title)}
                className={`flex gap-4 w-full rounded-lg py-2 px-4 cursor-pointer ${isActive ? 'bg-neutral-100 font-bold' : 'hover:bg-neutral-100'}`}
            >
                {typeof IconorImageUrl === 'string' ? (
                    <img
                        src={IconorImageUrl}
                        className="w-6 h-6 flex-none rounded-full"
                    />
                ) : (
                    <IconorImageUrl className="w-6 h-6 flex-none" />
                )}
                <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                </span>
            </button>
        </a>
    );
};

export default LargeSidebarItem;
