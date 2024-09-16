function exportToJSON() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Scoring'); // Not "Dataset"
  var data = sheet.getDataRange().getValues();
  var headers = data[1];
  var jsonArray = [];

  // Starting from row 3 (index 2) of "Scoring" Sheet
  for (var i = 2; i < data.length; i++) {
    var rowData = data[i];
    var jsonObject = {};
    var metadata = {};
    var input = '';
    var ideal = '';

    for (var j = 0; j < 7; j++) {
      var header = headers[j].trim();
      var value = rowData[j];

      // Map the columns to JSON fields
      if (header === 'Query') {
        input = value;
      } else if (header === 'Ideal Answer') {
        ideal = value.replace(/^"+|"+$/g, ''); // Remove extra quotes if present
      } else if (header === 'Category') {
        // Ensure the category field is not empty
        if (value === '') {
          value = 'Uncategorized'; // Or assign a default category if appropriate
        }
        metadata['category'] = value;
      } else if (header === 'Evaluation Criteria') {
        // Split multi-line string into an array and clean entries
        var criteriaArray = value.split('\n').map(function(item) {
          // Remove leading hyphens and spaces if present
          return item.replace(/^\s*-\s*/, '').trim();
        });
        metadata['evaluation_criteria'] = criteriaArray;
      } else if (header === 'Scoring Rubric') {
        // Process the scoring rubric into an object and clean descriptions
        var rubricLines = value.split('\n');
        var scoringRubric = {};
        rubricLines.forEach(function(line) {
          var parts = line.split(':');
          if (parts.length >= 2) {
            var score = parts[0].trim();
            var description = parts.slice(1).join(':').trim();
            // Remove leading hyphens and spaces from description if present
            description = description.replace(/^\s*-\s*/, '').trim();
            scoringRubric[score] = description;
          }
        });
        metadata['scoring_rubric'] = scoringRubric;
      } else {
        // Add other fields to metadata
        // Correct typo in 'additional_context' if present
        var key = header.toLowerCase().replace(/ /g, '_');
        if (key === 'aditional_context') {
          key = 'additional_context';
        }
        metadata[key] = value;
      }
    }

    jsonObject['input'] = input;
    jsonObject['ideal'] = ideal;
    jsonObject['metadata'] = metadata;
    jsonArray.push(jsonObject);
  }

  // Generate JSON Lines string
  var jsonLines = jsonArray.map(function(obj) {
    return JSON.stringify(obj);
  }).join('\n');

  // Generate pretty JSON string for readability
  var prettyJson = JSON.stringify(jsonArray, null, 2);

  var filenameJsonl = 'openai_eval_data.jsonl';
  var fileJsonl = DriveApp.createFile(filenameJsonl, jsonLines);
  var filenameJson = 'openai_eval_data.json';
  var fileJson = DriveApp.createFile(filenameJson, prettyJson);
  Logger.log('JSON Lines file created: ' + fileJsonl.getUrl());
  Logger.log('JSON file created: ' + fileJson.getUrl());
  SpreadsheetApp.getUi().alert('Files created:\nJSON Lines: ' + fileJsonl.getUrl() + '\nJSON: ' + fileJson.getUrl());
}