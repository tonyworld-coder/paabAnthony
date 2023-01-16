<template>
    <div>
        <!-- Staff's Add and Delete Modals -->
        <!-- ------------------------------------------------------------------------------------- -->
       
        <!-- Add Staff Modal Structure -->
        <div id="addStaffModal" class="modal">
            <form>
                <div class="row">
                    <div class="input-field col s12 m6 l6">
                        <input type="text" id="staffLname" placeholder="Last Name" class="validate">
                    </div>

                    <div class="input-field col s12 m6 l6">
                        <input type="text" id="staffFname" placeholder="First Name" class="validate">
                    </div>

                    <div class="input-field col s12 m6 l6">
                        <input type="text" id="staffOtherName" placeholder="Other Name" class="validate">
                    </div>
                    
                    <div class="input-field col s12 m6 l6">
                        <input type="text" id="staffEmail" placeholder="Email" class="validate">
                    </div>
                </div>
                
                <div class="row center-align">
                    <button class="staffCreateBtn btn-flat" @click="addStaff()">
                        Create
                    </button>
                </div>
            </form>
        </div>

        <!-- Delete Staff Modal Structure -->
        <div id="deleteStaffModal" class="modal">
            <div class="row logoutModalImageRow">
                <img src="/media/img/warning.png" alt="Illustrating a warning that you will be logged out" id="errAltImg"
                    class="logoutModalImage" />
            </div>
            <div class="row center-align">
                <p class="staffDeleteModalTitle">
                    You are about to delete this client
                </p>
            </div>
        
            <div class="row center-align">
                <button class="confirmDeleteBtn btn-flat" @click="DeleteStaff()">
                    Yes
                </button>
                <span class="gutter1"></span>
                <button class="modal-close cancelDeleteBtn btn-flat">
                    No
                </button>
            </div>
        </div>
        <!-- ------------------------------------------------------------------------------------- -->

        <!-- Sidenav for small devices -->
        <mobile-nav-component />

        <div class="row" id="dashRowDiv">
            <!-- Sidebar for large and medium devices -->
            <side-nav-component />
        
            <div class="col s12 m10 l10">
                <!-- Staff black rectangular div -->
                <div class="staffBlackDiv">
                    <div class="staffBlackInnerDiv">
                        <div class="row staffBlackInnerDiv">
                            <div class="col s12">
                                <p class="staffTitle">Add Staff</p>
                            </div>
                            <div class="col s11">
                                <p class="staffTxt">
                                    Now is the time to create something exceptional with no limits.
                                </p>
                            </div>
                            <div class="col s1">
                                <!-- Add Staff Modal Trigger -->
                                <a href="#addStaffModal" class="marginRight1 modal-trigger">
                                    <i class="material-icons staffIcon right">add_circle</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Search Staff Section -->
                <div class="staffSearchInputMainDiv">
                    <div>
                        <form>
                            <div class="input-field">
                                <input placeholder="&#128269; Search by domain" id="staffSearchInput" type="text"
                                    class="validate" v-model="search" />
                            </div>
                        </form>
                    </div>
        
                    <div class="staffSearchInputControlDiv">
                        <div>
                            <span class="staffSearchInputTxts">Filter</span>
                            <i class="material-icons staffSearchInputIcons">filter_list</i>
                        </div>
        
                        <div class="staffSearchInputIconsDiv">
                            <span class="staffSearchInputTxts">Sort</span>
                            <i class="material-icons staffSearchInputIcons">sort</i>
                        </div>
                    </div>
                </div>
            
                <div v-if="(addStaff > 0)">
                    <!-- View all Staff Table -->
                    <table class="responsive-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="addStaffTableImgDiv"></div>
                                </td>
                                <td class="addStaffTableTxts">
                                    Dr
                                </td>
                                <td class="addStaffTableTxts">
                                    Akerele
                                </td>
                                <td class="addStaffTableTxts">
                                    Adebayo
                                </td>
                                <td class="addStaffTableTxts">
                                    Jubrll
                                </td>
                                <td class="addStaffTableTxts">
                                    adebayo@gmail.com
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn addStaffEditBtn">
                                        Edit
                                    </a>
                                    <!-- Delete Staff Modal Trigger -->
                                    <a href="#deleteStaffModal" class="marginRight1 btn addStaffDeleteBtn modal-trigger">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="addStaffTableImgDiv"></div>
                                </td>
                                <td class="addStaffTableTxts">
                                    Dr
                                </td>
                                <td class="addStaffTableTxts">
                                    Akerele
                                </td>
                                <td class="addStaffTableTxts">
                                    Adebayo
                                </td>
                                <td class="addStaffTableTxts">
                                    Jubrll
                                </td>
                                <td class="addStaffTableTxts">
                                    adebayo@gmail.com
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn addStaffEditBtn">
                                        Edit
                                    </a>
                                    <!-- Delete Staff Modal Trigger -->
                                    <a href="#deleteStaffModal" class="marginRight1 btn addStaffDeleteBtn modal-trigger">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="addStaffTableImgDiv"></div>
                                </td>
                                <td class="addStaffTableTxts">
                                    Dr
                                </td>
                                <td class="addStaffTableTxts">
                                    Akerele
                                </td>
                                <td class="addStaffTableTxts">
                                    Adebayo
                                </td>
                                <td class="addStaffTableTxts">
                                    Jubrll
                                </td>
                                <td class="addStaffTableTxts">
                                    adebayo@gmail.com
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn addStaffEditBtn">
                                        Edit
                                    </a>
                                    <!-- Delete Staff Modal Trigger -->
                                    <a href="#deleteStaffModal" class="marginRight1 btn addStaffDeleteBtn modal-trigger">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="addStaffTableImgDiv"></div>
                                </td>
                                <td class="addStaffTableTxts">
                                    Dr
                                </td>
                                <td class="addStaffTableTxts">
                                    Akerele
                                </td>
                                <td class="addStaffTableTxts">
                                    Adebayo
                                </td>
                                <td class="addStaffTableTxts">
                                    Jubrll
                                </td>
                                <td class="addStaffTableTxts">
                                    adebayo@gmail.com
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn addStaffEditBtn">
                                        Edit
                                    </a>
                                    <!-- Delete Staff Modal Trigger -->
                                    <a href="#deleteStaffModal" class="marginRight1 btn addStaffDeleteBtn modal-trigger">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="row" v-else>
                    <p class="center-align noStaffTxt">
                        No staff found
                        <!-- Add Staff Modal Trigger -->
                        <a href="#addStaffModal" class="noStaffCreateTempLink modal-trigger">Add staff</a>
                    </p>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
import MobileNavComponent from '../partials/MobileNavComponent.vue';
import SideNavComponent from "../partials/SideNavComponent.vue";
export default {
    components: {
        MobileNavComponent,
        SideNavComponent,
    },
    data() {
        return {
            addStaff: 1,
        };
    },
    mounted() { },
    methods: {},
};
</script>

<!-- <template>
    <div>
        <mobile-nav-component />
        Sidebar for large and medium devices
        <div class="row" id="dashRowDiv">
            <sidenav-component @user="getUser" />

            <div class="col s12 m10 l10">
                <div class="dashRightDiv">
                    <div class="row" id="dashWlcNoteRowDiv">
                        <h1>Admins</h1>
                        <h6>Create admin from here</h6>
                        <form @submit.prevent="createAdmin">
                            <div class="col l6 createWebsiteDomainName">
                                <input
                                    type="text"
                                    placeholder="Firstname"
                                    id="clientCreatePortInput"
                                    v-model="admin.firstname"
                                    required
                                />
                            </div>
                            <div class="col l6 createWebsiteDomainName">
                                <input
                                    type="text"
                                    placeholder="Lastname"
                                    id="clientCreatePortInput"
                                    v-model="admin.lastname"
                                    required
                                />
                            </div>
                            <div class="col l6 createWebsiteDomainName">
                                <input
                                    type="text"
                                    placeholder="Othername"
                                    id="clientCreatePortInput"
                                    v-model="admin.othername"
                                />
                            </div>
                            <div class="col l6 createWebsiteDomainName">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="clientCreatePortInput"
                                    v-model="admin.email"
                                />
                            </div>
                            <div class="col s8 flexed">
                                <button
                                    :disabled="loading"
                                    class="col s6 btn waves waves-effect"
                                    type="submit"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                    Template Stuff
                </div>
                <InnerFooterComponent />
            </div>
        </div>
    </div>
</template>

<script>
    import MobileNavComponent from "../partials/MobileNavComponent.vue";
    import SidenavComponent from "../partials/SideNavComponent.vue";
    import InnerFooterComponent from "../partials/InnerFooterComponent.vue";
    export default {
        components: {
            SidenavComponent,
            MobileNavComponent,
            InnerFooterComponent,
        },
        data() {
            return {
                admin: {
                    firstname: "",
                    lastname: "",
                    othername: "",
                    password: "",
                    email: "",
                    role: "Admin",
                },
                loading: false,
            };
        },
        mounted() {},
        methods: {
            createAdmin() {
                this.loading = !this.loading;
                axios
                    .post("/api/admin", this.admin)
                    .then((res) => {
                        if (res.status == 201) {
                            this.loading = !this.loading;
                            M.toast({
                                html: res.data.message,
                                classes: "successNotifier",
                            });
                            console.log(res);
                        }
                    })
                    .catch((err) => {
                        if (err.response.status == 400) {
                            err.response.data.forEach((el) => {
                                M.toast({
                                    html: el,
                                    classes: "errorNotifier",
                                });
                            });
                            this.loading = false;
                        }
                        console.log(err);
                    });
            },
        },
    };
</script>
<style scoped>
    .flexed {
        display: flex;
        justify-content: center;
    }
    .btn {
        background-color: #7746ff;
    }
    .btn:hover {
        background-color: #aa8ff5;
    }
</style> -->