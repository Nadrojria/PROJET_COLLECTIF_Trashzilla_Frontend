// init variables

let currentUser = "";
let currentRole = "";
let globalUserId;
let globalUserFirstName;
let globalUserLastName;
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
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green" required>
                        <option value="">-- Choose a city --</option>
                        <option value="Paris">Paris</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Toulouse">Toulouse</option>
                        <option value="Nice">Nice</option>
                        <option value="Nantes">Nantes</option>
                        <option value="Strasbourg">Strasbourg</option>
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
                <hr><hr>
                <button type="button"
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
    admin: async () => {
        const usersList = await getUsersList();
        return `
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
                ${displayUsers(usersList)}
            </div>
        </div>
    `}
}


// init functions

async function showCard(name) {
    const content = document.querySelector('#content');
    const card = cards[name];

    content.innerHTML = typeof card === 'function'
        ? (card.constructor.name === "AsyncFunction" ? await card() : card())
        : card;

    animateNavbar(name);
    handleSignInCard(name);
    handleProfileCard(name);
    handleAdminCard(name);
    showAdminBtn();
}

function handleSignInCard(name) {
    if (name !== "signIn") {
        return;
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
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
            }
            else {
                alert("Verify login and password.");
            }
        }
        catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login. Please try again.");
        }
    })
}

function handleProfileCard(name) {
    if (name !== "profile") {
        return;
    }
    const logOutBtn = document.querySelector("#log-out-btn");
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentRole");
        navbar.style.display = "none";
        showCard("signIn");
    })
}

function handleAdminCard(name) {
    if (name !== "admin") {
        return;
    }

    createModalAdd();
    createModalModify();

    initAddButton();
    initDeleteButtons();
    initEditButtons();
}

function createModalAdd() {
    if (document.querySelector("#add-modal")) {
        return;
    }

    const content = document.querySelector("#content");
    const modalHTML = `
        <dialog id="add-modal" class="rounded-xl backdrop:backdrop-blur-sm backdrop:bg-black/60 p-0 border-none">
            <div class="card bg-white m-6 p-4 pb-4 shadow-lg flex flex-col gap-4 w-[90vw] max-w-xl">
                <h2 class="font-bold text-lg text-left">Add User</h2>
                <form action="" id="add-modal-form" class="flex flex-col gap-4">
                    <div class="flex flex-col">
                        <label for="first-name" class="text-sm font-medium">First name</label>
                        <input type="text" id="add-modal-first-name" placeholder="New first name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="last-name" class="text-sm font-medium">Last name</label>
                        <input type="text" id="add-modal-last-name" placeholder="New last name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-sm font-medium">Email</label>
                        <input type="text" id="add-modal-email" placeholder="New email"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="password" class="text-sm font-medium">Password</label>
                        <input type="text" id="add-modal-password" placeholder="New password"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="city" class="text-sm font-medium">City</label>
                        <select id="add-modal-city"
                            class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green"
                            required>
                            <option value="">-- Choose a city --</option>
                            <option value="Paris">Paris</option>
                            <option value="Marseille">Marseille</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Toulouse">Toulouse</option>
                            <option value="Nice">Nice</option>
                            <option value="Nantes">Nantes</option>
                            <option value="Strasbourg">Strasbourg</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label for="role" class="text-sm font-medium">Role</label>
                        <select id="add-modal-role"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green"
                        required>
                            <option value="">-- Choose a role --</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="flex justify-evenly items-center">
                        <button type="submit" id="add-modal-add-btn"
                        class="flex items-center justify-center gap-2 bg-sky-200 text-sky-800 hover:bg-sky-300 transition px-4 py-2 rounded-lg self-center">
                        <span class="text-sm font-medium">Add</span>
                        </button>
                        <button type="button" id="add-modal-cancel-btn"
                        class="flex items-center justify-center gap-2 bg-my-black hover:bg-my-black transition text-white px-4 py-2 rounded-lg self-center">
                        <span class="text-sm font-medium">Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    `;

    content.insertAdjacentHTML('beforeend', modalHTML);
}

function createModalModify() {
    if (document.querySelector("#modify-modal")) {
        return;
    }

    const content = document.querySelector("#content");
    const modalHTML = `
        <dialog id="modify-modal" class="rounded-xl backdrop:backdrop-blur-sm backdrop:bg-black/60 p-0 border-none">
            <div class="card bg-white m-6 p-4 pb-4 shadow-lg flex flex-col gap-4 w-[90vw] max-w-xl">
                <h2 class="font-bold text-lg text-left">Modify User</h2>
                <form action="" id="modify-modal-form" class="flex flex-col gap-4">
                    <div class="flex flex-col">
                        <label for="first-name" class="text-sm font-medium">First name</label>
                        <input type="text" id="modify-modal-first-name" placeholder="New first name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="last-name" class="text-sm font-medium">Last name</label>
                        <input type="text" id="modify-modal-last-name" placeholder="New last name"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green">
                    </div>
                    <div class="flex flex-col">
                        <label for="city" class="text-sm font-medium">City</label>
                        <select id="modify-modal-city"
                            class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green"
                            required>
                            <option value="">-- Choose a city --</option>
                            <option value="Paris">Paris</option>
                            <option value="Marseille">Marseille</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Toulouse">Toulouse</option>
                            <option value="Nice">Nice</option>
                            <option value="Nantes">Nantes</option>
                            <option value="Strasbourg">Strasbourg</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label for="role" class="text-sm font-medium">Role</label>
                        <select id="modify-modal-role"
                        class="mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-my-green"
                        required>
                            <option value="">-- Choose a role --</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="flex justify-evenly items-center">
                        <button type="submit" id="modify-modal-modify-btn"
                        class="flex items-center justify-center gap-2 bg-sky-200 text-sky-800 hover:bg-sky-300 transition px-4 py-2 rounded-lg self-center">
                        <span class="text-sm font-medium">Modify</span>
                        </button>
                        <button type="button" id="modify-modal-cancel-btn"
                        class="flex items-center justify-center gap-2 bg-my-black hover:bg-my-black transition text-white px-4 py-2 rounded-lg self-center">
                        <span class="text-sm font-medium">Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    `;

    content.insertAdjacentHTML('beforeend', modalHTML);
}

function initAddButton() {
    const addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener("click", () => openModalAdd(addBtn));
}

function openModalAdd(btn) {
    const addModal = document.querySelector("#add-modal");

    addModal.showModal();
    setupModalAddButtons();
}

function closeModalAdd() {
    const addModal = document.querySelector("#add-modal");

    addModal.close();
}

function setupModalAddButtons() {
    const cancelBtn = document.querySelector("#add-modal-cancel-btn");
    const addBtn = document.querySelector("#add-modal-add-btn");

    cancelBtn.addEventListener("click", () => {
        closeModalAdd();
    });

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleAddUser();
    });
}

async function handleAddUser() {
    const form = document.querySelector("#add-modal-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const firstName = document.querySelector("#add-modal-first-name").value;
    const lastName = document.querySelector("#add-modal-last-name").value;
    const email = document.querySelector("#add-modal-email").value;
    const password = document.querySelector("#add-modal-password").value;
    const city = document.querySelector("#add-modal-city").value;
    const role = document.querySelector("#add-modal-role").value;

    try {
        const addResponse = await fetch(`http://localhost:8085/api/admin/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password, city: city, role: role }),
        });
        const addData = await addResponse.json();

        if (addData.success) {
            showCard('admin');
            closeModalAdd();
        } else {
            alert("Failed to add user.");
        }
    } catch (error) {
        console.error("Add error:", error);
        alert("An error occurred during adding user. Please try again.");
    }
}

function initDeleteButtons() {
    const allDeleteBtn = document.querySelectorAll(".delete-btn");
    allDeleteBtn.forEach((btn) => {
        btn.addEventListener("click", () => handleDeleteUser(btn));
    });
}

async function handleDeleteUser(btn) {
    const userId = btn.dataset.userId;

    try {
        const response = await fetch(`http://localhost:8085/api/admin/user/${userId}`, {
            method: 'DELETE',
        });
        const data = await response.json();

        if (data.success) {
            showCard('admin');
        } else {
            alert("Failed to delete user.");
        }
    } catch (error) {
        console.error("Delete error:", error);
        alert("An error occurred during deleting user. Please try again.");
    }
}

function initEditButtons() {
    const allEditBtn = document.querySelectorAll(".edit-btn");
    allEditBtn.forEach((btn) => {
        btn.addEventListener("click", () => openModalModify(btn));
    });
}

function openModalModify(btn) {
    const modifyModal = document.querySelector("#modify-modal");

    modifyModal.showModal();

    globalUserId = btn.dataset.userId;
    globalUserFirstName = btn.dataset.userFirstname;
    globalUserLastName = btn.dataset.userLastname;

    document.querySelector("#modify-modal-first-name").value = globalUserFirstName;
    document.querySelector("#modify-modal-last-name").value = globalUserLastName;

    setupModalModifyButtons();
}

function closeModalModify() {
    const modifyModal = document.querySelector("#modify-modal");

    modifyModal.close();
}

function setupModalModifyButtons() {
    const cancelBtn = document.querySelector("#modify-modal-cancel-btn");
    const modifyBtn = document.querySelector("#modify-modal-modify-btn");

    cancelBtn.addEventListener("click", () => {
        closeModalModify();
    });

    modifyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleModifyUser();
    });
}

async function handleModifyUser() {
    const form = document.querySelector("#modify-modal-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const firstName = document.querySelector("#modify-modal-first-name").value;
    const lastName = document.querySelector("#modify-modal-last-name").value;
    const city = document.querySelector("#modify-modal-city").value;
    const role = document.querySelector("#modify-modal-role").value;

    try {
        const modifyResponse = await fetch(`http://localhost:8085/api/admin/user/${globalUserId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, city, role }),
        });
        const modifyData = await modifyResponse.json();

        if (modifyData.success) {
            showCard('admin');
            closeModalModify();
        } else {
            alert("Failed to modify user.");
        }
    } catch (error) {
        console.error("Modify error:", error);
        alert("An error occurred during modifying user. Please try again.");
    }
}

async function getUsersList() {
    try {
        const usersListResponse = await fetch('http://localhost:8085/api/admin/user');
        const usersListData = await usersListResponse.json();

        return usersListData;
    } catch (error) {
        console.error("Get error:", error);
        alert("An error occurred during getting info from API.");
    }
}

function displayUsers(usersList) {
    let result = "";

    usersList.forEach((user) => {
        result += `
            <div class="volunteer-item flex justify-between items-center bg-slate-100 px-4 py-3 rounded-lg shadow-sm">
                <div class="volunteer-info flex flex-col">
                    <h3 class="font-semibold">${user.firstName} ${user.lastName}</h3>
                    <p class="text-sm text-gray-500 italic">${user.city}</p>
                </div>
                <div class="volunteer-actions flex gap-3">
                    <button
                        class="action-btn edit-btn flex items-center justify-center bg-sky-200 text-sky-800 p-2 rounded-md hover:bg-sky-300 transition" data-user-id="${user.id}" data-user-firstname="${user.firstName}" data-user-lastname="${user.lastName}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-pen" aria-hidden="true">
                            <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                            </path>
                        </svg>
                    </button>
                    <button
                        class="action-btn delete-btn flex items-center justify-center bg-red-200 text-red-700 p-2 rounded-md hover:bg-red-300 transition" data-user-id="${user.id}">
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
        `;
    })
    return result;
}

function showAdminBtn() {
    const adminButton = document.querySelector("#admin-btn");
    if (currentRole === "volunteer") {
        adminButton.style.display = "none";
    }
    else {
        adminButton.style.display = "flex";
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
        showAdminBtn();
    }
    else {
        navbar.style.display = "none";
        showCard('signIn');
    }
});