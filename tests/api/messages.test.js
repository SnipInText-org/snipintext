const tar = require("../../api/messages.js");
let chrome = require("sinon-chrome");

test("Have to contain [in] method",function(){
  expect(typeof tar.select.in).toBe("function")
});
test("Have to contain [out] method",function(){
  expect(typeof tar.select.out).toBe("function")
});
