class Testimonial {
    #quote = ""
    #image = ""

    constructor(quote, image) {
        this.#quote = quote
        this.#image = image
    }

    get quote() {
        return this.#quote
    }
    
    get image() {
        return this.#image
    }


    get forHTML() {
        return `
            <div class="card-project">
            <div class="content">
            <img src=${this.image} alt="image">
                <div class="text">
                    <p>${this.quote}</p>
                </div>
                <span><p>${this.author}</p></span>
            </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    #author = ""
    
    constructor(author, quote, image) {
        super(quote, image)
        this.#author = author
    }

    get author(){
        return this.#author
    }
}

class CompanyTestimonial extends Testimonial {
    #company

    constructor(company, quote, image) {
        super(quote, image)
        this.#company = company
    }

    get author() {
       return this.#company + " Company" // PT.MCS Company 
    }
}

const first_testimonial = new AuthorTestimonial("Nobita", "Jika aku lemah, tidak mungkin aku bisa bertahan sampai saat ini", "https://static.wikia.nocookie.net/doraemon/images/e/ee/Nobita_Nobi_2005.jpg/revision/latest?cb=20190616144959&path-prefix=id")

const second_testimonial = new CompanyTestimonial("Doraemon", "Jangan menengok ke masa lalu terus, lebih baik belajar dari sekarang untuk masa depanmu", "https://magdalene.co/wp-content/uploads/2023/02/Doraemon3-copy-770x470.jpg")

const third_testimonial = new AuthorTestimonial("Shizuka", "Jangan khawatir, aku selalu ada untukmu", "https://static.wikia.nocookie.net/doraemon/images/0/04/Shizuka_Minamoto_2005.jpg/revision/latest?cb=20200228143836&path-prefix=id")

const fourth_testimonial = new CompanyTestimonial("Giant", "Mana bisa aku diam saja jika ada teman yang butuh pertolongan", "https://cdn.idntimes.com/content-images/post/20181213/giant-doraemon-2f3568cbb02fb1623af42092eda858a8_600x400.jpg")

let data = [first_testimonial, second_testimonial, third_testimonial, fourth_testimonial]
let testimonialForHtml = ""

for(let i = 0; i < data.length; i++) {
    testimonialForHtml += data[i].forHTML
}

document.getElementById("testimonials").innerHTML = testimonialForHtml