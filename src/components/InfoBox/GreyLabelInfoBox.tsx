import { Divider } from '@mui/material';

export type InfoProps = {
    title: string;
    info: string;
};

export default function GreyLabelInfoBox({ title, info }: InfoProps) {
    return (
        <>
            <div
                className="dflex_spacebetween"
                style={{
                    minHeight: '50px',
                    padding: '11px 0',
                }}
            >
                <label className="grey_label">{title}</label>
                <p className="medium_info">{info}</p>
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
