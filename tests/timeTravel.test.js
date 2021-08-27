const createHistory = require("./timeTravel");

it("回退：undo ", () => {
  const history = createHistory();

  history.push({ num: 1 });
  history.push({ num: 2 });
  history.push({ num: 3 });

  history.undo();

  expect(history.present.num).toBe(2);
});
