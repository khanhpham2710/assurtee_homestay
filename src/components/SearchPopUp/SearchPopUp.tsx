import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect, useState } from 'react';
const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
import { useAppDispatch } from '../../utils/hooks/reduxHooks';
import { updateInfo } from '../../utils/redux/infoSlice';
import { BusinessType } from '../../utils/models/InfoType';

type InputsProps = {
    handleChange: (key: keyof BusinessType, value: string) => void;
};

export const usePostcodePopup = ({ handleChange }: InputsProps) => {
    const open = useDaumPostcodePopup(scriptUrl);
    const dispatch = useAppDispatch();
    const [fullAddress, setFullAddress] = useState<string | null>(null);
    // useEffect({
    //     dispatch(updateInfo({
    //         address : fullAddress
    //     }))
    // },dispatch)

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') extraAddress += data.bname;
            if (data.buildingName !== '')
                extraAddress += extraAddress
                    ? `, ${data.buildingName}`
                    : data.buildingName;
            fullAddress += extraAddress ? ` (${extraAddress})` : '';
            setFullAddress(fullAddress);
        }

        dispatch(
            updateInfo({
                address: extraAddress,
            })
        );
    };

    useEffect(() => {
        if (fullAddress) {
            // dispatch(updateInfo({ address: fullAddress }));
            handleChange('address', fullAddress);
        }
        console.log('useEffect ', fullAddress);
    }, [fullAddress, dispatch]);

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return { handleClick };
};
