// to be implemented
/*
function testfieldApproveOptions() {
    fetch('/api/certifications/test/fieldApproveOptions?userId=1234567&rank=Colonel&force=Moran')
        .then(res => res.json())
        .then(res => {
            console.log("here")
            res.fieldApproveOptions.forEach(colonel => {
                var element = document.createElement('p')
                var text = document.createTextNode(colonel.rank + " " + colonel.firstName + " " + colonel.lastName)
                element.appendChild(text)
                document.body.appendChild(element)
            });
            document.getElementById("faoRes").innerHTML = res.cerRes
        });
}
*/