import {reqMsiteData,reqCatagoryData,reqTopicNav,reqTopicManual} from '../api'
import {RECEIVE_MSITEDATA,RECEIVE_CATAGORYDATA,RECEIVE_TABSDATA,RECEIVE_TOPICMANUAL} from './mutation-types'

export default {
    async getMsiteData({commit}){
        const result = await reqMsiteData()
        console.log(result)
        if(result.code===0){
            commit(RECEIVE_MSITEDATA,result.data)
        }
    },
    async getCatagoryData({commit}){
        const result = await reqCatagoryData()
        console.log(result)
        if(result.code===0){
            commit(RECEIVE_CATAGORYDATA,result.data)
        }
    },
    async getTabsDatas({commit}){
        const result = await reqTopicNav()
        console.log(result)
        if(result.code==="200"){
            commit(RECEIVE_TABSDATA,result.data) 
        }
        commit(RECEIVE_TABSDATA,result.data)  
    },
    async getTopicManual({commit}){
        const result = await reqTopicManual()
        console.log(result)
        if(result.code==="200"){
            commit(RECEIVE_TOPICMANUAL,result.data) 
        }
    }
 
}