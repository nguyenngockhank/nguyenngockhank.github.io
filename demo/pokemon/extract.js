
// From here: https://www.eurogamer.net/articles/2018-12-21-pokemon-go-type-chart-effectiveness-weaknesses

function getPokeTypesWithInfo() {
    var $typeRows = $('.table-wrapper tbody tr'); // 

    var result = {};
    $typeRows.each((i, el) => {
        const typeInfo = getPokeTypeWithInfo(el)
        result[typeInfo.name] = typeInfo;
    })

    return result;
}

function getPokeTypeWithInfo(el) {
    var infoTags = $(el).find('td');

    var name = $(infoTags[0]).text().trim();
    var strongAgainst = extractTypeListFromString($(infoTags[1]).text());
    var weakAgainst = extractTypeListFromString($(infoTags[2]).text());
    var resistantTo = extractTypeListFromString($(infoTags[3]).text());
    var vulnerableTo = extractTypeListFromString($(infoTags[4]).text());

    return {
        name,
        strongAgainst,
        weakAgainst,
        resistantTo,
        vulnerableTo
    }
}

function extractTypeListFromString(str) {
    return str.split(',').map(type => type.trim()).filter(type => !!type);
}