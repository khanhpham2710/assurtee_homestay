import Grid from '@mui/material/Grid2';
import Video_component from '../../components/HomePageComponents/Video_component';

export default function Banner_Video() {
    const videos_embbeded = [
        {
            title: '부천호텔화재사고',
            video_id: '2_EBBUhKrcY',
        },
        {
            title: '보일러가스누출사고',
            video_id: 'sSpx5kBTBEc',
        },
        {
            title: '대전숙박업소서 불',
            video_id: '3jlxmgFEeZE',
        },
        {
            title: '강릉펜션참사',
            video_id: 'E5fToRdMnm4',
        },
    ];

    return (
        <div className="main-section intro">
            <div className="main-section-inner">
                <h2 className="main-section-title">
                    외도민업
                    <br />
                    전용보험
                </h2>
                <p className="main-section-description">
                    외도민업을 운영하는 사업주들의
                    <br />
                    사고로 인해 입을 수 있는 피해와 보상을{' '}
                    <br className="pc-hide" />
                    전용보험으로 커버 받을 수 있습니다.
                </p>

                <div className="video_description">
                    <Grid
                        container
                        spacing={0}
                        columnSpacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {videos_embbeded &&
                            videos_embbeded.map((video, index) => (
                                <Grid size={{ md: 6, sm: 12 }} key={index}>
                                    <Video_component
                                        title={video.title}
                                        video_id={video.video_id}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}
