import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LargeSidebarSection from '../../../components/sidebar/LargeSidebarSection';
import userEvent from '@testing-library/user-event';

describe('LargeSidebarSection', () => {
    it('When visible count is greater than children, should render all children', () => {
        const visibleCount = 4;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const child1 = screen.getByText('child 1');
        const child2 = screen.getByText('child 2');
        const child3 = screen.getByText('child 3');

        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
        expect(child3).toBeInTheDocument();
    });

    it('When visible count is less than children, should render only visible children', () => {
        const visibleCount = 2;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const child1 = screen.getByText('child 1');
        const child2 = screen.getByText('child 2');
        const child3 = screen.queryByText('child 3');

        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
        expect(child3).not.toBeInTheDocument();
    });

    it('When provide title, should render title', () => {
        const title = 'title';

        render(
            <LargeSidebarSection visibleCount={2} title={title}>
                <div>child 1</div>
            </LargeSidebarSection>,
        );

        const titleElement = screen.getByText(title);

        expect(titleElement).toBeInTheDocument();
    });

    it('When visible count is less than children, should render show more button', () => {
        const visibleCount = 2;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const showMoreButton = screen.getByText('Show more');

        expect(showMoreButton).toBeInTheDocument();
    });

    it('When visible count is greater than children, should not render show more button', () => {
        const visibleCount = 4;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const showMoreButton = screen.queryByText('Show more');

        expect(showMoreButton).not.toBeInTheDocument();
    });

    it('When click show more button, should render all children', async () => {
        const user = userEvent.setup();
        const visibleCount = 2;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const showMoreButton = screen.getByText('Show more');
        const child1 = screen.getByText('child 1');
        const child2 = screen.getByText('child 2');
        const child3 = screen.queryByText('child 3');

        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
        expect(child3).not.toBeInTheDocument();

        await user.click(showMoreButton);

        const child1AfterShowmore = screen.getByText('child 1');
        const child2AfterShowmore = screen.getByText('child 2');
        const child3AfterShowmore = screen.getByText('child 3');

        expect(child1AfterShowmore).toBeInTheDocument();
        expect(child2AfterShowmore).toBeInTheDocument();
        expect(child3AfterShowmore).toBeInTheDocument();
    });

    it('When click show less button, should render only visible children', async () => {
        const user = userEvent.setup();
        const visibleCount = 2;

        render(
            <LargeSidebarSection visibleCount={visibleCount}>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
            </LargeSidebarSection>,
        );

        const showMoreButton = screen.getByText('Show more');
        const child1 = screen.getByText('child 1');
        const child2 = screen.getByText('child 2');
        const child3 = screen.queryByText('child 3');

        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
        expect(child3).not.toBeInTheDocument();

        await user.click(showMoreButton);

        const child1AfterShowmore = screen.getByText('child 1');
        const child2AfterShowmore = screen.getByText('child 2');
        const child3AfterShowmore = screen.getByText('child 3');

        expect(child1AfterShowmore).toBeInTheDocument();
        expect(child2AfterShowmore).toBeInTheDocument();
        expect(child3AfterShowmore).toBeInTheDocument();

        const showLessButton = screen.getByText('Show less');

        await user.click(showLessButton);

        const child1AfterShowless = screen.getByText('child 1');
        const child2AfterShowless = screen.getByText('child 2');
        const child3AfterShowless = screen.queryByText('child 3');

        expect(child1AfterShowless).toBeInTheDocument();
        expect(child2AfterShowless).toBeInTheDocument();
        expect(child3AfterShowless).not.toBeInTheDocument();
    });
});
