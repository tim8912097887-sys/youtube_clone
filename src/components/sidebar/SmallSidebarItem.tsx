import type { ElementType } from 'react';

type SmallSidebarItemProps = {
    Icon: ElementType;
    title: string;
    url: string;
};

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
    return (
        <a
            href={url}
            className="flex flex-col items-center gap-1 px-1 py-4 hover:bg-neutral-100 rounded-lg"
        >
            <Icon className="w-6 h-6" />
            <span className="text-sm">{title}</span>
        </a>
    );
};

export default SmallSidebarItem;
