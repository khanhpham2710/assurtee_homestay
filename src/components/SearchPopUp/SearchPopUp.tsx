import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect, useState } from 'react';

import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import { updateInfo } from '../../utils/redux/infoSlice';
import { BusinessType } from '../../utils/models/InfoType';

type InputsProps = {
    handleChange: (key: keyof BusinessType, value: string) => void;
};

type DataType = {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
};

export const PostCode = ({ handleChange }: InputsProps) => {


    const open = useDaumPostcodePopup();
    const dispatch = useAppDispatch();
    const [fullAddress, setFullAddress] = useState<string | null>(null);
    const {address} = useAppSelector(state => state.info);


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
            })
        );
    };

    useEffect(() => {
        if (fullAddress) {
            handleChange('address', fullAddress);
        }
    }, [fullAddress, address]);

    const handleClick = async () => {
        await open({onComplete: handleComplete, width: "80%", autoClose: true,});
    };
    return (
        <button
            onClick={handleClick}
            className="address-button"
        >
            주소검색
        </button>
    );
};
