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
        <main>
            <div class="card-project">
            <div class="content">
            <img src=${this.image} alt="image">
                <div class="text">
                    <p>${this.quote}</p>
                </div>
                <span><p>${this.author}</p></span>
            </div>
        </main>`
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

const first_testimonial = new AuthorTestimonial("Nico Ari", "Bingung mas", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

const second_testimonial = new CompanyTestimonial("Kevin", "Minum enak mas", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

const third_testimonial = new AuthorTestimonial("Riska", "Ngantuk mas", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

const fourth_testimonial = new CompanyTestimonial("Taufiq", "Ngantuk mas", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

let data = [first_testimonial, second_testimonial, third_testimonial, fourth_testimonial]
let testimonialForHtml = ""

for(let i = 0; i < data.length; i++) {
    testimonialForHtml += data[i].forHTML
}

document.getElementById("testimonials").innerHTML = testimonialForHtml