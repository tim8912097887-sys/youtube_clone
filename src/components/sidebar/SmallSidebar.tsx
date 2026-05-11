import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import SmallSidebarItem from './SmallSidebarItem';
import useExpand from '../../hooks/useExpand';

const SmallSidebar = () => {
    const { expand } = useExpand();

    return (
        <aside
            className={`sticky top-0 flex-none flex-col pb-4 ml-1 overflow-y-auto no-scrollbar
       hidden sm:flex lg-hidden ${expand && 'sm:hidden'} ${!expand && 'lg:flex'}`}
        >
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/" />
            <SmallSidebarItem
                Icon={Clapperboard}
                title="Subscriptions"
                url="/"
            />
            <SmallSidebarItem Icon={Library} title="Library" url="/" />
        </aside>
    );
};

export default SmallSidebar;
