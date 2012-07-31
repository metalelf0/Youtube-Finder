describe("Padding", function() {

  it("should be able to pad a number with n digits - normal scenario", function() {
    expect(pad(1, 2)).toEqual('01');
  });

  it("should be able to pad a number with n digits - limit scenario", function() {
    expect(pad(1, 1)).toEqual('1');
  });

  it("should keep number intact even if it has more digits than required padding", function() {
    expect(pad(10000, 2)).toEqual('10000');
  });

});
