import { render } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import LargeSidebarItem from '../../../components/sidebar/LargeSidebarItem';
import { ChartArea } from 'lucide-react';

describe('LargeSidebarItem', () => {
    const setActiveTab = vitest.fn();

    it('When the tag is active, should render with specific class', () => {
        const imgUrl = '/';
        const title = 'title';
        const url = '/';
        const activeTab = 'title';

        render(
            <LargeSidebarItem
                IconorImageUrl={imgUrl}
                title={title}
                url={url}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />,
        );

        const button = document.querySelector('button');
        expect(button).toHaveClass('bg-neutral-100 font-bold');
        expect(button).not.toHaveClass('hover:bg-neutral-100');
    });

    it('When the tag is not active, should render with specific class', () => {
        const imgUrl = '/';
        const title = 'title';
        const url = '/';
        const activeTab = 'not-title';

        render(
            <LargeSidebarItem
                IconorImageUrl={imgUrl}
                title={title}
                url={url}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />,
        );

        const button = document.querySelector('button');
        expect(button).not.toHaveClass('bg-neutral-100 font-bold');
        expect(button).toHaveClass('hover:bg-neutral-100');
    });

    it('When the provide image url, should render image', () => {
        const imgUrl = '/';
        const title = 'title';
        const url = '/';
        const activeTab = 'not-title';

        render(
            <LargeSidebarItem
                IconorImageUrl={imgUrl}
                title={title}
                url={url}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />,
        );

        const img = document.querySelector('img');
        expect(img).toBeInTheDocument();
    });

    it('When the provide icon, should render icon', () => {
        const Icon = ChartArea;
        const title = 'title';
        const url = '/';
        const activeTab = 'not-title';

        render(
            <LargeSidebarItem
                IconorImageUrl={Icon}
                title={title}
                url={url}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />,
        );

        const icon = document.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });
});
