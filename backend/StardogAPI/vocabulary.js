

const rdfVoc = ['comment', 'label']

const linksVoc = ['cantuse', 'max']

const operatorDic = { "cantuse": { operator: 'greaterThanInclusive', value: 0 } }
//  [ { p: 'cantuse', s: 'Urban-warfare', o: 'APC' } ]

// { p: 'type', s: 'M-113', o: 'APC' },
// { p: 'type', s: 'BMP-1', o: 'APC' },


/*
                    fact: condition.fact,
                    operator: condition.fact,
                    value: condition.value
*/
module.exports = { rdfVoc, linksVoc }