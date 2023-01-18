/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import HomeComponent from './components/HomeComponent.vue';
import StartedComponent from './components/auth/StartedComponent.vue';
import TemplateComponent from './components/TemplateComponent.vue';
import LoginComponent from './components/auth/LoginComponent.vue';
// import OtpComponent from './components/auth/OtpComponent.vue';
import ResetPasswordComponent from './components/auth/ResetPasswordComponent.vue';

// Client
import ClientComponent from './components/client/Dashboard.vue';
import ClientWebsitesComponent from './components/client/WebsitesComponent.vue';
import ClientMailComponent from './components/client/MailComponent.vue';
import ClientSettings from './components/client/SettingsComponent.vue';
import ClientSupport from './components/client/SupportComponent.vue';
import ClientSingleMail from './components/client/SinglemailComponent.vue';
import ClientTemplateComponent from './components/client/ClientTemplateComponent.vue';


// Admin
import AdminDashboard from "./components/admin/Dashboard";
import AdminClient from "./components/admin/Client";
import AdminTemplate from "./components/admin/Template";
import AdminMail from "./components/admin/Mail";
import AdminSettings from "./components/admin/Settings";
import AdminSingleMail from "./components/admin/SingleMail";

// SAdmin
import DashboardSAdmin from './components/super/Dashboard';
import AdminComponent from './components/super/AdminsComponent';

// Added remaining super admin links for it's component here
import SadminTemplate from './components/super/Template';
import SadminMail from "./components/super/MailComponent";
import SadminSingleMail from "./components/super/SinglemailComponent";
import SadminSettings from "./components/super/SettingsComponent";
import SadminClient from "./components/super/ClientComponent";
import SadminRequest from "./components/super/RequestComponent";

// Webiste
import PhysicianWebsiteComponent from './components/templates/Physicians/MainTemplateComponent';
import SettingsComponent from './components/templates/Physicians/Settings/SettingsComponent';

// Template
import TemplatePhysic from "./components/templates/TemplatePhysic";

app.component('home-component', HomeComponent);
app.component('login-component', LoginComponent);
// app.component('otp-component', OtpComponent);
app.component('resetpassword-component', ResetPasswordComponent);
app.component('started-component', StartedComponent);
app.component('template-component', TemplateComponent);

app.component('client-component', ClientComponent);
app.component('client-websites-component', ClientWebsitesComponent);

app.component('client-template-component', ClientTemplateComponent);
app.component('client-mail-component', ClientMailComponent);
app.component('client-settings-component', ClientSettings);
app.component('client-support-component', ClientSupport);
app.component('client-singlemail-component', ClientSingleMail);

app.component("admin-component", AdminDashboard);
app.component('admins-component', AdminComponent);
app.component('sadmin-component', DashboardSAdmin);

// Added remaining super admin links for it's component here
app.component("sadmin-template-component", SadminTemplate);
app.component("sadmin-mail-component", SadminMail);
app.component("sadmin-singlemail-component", SadminSingleMail);
app.component("sadmin-settings-component", SadminSettings);
app.component("sadmin-client-component", SadminClient);
app.component("sadmin-request-component", SadminRequest);

app.component("admin-client-component", AdminClient);
app.component("admin-template-component", AdminTemplate);
app.component("admin-messages-component", AdminMail);
app.component("admin-settings-component", AdminSettings);
app.component("admin-singlemail-component", AdminSingleMail);

app.component('physician-website-component', PhysicianWebsiteComponent);
app.component('physician-website-settings', SettingsComponent);

app.component("template-physic-component", TemplatePhysic);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
