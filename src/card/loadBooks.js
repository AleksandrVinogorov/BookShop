import axios from "axios";

let LoadBooks = ({search, startIndex, setData, resultsLimit}) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=%22${search}%22&startIndex=${startIndex}&maxResults=${resultsLimit}&langRestrict=en&key=AIzaSyCRnqBwHe_-hfyGAiE2oN1ALD4oxt1CUgA`)
  .then(res => setData(res.data.items)) // заменяем старые данные на новые при каждой загрузке
  .catch(err => console.log(err))
}

  export default LoadBooks