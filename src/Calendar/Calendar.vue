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
  name: 'Calendar',
  data() {
    return {
      currentDate: new Date(),
      currentYear: 0,
      currentMonth: 0,
      monthName: '',
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      calendarDays: [],
    }
  },
  methods: {
    /**
     * Main method to generate all calendar data.
     * Orchestrates calls to smaller, focused functions.
     */
    generateCalendarData() {
      const now = this.currentDate

      // Set current year and month for the component's data
      this.currentYear = now.getFullYear()
      this.currentMonth = now.getMonth()

      // 1. Get month name
      this.monthName = this.getMonthName(now)

      // 2. Get details about the current month (days in month, first day of week)
      const { daysInMonth, firstDayOfMonth, daysInPrevMonth } =
        this.getMonthDetails(this.currentYear, this.currentMonth)

      // 3. Generate days for the previous month's "tail"
      const prevMonthDays = this.getPreviousMonthTail(
        firstDayOfMonth,
        daysInPrevMonth,
      )

      // 4. Generate days for the current month
      const currentMonthDays = this.getCurrentMonthDays(daysInMonth, now)

      // Combine previous and current month days
      let days = [...prevMonthDays, ...currentMonthDays]

      // 5. Generate days for the next month's "head" to fill the 6-week grid
      const nextMonthDays = this.getNextMonthHead(days.length)

      // Combine all days
      this.calendarDays = [...days, ...nextMonthDays]
    },

    /**
     * Helper function to get the month name.
     * @param {Date} date - The date object to get the month name from.
     * @returns {string} The formatted month name.
     */
    getMonthName(date) {
      return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)
    },

    /**
     * Helper function to calculate details about the current month.
     * @param {number} year - The current year.
     * @param {number} month - The current month (0-indexed).
     * @returns {{daysInMonth: number, firstDayOfMonth: number, daysInPrevMonth: number}} Object with month details.
     */
    getMonthDetails(year, month) {
      // getDay() returns 0 for Sunday, 1 for Monday, etc.
      const firstDayOfMonth = new Date(year, month, 1).getDay()
      const daysInMonth = new Date(year, month + 1, 0).getDate()
      const daysInPrevMonth = new Date(year, month, 0).getDate() // last day of previous month

      return { daysInMonth, firstDayOfMonth, daysInPrevMonth }
    },

    /**
     * Helper function to generate days from the previous month that show on the current calendar.
     * @param {number} firstDayOfMonth - The day of the week (0-6) of the first day of the current month.
     * @param {number} daysInPrevMonth - Total days in the previous month.
     * @returns {Array<Object>} An array of day objects for the previous month's tail.
     */
    getPreviousMonthTail(firstDayOfMonth, daysInPrevMonth) {
      // If firstDayOfMonth is 0 (Sunday), we need 6 days from previous month for a standard calendar start (Mon-Sun).
      // If it's 1 (Monday), we need 0 days, etc.
      // The number of days to show from previous month is `firstDayOfMonth` if Sunday is 0,
      // or `(firstDayOfMonth + 6) % 7` if you want Monday to be 0 (adjust as per your calendar's start day).
      // Assuming Sunday is the start of the week (getDay() convention), `firstDayOfMonth` is correct for the number of leading blanks.
      const numDaysToShow = firstDayOfMonth // Number of days from previous month to display

      return Array.from({ length: numDaysToShow }, (_, i) => {
        return {
          date: daysInPrevMonth - numDaysToShow + 1 + i,
          isCurrentMonth: false,
          isToday: false,
        }
      })
    },

    /**
     * Helper function to generate days for the current month.
     * @param {number} daysInMonth - Total days in the current month.
     * @param {Date} now - The current date object (used to check for 'today').
     * @returns {Array<Object>} An array of day objects for the current month.
     */
    getCurrentMonthDays(daysInMonth, now) {
      const todayDate = now.getDate()
      const currentMonth = now.getMonth()
      const currentYear = now.getFullYear()

      return Array.from({ length: daysInMonth }, (_, i) => {
        const date = i + 1
        const isToday =
          date === todayDate &&
          this.currentMonth === currentMonth && // Use component's currentMonth for consistency
          this.currentYear === currentYear // Use component's currentYear for consistency
        return {
          date: date,
          isCurrentMonth: true,
          isToday: isToday,
        }
      })
    },

    /**
     * Helper function to generate days for the next month to fill the calendar grid (up to 42 days).
     * @param {number} currentTotalDays - The number of days already generated (prev + current month).
     * @returns {Array<Object>} An array of day objects for the next month's head.
     */
    getNextMonthHead(currentTotalDays) {
      let nextMonthDays = []
      let nextMonthDayCounter = 1 // Start counting from 1 for the next month

      while (currentTotalDays + nextMonthDays.length < 42) {
        nextMonthDays.push({
          date: nextMonthDayCounter++,
          isCurrentMonth: false,
          isToday: false,
        })
      }
      return nextMonthDays
    },
  },
  mounted() {
    this.generateCalendarData()
  },
}
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
