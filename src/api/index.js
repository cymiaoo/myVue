import ajax from './ajax'

export const reqMsiteData = () => ajax('/homeData')
export const reqCatagoryData = () => ajax('/category')

export const reqTopicNav=()=>ajax('/sp/topic/v1/find/getTabs.json')//头部导航数据
export const reqTopicManual=()=>ajax('/sp/topic/v1/find/recManual.json')//内容数据