import { ButtonWrapper } from 'utils/components/button/ButtonWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
// import { faClock } from '@fortawesome/free-solid-svg-icons';

export const ReportIconButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <div className="flex size-[116px] flex-col items-center justify-between">
                <FontAwesomeIcon
                    icon={faClock}
                    className="mt-3 size-[93px] text-background"
                />
                <span className="text-sm font-bold text-background">Report</span>
            </div>
        </ButtonWrapper>
    );
};
