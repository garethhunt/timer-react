var formatTime = function (val, showMins) {
  var minutes = showMins ? Math.floor(val / 60)+':' : 0;
  var seconds = showMins ? val % 60 : val;
  var result = showMins ? minutes : '';
  return result + (seconds<10 ? '0':'') + seconds;
};

export default formatTime;
