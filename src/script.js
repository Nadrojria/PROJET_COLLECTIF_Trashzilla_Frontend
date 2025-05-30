// init variables

const navbar = document.querySelector("#navbar");

const cards = {
    signIn: `
        <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center">
            <h2 class=" font-bold p-2">Sign In</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="first-name flex flex-col">
                    <label for="first-name">Email *</label>
                    <input type="email" pattern=".+@example\.com" placeholder="example@domain.com" required>
                </div>
                <div class="last-name flex flex-col">
                    <label for="last-name">Password *</label>
                    <input type="text" placeholder="Your password" required>
                </div>
                <button class="log-in-btn flex justify-center items-center bg-my-green mx-8 p-2 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in" aria-hidden="true">
                    <path d="m10 17 5-5-5-5"></path>
                    <path d="M15 12H3"></path>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    </svg>
                    <span class="text-sm">Log In</span>
                </button>
            </form>
        </div>
    `,
    dashboard: `
        <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center"">
            <h2 class=" font-bold p-2">Hello Lolo le zozo !</h2>
            <div class="p-2">Déchet 1</div>
            <div class="p-2">Déchet 2</div>
            <div class="p-2">Déchet 3</div>
            <div class="p-2">Déchet 4</div>
            <div class="p-2">Déchet 5</div>
        </div>
    `,
    collects: `
        <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center"">
            <h2 class=" font-bold p-2">Save a collect</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="date flex flex-col">
                    <label for="date">Date *</label>
                    <input type="date">
                </div>
                <div class="location flex flex-col">
                    <label for="location">Location</label>
                    <select name="" id="">
                    <option value="">Choose a city</option>
                    <option value="1">Paris</option>
                    <option value="2">Marseille</option>
                    <option value="3">Lyon</option>
                    <option value="4">Toulouse</option>
                    <option value="5">Nice</option>
                    <option value="6">Nantes</option>
                    <option value="7">Strasbourg</option>
                    <option value="8">Montpellier</option>
                    <option value="9">Bordeaux</option>
                    <option value="10">Lille</option>
                    </select>
                </div>
                <div class="waste-type flex flex-col">
                    <label for="waste-type">Waste Type *</label>
                    <input type="number">
                </div>
                <button class="submit-btn flex justify-center items-center bg-my-green mx-8 p-2 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-save-icon lucide-save">
                    <path
                        d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                    <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                    <span class="text-sm">Save</span>
                </button>
            </form>
        </div>
    `,
    profile: `
        <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center"">
            <h2 class=" font-bold p-2">My Profile</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="first-name flex flex-col">
                    <label for="first-name">First name</label>
                    <input type="text" placeholder="New first name" >
                </div>
                <div class="last-name flex flex-col">
                    <label for="last-name">Last name</label>
                    <input type="text" placeholder="New last name" >
                </div>
                <div class="city flex flex-col">
                    <label for="city">City</label>
                    <input type="text" placeholder="New city" >
                </div>
                <button class="update-btn flex justify-center items-center bg-my-green mx-8 p-2 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-save-icon lucide-save">
                    <path
                        d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                    <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                    </svg>
                    <span class="text-sm">Update</span>
                </button>
                <button class="log-out-btn flex justify-center items-center bg-my-black mx-8 p-2 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                    <span class="text-sm">Log Out</span>
                </button>
            </form>
        </div>
    `,
    admin:`
        <div class="card bg-white my-4 mx-6 p-4 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center">Manage Volunteers</h2>
            <button class="add-btn flex items-center justify-center gap-2 bg-my-green hover:bg-green-600 transition text-white px-4 py-2 rounded-lg self-center">
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
                    <button class="action-btn edit-btn flex items-center justify-center bg-sky-200 text-sky-800 p-2 rounded-md hover:bg-sky-300 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-pen" aria-hidden="true">
                        <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                        </path>
                    </svg>
                    </button>
                    <button class="action-btn delete-btn flex items-center justify-center bg-red-200 text-red-700 p-2 rounded-md hover:bg-red-300 transition">
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

function showCard(cardName) {
    const content = document.querySelector('#content');
    const navBtns = document.querySelectorAll('.nav-btn');
    content.innerHTML = cards[cardName] || cards.dashboard;
    navBtns.forEach(btn => {
        if (btn.dataset.card === cardName) {
            btn.classList.add('text-my-green');
            btn.classList.remove('text-my-black');
        } else {
            btn.classList.add('text-my-black');
            btn.classList.remove('text-my-green');
        }
    });
}
// execute code

document.addEventListener('DOMContentLoaded', function () {
    navbar.style = "display: none;";
    showCard('signIn');
});