import { element } from 'protractor'
import * as $ from 'jquery'

// Materialize fix to update labels of text fields of a specified @Component selector
export function setInputFocusEvent(ngSelector: string): void {
  let input_selector =
    'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea'
  let inputs = input_selector.split(', ')
  input_selector = ''
  inputs.forEach(input => (input_selector += ngSelector + ' ' + input + ', '))
  input_selector = input_selector.slice(0, -2)
  $(input_selector).each(function (index, element) {
    $(element).focus(() =>
      $(this)
        .siblings('label')
        .addClass('active')
    )

    $(element).blur(() => {
      let val = $(element).val() as string
      if (val.length === 0) {
        $(this)
          .siblings('label')
          .removeClass('active')
      }
    })
  })
}

export function showTaxDisclaimer(state) {
  let disclaimerStates = ["AR", "CT", "HI", "NC", "NE", "NY", "NJ", "SD", "WV", "OH", "PA", "TN", "UT", "WA", "WI", "TX"];
  if ($.inArray(state, disclaimerStates) != -1) {
    $('#tax-disclaimer').show();
  } else {
    $('#tax-disclaimer').hide();
  }
}

export function doubleModalRedirect(href) {
  window.open(href)
}

export function isLocalStorage() {
  if (typeof (Storage) !== "undefined") {
    return false
  } else {
    return true
  }
}

export function isMobile() {
  let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
  //if width is less than tablet - scrollbar buffer
  if (width < 730) return true
  else return false
}

export class Logger{
  oldConsoleLog: any

  enableLogger = function enableLogger() {
    if (this.oldConsoleLog == null)
      return;

    window['console']['log'] = this.oldConsoleLog;
  }

  disableLogger = function disableLogger() {
    this.oldConsoleLog = console.log;
    window['console']['log'] = function () { };
  }
}