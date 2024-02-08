import { ButtonWrapper } from 'utils/components/button/ButtonWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const TodoIconButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <div className="fa-stack flex size-[116px] flex-col items-center justify-between">
                <FontAwesomeIcon
                    icon={faNoteSticky}
                    className="size-[100px] text-background"
                />
                <FontAwesomeIcon
                    icon={faCheck}
                    className="fa-stack-2x top-[-0.8rem] text-[#7fffd4]"
                />
                <span className="text-sm font-bold text-background">TODO Tasks</span>
            </div>
        </ButtonWrapper>
    );
};
