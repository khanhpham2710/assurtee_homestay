import {
    BusinessType,
    InsuranceAmountType,
    PersonalType,
} from '../redux/infoSlice';

export const validatePersonalField = (form: PersonalType): boolean => {
    const { contractor, dob, registrationNumber, phoneNumber } = form;

    if (!contractor || !dob || !registrationNumber || !phoneNumber)
        return false;

    if (
        dob.length !== 6 ||
        registrationNumber.length !== 7 ||
        !/^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])-[0-4,9][0-9]{6}$/.test(
            dob + '-' + registrationNumber
        )
    ) {
        return false;
    }

    if (phoneNumber.length <= 8) {
        return false;
    }

    return true;
};

export const validateBusinessField = (form: BusinessType): boolean => {
    const { businessNumber, businessName, address, extra, hanok } = form;

    if (!businessNumber || !businessName || !address || !extra || !hanok) {
        return false;
    }

    const businessNumberRegex = /^\d{3}-\d{2}-\d{5}$/;
    if (!businessNumberRegex.test(businessNumber)) {
        return false;
    }

    return true;
};

export const validateAmountField = (form: InsuranceAmountType): boolean => {
    const {
        fireInsurance,
        construction,
        facilities,
        inventory,
        housingType,
        area,
    } = form;

    if (
        !fireInsurance ||
        !construction ||
        !facilities ||
        !inventory ||
        !housingType ||
        !area
    ) {
        return false;
    }

    return true;
};
