import {test} from "@playwright/test";

test.describe("Smoke Test", () => {

    test.beforeAll(async () => {
        console.log("Before all the test cases")
    })

    test.afterAll(async () => {
        console.log("After all the test cases")
    })

    test.beforeEach(async () => {
        console.log("Before each test case")
    })

    test.afterEach(async () => {
        console.log("After each test case")
    })

    test("Test Case 1", async () =>{
        console.log("Test Case 1 is executed")

    });

    test("Tset Case 2", async () =>{
        console.log("Test Case 2 is executed")
    })

    test("Tset Case 3", async () =>{
        console.log("Test Case 3 is executed")
    });
});