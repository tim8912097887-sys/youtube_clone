import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExpandProvider from '../../providers/ExpandProvider';
import LargeSidebar from '../../components/sidebar/LargeSidebar';
import SmallSidebar from '../../components/sidebar/SmallSidebar';
import userEvent from '@testing-library/user-event';
import LogoSection from '../../components/header/LogoSection';

describe('Sidebar Expand test', () => {
    it('When click expand button, should display large sidebar', async () => {
        const user = userEvent.setup();

        render(
            <ExpandProvider>
                <LogoSection showFullSearch={false} />
                <LargeSidebar />
                <SmallSidebar />
            </ExpandProvider>,
        );
        const expandButton = screen.getByTestId('expand-button');
        await user.click(expandButton);
        const largeSidebar = screen.getByTestId('large-sidebar');
        const smallSidebar = screen.queryByTestId('small-sidebar');

        expect(largeSidebar).toHaveClass('sm:flex sm:sticky');
        expect(largeSidebar).not.toHaveClass('lg:hidden');
        expect(smallSidebar).toHaveClass('sm:hidden');
        expect(smallSidebar).not.toHaveClass('lg:flex');
    });

    it('When click expand button twice, should display small sidebar', async () => {
        const user = userEvent.setup();

        render(
            <ExpandProvider>
                <LogoSection showFullSearch={false} />
                <LargeSidebar />
                <SmallSidebar />
            </ExpandProvider>,
        );
        const expandButton = screen.getByTestId('expand-button');
        await user.click(expandButton);
        await user.click(expandButton);
        const largeSidebar = screen.getByTestId('large-sidebar');
        const smallSidebar = screen.queryByTestId('small-sidebar');

        expect(largeSidebar).not.toHaveClass('sm:flex sm:sticky');
        expect(largeSidebar).toHaveClass('lg:hidden');
        expect(smallSidebar).not.toHaveClass('sm:hidden');
        expect(smallSidebar).toHaveClass('lg:flex');
    });
});
