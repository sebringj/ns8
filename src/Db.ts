import moment from 'moment'
// in memory db, quick and dirty style

export interface User {
    email: string
    password: string
    phone: string
}

export interface Event {
    type: string
    created: number // would normally use unix timestamp but ticks is fine for demo
    email?: string // a better, non PII identifier would be used in the future obviosly
}

export interface Query {
    email?: string
    dateRange?: 'LAST_DAY' // can extend to 'TODAY', 'LAST_WEEK' etc, could use moment-tz for timzone as well
}

class DB {
    private static users: Array<User> = []
    private static events: Array<Event> = []

    public static addUser(user: User) {
        if (this.userExists(user.email))
            throw new Error('User email already in use')
        this.users.push(user)
        this.addEvent({
            type: 'USER_CREATED',
            created: Date.now(),
            email: user.email
        })
    }

    public static userExists(email: string) {
        const foundUser = this.users.find(u => u.email === email)
        return !!foundUser
    }

    public static addEvent(event: Event) {
        this.events.push(event)
    }

    public static getEvents(query: Query) {
        return this.events.filter(ev => {
            let emailMatches = true
            if (query.email) {
                emailMatches = ev.email === query.email
            }
            let dateRangeOk = true
            if (query.dateRange) {
                switch(query.dateRange) {
                    case 'LAST_DAY' : {
                        const start = moment().startOf('day').valueOf()
                        dateRangeOk = ev.created >= start
                    }
                }
            }
            return emailMatches && dateRangeOk
        }).sort((a: Event, b: Event) => {
            if (a.created < b.created) return 1
            else if (a.created > b.created) return -1
            return 0
        })
    }

}

export default DB;
