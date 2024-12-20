import {
    BusinessType,
    PersonalType,
    InsuranceAmountType,
    PersonalInfoType,
} from '../models/InfoType';

export const validatePersonalField = (form: PersonalType): boolean => {
    const { contractor, dob, registrationNumber, phoneNumber, mail, email } =
        form;

    if (
        !contractor ||
        !dob ||
        !registrationNumber ||
        !phoneNumber ||
        !email ||
        !mail
    ) {
        return false;
    }

    if (
        dob.length !== 6 ||
        registrationNumber.length !== 7 ||
        !/^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])-[0-4,9][0-9]{6}$/.test(
            dob + '-' + registrationNumber
        )
    ) {
        return false;
    }

    if (
        !/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            mail
        )
    ) {
        return false;
    }
    if (phoneNumber.length <= 8) {
        return false;
    }

    return true;
};

export const validatePersonalInfoField = (form: PersonalInfoType): boolean => {
    const {
        businessName,
        name,
        fullRegistrationNumber,
        homeAddress,
        homeExtra,
    } = form;

    if (
        !businessName ||
        !name ||
        !fullRegistrationNumber ||
        !homeAddress ||
        !homeExtra
    ) {
        return false;
    }

    // if (
    //     !/^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])-[0-4,9][0-9]{6}$/.test(
    //         fullRegistrationNumber
    //     )
    // ) {
    //     return false;
    // }

    return true;
};

export const validateBusinessField = (form: BusinessType): boolean => {
    const { businessNumber, businessName, address, building } = form;

    if (!businessNumber || !businessName || !address || !building) {
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
