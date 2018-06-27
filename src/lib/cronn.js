import CronJobManager from 'cron-job-manager'

const CronJobManager = require('cron-job-manager'),
    manager = new CronJobManager(
        cronjobKey,
        schedule,
        () => { typeCronJob[0] === 'close' ? console.log('report') : standuply() },
        options)
    options = {
        start: true,
        timeZone: 'Asia/Bangkok',
        completion: () => ('Stoped!!')
}
const exists = manager.exists(cronjobKey)
    if(!exists){
        manager.add(cronjobKey, schedule,
         () => { typeCronJob[0] === 'close' ? console.log('report') : standuply() },
        options)
        manager.start(cronJobKey)
    }else{
        manager.update(cronjobKey, schedule,
        () => { typeCronJob[0] === 'close' ? console.log('report') : standuply() 
        });

    }



manager.stop('a_key_string_to_call_this_job');
manager.exists('next_job') //true
manger.update('a_key_string_to_call_this_job',
    "0 */2 * * * *",
    function () { console.log("now running this job every two minutes, using this function..."});
console.log("current jobs are: " + manager);