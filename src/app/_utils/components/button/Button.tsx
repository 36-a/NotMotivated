interface ButtonProps {
    label: string;
    mode: 'primary' | 'secondary';
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ label, mode, onClick }: ButtonProps) => {
    const classes = {
        primary: 'bg-main text-white',
        secondary: 'bg-darkened text-white dark:border-2',
    };
    return (
        <button
            type="button"
            className={`${classes[mode]} h-[50px] rounded-md px-10 text-center`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
