export const viewDetails= 'click to view details'
export const sessionExpired= 'Session expired please return to step 1'
export const networkError= 'An error occurred while processing your request'
export const processingRequest= 'Processing request ...'

export const promoUserError = 'The promo code you have entered is invalid'
export const promoEligibilityError = 'The promo code is not eligible for your state, home size, or plan type'

export const over10k = 'over 10k'
export const under5k = 'under 5k'
export const BYO = 'buildyourown'
export const brand = 'AHS'
export const pCode = "pCode"

export const states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AR": "Arkansas",
    "AZ": "Arizona",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

export const env = (location.origin.indexOf('localhost') > -1 || location.origin.indexOf('localshopping') > -1) ? 'local'
    : (location.origin.indexOf('test') > -1) ? 'test-'
    : ''
export const siteBaseUrl = 'https://' + env + 'shopping.ahs.com'

export const searchParams = new URLSearchParams(location.href.split('?')[1]);