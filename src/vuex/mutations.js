import {RECEIVE_MSITEDATA,RECEIVE_CATAGORYDATA,RECEIVE_TABSDATA,RECEIVE_TOPICMANUAL} from "./mutation-types"
 
export default {
    [RECEIVE_MSITEDATA](state,msiteData){
        state.msiteData = msiteData
    },
    [RECEIVE_CATAGORYDATA](state,catagoryData){
        state.catagoryData = catagoryData
    },
    [RECEIVE_TABSDATA](state,tabsData){
        state.tabsData = tabsData
    },
    [RECEIVE_TOPICMANUAL](state,topicManual){
        state.topicManual = topicManual
    }
}