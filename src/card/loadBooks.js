import axios from "axios";

let LoadBooks = ({search, startIndex, setData, resultsLimit}) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=%22${search}%22&startIndex=${startIndex}&maxResults=${resultsLimit}&langRestrict=en&key=AIzaSyDM2WxVJPbZ_nhDRCECkvODLTQ2Zva_vUU`)
  .then(res => setData(res.data.items)) // заменяем старые данные на новые при каждой загрузке
  .catch(err => console.log(err))
}

  export default LoadBooks
