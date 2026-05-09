import { categories } from '../../data/content';
import Category from './Category';

const Content = () => {
    return (
        <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
                <Category categories={categories} />
            </div>
        </div>
    );
};

export default Content;
