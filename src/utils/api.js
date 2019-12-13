import axios from 'axios';
const API_URL = `http://localhost:3001/apiv1/anuncios?`


export const api = () => {
    
  return {

    getTagsAds: async (query) => {
        
        const endPoint = `http://localhost:3001/apiv1/anuncios?tag=${query}`
        const response = await axios.get(endPoint);
      return response.data.results;

    },
    
    getAds: (query) => {
        const endPoint = `http://localhost:3001/apiv1/anuncios`
        return axios.get(endPoint)
        .then(response => response.data.results)

    },

    getAdsbySearch: (name, price, tagSelected, venta) => {
        
        let endPoint = `${API_URL}`
        
        if(tagSelected){
          endPoint = `${API_URL}tag=${tagSelected}`
          
        }if(price){
          endPoint = `${endPoint}&price=0-${price}`
          
           
        }if(name){
          endPoint = `${endPoint}&name=${name}`
          
        }if(venta){
          endPoint = `${endPoint}&venta=${venta}`
          
        }
        // console.log(endPoint)
        return axios.get(endPoint)
        .then(response => response.data.results)

    },

    findAds: (query) => {
        
        const endPoint = `http://localhost:3001/apiv1/anuncios?name=${query}`;
        
        return axios.get(endPoint)
        .then(response => response.data.results)
    },

    findAdByID: (id) => {
        console.log(id)
        const endPoint = `http://localhost:3001/apiv1/anuncios/${id}`;
        return axios.get(endPoint)
        .then(response => response.data.result)
        
      },
      
      getTags: () => {
        const endPoint = `http://localhost:3001/apiv1/tags`
        
        return axios.get(endPoint)
        .then(response => response.data.results)
        

    },

    editAdvert: (id, advert) => {
      const endPoint = `http://localhost:3001/apiv1/anuncios/${id}`;
      
			return axios({
          method: 'put',
          url: endPoint,
          data: advert 
        }).then(res => res)
        
    },
    
    newAdvert: async (advert) => {
      console.log(advert)
      const endPoint = `http://localhost:3001/apiv1/anuncios`;
      // if(advert.venta === "true"){
      //   advert.venta = true;
      // }else{
      //   advert.venta = false;
      // }
      
			const res = await axios({
        method: 'post',
        url: endPoint,
        data: advert
      });
      return res.data;
    }


  }

}

export default api;
