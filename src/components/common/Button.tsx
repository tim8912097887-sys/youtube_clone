import type { ComponentProps } from 'react';

const VARIANT_MAPS = {
    default: 'bg-neutral-200 hover:bg-neutral-300',
    ghost: 'hover:bg-neutral-100',
    dark: 'bg-neutral-800 hover:bg-neutral-900 text-neutral-200',
};

const SIZE_MAPS = {
    default: 'rounded p-2',
    icon: 'rounded-full w-10 h-10 flex items-center justify-center p-2.5',
};

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
    const classname = `cursor-pointer transition-colors ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]} ${className}`;
    return (
        <button className={classname} {...props}>
            {children}
        </button>
    );
};

export default Button;
