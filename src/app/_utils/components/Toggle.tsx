interface ToggleProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
    return (
        <>
            <input
                type="checkbox"
                id="switch"
                className="peer invisible size-0"
                checked={checked}
                onChange={onChange}
            />
            <label
                htmlFor="switch"
                className="
                    relative block h-[30px] w-[70px] cursor-pointer rounded-[30px] bg-white
                    after:absolute after:left-4 after:top-3 after:size-[24px] after:rounded-[24px] after:bg-darkened after:duration-[0.3s] after:content-['']
                    peer-checked:bg-darkened
                    peer-checked:after:left-[calc(100%-4px)] peer-checked:after:translate-x-[-100%] peer-checked:after:bg-white
                "
            />
        </>
    );
};
