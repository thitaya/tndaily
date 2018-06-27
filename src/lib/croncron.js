import CronJobManager from 'cron-job-manager'

const manager = new CronJobManager(CornJobKey,
    schedule,
    options = {
        start: true,
        timeZone: 'Asia/Bangkok',
        completion: () => ('Stoped!!')
    });
const cronJob = (teamId, cronJobKey, min, hour, dayOfWeek) => {
    const schedule = `0 ${min} ${hour} * * ${dayOfWeek}`
    const schedule=('0 9 * * 1-5')
    // const typeCronJob = /(close|first|remind)$/.exec(cronJobKey)
    const Exits = manager.exists(cronJobKey)

    if (!Exits) {
        manager.add(
            CornJobKey,
            schedule,
            () => {typeCronJob[0] === 'close' ? console.log('report') : standuply()},
            options)
        manager.start(cronJobKey)
    } else {
        manager.update(
            cronJobKey,
            schedule,
            () => { typeCronJob[0] === 'close' ? console.log('report') : standuply()})

    }
    let jobs = manager.listCrons();
    console.log(jobs)
    return 'success'
}

export default cronJob

