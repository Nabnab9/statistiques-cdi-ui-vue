import TimeSlot from './time-slot.model';
export default class Activity {
    public id: number;
    public studentAmount: number;
    public isSession: boolean;
    public isSupport: boolean;
    public closingReason: ClosingReason;
    public dateTime: Date;
    public timeSlot: TimeSlot;

    constructor(activity: any) {
        this.id = activity.id;
        this.studentAmount = activity.studentAmount;
        this.isSession = activity.isSession;
        this.isSupport = activity.isSupport;
        this.closingReason = activity.closingReason;
        this.dateTime = activity.dateTime;
        this.timeSlot = new TimeSlot(activity.timeSlot);
    }
  }

enum ClosingReason {
    CLOSED, STRIKE, OTHER, OPENED,
  }

