import { Bell, Mic, Search, Upload, User } from 'lucide-react';
import Button from '../common/Button';

type HeaderRightProps = {
    onShowFullSearch: () => void;
    showFullSearch: boolean;
};

const HeaderRight = ({
    showFullSearch,
    onShowFullSearch,
}: HeaderRightProps) => {
    return (
        <div
            className={`items-center md:gap-2 shrink-0 ${showFullSearch ? 'hidden md:flex' : 'flex'}`}
        >
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={onShowFullSearch}
            >
                <Search />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Mic />
            </Button>
            <Button variant="ghost" size="icon">
                <Upload />
            </Button>
            <Button variant="ghost" size="icon">
                <Bell />
            </Button>
            <Button variant="ghost" size="icon">
                <User />
            </Button>
        </div>
    );
};

export default HeaderRight;
