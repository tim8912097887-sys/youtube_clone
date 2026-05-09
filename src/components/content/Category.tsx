import { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CategoryProps = {
    categories: string[];
};

const TRANSLATE_AMOUNT = 200;

const Category = ({ categories }: CategoryProps) => {
    const [translateX, setTranslateX] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (containerRef.current == null) return;

        const observer = new ResizeObserver((entries) => {
            const container = entries[0]?.target;
            if (container == null) return;

            setIsLeftVisible(translateX > 0);
            setIsRightVisible(
                translateX + container.clientWidth < container.scrollWidth,
            );
        });

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [categories, translateX]);

    return (
        <div ref={containerRef} className="overflow-x-hidden">
            <div
                className="flex whitespace-nowrap gap-3 transition-transform w-max"
                style={{ transform: `translateX(-${translateX}px)` }}
            >
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        variant={
                            category === selectedCategory ? 'dark' : 'default'
                        }
                        size="default"
                    >
                        {category}
                    </Button>
                ))}
            </div>
            {isLeftVisible && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-white from-50% to-transparent w-24 h-full">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-full w-auto p-1.5 aspect-square"
                        onClick={() =>
                            setTranslateX((preTranslate) => {
                                let nextTranslate =
                                    preTranslate - TRANSLATE_AMOUNT;
                                if (nextTranslate < 0) {
                                    nextTranslate = 0;
                                }
                                return nextTranslate;
                            })
                        }
                    >
                        <ChevronLeft />
                    </Button>
                </div>
            )}
            {isRightVisible && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-linear-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-full w-auto p-1.5 aspect-square"
                        onClick={() =>
                            setTranslateX((preTranslate) => {
                                let nextTranslate =
                                    preTranslate + TRANSLATE_AMOUNT;
                                if (
                                    nextTranslate >=
                                    containerRef.current!.scrollWidth -
                                        containerRef.current!.clientWidth
                                ) {
                                    nextTranslate =
                                        containerRef.current!.scrollWidth -
                                        containerRef.current!.clientWidth;
                                }
                                return nextTranslate;
                            })
                        }
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Category;
