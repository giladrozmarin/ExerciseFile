const { rdfVoc, linksVoc } = require('./vocabulary')
const { exequery } = require('./stardog');



const links = []
const types = []
let filteredArr


function getLinks() {
    exequery(
        ({ body }) => {
            let count = 0;
            let filtered = body.results.bindings.filter(trio => {
                let exp = !rdfVoc.filter((word) => trio.p.value.includes(word)).length > 0;

                trio.p.value = beautifyValue(trio.p.value, '/');
                trio.p.value = beautifyValue(trio.p.value, '#');
                trio.s.value = beautifyValue(trio.s.value, '/');
                trio.o.value = beautifyValue(trio.o.value, '/');
                trio.o.value = beautifyValue(trio.o.value, ':');

                trio.p = trio.p.value
                trio.o = trio.o.value
                trio.s = trio.s.value

                if (exp) count++;
                return exp;
            })
            filtered.map((spo) => {
                linksVoc.find((word) => word === spo.p) ? links.push(spo) :
                    spo.p == 'type' ? types.push(spo) : null
            })
            console.log(filtered);
            console.log(count, types, links);
        }
    )
}
function beautifyValue(str, char) {
    return str.substring(str.lastIndexOf(char) + 1);
}






getLinks()



