import { Divider } from '@mui/material';

export type InfoProps = {
    title: string;
    info: string;
    tooltip?: string[];
};

function InsuranceDetailsBox({ title, info, tooltip = ['도움말'] }: InfoProps) {
    return (
        <>
            <div className="row">
                <div className="inner">
                    <div className="box-tit">{title}</div>
                    <div className="box-cont">
                        {info}
                        <div className="tooltip">
                            <button
                                type="button"
                                className="tooltip-btn bg-gray"
                                aria-label="도움말"
                            ></button>
                            {tooltip && (
                                <div className="tooltip-content">
                                    <span>
                                        {tooltip.map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Divider
                sx={{
                    mb: '8px',
                    backgroundColor: '#e0e0e0',
                }}
            />
        </>
    );
}

export default InsuranceDetailsBox;
