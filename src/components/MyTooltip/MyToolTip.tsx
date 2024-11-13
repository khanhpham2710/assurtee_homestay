import React, { useState } from 'react';
import Box from '@mui/material/Box';

function MyToolTip() {
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
                    className="tooltip-btn bg-gray"
                    aria-label="도움말"
                ></button>
                {/*<div className="tooltip-content">툴팁내용</div>*/}
            </div>
        </Box>
    );
}

export default MyToolTip;
