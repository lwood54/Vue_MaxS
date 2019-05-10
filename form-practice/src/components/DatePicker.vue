<template>
  <div>
    <label for="start">Start Date</label>
    <input
      v-model="startDate"
      type="date"
      id="start"
      name="start-date"
      value="startDate"
      min="startDate"
    >
    <p v-if="!validStartDate">Start Date must be before end date.</p>
    <label for="end">End Date</label>
    <input v-model="endDate" type="date" id="end" name="end-date" value="endDate" min="endDate">
    <p v-if="!validEndDate">End Date must fall after start date.</p>
  </div>
</template>

<script>
const currentDate = new Date();
const dd =
  currentDate.getDate() > 9
    ? currentDate.getDate()
    : "0" + currentDate.getDate();
const ddPlus1 =
  currentDate.getDate() + 1 > 9
    ? currentDate.getDate() + 1
    : "0" + currentDate.getDate();
const mm =
  currentDate.getMonth() + 1 > 9
    ? currentDate.getMonth() + 1
    : "0" + (currentDate.getMonth() + 1);
const yyyy = currentDate.getFullYear();
const fmtDate = `${yyyy}-${mm}-${dd}`;
const fmtDatePlus1 = `${yyyy}-${mm}-${ddPlus1}`;

export default {
  data: function() {
    return {
      startDate: fmtDate,
      endDate: fmtDatePlus1
    };
  },
  computed: {
    validStartDate: function() {
      if (this.startDate < this.endDate && this.startDate !== "") {
        return this.startDate;
      }
      return false;
    },
    validEndDate: function() {
      if (this.endDate > this.startDate && this.endDate !== "") {
        return this.endDate;
      }
      return false;
    }
  }
};
</script>