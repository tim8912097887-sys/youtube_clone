import { Menu } from 'lucide-react';
import Button from '../common/Button';
import logo from '../../assets/Logo.png';
import useExpand from '../../hooks/useExpand';

type LogoSectionProps = {
    showFullSearch: boolean;
};

const LogoSection = ({ showFullSearch }: LogoSectionProps) => {
    const { toggleExpand } = useExpand();

    return (
        <div
            className={`gap-4 items-center shrink-0 ${showFullSearch ? 'hidden md:flex' : 'flex'}`}
        >
            <Button variant="ghost" size="icon" onClick={() => toggleExpand()}>
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className="h-6" alt="youtube-icon" />
            </a>
        </div>
    );
};

export default LogoSection;
