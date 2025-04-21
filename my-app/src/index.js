
function inputFunction3() {
    var valueInput = inputBox.value;
    const parent = document.getElementsByTagName("body");
    const child = createIfNotElementExist("p", parent[0], "output");
    child.textContent = valueInput;
    vowelCount(valueInput, parent[0]);
    consonantCount(valueInput, parent[0])
  }

function createIfElementExist(tagName, parent, id) {
    const element = document.getElementById(id);
    if (!element) {
      const outputTag = document.createElement(tagName);
      outputTag.class = id;
      parent.appendChild(outputTag)
      return outputTag;
    }
    return element;
  }

  function vowelCount(str, parent) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    if (vowelCount > 0) {
      const vowelChild = createIfElementExist("p", parent, "vowelCount");
      vowelChild.textContent = "Vowelcount" + vowelCount;
    }
  }
  
  
function consonantCount(str, parent) {
    const vowels = "aeiouAEIOU";
    let consonantCount = 0;
    let regex=[0-9]
    for (let char of str) {
      if (!vowels.includes(char) ) {
        consonantCount++;
      }
    }
    if (consonantCount > 0) {
      const consonantChild = createIfElementExist("p", parent, "consonantCount");
      consonantChild.textContent = "ConsonantCount: " + consonantCount;
    }
  }
  
  