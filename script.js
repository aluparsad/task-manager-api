window.addEventListener("DOMContentLoaded", (event) => {
    const submitBtn = document.getElementById("task-upload-btn");
    const taskInput = document.getElementById("task-input");

    submitBtn.addEventListener("click", () => {

        const text = taskInput.value;
        taskInput.value = "";
        test("http://localhost:80/api/v1/tasks/");
    });
});

function test(url) {
    const req = new Request(url);
    fetch(req)
        .then((response) => 
        console.log("response.json()"))
        .then((data) =>
        console.log(data))
        .catch(() =>
        console.log("Booo"));
}