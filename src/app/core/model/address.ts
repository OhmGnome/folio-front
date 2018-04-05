export interface Address {
    address1: string
    address2?: string
    city: string
    state: string
    postalCode?: string
    country?: string
    fullAddress?: string
    zip9?: string
    addressId?: string
    addressType?: string
    verifyLevel?: string
    metadata?: {
        precision: string
        location: location
    }
}

export interface location {
    latitude: number
    longitude: number
}

export interface AutoCompleteAddress {
    text: string
    street_line: string
    city?: string
    state?: string
}

export interface SmartyAutoCompleteResponse {
    suggestions?: Array<AutoCompleteAddress>;
}