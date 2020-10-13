const rdfVoc = ['comment', 'label']

const linksVoc = ['cantuse', 'heatload1']

const operatorDic = {
    "cantuse": { operator: 'greaterThan', value: 0, message: 'cant use' },
    "heatload1": { operator: 'greaterThan', value: 29, message: 'is too high in' }
}
//  [ { p: 'cantuse', s: 'Urban-warfare', o: 'APC' } ]

// { p: 'type', s: 'M-113', o: 'APC' },
// { p: 'type', s: 'BMP-1', o: 'APC' },


/*
                    fact: condition.fact,
                    operator: condition.fact,
                    value: condition.value
*/
module.exports = { rdfVoc, linksVoc, operatorDic }