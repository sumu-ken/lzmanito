

export const requset=(Params)=>{


    // 定义公共的url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve,reject)=>{
      uni.request({
          ...Params,
          url:baseUrl+Params.url,
          success:(result)=>{
              resolve(result.data.message);
          },
          fail:(err)=>{
               reject(err);
          }
    
      }) 
      
    })
}