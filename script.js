/* URL structure is: https://www.healthcare.gov/api/states.json */
var types = ['articles', 'blog', 'questions', 'glossary', 'states', 'topics']
var baseURL = 'https://www.healthcare.gov/api/'

/* Receive responses for each type */
/*
$.each(types, function(idx, type){
  $.getJSON(baseURL + type + '.json', function(data){
    console.log("Received Data for type:", type, data);
    $.each(data, function(key, val){
    });
  });
});
*/

/* Response for all states */
/* file florida-en.json is the raw JSON object for Florida in english. */
$.getJSON(baseURL + 'states.json', function(data){
  console.log("Received Data for states:", data.states);

  $.each(data.states, function(idx, obj){
    if (obj.title == 'Florida' && obj.lang == 'en') {
      console.log('state:', obj);
      $('.container').append(obj.content);
    }
  });
});
