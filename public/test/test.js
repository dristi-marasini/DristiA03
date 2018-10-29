



QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});


QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(App.calcuArea(5, 5), 25, 'Tested with two relatively small positive numbers');
    assert.equal(App.calcuArea(500, 500), 250000, 'Tested with two large positive numbers. ');
    assert.equal(App.calcuArea(0, 0), 0, 'Tested with two zeros. ');
    assert.equal(App.calcuArea(1, 0), 0, 'Tested with one zero among two numbers ');
  //  assert.equal(App.calcuArea(-5, -5), 1, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
   // assert.throws(function () { calcuArea('a', 'b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

