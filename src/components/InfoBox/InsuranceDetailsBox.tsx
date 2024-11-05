import { Divider } from '@mui/material';
import MyToolTip from '../MyTooltip/MyToolTip';

export type InfoProps = {
    title: string;
    info: string;
    tooltip?: string[];
};

function InsuranceDetailsBox({ title, info, tooltip }: InfoProps) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '50px',
                    padding: '11px 0',
                    gap: '20px',
                }}
            >
                <label
                    style={{
                        fontFamily: 'AppleSDGothicNeoM',
                        fontSize: '14px',
                        color: '#646464',
                        lineHeight: '1.21',
                        textAlign: 'left',
                        overflowWrap: 'break-word',
                    }}
                >
                    {title}
                </label>
                <div
                    className="dflex_center"
                    style={{
                        gap: '8px',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'AppleSDGothicNeoSB',
                            fontSize: '16px',
                            color: '#000',
                            lineHeight: '1.75',
                            textAlign: 'right',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {info}
                    </p>
                    <MyToolTip align="left" text={tooltip} />
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
