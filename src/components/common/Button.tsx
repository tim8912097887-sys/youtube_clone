import type { ComponentProps } from 'react';
import { baseClass, SIZE_MAPS, VARIANT_MAPS } from '../../configs/button';

type ButtonProps = ComponentProps<'button'> & {
    variant?: keyof typeof VARIANT_MAPS;
} & { size?: keyof typeof SIZE_MAPS } & {
    children: React.ReactNode;
};

const Button = ({
    children,
    variant = 'default',
    size = 'default',
    className,
    ...props
}: ButtonProps) => {
    const classname = `${baseClass} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]} ${className}`;
    return (
        <button className={classname} {...props}>
            {children}
        </button>
    );
};

export default Button;
