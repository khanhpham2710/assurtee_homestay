import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Video_component from '../../components/HomePageComponents/Video_component';
import { createTheme, ThemeProvider } from '@mui/material';
export default function Banner_Video() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 700, // Custom breakpoint
                lg: 1100,
                xl: 1536,
            },
        },
    });

    const videos_embbeded = [
        {
            title: '부천 호텔화재 사고',
            video_id: '2_EBBUhKrcY',
        },
        {
            title: '보일러 가스 누출 사고',
            video_id: 'sSpx5kBTBEc',
        },
        {
            title: '대전 숙박업소서 불',
            video_id: '3jlxmgFEeZE',
        },
        {
            title: '강릉 펜션 참사',
            video_id: 'E5fToRdMnm4',
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <section
                className="dflex_center fullWidth_item flexColumn_item "
            >
                <div className="title_video">
                    <p className="title_main_component">
                        외도민업 <br /> 전용보험
                    </p>
                    <p className="title_main_des">
                        외도민업을 운영하는 사업주들의 <br />
                        사고로 인해 입을 수 있는 피해와 보상을 <br />
                        전용보험으로 커버 받을 수 있습니다.
                    </p>
                </div>

                <Box
                    className="video_description"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Grid
                        container
                        spacing={0}
                        columnSpacing={3}
                        rowSpacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {videos_embbeded &&
                            videos_embbeded.map((video, index) => (
                                <Grid
                                    size={{ md: 6, sm: 12 }}
                                    key={index}
                                >
                                    <Video_component
                                        title={video.title}
                                        video_id={video.video_id}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            </section>
        </ThemeProvider>
    );
}
