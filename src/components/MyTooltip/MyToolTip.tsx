import Box from '@mui/material/Box';

function MyToolTip({ color = 'grey' }: { color?: 'grey' | 'black' }) {
    return (
        <Box
            sx={{
                '.is-show': {
                    '&::before': {
                        display: 'none',
                    },
                },
            }}
        >
            <div className="tooltip">
                <button
                    type="button"
                    className={
                        color == 'grey' ? 'tooltip-btn bg-gray' : 'tooltip-btn'
                    }
                    aria-label="도움말"
                ></button>
                {/*<div className="tooltip-content">툴팁내용</div>*/}
            </div>
        </Box>
    );
}

export default MyToolTip;
