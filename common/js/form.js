Element.Methods.toggleOpen = function(element, target, openLabel, closeLabel) {
    if (!openLabel) {
        openLabel = "äJÇ≠Å•";
    }
    if (!closeLabel) {
        closeLabel = "ï¬Ç∂ÇÈÅ£";
    }
    if ($(target).getStyle('display') == 'none') {
        $(element).innerHTML = closeLabel;
    } else {
        $(element).innerHTML = openLabel;
    }
    $(target).toggle();
    return false;
};
Element.addMethods();