function exportToJSON() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Scoring');
  var data = sheet.getDataRange().getValues();
  var headers = data[1];

  // Initialize an array to hold the JSON objects
  var jsonArray = [];

  // Loop through the rows of data starting from row 2 (index 1) to skip headers
  for (var i = 2; i < data.length; i++) {
    var rowData = data[i];
    var jsonObject = {};
    var metadata = {};

    // Initialize variables for required fields
    var input = '';
    var ideal = '';

    // Loop through each column in the row
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

    // Add 'input' and 'ideal' to the JSON object
    jsonObject['input'] = input;
    jsonObject['ideal'] = ideal;

    // Add metadata to the JSON object
    jsonObject['metadata'] = metadata;

    // Add the JSON object to the array
    jsonArray.push(jsonObject);
  }

  // Generate JSON Lines string
  var jsonLines = jsonArray.map(function(obj) {
    return JSON.stringify(obj);
  }).join('\n');

  // Generate pretty JSON string for readability
  var prettyJson = JSON.stringify(jsonArray, null, 2);

  // Save the JSON Lines to a file in Google Drive
  var filenameJsonl = 'openai_eval_data.jsonl';
  var fileJsonl = DriveApp.createFile(filenameJsonl, jsonLines);

  // Save the pretty JSON to a file in Google Drive
  var filenameJson = 'openai_eval_data.json';
  var fileJson = DriveApp.createFile(filenameJson, prettyJson);

  // Provide links to the files
  Logger.log('JSON Lines file created: ' + fileJsonl.getUrl());
  Logger.log('JSON file created: ' + fileJson.getUrl());

  // Optionally, you can prompt the user to download the files
  SpreadsheetApp.getUi().alert('Files created:\nJSON Lines: ' + fileJsonl.getUrl() + '\nJSON: ' + fileJson.getUrl());
}