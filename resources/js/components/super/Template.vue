<template>
    <div>
        <!-- Template's Inputs help Modals -->
        <!-- ------------------------------------------------------------------------------------- -->

        <!-- Add Title Help Modal Structure -->
        <div id="addTitleModal" class="modal">
            <div class="modal-content">
                <p>
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat helpModalCloseBtn">Go Back</a>
                </p>
                <h5 class="helpModalTitle">What is Domain Name?</h5>
                <p class="helpModalTxts">
                    Nothing sets your personal brand apart faster than a unique address on the web. Your domain name is
                    your website's
                    equivalent of a physical address.
                </p>

                <p class="helpModalTxts">
                    It consists of a website name and a domain name extension. A memorable domain will strengthen your
                    branding and help
                    your audience find your website easily
                </p>
            </div>
        </div>

        <!-- Upload Template Thumbnail Help Modal Structure -->
        <div id="uploadTempThumbModal" class="modal">
            <div class="modal-content">
                <p>
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat helpModalCloseBtn">Go Back</a>
                </p>
                <h5 class="helpModalTitle">What is Domain Name?</h5>
                <p class="helpModalTxts">
                    Nothing sets your personal brand apart faster than a unique address on the web. Your domain name is
                    your website's
                    equivalent of a physical address.
                </p>

                <p class="helpModalTxts">
                    It consists of a website name and a domain name extension. A memorable domain will strengthen your
                    branding and help
                    your audience find your website easily
                </p>
            </div>
        </div>

        <!-- Upload Template Thumbnail Help Modal Structure -->
        <div id="uploadTempStyleModal" class="modal">
            <div class="modal-content">
                <p>
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat helpModalCloseBtn">Go Back</a>
                </p>
                <h5 class="helpModalTitle">What is Domain Name?</h5>
                <p class="helpModalTxts">
                    Nothing sets your personal brand apart faster than a unique address on the web. Your domain name is
                    your website's
                    equivalent of a physical address.
                </p>

                <p class="helpModalTxts">
                    It consists of a website name and a domain name extension. A memorable domain will strengthen your
                    branding and help
                    your audience find your website easily
                </p>
            </div>
        </div>

        <!-- Template Delete Modal Structure -->
        <div id="tempDelModal" class="modal">
            <div class="row logoutModalImageRow">
                <img src="/media/img/warning.png" alt="Illustrating a warning that you will be logged out"
                    id="errAltImg" class="logoutModalImage" />
            </div>
            <div class="row center-align">
                <p class="tempDeleteModalTitle">You sure you want to delete this template?</p>
            </div>

            <div class="row center-align">
                <button @click="logout" class="confirmDeleteBtn btn-flat">
                    Yes
                </button>
                <span class="gutter1"></span>
                <button class="cancelDeleteBtn modal-close btn-flat">
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
                <!-- Templates Div -->
                <div v-if="!viewTemplates">
                    <!-- Create Template black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Create Template</p>
                                </div>
                                <div class="col s11">
                                    <p class="tempSetTxt">
                                        Lets start and automate your process so you can
                                        reclaim time and focus on your goals.
                                    </p>
                                </div>
                                <div class="col s1">
                                    <i class="material-icons tempSetIcon right" @click="createTemp()">add_circle</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Profession Carousel lists -->
                    <div class="carousel carousel-slider center white">
                        <div class="carousel-item" href="#one!">
                            <div class="row tempSetCarouselInnerDiv">
                                <!-- Center Bar Person Div -->

                                <div class="col s6 m4 l2">
                                    <div class="tempSetProMainDiv">
                                        <div class="tempSetProDiv">
                                            <span class="tempSetProSymbols">S</span>
                                        </div>
                                        <p class="tempSetProTitle">Surgeon</p>
                                    </div>
                                </div>

                                <div class="col s6 m4 l2">
                                    <div class="tempSetProMainDiv">
                                        <div class="tempSetProDiv1">
                                            <span class="tempSetProSymbols">D</span>
                                        </div>
                                        <p class="tempSetProTitle">Dentist</p>
                                    </div>
                                </div>

                                <div class="col s6 m4 l2">
                                    <div class="tempSetProMainDiv">
                                        <div class="tempSetProDiv2">
                                            <span class="tempSetProSymbols">G</span>
                                        </div>
                                        <p class="tempSetProTitle">gynecologist</p>
                                    </div>
                                </div>

                                <div class="col s6 m4 l2">
                                    <div class="tempSetProMainDiv">
                                        <div class="tempSetProDiv3">
                                            <span class="tempSetProSymbols">N</span>
                                        </div>
                                        <p class="tempSetProTitle">Neurologist</p>
                                    </div>
                                </div>

                                <div class="col s6 m4 l2">
                                    <div class="tempSetProMainDiv">
                                        <div class="tempSetProDiv4">
                                            <span class="tempSetProSymbols">R</span>
                                        </div>
                                        <p class="tempSetProTitle">Radiologist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item white" href="#two!">
                            <p><b>Second Panel</b></p>
                            <p class="">This is your second panel</p>
                        </div>
                    </div>

                    <div v-if="(allTemplates > 0)">
                        <!-- Search Domain Section -->
                        <div class="tempSetSearchInputMainDiv">
                            <div>
                                <form>
                                    <div class="input-field">
                                        <input placeholder="&#128269; Search by domain"
                                            type="text" class="validate tempSetSearchInput" v-model="search" />
                                    </div>
                                </form>
                            </div>

                            <div class="tempSetSearchInputControlDiv">
                                <div>
                                    <span class="tempSetSearchInputTxts">Filter</span>
                                    <i class="material-icons tempSetSearchInputIcons">filter_list</i>
                                </div>

                                <div class="tempSetSearchInputIconsDiv">
                                    <span class="tempSetSearchInputTxts">Sort</span>
                                    <i class="material-icons tempSetSearchInputIcons">sort</i>
                                </div>
                            </div>
                        </div>

                        <!-- Template Section -->
                        <div class="tempSetContainDiv">

                            <div class="row">
                                <!-- First Row -->
                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>

                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>

                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>
                                
                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>

                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>
                                
                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>


                                <!-- Second Row -->
                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>
                                
                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>

                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>
                                
                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>

                                <div class="col s12 m6 l4 tempCardContainDiv">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="/media/img/aboutmyself1.png">
                                            <span class="card-title">Card Title</span>
                                        </div>
                                        <!-- <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div> -->
                                        <div class="card-action">
                                            <a href="#" class="tempSetMainViewLink">Preview</a>
                                
                                            <a href="#" class="tempSetMainViewLink right" @click="tempSetup()">Select</a>
                                        </div>
                                    </div>
                                    <!-- Template Delete Modal Trigger -->
                                    <a href="#tempDelModal" class="btn tempSetDelBtn modal-trigger">
                                        Delete
                                    </a>
                                </div>
                            </div>
                            <div class="col s12">
                                <p class="tempSetLoading">Loading...</p>
                            </div>
                            <!-- End of Row -->
                        </div>
                    </div>
                    <div class="row" v-else>
                        <p class="center-align noTempTxt">
                            No templates found for profession
                            <a href="#" class="noTempCreateTempLink" @click="createTemp()">Create template</a>
                        </p>
                    </div>
                </div>

                <!-- Template Add Title Section -->
                <div v-if="!addTitle">
                    <p href="#" class="addTitleBack" @click="addTitleBack()">
                        <a href="#" class="black-text">Back</a>
                    </p>

                    <!-- Add Title black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Add Title</p>
                                </div>
                                <div class="col s11">
                                    <p class="tempSetTxt">
                                        Lets start and automate your process so you can
                                        reclaim time and focus on your goals.
                                    </p>
                                </div>
                                <div class="col s1">
                                    <!-- Add Title Help Modal Trigger -->
                                    <a class="modal-trigger" href="#addTitleModal">
                                        <i class="material-icons tempSetIcon1 right">help</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Title" class="validate tempInput" />
                            </div>

                            <button type="button" class="col s2 offset-s5 btn tempInputBtn"
                                @click="addTitleNextBtn()">
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Upload Template Thumbnail Section -->
                <div v-if="!uploadTempThumbnail">
                    <p href="#" class="addTitleBack" @click="uploadTempThumbnailBack()">
                        <a href="#" class="black-text">Back</a>
                    </p>

                    <!-- Upload Template Thumbnail black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Upload Template Thumbnail</p>
                                </div>
                                <div class="col s11">
                                    <p class="tempSetTxt">
                                        Explore from the creative world with our numerous customized
                                        website templates which will definitely set you apart to
                                        crush those career goals
                                    </p>
                                </div>
                                <div class="col s1">
                                    <!-- Upload Template Thumbnail Help Modal Trigger -->
                                    <a class="modal-trigger" href="#uploadTempThumbModal">
                                        <i class="material-icons tempSetIcon1 right">help</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="col s12">
                                <div class="file-field input-field">
                                    <input type="file" ref="file" style="display: none" />
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate uploadInput1" type="text"
                                            placeholder="Upload File" @click="$refs.file.click()" />
                                        <button class="btn tempUploadFileInputBtn"
                                            @click="$refs.file.click()">Select file</button>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="col s2 offset-s5 btn tempInputBtn"
                                @click="uploadTempThumbnailNext()">
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Upload Template stylesheet Section -->
                <div v-if="!uploadTempStylsheet">
                    <p href="#" class="addTitleBack" @click="uploadTempStylsheetBack()">
                        <a href="#" class="black-text">Back</a>
                    </p>

                    <!-- Upload Template stylesheet black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Upload Template stylesheet</p>
                                </div>
                                <div class="col s11">
                                    <p class="tempSetTxt">
                                        Lets start and automate your process so you can reclaim time
                                        and focus on your goals.
                                    </p>
                                </div>
                                <div class="col s1">
                                    <!-- Upload Template Stylesheet Help Modal Trigger -->
                                    <a class="modal-trigger" href="#uploadTempStyleModal">
                                        <i class="material-icons tempSetIcon1 right">help</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="file-field input-field">
                                <input type="file" ref="file" style="display: none" />
                                <div class="file-path-wrapper">
                                    <input class="file-path validate uploadInput1" type="text"
                                        placeholder="Upload File" @click="$refs.file.click()" />
                                    <button class="btn tempUploadFileInputBtn" @click="$refs.file.click()">Select
                                        file</button>
                                </div>
                            </div>

                            <button type="button" class="col s2 offset-s5 btn tempInputBtn"
                                @click="uploadTempStylsheetNext()">
                                Save
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Email Setup Section -->
                <div v-if="!emailSetup">
                
                    <!-- Email Setup black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Setup Email</p>
                                </div>
                                <div class="col s12">
                                    <p class="tempSetTxt">
                                        Giving your website a good title make it easier 
                                        for customer to find your page.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Email" class="validate tempInput" />
                            </div>
                
                            <button type="button" class="col s2 offset-s5 btn tempInputBtn" @click="emailSetupNext()">
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Domain Name Setup Section -->
                <div v-if="!domainNameSetup">
                
                    <!-- Email Setup black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Setup Website Name</p>
                                </div>
                                <div class="col s12">
                                    <p class="tempSetTxt">
                                        Giving your website a good title make it easier
                                        for customer to find your page.
                
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Domain" class="validate tempInput" />
                            </div>
                
                            <button type="button" class="col s2 offset-s5 btn tempInputBtn" @click="domainNameNext()">
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Description Setup Section -->
                <div v-if="!descriptionSetup">
                
                    <!-- Email Setup black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Setup Website description</p>
                                </div>
                                <div class="col s12">
                                    <p class="tempSetTxt">
                                        Giving your website a good title make it easier
                                        for customer to find your page.
                
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="addTitleInputDiv">
                        <form class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Description" class="validate tempInput" />
                            </div>
                
                            <button type="button" class="col s2 offset-s5 btn tempInputBtn" @click="descriptionNext()">
                                Next
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Template Create Client Website Section -->
                <div v-if="!tempCreateClientWeb">
                    <p href="#" class="addTitleBack" @click="tempCreateClientWebBack()">
                        <a href="#" class="black-text">
                            <i class="material-icons arrowBack">arrow_back</i>
                            Back
                        </a>
                    </p>
                
                    <!-- Upload Template stylesheet black rectangular div -->
                    <div class="tempSetBlackDiv">
                        <div class="tempSetBlackInnerDiv">
                            <div class="row tempSetBlackInnerDiv">
                                <div class="col s12">
                                    <p class="tempSetTitle">Create Clients Website</p>
                                </div>
                                <div class="col s11">
                                    <p class="tempSetTxt">
                                        Now is the time to create something exceptional with no limits.
                                    </p>
                                </div>
                                <div class="col s1">
                                    <!-- Upload Template Stylesheet Help Modal Trigger -->
                                    <a class="modal-trigger" href="#uploadTempStyleModal">
                                        <i class="material-icons tempSetIcon1 right">add_circle</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="tempCreateClientWhiteDiv">
                        <div class="tempCreateClientWhiteDiv1">
                            <div class="row tempCreateClientWhiteDiv2">
                                <div class="col s3 m2 l2 tempCreateClientWhiteProMgLftDiv">
                                    <div>
                                        <div class="tempCreateClientWhiteProDiv">
                                            <i class="material-icons tempProIcon">person</i>
                                        </div>
                                        <p class="tempCreateClientWhiteProName">escoba</p>
                                    </div>
                                </div>
                    
                                <div class="col s5 s5 l6 offset-s1">
                                    <p class="tempCreateClientWhiteTitle">Description</p>
                                    <p class="tempCreateClientWhiteTxt">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                    </p>
                                </div>
                    
                                <div class="col s1 m2 l3 offset-s1 offset-m1 mg_top">
                                    <a href="/client/editwebsitemodal">
                                        <i class="material-icons right tempCreateClientOperatorIcon" @click="editMe(template)">open_in_new</i>
                                    </a>
                    
                                    <a href="/client/configurewebsite">
                                        <i class="material-icons right tempCreateClientOperatorIcon">settings</i>
                                    </a>
                    
                                    <a href="/templates/templateone">
                                        <i class="material-icons right tempCreateClientOperatorIcon">visibility</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import MobileNavComponent from '../partials/MobileNavComponent.vue';
import SideNavComponent from "../partials/SideNavComponent.vue";
// import InnerFooterComponent from '../partials/InnerFooterComponent.vue';
export default {
    components: {
        MobileNavComponent,
        SideNavComponent,
        // InnerFooterComponent,
    },
    data() {
        return {
            allTemplates: 1,
            viewTemplates: false,
            addTitle: true,
            uploadTempThumbnail: true,
            uploadTempStylsheet: true,
            emailSetup: true,
            domainNameSetup: true,
            descriptionSetup: true,
            tempCreateClientWeb: true,
        };
    },
    mounted() {},
    methods: {
        createTemp() {
            this.viewTemplates = true;
            this.addTitle = false;
        },
        addTitleBack() {
            this.viewTemplates = false;
            this.addTitle = true;
        },
        addTitleNextBtn() {
            this.addTitle = true;
            this.uploadTempThumbnail = false;
        },
        uploadTempThumbnailBack() {
            this.addTitle = false;
            this.uploadTempThumbnail = true;
        },
        uploadTempStylsheetBack() {
            this.uploadTempThumbnail = false;
            this.uploadTempStylsheet = true;
        },
        uploadTempThumbnailNext() {
            this.uploadTempThumbnail = true;
            this.uploadTempStylsheet = false;
        },
        uploadTempStylsheetNext() {
            this.uploadTempStylsheet = true;
            this.viewTemplates = false;
        },
        tempSetup() {
            this.viewTemplates = true;
            this.emailSetup = false;
        },
        emailSetupNext() {
            this.emailSetup = true;
            this.domainNameSetup = false;
        },
        domainNameNext() {
            this.domainNameSetup = true;
            this.descriptionSetup = false;
        },
        descriptionNext() {
            this.descriptionSetup = true;
            this.tempCreateClientWeb = false;
        },
        tempCreateClientWebBack() {
            this.tempCreateClientWeb = true;
            this.descriptionSetup = false;
        },
    },
};
</script>


<!-- <template>
    <div>
Sidenav for small devices
        <mobile-nav-component />

<div class="row" id="dashRowDiv">
            Sidebar for large and medium devices
            <side-nav-component />

            Center Bar Person Div
            <div class="col s12 m10 l10">
                <div class="webWhiteDiv1" v-if="view == 0">
                    <a class="waves-effect waves-teal btn" @click="setView(1)">Create Now
                    </a>

                    <div class="row clientCreatePortInputRowDiv">
                        <div class="userTempMainDiv">
                            <div v-for="(profession, index) in professions" :key="profession.id">
                                <div :class="{
                                    selectedUserTempDiv:
                                        index == selectedIndex,
                                }" id="userTempDiv" @click="getTemplates(profession.id, index)">
                                    <div class="tempImgDiv" id="tempImgDiv">
                                        <span id="tempProIcon">{{
                                            profession.name.slice(0, 1)
                                        }}</span>
                                    </div>
<p class="userTempTitle">
                                        {{ profession.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    Client's Templates Section
<div class="adminTempContainInnerDiv">
                        <div id="clientTempPageRowDiv">
                            First Row
                            <div v-if="templates.length > 0" class="height">
                                <div class="col s12 m6 l4 clientTempPageImgSmDv" v-for="template in templates"
                                    :key="template.id">
                                    <div class="">
                                        <img :src="
                                            '/media/img/templateThumbnail/' +
                                            template.profession.name +
                                            '/' +
                                            template.imageUrl
                                        " :alt="template.name" id="" class="image" />
                                    </div>

<p class="tempPageImgTitle">
                                        {{ template.title }}
                                    </p>

<p class="tempPageImgTxt">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio, quisquam!.
                                    </p>

<a :href="'/preview/' + template.id" target="_blank" class="tempPageImgLink">View</a>
<a href="#!" class="tempPageImgLink right" @click="editMe(template)">Edit</a>
                                </div>
                            </div>
<div v-else-if="loading" class="centered">
                                <i class="fas fa-spinner fa-spin fa-2x"></i>
                            </div>
<div v-else>
                                <p class="centered">
                                    No template found for profession
                                    <a class="waves-effect waves-teal btn-flat" @click="setView(1)">Create Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
<div class="row webWhiteDiv1" v-else-if="view == 1">
                    <form id="bioForm" @submit.prevent="update == 0 ? createTemplate() : edit()"
                        enctype="multipart/form-data">
                        <a class="waves-effect waves-teal btn-flat" @click="setView(0)">
                            <i class="material-icons left">arrow_back</i>Back
                        </a>
                        <div class="row">
                            <p class="bioTitle">Add Template</p>
                            <div class="row">
                                <div class="
                                        input-field
                                        col
                                        l6
                                        m6
                                        s12
                                        noPaddingLeft
                                    ">
                                    <input placeholder="Title" id="signupPass" type="text" class="validate"
                                        v-model="template.title" required />
                                </div>

<div class="
                                        input-field
                                        col
                                        l6
                                        s12
                                        noPaddingRight
                                    ">
                                    <select class="browser-default" id="signupGender" v-model="template.profession_id"
                                        required>
                                        <option value="" disabled selected>
                                            Profession
                                        </option>
                                        <option v-for="profession in professions" :key="profession.id"
                                            :value="profession.id">
                                            {{ profession.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

<div class="row">
                                <div class="center col l6">
                                    <div class="card-content centered">
                                        <div class="file-field input-field">
                                            <div class="btn btn_file">
                                                <span>File</span>
                                                <input type="file" @change="previewImage" accept="image/*" />
                                            </div>
<div class="file-path-wrapper">
                                                <input placeholder="Upload preview Image" class="file-path validate"
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
<div class="center col l6">
                                    <div class="card-content centered">
                                        <div class="file-field input-field">
                                            <div class="btn btn_file">
                                                <span>File</span>
                                                <input type="file" @change="uploadStylesheet" accept=".css" />
                                            </div>
<div class="file-path-wrapper">
                                                <input class="file-path validate" type="text"
                                                    placeholder="Upload the stylesheet file" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
<div class="flexed">
                                <button type="submit" class="col s12 btn" id="logModalBtn">
                                    <span v-if="!loading && update == 0">save</span>
                                    <span v-if="!loading && update == 1">Update</span>
                                    <div class="preloader-wrapper small active" v-else-if="loading">
                                        <div class="
                                                spinner-layer spinner-white-only
                                            ">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
<div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
<div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
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
            bg_img: "/media/img/istockphoto-1390124896-170667a.jpg",
            pro_img: "/media/img/yuna.jpg",
            professions: [],
            professionId: 0,
            selectedIndex: 0,
            loading: false,
            templates: [],
            template: {
                title: "",
                profession_id: 0,
                imageUrl: null,
                styleFile: null,
            },
            update: 0,
            view: 0,
        };
    },
    mounted() {
        this.getProfessions();
    },
    methods: {
        createTemplate() {
            this.loading = !this.loading;
            let formData = new FormData();
            formData.append("imageUrl", this.template.imageUrl);
            formData.append("title", this.template.title);
            formData.append("profession_id", this.template.profession_id);
            formData.append("styleFile", this.template.styleFile);

            axios
                .post("/api/template", formData)
                .then((res) => {
                    console.log(res)
                    if (res.status == 201) {
                        this.loading = !this.loading;
                        M.toast({
                            html: res.data.message,
                            classes: "successNotifier",
                        }); location.reload()
                    } else {
                        M.toast({
                            html: "File too large",
                            classes: "errorNotifier",
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        edit() {
            this.loading = !this.loading;
            let formData = new FormData();
            this.template.imageUrl == null ? null : formData.append("imageUrl", this.template.imageUrl);
            formData.append("title", this.template.title);
            formData.append("profession_id", this.template.profession_id);
            this.template.styleFile == null ? null : formData.append("styleFile", this.template.styleFile);
            formData.append('_method', 'PUT');
            axios
                .post(`/api/template/${this.template.id}`, formData)
                .then((res) => {
                    console.log(res)
                    if (res.status == 200) {
                        this.loading = !this.loading;
                        M.toast({
                            html: res.data.message,
                            classes: "successNotifier",
                        }); location.reload()
                    } else {
                        M.toast({
                            html: "File too large",
                            classes: "errorNotifier",
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        editMe(template) {
            this.template.title = template.title;
            this.template.profession_id = template.profession_id;
            this.template.id = template.id;
            this.setView(1);
            this.update = 1;
        },
        getProfessions() {
            axios
                .get("/api/profession")
                .then((res) => {
                    this.professions = res.data.professionals;
                    this.professionId = this.professions.length > 0 ? this.professions[0].id : 0;
                    this.getTemplates(this.professionId);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getTemplates(professionId, index = 0) {
            this.selectedIndex = index;
            this.loading = true;
            let url = `/api/template/${professionId}`;

            axios
                .get(url)
                .then((res) => {
                    if (res.status == 200) {
                        this.templates = res.data.templates;
                        this.loading = false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },
        setView(view) {
            this.view = view;
        },
        previewImage(event) {
            if (event.target.files.length !== 0) {
                this.template.imageUrl = event.target.files[0];
                this.template.imagePreview = URL.createObjectURL(
                    this.template.imageUrl
                );
            }
        },
        uploadStylesheet(event) {
            if (event.target.files.length !== 0) {
                this.template.styleFile = event.target.files[0];
            }
        },
    },
};
</script>
<style scoped>
.clientCreatePortInputRowDiv {
    padding: 3em;
}

#userTempDiv {
    cursor: pointer;
}

.image {
    width: 328px;
    height: 262px;
}
</style> -->