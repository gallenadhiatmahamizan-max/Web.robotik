const news = [

    {
        title: "Robot Baru Membantu Manusia",
        category: "Teknologi",
        date: "12 September 2026",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        content:
            "Perkembangan robotika terus mengalami kemajuan. " +
            "Robot modern mulai digunakan untuk membantu manusia " +
            "dalam berbagai bidang."
    },

    {
        title: "Penemuan Baru di Dunia Sains",
        category: "Sains",
        date: "11 September 2026",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        content:
            "Para ilmuwan terus melakukan penelitian untuk memahami " +
            "berbagai fenomena yang terjadi di alam semesta."
    },

    {
        title: "Teknologi Mengubah Cara Belajar",
        category: "Pendidikan",
        date: "10 September 2026",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        content:
            "Teknologi digital memberikan berbagai cara baru bagi " +
            "pelajar untuk mendapatkan informasi dan belajar."
    },

    {
        title: "AI Semakin Banyak Digunakan",
        category: "Teknologi",
        date: "9 September 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        content:
            "Kecerdasan buatan semakin banyak digunakan dalam " +
            "berbagai bidang kehidupan manusia."
    }

];


const container =
    document.getElementById("newsContainer");

const searchInput =
    document.getElementById("searchInput");

const categories =
    document.querySelectorAll(".category");


/* MENAMPILKAN BERITA */

function displayNews(data) {

    container.innerHTML = "";

    data.forEach((item, index) => {

        container.innerHTML += `

            <article class="news-card">

                <img src="${item.image}">

                <div class="news-info">

                    <small>${item.category}</small>

                    <h3>${item.title}</h3>

                    <p>${item.date}</p>

                    <button onclick="openNews(${index})">
                        Baca Selengkapnya
                    </button>

                </div>

            </article>

        `;

    });

}


displayNews(news);


/* SEARCH */

searchInput.addEventListener("input", function () {

    const keyword =
        searchInput.value.toLowerCase();

    const result = news.filter(item =>
        item.title.toLowerCase().includes(keyword)
    );

    displayNews(result);

});


/* FILTER KATEGORI */

categories.forEach(button => {

    button.addEventListener("click", function () {

        categories.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");

        const category =
            this.dataset.category;

        if (category === "Semua") {

            displayNews(news);

        } else {

            const result = news.filter(item =>
                item.category === category
            );

            displayNews(result);

        }

    });

});


/* MODAL */

const modal =
    document.getElementById("newsModal");

const closeModal =
    document.getElementById("closeModal");


function openNews(index) {

    const item = news[index];

    document.getElementById("modalCategory")
        .textContent = item.category;

    document.getElementById("modalTitle")
        .textContent = item.title;

    document.getElementById("modalDate")
        .textContent = item.date;

    document.getElementById("modalContent")
        .textContent = item.content;

    modal.style.display = "flex";

}


closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});


/* DARK MODE */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});