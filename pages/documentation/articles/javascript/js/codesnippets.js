const jsCode = document.querySelector(".jsOne");
jsCode.textContent = `export const getAPIData = async function (url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
`;

const jsCodeTwo = document.querySelector(".jsTwo");
jsCodeTwo.textContent = `const myObject = {
    id: 123,
    name: "Dylan",
    myArr: [1, 2, 3],
    info: () => {
        console.log(myObject.name)
    }
};

myObject.info();
// output: Dylan
`;

const jsCodeThree = document.querySelector(".jsThree");
jsCodeThree.textContent = `const myArr = [
    "One",
    "two",
    "three",
    "four",
    "five"
];

myArr.forEach((el, i, arr) => {
    console.log(el)
    // output: one
    // output: two
    // output: three
    // output: four
    // output: five
})
`;
