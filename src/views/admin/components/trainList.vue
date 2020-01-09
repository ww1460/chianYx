<template>
    <div class="trainlist">
        <el-row :gutter="20">
            <el-col
                    :xs="8"
                    :sm="6"
                    :md="6"
                    :lg="6"
                    v-for="(item,index) in data"
                    :key="index"
                    style="margin-top: 10px;"
            >
                <el-card shadow="always">
                    <div class="testIndex-content" v-if="!showHide">
                        <router-link to="/evaluationList/evaluationListDetail">
                            <el-image style="width: 150px; height: 150px" :src="item.imgSrc"></el-image>
                            <div class="con">
                               <img v-bind:src="srcValue(item.tip)" class="badge"/>
                                <label>{{item.evaluationPerson}}({{item.level}})</label>
                            </div>
                            <p>{{item.address}}</p>
                        </router-link>
                    </div>
                    <div class="testIndex-content" v-if="showHide">
                        <router-link to="/testInstitutions/testInstitutionsDetail">
                            <el-image style="width: 150px; height: 150px" :src="item.imgSrc"></el-image>
                            <p>{{item.address}}</p>
                        </router-link>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="pagination" style="margin-top: 55px;text-align: center;">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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
            iconList: ["/image/index/icon_place.png", "/image/index/icon_time.png"],
            data: [
                {
                    id:1,
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    id:2,
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    id:3,
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    id:4,
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    id:5,
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    id:6,
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    id:7,
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    id:8,
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
            ]
        }
    },
    methods:{
        srcValue(status){
            if(status==1)
                return '/image/evaluationStaff/badge1.jpg'
            if(status==2)
                return '/image/evaluationStaff/badge2.jpg'
        },
    }

};
</script>

<style lang="less" scoped>
    .trainlist{
        .el-card__body{
            padding: 0;
            .con{
                width: 80%;
                margin: auto;
                border-bottom: 1px solid #C4C4C4;
                color: #4E4E4E;
                text-align: center;
                padding: 9px 0;
                .badge{
                    width: 25px;
                    height: 25px;
                    margin-right: 3px;
                }
            }
           p{
               text-align: center;
               padding:9px 0 15px 0;
               color: #000000;
               font-size: 14px;
           }
        }
    }
</style>