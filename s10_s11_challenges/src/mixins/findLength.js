/*  eslint-disable*/
export const findLengthMixin = {
      data() {
            return {
                  text3: ""
            }
      },
      filters: {
            findLengthMixin(val) {
                  return `${val} (${val.length})`;
            }
      }
}