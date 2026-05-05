import { Menu } from 'lucide-react';
import Button from '../common/Button';
import logo from '../../assets/Logo.png';

type LogoSectionProps = {
    showFullSearch: boolean;
};

const LogoSection = ({ showFullSearch }: LogoSectionProps) => {
    return (
        <div
            className={`gap-4 items-center shrink-0 ${showFullSearch ? 'hidden md:flex' : 'flex'}`}
        >
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className="h-6" alt="youtube-icon" />
            </a>
        </div>
    );
};

export default LogoSection;
