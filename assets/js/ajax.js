const testi = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.npoint.io/f5532e8c6d21f9a0a3ec", true)

    xhr.onload = function () {
        if(xhr.status == 200){
            resolve(JSON.parse(xhr.response))
        } else{
            reject("Error loading data")
        }
    }

    xhr.onerror = function(){
        reject("Network error")
    }

    xhr.send()
})

async function showAll() {
    const response = await testi;
    console.log(response);

    let testHtml = '';

    response.forEach((element) => {
        testHtml += `            
        <div class="card-project">
            <div class="content">
                <img src=${element.image} alt="image">
                <div class="text">
                    <p>'${element.comment}'</p>
                </div>
                <span><p>~ ${element.name}</p></span>
                <span><p><i class="fa fa-star"></i> ${element.rating}</p></span>
            </div>
        </div>`
    });

    document.getElementById('testi').innerHTML = testHtml;
}
showAll()

async function dataFiltered(rating) {
    const response = await testi;
    let testHtml = ''
    
    const filterData = response.filter(function(data){
        return data.rating === rating});
        console.log(filterData); 

    if (filterData.length === 0) {
        testHtml = `<div class="card-project">
            <div class="content">
                <img src="https://static.vecteezy.com/system/resources/previews/004/968/590/original/no-result-data-not-found-concept-illustration-flat-design-eps10-simple-and-modern-graphic-element-for-landing-page-empty-state-ui-infographic-etc-vector.jpg" alt="image">
                <div class="text">
                <h3>Data not Found!</h3>
                </div>
                <span><p></p></span>
                <span><p></p></span>
            </div>
        </div>`
    } else {
        filterData.forEach((data) => {
            testHtml += `
            <div class="card-project">
            <div class="content">
                <img src=${data.image} alt="image">
                <div class="text">
                    <p>'${data.comment}'</p>
                </div>
                <span><p>~ ${data.name}</p></span>
                <span><p><i class="fa fa-star"></i> ${data.rating}</p></span>
            </div>
        </div>`
        });
    }

    document.getElementById('testi').innerHTML = testHtml;
}