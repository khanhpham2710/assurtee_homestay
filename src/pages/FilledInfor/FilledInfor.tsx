import FilledData from '../../components/FilledData/FilledData';
export default function FilledInfor() {
    return (
        <div style={{ padding: '0 24px' }}>
            <section className="dflex-column" style={{ marginBottom: '28px' }}>
                <p className="titleNumber">
                    <span>1</span> / 2
                </p>

                <p
                    className="titleMedium"
                    style={{
                        textAlign: 'left',
                        marginTop: '17px',
                    }}
                >
                    보험 가입 정보를 입력해 주세요.
                </p>
            </section>

            <section>
                <FilledData />
            </section>
        </div>
    );
}
