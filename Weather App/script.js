const courses = [1, 2, 3, 4];
const res = courses.map(course => {
    return `<li>${course}</li>`;
});
console.log(res);
const html = `<ul>${res.join("\n")}$</ul>`
const output = document.querySelector(`#op`);
output.innerHTML = html;
