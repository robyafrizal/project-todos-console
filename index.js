const todos = [
  "Learning new programming language",
  "Take a rest",
  "Repeat your Coding",
  "Watching a new movie"
];

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    console.log(`What do you want to do : \n [${index + 1}] - ${item}`);
  }
};
showTodos(todos);
console.log("--------Next Sample---------");

const searchTodos = (data, textSearch) => {
  let newTodos = [];

  for (let i = 0; i < data.length; i++) {
    const items = data[i];
    const lowerCasedItems = items.toLowerCase();
    const lowerCasedText = textSearch.toLowerCase();

    if (lowerCasedItems.includes(lowerCasedText)) {
      newTodos.push(items);
    }
  }
  return newTodos;
};
showTodos(searchTodos(todos, "NEW"));
console.log("\n");
showTodos(searchTodos(todos, "rest"));

console.log("--------Next Sample---------");

const myTodos = [
  {
    id: 1,
    text: "Learning object Global",
    tags: ["learn", "programming"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Take a meals",
    tags: ["snack"],
    favorite: true,
    completed: false
  },
  {
    id: 3,
    text: "Travelling to Bali",
    favorite: false,
    completed: true
  }
];
const showMyTodos = listData => {
  for (let a = 0; a < listData.length; a++) {
    const activity = listData[a];

    let result = "";
    result += activity.completed ? `☑` : "x";
    result += ` ${activity.text} `;
    result += activity.favorite ? "*" : "x";

    console.log(result);
  }
};
showMyTodos(myTodos);
console.log("--------Next Sample---------");

const searchTodosText = (item, searchText) => {
  let newTodos = [];
  for (let c = 0; c < item.length; c++) {
    const data = item[c];
    const lowerCasedDataText = data.text.toLowerCase();
    const lowerCasedSearchText = searchText.toLowerCase();

    if (lowerCasedDataText.includes(lowerCasedSearchText)) {
      newTodos.push(data);
    }
  }
  return newTodos;
};
const findTodos = searchTodosText(myTodos, "take");
showMyTodos(findTodos);
