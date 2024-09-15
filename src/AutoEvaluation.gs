function customOnEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  
  // Define the columns to watch for changes
  var watchedColumns = {
    10: { promptCol: 11, responseCol: 12 }, // J, K, L
    13: { promptCol: 14, responseCol: 15 }, // M, N, O
    16: { promptCol: 17, responseCol: 18 }, // P, Q, R
    19: { promptCol: 20, responseCol: 21 }, // S, T, U
    22: { promptCol: 23, responseCol: 24 }, // V, W, X
    25: { promptCol: 26, responseCol: 27 }, // Y, Z, AA
    // Add more mappings if needed
  };

  var editedColumn = range.getColumn();
  var editedRow = range.getRow();
  
  // Ensure the edit is within the watched columns and rows >= 3
  if (editedRow >= 3 && editedColumn in watchedColumns) {
    var promptCol = watchedColumns[editedColumn].promptCol;
    var responseCol = watchedColumns[editedColumn].responseCol;

    // Get the prompt value from the corresponding column
    var prompt = sheet.getRange(editedRow, promptCol).getValue();
    Logger.log("Prompt: " + prompt);
    
    // Call the OpenAI API with the prompt
    var response = callOpenAI(prompt);
    
    // Write the response in the corresponding column
    Logger.log("Writing response to Row: " + editedRow + ", Column: " + responseCol);
    sheet.getRange(editedRow, responseCol).setValue(response);
  } else {
    Logger.log("Edit outside watched columns or rows.");
  }
}

// Function to call OpenAI API
function callOpenAI(prompt) {
  var apiKey = ‘your-api-key; 
  var url = 'https://api.openai.com/v1/chat/completions';
  
// Payload for GPT-4 (chat-based)
  var payload = {
    'model': 'gpt-4o-2024-08-06', // Use GPT-4 or gpt-4-turbo
    'messages': [
      {'role': 'system', 'content': 'You are a helpful assistant.'}, // Optional system message
      {'role': 'user', 'content': prompt} // User message
    ],
    'max_tokens': 150
  };
  
  var options = {
    'method': 'post',
    'headers': {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload)
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var json = JSON.parse(response.getContentText());
    
    // Log the entire response for debugging
    Logger.log(json);
    
    // Check if the response has a message in the choices array
    if (json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content) {
      return json.choices[0].message.content; // Return the assistant's message content
    } else {
      return "Error: Unexpected response structure.";
    }
    
  } catch (error) {
    Logger.log(error.toString()); // Log detailed error message
    return "Error: Unable to fetch response.";
  }
}
