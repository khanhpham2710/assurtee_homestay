import InsuranceDetails from '../InsuranceInfo/InsuranceDetails';
import WarningAccordion from '../Accordion/WarningAccordion';
import NoteContent from './NoteContent';
import Download from '../Download/Download';

export default function CoverageInfos() {
    return (
        <>
            <InsuranceDetails />
            <div
                className="dflex_center"
                style={{
                    gap: '12px',
                    marginTop: '12px',
                    marginBottom: '20px',
                }}
            >
                <Download text="상품설명서(PDF)" href="" fileName="" />
                <Download text="보험약관(PDF)" href="" fileName="" />
            </div>
            <WarningAccordion title="유의사항" content={NoteContent} />
        </>
    );
}
