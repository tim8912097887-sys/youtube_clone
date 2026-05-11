import { Children, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../common/Button';

type LargeSidebarSectionProps = {
    children: React.ReactNode;
    visibleCount: number;
    title?: string;
};

const LargeSidebarSection = ({
    children,
    visibleCount = Number.POSITIVE_INFINITY,
    title,
}: LargeSidebarSectionProps) => {
    const [isExpand, setIsExpand] = useState(false);

    const childrenArray = !isExpand
        ? Children.toArray(children).flat().slice(0, visibleCount)
        : Children.toArray(children).flat();
    const hasMore = Children.count(children) > visibleCount;

    return (
        <div className="flex flex-col ">
            {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
            {childrenArray}
            {hasMore && (
                <Button
                    variant="ghost"
                    className="flex gap-4 w-full rounded-lg py-2 px-4 cursor-pointer"
                    onClick={() => setIsExpand((prev) => !prev)}
                >
                    {!isExpand ? <ChevronDown /> : <ChevronUp />}
                    <div>Show {isExpand ? 'less' : 'more'}</div>
                </Button>
            )}
        </div>
    );
};

export default LargeSidebarSection;
