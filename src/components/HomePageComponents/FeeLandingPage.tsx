import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MyToolTip from '../MyTooltip/MyToolTip';
import images from '../../assets/images';

type ItemType = {
    label: string;
    value: string;
};

type InsuranceDetail = {
    title: string;
    main: ItemType;
    items: ItemType[];
};

const details: InsuranceDetail[] = [
    {
        title: '화재보험',
        main: { label: '보험료', value: '9,300원' },
        items: [
            { label: '가입금액', value: '1억원' },
            { label: '건물', value: '3,000만원' },
            { label: '시설 및 집기', value: '3,000만원' },
            { label: '재고자산', value: '3,000만원' },
        ],
    },
    {
        title: '영업배상책임보험',
        main: { label: '보험료', value: '10,000원' },
        items: [
            { label: '형태', value: '단독' },
            { label: '공급면적', value: '79m²' },
        ],
    },
];

export default function FeeLandingPage() {
    return (
        <section
            className="flexColumn_item dflex_center"
            style={{ marginBottom: '16px' }}
        >
            <Box
                sx={{
                    width: '312px',
                    height: 'auto',
                    padding: '20px 14px 55px',
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    borderRadius: '8px',
                }}
            >
                {details &&
                    details?.map((detail, index) => {
                        return (
                            <div key={index}>
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        marginTop: '12px',
                                        marginBottom: '19px',
                                        fontFamily: 'AppleSDGothicNeoH',
                                    }}
                                >
                                    {detail.title}
                                </Typography>
                                <Divider
                                    sx={{
                                        height: '2px',
                                        backgroundColor: '#e0e0e0',
                                        marginBottom: '30px',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '19px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '18px',
                                            fontFamily: 'AppleSDGothicNeoEB',
                                        }}
                                    >
                                        {detail.main.label}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: '20px',
                                            fontFamily: 'AppleSDGothicNeoEB',
                                        }}
                                    >
                                        {detail.main.value}
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={{
                                        height: '1px',
                                        backgroundColor: '#6d6d6d',
                                        marginBottom: '30px',
                                    }}
                                />
                                {detail?.items.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                    marginBottom: '24px',
                                                }}
                                            >
                                                <div
                                                    className="dflex_center"
                                                    style={{ gap: '7px' }}
                                                >
                                                    <img
                                                        src={images.whiteL}
                                                        alt=""
                                                        style={{
                                                            transform:
                                                                'translateY(-5px)',
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            fontFamily:
                                                                'AppleSDGothicNeoM',
                                                            color: '#ffffff',
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Typography>
                                                </div>

                                                <div
                                                    className="dflex_center"
                                                    style={{ gap: '3px' }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontFamily:
                                                                'AppleSDGothicNeoM',
                                                        }}
                                                    >
                                                        {item.value}
                                                    </Typography>
                                                    <MyToolTip align="left" />
                                                </div>
                                            </Box>
                                            <Divider
                                                sx={{
                                                    height: '1px',
                                                    backgroundColor: '#6d6d6d',
                                                    marginBottom: '30px',
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
            </Box>
        </section>
    );
}
