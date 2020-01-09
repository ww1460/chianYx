<template>
    <div class="training">
        <el-row>
            <el-col
                    :xs="24"
                    :sm="24"
                    :md="24"
                    v-for="(item,index) in data"
                    :key="index"
                    style="margin: 10px 0 8px 0"
            >
                <el-card shadow="always">
                    <div class="testIndex-content">
                        <ul class="eil-list-ul">
                             <router-link to="/">
                                <!--<div class="con">-->
                                    <!--<label>{{item.evaluationPerson}}({{item.level}})</label>-->
                                <!--</div>-->
                                <!--<p>{{item.address}}</p>-->
                                <li>
                                    <div class="clearfix">
                                        <div style="float: left;">
                                            <p class="p1">
                                                <span  class="sunTitle">【{{item.province}} || {{item.level}}】{{item.trainingCourse}}</span>
                                                <span class="sunCost">￥{{item.price}}</span>
                                                <span class="sunAddress"><i class="el-icon-location-outline"></i>{{item.address}}</span>
                                            </p>
                                            <p class="p2" style="margin-top: 8px;">报名时间：{{item.registrationStartTime}} 至 {{item.registrationEndTime}}</p>
                                            <p class="p2" style="margin-top: 8px;">培训时间：{{item.trainingStartTime}}至 {{item.trainingEndTime}}</p>
                                        </div>
                                        <div class="eil-dv">
                                            <router-link :to="{path:'/evaluationStaff/signUp',query:{data:item}}">
                                                 <el-button type="danger">报名</el-button>
                                            </router-link>
                                        </div>
                                    </div>
                                </li>
                             </router-link>
                        </ul>
                    </div>
                </el-card>

            </el-col>
        </el-row>
        <div class="pagination" style="margin-top:30px">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data: [
                {
                    level:"一级考评员",
                    province:"山东",
                    trainingCourse:"中国羽毛球协会2019年第三期羽毛球运动水平等级考评员培训班",
                    price:4500,
                    address:"四川省,成都市,双流区 国家羽毛球训练基地",
                    registrationStartTime:"2019-11-14",
                    registrationEndTime:"2019-12-06",
                    trainingStartTime:"2019-12-08 00:00",
                    trainingEndTime:"2019-12-13 23:59",
                },
                {
                    level:"一级考评员",
                    province:"山东",
                    trainingCourse:"中国羽毛球协会2019年第三期羽毛球运动水平等级考评员培训班",
                    price:4500,
                    address:"四川省,成都市,双流区 国家羽毛球训练基地",
                    registrationStartTime:"2019-11-14",
                    registrationEndTime:"2019-12-06",
                    trainingStartTime:"2019-12-08 00:00",
                    trainingEndTime:"2019-12-13 23:59",
                },
                {
                    level:"一级考评员",
                    province:"山东",
                    trainingCourse:"中国羽毛球协会2019年第三期羽毛球运动水平等级考评员培训班",
                    price:4500,
                    address:"四川省,成都市,双流区 国家羽毛球训练基地",
                    registrationStartTime:"2019-11-14",
                    registrationEndTime:"2019-12-06",
                    trainingStartTime:"2019-12-08 00:00",
                    trainingEndTime:"2019-12-13 23:59",
                },
                {
                    level:"一级考评员",
                    province:"山东",
                    trainingCourse:"中国羽毛球协会2019年第三期羽毛球运动水平等级考评员培训班",
                    price:4500,
                    address:"四川省,成都市,双流区 国家羽毛球训练基地",
                    registrationStartTime:"2019-11-14",
                    registrationEndTime:"2019-12-06",
                    trainingStartTime:"2019-12-08 00:00",
                    trainingEndTime:"2019-12-13 23:59",
                },
            ]
        }
    },
    methods:{

    }

};
</script>

<style lang="less" scoped>
    .training{
        .el-card__body{
            padding: 0;
            .eil-list-ul {
                padding:7px 0 ;
                li{
                    position: relative;
                    .clearfix:after {
                        visibility: hidden;
                        display: block;
                        font-size: 0;
                        content: " ";
                        clear: both;
                        height: 0;
                    }
                    .p1{
                        font-size: 16px;
                        color: #111;
                        cursor: pointer;
                        .sunTitle {
                            color: #151515;
                            float: left;
                            display: inline-block;
                            max-width: 500px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .sunCost {
                            color: #f15660;
                            font-size: 16px;
                            margin-left: 20px;
                        }
                        .sunAddress {
                            position: absolute;
                            top: 0;
                            right: 17px;
                            width: 279px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 14px;
                            color: #bbb;
                        }
                    }
                    .p2 {
                        font-size: 14px;
                        color: #999;
                    }
                    .eil-dv {
                        padding-right: 30px;
                        margin-top: 39px;
                        float: right;
                    }
                }
            }
        }
    }
</style>