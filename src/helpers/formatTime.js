const formatTime = (value) => {
  const date = new Date(value);
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Bangkok",
  });
};

export default formatTime;
