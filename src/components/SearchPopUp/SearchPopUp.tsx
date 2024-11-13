import DaumPostcodeEmbed from 'react-daum-postcode';
import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { updateInfo } from '../../utils/redux/infoSlice';
import { BusinessType } from '../../utils/models/InfoType';
import FullPageModal from '../MyModals/FullPageModal';

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
    const dispatch = useAppDispatch();

    const [fullAddress, setFullAddress] = useState<string | null>(null);
    const { address } = useAppSelector((state) => state.info);
    const [expand, setExpanded] = useState(false);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        setExpanded(false);
    }, [fullAddress, address]);

    const handleClick_2 = () => {
        setExpanded(true);
    };

    useEffect(() => {
        buttonRef.current?.click();
        setExpanded(false);
    }, []);

    return (
        <>
            <button
                onClick={handleClick_2}
                className="btn btn--medium"
                ref={buttonRef}
                style={{
                    height: '31px',
                    padding: 0,
                }}
            >
                주소검색
            </button>

            <FullPageModal
                open={expand}
                setOpen={setExpanded}
                title="주소검색"
                style={{
                    transform: {
                        xs: 'translateX(0)',
                        sm: 'translateX(-8px)',
                    },
                }}
                component={
                    <DaumPostcodeEmbed
                        onComplete={handleComplete}
                        style={{ height: '100%' }}
                    />
                }
            />
        </>
    );
};
