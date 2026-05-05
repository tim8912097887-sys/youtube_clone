import { ArrowLeft, Mic, Search } from 'lucide-react';
import Button from '../common/Button';

type SearchSectionProps = {
    showFullSearch: boolean;
    onShowFullSearch: () => void;
};

const SearchSection = ({
    showFullSearch,
    onShowFullSearch,
}: SearchSectionProps) => {
    return (
        <form
            className={`md:flex grow gap-4 justify-center ${showFullSearch ? 'flex' : 'hidden'}`}
        >
            <Button
                variant="ghost"
                size="icon"
                className={`shrink-0 ${showFullSearch ? 'md:hidden' : 'hidden'}`}
                onClick={onShowFullSearch}
            >
                <ArrowLeft />
            </Button>
            <div className="flex grow max-w-150">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-neutral-200 rounded-l-full outline-none focus:border-blue-500 text-lg shadow-inner shadow-neutral-200"
                />
                <Button className="rounded-r-full px-4 py-2 border border-l-0 border-neutral-200">
                    <Search />
                </Button>
            </div>
            <Button size="icon" className="shrink-0">
                <Mic />
            </Button>
        </form>
    );
};

export default SearchSection;
