import { categories } from '../../data/content';
import Category from './Category';
import VideoGrid from './VideoGrid';

const Content = () => {
    return (
        <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
                <Category categories={categories} />
            </div>
            <VideoGrid />
        </div>
    );
};

export default Content;
