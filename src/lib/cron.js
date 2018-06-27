const manager = new CronJobManager()
const options = {
    start: true, 
    completion: ()=>('Stoped'), 
    timeZone:'Asia/Bangkok'
}
manager.add(cronjobKey,'0 9 * * 1-5', taskFunction)
manager.start(cronjobKey)



const cronjob = ( hour,dayOfWeek ) =>{
    cron.schedule('0 9 * * 1-5', function(){
    console.log('At 09:00 on every day-of-week from Monday through Friday.');
},false);
    cronjob.start();





}