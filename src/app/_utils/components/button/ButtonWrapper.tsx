export const ButtonWrapper = ({
    onClick,
    children,
}: {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
}) => {
    return (
        <button
            type="button"
            className="rounded-md bg-main p-10"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
