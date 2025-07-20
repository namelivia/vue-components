<template lang="pug">
  .calendar
    .calendar-header
      h2 {{ monthName }} {{ currentYear }}
    .calendar-grid
      div.day-name(v-for="dayName in dayNames", :key="dayName")
        | {{ dayName }}
      div.date(
        v-for="(day, index) in calendarDays",
        :key="index",
        :class="{ 'other-month': !day.isCurrentMonth, 'today': day.isToday }"
      )
        | {{ day.date }}
</template>

<script>
export default {
  name: 'MyCalendar',
  data() {
    return {
      currentDate: new Date(),
      currentYear: 0,
      currentMonth: 0,
      monthName: '',
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      calendarDays: []
    };
  },
  methods: {
    generateCalendarData() {
      const now = this.currentDate;
      this.currentYear = now.getFullYear();
      this.currentMonth = now.getMonth();
      const todayDate = now.getDate();

      this.monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now);

      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

      let days = [];

      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push({
          date: daysInPrevMonth - firstDayOfMonth + 1 + i,
          isCurrentMonth: false,
          isToday: false
        });
      }

      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          date: i,
          isCurrentMonth: true,
          isToday: (i === todayDate && this.currentMonth === now.getMonth() && this.currentYear === now.getFullYear())
        });
      }

      let nextMonthDay = 1;
      while (days.length < 42) {
          days.push({
              date: nextMonthDay++,
              isCurrentMonth: false,
              isToday: false
          });
      }

      this.calendarDays = days;
    }
  },
  mounted() {
    this.generateCalendarData();
  },
};
</script>

<style scoped>
/* Your CSS from the previous example would go here */
.calendar {
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 20px;
}
.calendar-header {
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 1px solid #ccc;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  background-color: #fff;
}
.calendar-grid div {
  padding: 8px 0;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.calendar-grid .day-name {
  background-color: #e6e6e6;
  font-weight: bold;
  color: #333;
}
.calendar-grid .date {
  color: #333;
}
.calendar-grid .other-month {
  color: #bbb;
  background-color: #f9f9f9;
}
.calendar-grid .today {
  background-color: #add8e6;
  font-weight: bold;
  border: 1px solid #66b3d4;
  color: #000;
}
</style>
