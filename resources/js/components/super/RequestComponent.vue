<template>
    <div>
        <!-- Sidenav for small devices -->
        <mobile-nav-component />

        <div class="row" id="dashRowDiv">
            <!-- Sidebar for large and medium devices -->
            <side-nav-component />

            <div class="col s12 m10 l10">
                <div v-if="(request > 0)">
                    <!-- Black rectangular div -->
                    <div class="requestBlackDiv">
                        <div class="requestBlackInnerDiv">
                            <div class="row requestBlackInnerDiv">
                                <div class="col s12">
                                    <p class="requestTitle">Get access to request</p>
                                </div>
                                <div class="col s12">
                                    <p class="requestTxt">
                                        Now is the time to create something exceptional with no limits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <!-- No request yet table section -->
                    <table class="responsive-table">
                        <thead>
                            <tr class="requestTh">
                                <th class="requestTableTxts">
                                    Staff
                                </th>
                                <th class="requestTableTxts">
                                    Thumbnail
                                </th>
                                <th class="requestTableTxts">
                                    Title
                                </th>
                                <th class="requestTableTxts">
                                    Profession
                                </th>
                                <th class="requestTableTxts">
                                    Request
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="requestTableTxts1">
                                    Adebayo A.
                                </td>
                                <td class="requestTableTxts1">
                                    <div class="requestTableImgDiv"></div>
                                </td>
                                <td class="requestTableTxts1">
                                    SugeonX
                                </td>
                                <td class="requestTableTxts1">
                                    Sugeon
                                </td>
                                <td class="requestTableTxts1">
                                    Created
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn requestViewBtn">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="requestTableTxts1">
                                    Adebayo A.
                                </td>
                                <td class="requestTableTxts1">
                                    <div class="requestTableImgDiv"></div>
                                </td>
                                <td class="requestTableTxts1">
                                    SugeonX
                                </td>
                                <td class="requestTableTxts1">
                                    Sugeon
                                </td>
                                <td class="requestTableTxts1">
                                    Created
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn requestViewBtn">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="requestTableTxts1">
                                    Adebayo A.
                                </td>
                                <td class="requestTableTxts1">
                                    <div class="requestTableImgDiv"></div>
                                </td>
                                <td class="requestTableTxts1">
                                    SugeonX
                                </td>
                                <td class="requestTableTxts1">
                                    Sugeon
                                </td>
                                <td class="requestTableTxts1">
                                    Created
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn requestViewBtn">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="requestTableTxts1">
                                    Adebayo A.
                                </td>
                                <td class="requestTableTxts1">
                                    <div class="requestTableImgDiv"></div>
                                </td>
                                <td class="requestTableTxts1">
                                    SugeonX
                                </td>
                                <td class="requestTableTxts1">
                                    Sugeon
                                </td>
                                <td class="requestTableTxts1">
                                    Created
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn requestViewBtn">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="requestTableTxts1">
                                    Adebayo A.
                                </td>
                                <td class="requestTableTxts1">
                                    <div class="requestTableImgDiv"></div>
                                </td>
                                <td class="requestTableTxts1">
                                    SugeonX
                                </td>
                                <td class="requestTableTxts1">
                                    Sugeon
                                </td>
                                <td class="requestTableTxts1">
                                    Created
                                </td>
                                <td class="right">
                                    <a href="#!" class="marginRight1 btn requestViewBtn">
                                        View
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div v-else>
                    <!-- Black rectangular div -->
                    <div class="requestBlackDiv">
                        <div class="requestBlackInnerDiv">
                            <div class="row requestBlackInnerDiv">
                                <div class="col s12">
                                    <p class="requestTitle">Manage request from your team</p>
                                </div>
                                <div class="col s12">
                                    <p class="requestTxt">
                                        Now is the time to create something exceptional with no limits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- No request yet table section -->
                    <table class="responsive-table">
                        <tbody>
                            <tr class="requestTh">
                                <th class="requestTableTxts">
                                    Staff
                                </th>
                                <th class="requestTableTxts">
                                    Thumbnail
                                </th>
                                <th class="requestTableTxts">
                                    Title
                                </th>
                                <th class="requestTableTxts">
                                    Profession
                                </th>
                                <th class="requestTableTxts">
                                    Request
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div>
                        <p class="center-align noRequestTxt">
                            No active request yet.
                        </p>
                    </div>
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
            request: 1,
        };
    },
    mounted() { },
    methods: {},
};
</script>