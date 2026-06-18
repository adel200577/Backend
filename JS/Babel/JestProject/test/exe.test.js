const {
  gte,
  welcomeMessage,
  List,
  user,
  login,
  calculateDiscount,
} = require("..//exe");
const service = require("..//service");
//gte test
describe("gte", () => {
  it("should return true if a is greater than b", () => {
    expect(gte(50, 49)).toBe(true);
  });

  it("should return true if a is equal to b", () => {
    expect(gte(50, 50)).toBe(true);
  });

  test("should return false if a is less than b", () => {
    expect(gte(49, 50)).toBe(false);
  });
});

//string test
describe("welcomeMessage", () => {
  it("Should return a welcome message containing a name", () => {
    expect(welcomeMessage("Adel")).toContain("Adel");
  });
});

//Array test
describe("List", () => {
  it("should pass if it has an F14", () => {
    expect(List()).toContain("F14");
  });
});

//object test
describe("user", () => {
  it("should return the user properly", () => {
    expect(user()).toEqual({ id: 1, name: "Adel" });
  });
  it("should return the user properly", () => {
    expect(user()).toMatchObject({ name: "Adel" });
  });
  it("should return the user properly", () => {
    expect(user()).toHaveProperty("name", "Adel");
  });
  it("should return the user properly", () => {
    expect(user()).toHaveProperty("id");
  });
});

//ThrowErrortest
describe("login", () => {
  it("should throw error if password is wrong", () => {
    expect(() => {
      login("8965");
    }).toThrow();
  });
  it("should return token if password is correct ", () => {
    expect(login("1234")).toHaveProperty("token");
  });
});

//mock function
describe("calculateDiscount", () => {
  beforeEach(() => {
    service.userEmail = jest.fn();
  });
  it("should return 10 if purchasecount is greater than 3", () => {
    service.userID = jest.fn().mockReturnValue({
      id: 4,
      name: "john",
      purchasecount: 7,
    });
    expect(calculateDiscount()).toBe(10);
  });
  it("should return 0 if purchasecount is greater than 3", () => {
    service.userID = jest.fn().mockReturnValue({
      id: 6,
      name: "jack",
      purchasecount: 2,
    });
    expect(calculateDiscount()).toBe(0);
  });

  it("should send an email", () => {
    service.userID = jest.fn().mockReturnValue({
      id: 6,
      name: "james",
      purchasecount: 10,
    });
    calculateDiscount();
    expect(service.userEmail).toHaveBeenCalled();
    expect(service.userEmail.mock.calls[0][0]).toBe('james');
    expect(service.userEmail.mock.calls[0][1]).toContain('10 percent');
  });
});

//TDD(TestDrivenDevelopment)
//Write a test and develop a code accordingly!
