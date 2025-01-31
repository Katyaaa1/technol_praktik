const posts = [
    { title: "UX review presentations", category: "Design", author: "Olivia Rhye", date: "2025-01-20", image: "foto/ux.jpg" },
    { title: "Migrating to Linear 101", category: "Product", author: "Phoenix Baker", date: "2025-01-19", image: "foto/linear.jpg" },
    { title: "Building your API stack", category: "Software Engineering", author: "Lana Steiner", date: "2025-01-18", image: "foto/api.jpg" },
    { title: "PM mental models", category: "Product", author: "Demi Wilkinson", date: "2025-01-16", image: "foto/pm.jpg" },
    { title: "What is wireframing?", category: "Design", author: "Candice Wu", date: "2025-01-15", image: "foto/wireframing.jpg" },
    { title: "How collaboration makes us better designers", category: "Design", author: "Natali Craig", date: "2025-01-14", image: "foto/collaboration.jpg" },
    { title: "Our top 10 Javascript frameworks", category: "Product", author: "Drew Cano", date: "2025-01-13", image: "foto/js.jpg" },
    { title: "Podcast: Creating a better CX Community", category: "Customer Success", author: "Orlando Diggs", date: "2025-01-12", image: "foto/cx.jpg" },
];

let filteredPosts = [...posts];
let currentPage = 1;
const postsPerPage = 8;

function displayPosts() {
    const container = document.getElementById("postsContainer");
    if (!container) return; // Запобігаємо помилкам, якщо контейнер відсутній

    container.innerHTML = "";
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;

    filteredPosts.slice(start, end).forEach(post => {
        container.innerHTML += `
            <div class="post" onclick="openPost('${post.title}')">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p><strong>${post.category}</strong> by ${post.author}</p>
                <p>${new Date(post.date).toDateString()}</p>
            </div>
        `;
    });

    createPagination();
}

function searchPosts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm));
    currentPage = 1;
    displayPosts();
}

function filterPosts(category) {
    filteredPosts = category === "all" ? [...posts] : posts.filter(post => post.category === category);
    currentPage = 1;
    displayPosts();
}

function sortPosts() {
    const sortType = document.getElementById("sortSelect").value;
    filteredPosts.sort(sortType === "recent"
        ? (a, b) => new Date(b.date) - new Date(a.date)
        : (a, b) => a.title.localeCompare(b.title)
    );
    displayPosts();
}

function nextPage() {
    if (currentPage * postsPerPage < filteredPosts.length) {
        currentPage++;
        displayPosts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPosts();
    }
}

function createPagination() {
    const paginationContainer = document.querySelector(".pagination");
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    if (window.location.pathname.includes("index1.html")) {
        const backButton = document.createElement("button");
        backButton.innerText = "← Back";
        backButton.onclick = () => window.location.href = "index.html";
        paginationContainer.appendChild(backButton);
    }

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.className = (i === currentPage) ? "active" : "";
        pageButton.onclick = () => {
            currentPage = i;
            displayPosts();
        };
        paginationContainer.appendChild(pageButton);
    }

    if (currentPage > 1) {
        const prevButton = document.createElement("button");
        prevButton.innerText = "← Previous";
        prevButton.onclick = prevPage;
        paginationContainer.insertBefore(prevButton, paginationContainer.firstChild);
    }

    if (currentPage < totalPages) {
        const nextButton = document.createElement("button");
        nextButton.innerText = "Next →";
        nextButton.onclick = nextPage;
        paginationContainer.appendChild(nextButton);
    }
}

function openPost(title) {
    window.location.href = `post.html?title=${encodeURIComponent(title)}`;
}

function displayPostDetails() {
    const postDetailsContainer = document.getElementById("postDetails");
    const relatedPostsContainer = document.getElementById("relatedPosts");

    if (!postDetailsContainer || !relatedPostsContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postTitle = urlParams.get("title");
    const post = posts.find(p => p.title === postTitle);

    if (post) {
        postDetailsContainer.innerHTML = `
            <div class="post-header">
                <h1>${post.title}</h1>
                <p><strong>${post.category}</strong> by ${post.author}</p>
                <p>${new Date(post.date).toDateString()}</p>
            </div>
            <img class="post-image" src="${post.image}" alt="${post.title}">
            <p class="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.</p>
            <button onclick="window.history.back()" class="back-button">← Back</button>
        `;

        relatedPostsContainer.innerHTML = "<h2>Можливо, вас зацікавить:</h2>";
        posts
            .filter(p => p.title !== postTitle && p.category === post.category)
            .forEach(p => {
                relatedPostsContainer.innerHTML += `
                    <div class="related-post" onclick="openPost('${p.title}')">
                        <img src="${p.image}" alt="${p.title}">
                        <h3>${p.title}</h3>
                        <p><strong>${p.category}</strong> by ${p.author}</p>
                    </div>
                `;
            });
    } else {
        postDetailsContainer.innerHTML = "<p>Post not found.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("postsContainer")) {
        displayPosts();
    }

    if (document.getElementById("postDetails")) {
        displayPostDetails();
    }
});
