// init variables

const cards = {
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
    // gifts: `
    //     <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center"">
    //         <h2 class=" font-bold p-2">Make a gift</h2>
    //         <div class="p-2">Asso 1</div>
    //         <div class="p-2">Asso 2</div>
    //         <div class="p-2">Asso 3</div>
    //         <div class="p-2">Asso 4</div>
    //         <div class="p-2">Asso 5</div>
    //     </div>
    // `,
    profile: `
        <div class="card bg-white my-2 mx-6 p-2 rounded-lg flex flex-col justify-center items-center"">
            <h2 class=" font-bold p-2">My Profile</h2>
            <form action="" class="flex flex-col gap-4">
                <div class="first-name flex flex-col">
                    <label for="first-name">First name</label>
                    <input type="text">
                </div>
                <div class="last-name flex flex-col">
                    <label for="last-name">Last name</label>
                    <input type="text">
                </div>
                <div class="city flex flex-col">
                    <label for="city">City</label>
                    <input type="text">
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
    showCard('dashboard');
});