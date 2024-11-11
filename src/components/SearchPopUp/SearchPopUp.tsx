import DaumPostcodeEmbed from 'react-daum-postcode';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {updateInfo} from '../../utils/redux/infoSlice';
import {BusinessType} from '../../utils/models/InfoType';
import FullPageModal from "../MyModals/FullPageModal";



type DataType = {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
};

export const PostCode = ({handleChange}: InputsProps) => {

    const scriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';


    const dispatch = useAppDispatch();

    const [fullAddress, setFullAddress] = useState<string | null>(null);
    const {address} = useAppSelector((state) => state.info);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [expand, setExpanded] = useState(false);


    const handleComplete = (data: DataType) => {
        console.log(data);
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') extraAddress += data.bname;
            if (data.buildingName !== '') {
                extraAddress += extraAddress
                    ? `, ${data.buildingName}`
                    : data.buildingName;
            }
            fullAddress += extraAddress ? ` (${extraAddress})` : '';
        }
        console.log(fullAddress);
        setFullAddress(fullAddress);
        dispatch(
            updateInfo({
                address: extraAddress,
            }),
          
        );
    };

    useEffect(() => {
        if (fullAddress) {
            handleChange('address', fullAddress);
        }
        setExpanded(false)
    }, [fullAddress, address]);

    const handleClick_2 = () => {
        setExpanded(true)
    }
    return (
        <>
            <button onClick={handleClick_2} className="address-button">
                주소검색
            </button>

            <FullPageModal open={expand} setOpen={setExpanded} title="주소검색" component=
                {<DaumPostcodeEmbed onComplete={handleComplete} style={{height:"100%"}}/>}
            />
        </>
    );
};
