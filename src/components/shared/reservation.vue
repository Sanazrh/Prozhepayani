<template>
    <div>
        <app-header></app-header>
        <br>
        <br>
        <br>
        <div class="b">
            <div class="b w">
                <h4>انتخاب زمان</h4>
            </div>
            <div>
                <div class="mainContainer">
                    <div class="b">
                    <table>
                        <tr>
                            <th>
                                <button type="button" class="btn btn-default" v-on:click="showMe=true">صبح</button>
                            </th>
                             <th>
                                <button type="button" class="btn btn-default" v-on:click="showMe=false">عصر</button>
                            </th>
                        </tr>
                    </table>
                    </div>
                    <div>
                    <table class="b">
                        <tr v-for="time_day in times_day">
                            <th>{{time_day.day}}<br>{{time_day.date}}</th>
                        </tr>
                    </table>
                    </div>
                    <div>
                        <transition enter-active-class="animated fadeInLeft" >
                            <div class="heading_container" v-if="showMe" >
                                <table class="b">
                                    <tr>
                                        <th v-for="time_morning in times_morning">{{time_morning.name}}</th>
                                    </tr>
                                </table>
                            </div>
                        </transition>
                        <transition enter-active-class="animated fadeInLeft" >
                            <div class="heading_container" v-if="!showMe">
                                <table class="b">
                                    <tr class="b">
                                        <th v-for="time_evening in times_evening">{{time_evening.name}}</th>
                                    </tr>
                                </table>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <app-info></app-info>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default{
    data(){
        return{
            showMe:true
        }
    },
    computed:{
        times_morning(){
            return this.$store.state.times_morning
        },
        times_evening(){
            return this.$store.state.times_evening
        },
        times_day(){
            return this.$store.state.times_day
        }
    }
};
</script>
<style>
    .b{
        box-shadow:0 0 4px 0 rgba(0,0,0,0.4);
        border-color:#C4D7B2;
        border-style:solid;
        border-radius:5px;
        border-width:1px;
        padding:15px;
    }
    .w{
        text-align:center;
    }
    .mainContainer{
        margin-top:15px;
        display:flex;
        flex-flow:row wrap;
        gap:15px;
    }
   .mainContainer div:first-child{
        width:100%;
        flex:100%;
   }
   .mainContainer div:first-child table {
        width:100%;
   }
   .mainContainer div:first-child table th{
        text-align:center;
        border-color:#C4D7B2;
        border-style:solid;
   }
   .mainContainer div:nth-child(2){
        width:15%;
        flex:15%;
   }
   .mainContainer div:nth-child(2) table{
        border: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap:5px;
   }
   .mainContainer div:nth-child(2) table tr{
        border-color:#C4D7B2;
        font-size:13px;
        padding:5px;
        width:100%;
        border-radius:15px;
        box-shadow:0 0 4px 0 rgba(0,0,0,0.4);
        border-style:solid;
   }
   .mainContainer div:nth-child(3){
        width:75%;
        flex:75%;
   }
   .mainContainer div:nth-child(3) table{
        border:none;
   }
   .mainContainer div:nth-child(3) table th{
        border-radius:15px;
        padding:15px;
        box-shadow:0 0 8px 0 rgba(0,0,0,0.40);
        width:30%;
        flex:30%;
   }
   .mainContainer div:nth-child(3) table tr{
        display: flex;
        border: none;
        padding: 15px;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: 15px;
   }
</style>