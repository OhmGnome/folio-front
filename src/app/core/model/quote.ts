import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export interface Quote {
    // isOnbeforeunloadJqueryProc: boolean
    isQuotePage: boolean
    printQuoteWindow: Window
    isPrintQuote: boolean
    byosCounterInit: BehaviorSubject<boolean>
    byosCounterOffset: BehaviorSubject<number>
    isNextPageTransition: BehaviorSubject<boolean>
    comboSavings: BehaviorSubject<string>
    isPriorityCodeDisplayed: BehaviorSubject<boolean>
    isPromoFieldDisplayed: BehaviorSubject<boolean>
    isCoveredItemsDisplay: BehaviorSubject<boolean>
}
