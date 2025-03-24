import moment from "moment";

export const formatTimestamp = (timestamp) => {
  return moment(timestamp).format("MMMM Do YYYY, h:mm:ss a"); // Example: "March 24th 2025, 3:15:30 pm"
};
