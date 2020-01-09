<template>
    <div class="staff common_content">
        <el-row :gutter="20">
            <el-col :xs="5" :sm="5" :md="5"><side :showHide="false"/></el-col>
            <el-col :xs="19" :sm="19" :md="19">
                <div>
                    <search :showHide="true"/>
                    <trainList :showHide="false"/>
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
import side from "@/views/admin/components/side.vue";
import search from "@/views/admin/components/search.vue";
import trainList from "@/views/admin/components/trainList.vue";
export default {
    components: {
        side,
        search,
        trainList
    },
    data(){
        return{
            data: [
                {
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
                    tip:2,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"

                },
                {
                    tip:1,
                    evaluationPerson: "陈某某",
                    level:"一级考评员",
                    address:"山东青岛",
                    imgSrc: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
                },
                {
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

<style lang="less">
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