export default class TimeSlot {
  public id: number;
  public name: string;
  public startTime: Date;
  public endTime: Date;
  public dayOfWeek: DayOfWeek;


  constructor(ts: any) {
      this.id = ts.id;
      this.name = ts.name;
      this.startTime = ts.startTime;
      this.endTime = ts.endTime;
      this.dayOfWeek = ts.dayOfWeek;
  }
}

enum DayOfWeek {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY,
}
