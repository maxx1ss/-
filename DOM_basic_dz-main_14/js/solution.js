// let arrayOfLiTags = document.querySelector(".ulClass").children;

// let liTextContentArray = [];
// for (let node of arrayOfLiTags) {
//   console.log(node);

//   liTextContentArray.push(node.textContent);
// }

// console.log(liTextContentArray);

let users = {
  name: "vova",
  next: {
    name: "alex",
    next: {
      name: "ivan",
      next: {
        name: "ann",
        next: {
          name: "diana",
        },
      },
    },
  },
};

function linkedList(obj) {
  console.log(obj.name);
  if (!obj.next) {
    return;
  }

  linkedList(obj.next);
}

linkedList(users);
