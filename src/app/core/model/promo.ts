export interface Promo {
    discountType: string,
    discountValue: string,
    eligibleRules: {
        serviceFee: string[],
        SKUID: string[]
    },
    global: false,
    promotionName: string,
    valid: boolean
    message?: Messages
}

interface Messages{
    priorityCodeError: string
    processingRequest: string
}
