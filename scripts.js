//creating class with constructor(only runs once)
class Symbol {
  //constructor which adds properties to the class
    constructor(aName, aEmail, aImage, aRandom) {
      this.name = aName;
      this.email = aEmail;
      this.image = aImage;
      this.random = aRandom;
    }
  
    //creating function that will add an li and several properties to it
    createListItem() {
      //create li
      const li = document.createElement("li");
      //make li text equal the name of the symbol entered
      li.textContent = this.name;
      //adding eventListener upon click that runs an annonymous function. When the li that's been created is clicked then it changes the source of the mainImage <img> tag to the image the user entered. ALSO it changes the textContent(similar to innerHTML, but more secure when working with user inputs) of <p> with id of emailDisplay to the input the user puts for email. 
      li.addEventListener("click", () => {
        document.getElementById("mainImage").src = this.image;
        document.getElementById("emailDisplay").textContent = this.email;
      });
      //returns all the information about the li we just established whenever createListItem is called
      return li;
    }
  }
  
  //declaring symbolList equal to the ul 
  const symbolList = document.getElementById("symbolList");
  //creating array. Not necessary, but I wanted to put it in
  const symbolArray = [];
  
  //adding eventListener to myForm so whenever the submit button is clicked then it will run the function. First it uses (e) to prevent the default behavior. The default behavior of a form submitting is to reload and e.preventDefault will stop that from happening. 
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    //name, email, and imageSource are equal to whatever the user inputs.
    const name = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const imageSource = document.getElementById("imageSource").value;
    const randomness = document.getElementById("randomNothing").value;

    //experiment
    document.getElementById("nothingDisplay").textContent = randomness;
  
    //creating new instance of the class Symbol and calling it symbolly
    const symbolly = new Symbol(name, email, imageSource, randomness);
    //pushing information gathered from symbolly(class Symbol) to useless array(symbolArray)
    symbolArray.push(symbolly);
  

    //calling createListItem() function from class Symbol 

    //**I removed this unique variable(addSymbol) because less 'one-time-use' variables make things easier to understand.*/
    // const addSymbol = symbolly.createListItem();

    //appends all the information gathered to symbolList(ul with id of symbolList)
    symbolList.appendChild(symbolly.createListItem());
  });


