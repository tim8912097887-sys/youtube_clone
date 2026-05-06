import userEvent from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../../components/common/Button';
import { baseClass, SIZE_MAPS, VARIANT_MAPS } from '../../configs/button';

describe('Button', () => {
    it('When provide no props, should render Button with defaut class', () => {
        render(<Button>Button</Button>);

        const button = screen.getByText('Button');

        expect(button).toHaveClass(
            `${baseClass} ${VARIANT_MAPS.default} ${SIZE_MAPS.default}`,
        );
    });

    it('When provide variant prop, should render Button with variant class', () => {
        render(<Button variant="ghost">Button</Button>);

        const button = screen.getByText('Button');

        expect(button).toHaveClass(
            `${baseClass} ${VARIANT_MAPS.ghost} ${SIZE_MAPS.default}`,
        );
    });

    it('When provide size prop, should render Button with size class', () => {
        render(<Button size="icon">Button</Button>);

        const button = screen.getByText('Button');

        expect(button).toHaveClass(
            `${baseClass} ${VARIANT_MAPS.default} ${SIZE_MAPS.icon}`,
        );
    });

    it('When provide className prop, should render Button with className', () => {
        render(<Button className="custom-class">Button</Button>);

        const button = screen.getByText('Button');

        expect(button).toHaveClass(
            `${baseClass} ${VARIANT_MAPS.default} ${SIZE_MAPS.default} custom-class`,
        );
    });

    it('When provide onClick prop, should render Button with onClick', async () => {
        const user = userEvent.setup();
        const onClick = vitest.fn();
        render(<Button onClick={onClick}>Button</Button>);

        const button = screen.getByText('Button');

        await user.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
