interface ButtonProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export const PrimaryButton = ({ label, ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className="h-[50px] bg-main px-10 text-center text-dark-text"
            {...props}
        >
            {label}
        </button>
    );
};
