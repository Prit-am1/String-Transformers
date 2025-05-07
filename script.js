document.querySelector("#user-input").addEventListener("input", transformer);

function transformer(e) {
    const val = e.target.value;
    const target = (id) => {
        return document.querySelector(id).lastElementChild;
    }
    target("#lowercase").innerHTML = val.toLowerCase();
    target("#uppercase").innerHTML = val.toUpperCase();
    target("#camelcase").innerHTML = toCamelCase(val);
    target("#pascalcase").innerHTML = toPascalCase(val);
    target("#snakecase").innerHTML = val.toLowerCase().split(" ").filter(word => word !== "").join("_");
    target("#kebabcase").innerHTML = val.toLowerCase().split(" ").filter(word => word !== "").join("-");
    target("#trim").innerHTML = val.split(" ").join("");
}

const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .filter(word => word.trim() !== "")
      .map((word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");
  };
  
  const toPascalCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .filter(word => word.trim() !== "")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  };