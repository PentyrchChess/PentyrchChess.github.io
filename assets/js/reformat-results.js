let namesRegex = /(?:[^\d\s\.\-]+\s){0,}[^\d\.\s\-]+/g;
let scoresRegex = /(?<!\d)\d(?!\d)\.?\d?/g;
var dateFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

function formatResults (resultsText, round, date, isHome){

    
    var formattedDate = date.toLocaleDateString('en-GB', dateFormatOptions);

    let names = resultsText.match(namesRegex);
    let scores = resultsText.match(scoresRegex);

    let result = [];
    names.forEach(function(name, i){
        result[i] = {
            name: name,
            score: scores[i]
        };
    });
    let formatted = `
- round: ${round}
  date: ${formattedDate}
  home: ${isHome}
  opponent: ${isHome ? result[1].name : result[0].name}
  matches:
  - ${result[2].name}: ${result[2].score}
    ${result[3].name}: ${result[3].score}
  - ${result[4].name}: ${result[4].score}
    ${result[5].name}: ${result[5].score}
  - ${result[6].name}: ${result[6].score}
    ${result[7].name}: ${result[7].score}
  - ${result[8].name}: ${result[8].score}
    ${result[9].name}: ${result[9].score}
  - ${result[10].name}: ${result[10].score}
    ${result[11].name}: ${result[11].score}
`;
    return formatted;
};



/*

Example 1:
       Amateurs        4 - 1   Rooks
1796    W Harwood       1 - 0   B Hurn  1559
1830    S Lindsay       1 - 0   L J V Rensburg  1574
1640    E Chwieseni     1 - 0   M Joslin        1444
        D R Lewis       0 - 1   D Jones 1321
        R Livermore     1 - 0   D Roberts       1356

Example 2:
        Bridgend B      1 - 4   Amateurs
1569    A Baker 0 - 1   W Harwood       1796
1550    C Peters        1 - 0   S Lindsay      
1393    W James 0 - 1   E Chwieseni     1640
1086    A Williams      0 - 1   R Livermore    
1085    J Edwards       0 - 1   M Maguire       1596
*/


// taken from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};
