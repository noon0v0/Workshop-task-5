let table;
let select_option;

function preload(){
  table = loadTable("fruits.csv", "csv", "header");
  apple = loadImage("images/apple.jpg");
  banana = loadImage("images/banana.jpg");
  melon = loadImage("images/melon.jpg");
  orange = loadImage("images/orange.jpg");
  pear = loadImage("images/pear.jpg");
}

function setup() {
  createCanvas(460, 1000);
  textAlign(CENTER, CENTER);

  dropdown = createSelect();
  dropdown.position(100, 40 + 20 * (1 + table.getRowCount()));
  for(let i = 0; i < table.columns.length; i++){
    if(i != 0) dropdown.option(table.columns[i]);
  }
  
  dropdown.changed(on_dropdown_change)
}

function draw() {
  background(220);
  text("Fruits table", width / 2, 20);
  
  show_by_text(40);
  text("Select a fruit:", 40, 40 + 20 * (1 + table.getRowCount()) + 10)
  
  show_by_shape(40 + 20 * (2 + table.getRowCount()), select_option);
  show_by_image(40 + 20 * (2 + table.getRowCount()) + 350, select_option);
}

function show_by_text(position_y) {
  let rect_width = width / table.getColumnCount();
  let rect_height = 20;
  let header = table.columns;

  for(let i = 0; i < header.length; i++){
    text(header[i], rect_width / 2 + rect_width * i, position_y);
  }
  select_option = dropdown.value();

  for(let i = 0; i < table.getRowCount(); i++){
    for(let j = 0; j < table.getColumnCount() ; j++){
      noFill();
      rect(j * rect_width, i * rect_height + position_y + 10, rect_width, rect_height);
      fill(0);
      text(table.getString(i, j), rect_width / 2 + rect_width * j, position_y + 10 + rect_height / 2 + rect_height * i);
    }
  }
}

function show_by_shape(position_y, fruit){
  let rect_width = width / table.getColumnCount();
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("Week");
    let count_fruit = row.get(fruit);
    text(week, x * rect_width + 45, position_y + 450);
    fill(255, 0, 0);
    rect(x * rect_width + 30, position_y + 420, 30, -count_fruit * 100);
    fill(0);
  }
}

function show_by_image(position_y, fruit){
  let rect_width = width / table.getColumnCount();
  switch(fruit){
    case "Apples":
      img = apple;
      break;
    case "Bananas":
      img = banana;
      break;
    case "Melons":
      img = melon;
      break;
    case "Oranges":
      img = orange;
      break;
    case "Pears":
      img = pear;
      break;
  }
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("Week");
    let count_fruit = row.get(fruit);
    if (count_fruit > 0){
      for (y = 0; y < count_fruit; y++){
        image(img, x * rect_width + 30, position_y + 300 - y * 50, 30, 30);
      }
    }
  }
}

function on_dropdown_change(){
  select_option = dropdown.value();
}