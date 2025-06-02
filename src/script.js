// init variables

let currentUser = "";
let currentRole = "";
const navbar = document.querySelector("#navbar");

const cards = {
    signIn: `
        <div class="card bg-white m-6 p-4 pb-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">Sign In</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="email flex flex-col">
                    <label for="email" class="text-sm font-medium">Email *</label>
                    <input type="email" id="email" placeholder="example@domain.com" required
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <div class="password flex flex-col">
                    <label for="password" class="text-sm font-medium">Password *</label>
                    <input type="password" id="password" placeholder="Your password" required
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <button type="submit"
                    class="log-in-btn flex items-center justify-center gap-2 bg-my-green hover:bg-green-600 transition text-white px-4 py-2 rounded-lg self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-log-in" aria-hidden="true">
                        <path d="m10 17 5-5-5-5"></path>
                        <path d="M15 12H3"></path>
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    </svg>
                    <span class="text-sm font-medium">Log In</span>
                </button>
            </form>
        </div>
    `,
    dashboard: () => `
        <div class="card bg-white m-6 p-4 pb-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">Hello ${currentUser}!</h2>
            <div class="waste-list flex flex-col gap-3">
                <div class="waste-item bg-slate-100 px-4 py-3 rounded-lg shadow-sm">Déchet 1</div>
                <div class="waste-item bg-slate-100 px-4 py-3 rounded-lg shadow-sm">Déchet 2</div>
                <div class="waste-item bg-slate-100 px-4 py-3 rounded-lg shadow-sm">Déchet 3</div>
                <div class="waste-item bg-slate-100 px-4 py-3 rounded-lg shadow-sm">Déchet 4</div>
                <div class="waste-item bg-slate-100 px-4 py-3 rounded-lg shadow-sm">Déchet 5</div>
            </div>
        </div>
    `,
    collects: `
        <div class="card bg-white m-6 p-4 pb-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">Save a collect</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="date flex flex-col">
                    <label for="date" class="text-sm font-medium">Date *</label>
                    <input type="date" id="date" required
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <div class="location flex flex-col">
                    <label for="location" class="text-sm font-medium">Location</label>
                    <select id="location"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                        <option value="">Choose a city</option>
                        <option value="1">Paris</option>
                        <option value="2">Marseille</option>
                        <option value="3">Lyon</option>
                        <option value="4">Toulouse</option>
                        <option value="5">Nice</option>
                        <option value="6">Nantes</option>
                        <option value="7">Strasbourg</option>
                    </select>
                </div>
                <div class="waste-type flex flex-col">
                    <label for="waste-type" class="text-sm font-medium">Waste Type *</label>
                    <input type="number" id="waste-type" required
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <button type="submit"
                    class="submit-btn flex items-center justify-center gap-2 bg-my-green hover:bg-green-600 transition text-white px-4 py-2 rounded-lg self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-save">
                        <path
                            d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                        <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                    <span class="text-sm font-medium">Save</span>
                </button>
            </form>
        </div>
    `,
    profile: `
        <div class="card bg-white m-6 p-4 pb-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">My Profile</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="first-name flex flex-col">
                    <label for="first-name" class="text-sm font-medium">First name</label>
                    <input type="text" id="first-name" placeholder="New first name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <div class="last-name flex flex-col">
                    <label for="last-name" class="text-sm font-medium">Last name</label>
                    <input type="text" id="last-name" placeholder="New last name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <div class="city flex flex-col">
                    <label for="city" class="text-sm font-medium">City</label>
                    <input type="text" id="city" placeholder="New city"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                </div>
                <button type="submit"
                    class="update-btn flex items-center justify-center gap-2 bg-my-green hover:bg-green-600 transition text-white px-4 py-2 rounded-lg self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-save">
                        <path
                            d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                        <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                    <span class="text-sm font-medium">Update</span>
                </button>
                <button type="submit"
                    id="log-out-btn" 
                    class="log-out-btn flex items-center justify-center gap-2 bg-my-black hover:bg-my-black transition text-white px-4 py-2 rounded-lg self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-log-out">
                        <path d="m16 17 5-5-5-5" />
                        <path d="M21 12H9" />
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    </svg>
                    <span class="text-sm font-medium">Log Out</span>
                </button>
            </form>
        </div>
    `,
    admin: `
        <div class="card bg-white m-6 p-4 pb-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">Manage Volunteers</h2>
            <button
                class="add-btn flex items-center justify-center gap-2 bg-my-green hover:bg-green-600 transition text-white px-4 py-2 rounded-lg self-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-user-plus" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                <span class="text-sm font-medium">Add Volunteers</span>
            </button>
            <div class="volunteers-list flex flex-col gap-3">
                <div class="volunteer-item flex justify-between items-center bg-slate-100 px-4 py-3 rounded-lg shadow-sm">
                    <div class="volunteer-info flex flex-col">
                        <h3 class="font-semibold">Monica Geller</h3>
                        <p class="text-sm text-gray-500 italic">Paris</p>
                    </div>
                    <div class="volunteer-actions flex gap-3">
                        <button
                            class="action-btn edit-btn flex items-center justify-center bg-sky-200 text-sky-800 p-2 rounded-md hover:bg-sky-300 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-pen" aria-hidden="true">
                                <path
                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                </path>
                            </svg>
                        </button>
                        <button
                            class="action-btn delete-btn flex items-center justify-center bg-red-200 text-red-700 p-2 rounded-md hover:bg-red-300 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-trash-2" aria-hidden="true">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

// init functions


function showCard(name) {
    const content = document.querySelector('#content');
    const card = cards[name];

    content.innerHTML = typeof card === 'function' ? card() : card;
    animateNavbar(name);
    if (name === "signIn") {
        const form = document.querySelector("form");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            const logInResponse = await fetch('http://localhost:8085/api/login', {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password }),
            });
            const logInData = await logInResponse.json();

            if (logInData.success) {
                currentUser = logInData.firstName;
                currentRole = logInData.role;
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                localStorage.setItem("currentRole", JSON.stringify(currentRole));

                showCard('dashboard');

                navbar.style.display = "block";

                const adminButton = document.querySelector("#admin-btn");
                if (currentRole === "volunteer") {
                    adminButton.style.display = "none";
                }
            }
            else {
                alert("Error! Check Info.");
            }
        })
    }

    if (name === "profile") {
        const logOutBtn = document.querySelector("#log-out-btn");
        logOutBtn.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentRole");
            navbar.style.display = "none";
            showCard("signIn");
        })
    }
}

function animateNavbar(name) {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        if (btn.dataset.card === name) {
            btn.classList.add('text-my-green');
            btn.classList.remove('text-my-black');
        }
        else {
            btn.classList.add('text-my-black');
            btn.classList.remove('text-my-green');
        }
    });
}

function updateLocalStorage() {
    const currentUserString = localStorage.getItem("currentUser");
    const roleString = localStorage.getItem("currentRole");

    if (currentUserString) {
        currentUser = JSON.parse(currentUserString);
        currentRole = JSON.parse(roleString);
    }
}


// execute code

document.addEventListener('DOMContentLoaded', function () {

    updateLocalStorage();

    if (currentUser) {
        showCard("dashboard");

        const adminButton = document.querySelector("#admin-btn");
        if (currentRole == "volunteer") {
            adminButton.style.display = "none";
        }
    }
    else {
        navbar.style.display = "none";
        showCard('signIn');
    }

});

