function findMatching(driverNameArr, name) {
    return driverNameArr.filter( e => e.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(fuzzyDriverName, string) {
    return fuzzyDriverName.filter(function(el) {
        return el.startsWith(string);
    })
}

function matchName(driverObjects, string) {
    return driverObjects.filter(function(el) {
        return el.name === string;
    })
}