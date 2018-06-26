const manager = new CronJobManager()
const options = {
    start: true, 
    completion: ()=>('Stoped'), 
    timeZone:'Asia/Bangkok'
}
const cronjob = ( hour,dayOfWeek ) =>{
    cron.schedule('0 9 * * 1-5', function(){
    console.log('At 09:00 on every day-of-week from Monday through Friday.');
},false);
    cronjob.start();
}
// manager.add(
//     cronJobkey,
//     schedule,
//     () => { typeCronJob[0] === 'close' ? console.log('report') : standuply() },
//     options)
//     Manager.start(cronJobKey)

// manager.update(
//     cronJobkey,
//     schedule,
//     () => { typeCronJob[0] === 'close' ? console.log('report') : standuply() },

//     )

const cronjob = ( hour,dayOfWeek ) =>{
    cron.schedule('0 18 * * 1-5', function(){
    console.log('At 18:00 on every day-of-week from Monday through Friday.');
});
    cronjob.stop();
}
const cronjob = ( min, hour,dayOfWeek ) =>{
    cron.schedule = cronjob.validate('30 17 * * 1-5', function(){
    console.log('At 17:30 on every day-of-week from Monday through Friday.');
});
   
}


export default cronjob