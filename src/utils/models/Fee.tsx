export type Fee = {
    name: string;
    fee: number;
};

export type totalFee = {
    total: number;
    fees: Fee[];
};

const fees: totalFee = {
    total: 19300,
    fees: [
        {
            name: '화재보장 부문',
            fee: 9300,
        },
        {
            name: '영업배상 보장 부문',
            fee: 10000,
        },
    ],
};

export default fees;
