<template>
    <div class="staff common_content">
        <div class="side1">
            <div class="title" v-if="!showHide">
                考评员<img src="/image/evaluationStaff/icon.png" class="icon"/>
            </div>
            <div class="title" v-if="showHide">
                测试机构<img src="/image/evaluationStaff/icon2.png" class="icon" style="left:65%"/>
            </div>
            <ul v-if="!showHide">
                <li v-for="(item,index) in list" :key="index" >
                    <router-link  :to="item.url">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showHide: Boolean
        },
       data(){
           return{
              list:[{
                  url:"/evaluationStaff",
                  name:"考评员培训",
              },{
                  url:"/evaluationList",
                  name:"考评员列表",
              }],
             active : 0,
           }
       },
       methods:{
       }

    }
</script>

<style scoped lang="less">
    .staff{
        width:100%;
        .title{
            height: 60px;
            background:  url('/image/evaluationStaff/title_bg.jpg') ;
            //background-size:cover;
            color: #FFFFFF;
            font-weight:bold;
            position: relative;
            text-align: center;
            line-height: 60px;
            .icon{
                width:40px;
                height: 40px;
                position: absolute;
                top:10%;
                left:61%;
            }
        }
        ul {
            background: #FFFFFF;
            li a{
                display: block;
                width: 100%;
                padding: 10px 0;
                text-align: center;
                color: #4E4E4E;
                font-size: 15px;
            }
            .router-link-active {
                background: #17A1E6 url('/image/evaluationStaff/ball.png') no-repeat right 24% top 47% ;
                color: #FFFFFF;

            }
        }
    /*.el-tabs__item.is-active{*/
        /*background: #17A1E6 url('/image/evaluationStaff/ball.png') no-repeat right 27% top 47% ;*/
        /*color: #FFFFFF;*/
    /*}*/

    }
</style>