import axios from 'axios'
const setTimeJob = async (min,hour,dayOfWeek) => {
  const res = await axios.get(`https://www.easycron.com/rest/ edit?token=65119da1e9921d2842d4f36a8ef4f2ec&name= ${min} ${hour}* * ${dayOfweek}`)
  .then(response => {
    console.log(response)
    })
  .catch(error => {
    console.log(error)
  })
  return res
}

export default setTimeJob



