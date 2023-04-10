const dataDummy = [
    {
    name : "Nobita",
    rating : 2,
    comment : "Jika aku lemah, tidak mungkin aku bisa bertahan sampai saat ini",
    image : "https://static.wikia.nocookie.net/doraemon/images/e/ee/Nobita_Nobi_2005.jpg/revision/latest?cb=20190616144959&path-prefix=id"
    },
    {
    name : "Doraemon",
    rating : 5,
    comment : "Jangan menengok ke masa lalu terus, lebih baik belajar dari sekarang untuk masa depanmu",
    image : "https://magdalene.co/wp-content/uploads/2023/02/Doraemon3-copy-770x470.jpg"
    },
    {
    name : "Giant",
    rating : 3,
    comment : "Mana bisa aku diam saja jika ada teman yang butuh pertolongan",
    image : "https://cdn.idntimes.com/content-images/post/20181213/giant-doraemon-2f3568cbb02fb1623af42092eda858a8_600x400.jpg"
    },
    {
    name : "Shizuka",
    rating : 4,
    comment : "Jangan khawatir, aku selalu ada untukmu",
    image : "https://static.wikia.nocookie.net/doraemon/images/0/04/Shizuka_Minamoto_2005.jpg/revision/latest?cb=20200228143836&path-prefix=id"
    },
    {
    name : "Suneo",
    rating : 3,
    comment : "Di dunia ini yang penting adalah uang",
    image : "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/hops/2020/07/Suneo_2005_anime_ID.png"
    }
]

function showAll() {
    let testHtml = '';

    dataDummy.forEach((element) => {
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

function dataFiltered(rating) {
    let testHtml = ''
    
    const filterData = dataDummy.filter(function(data){
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