export function numberFormat(number) {
    if(!number)
        return false;

    return number.toLocaleString(
        undefined,                      // leave undefined to use the visitor's browser 
        { minimumFractionDigits: 2 }    // locale or a string like 'en-US' to override it.
    )
}
