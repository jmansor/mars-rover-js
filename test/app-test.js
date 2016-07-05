import chai, { expect } from "chai";
import set from "mocha-let";
import App from "../app/main";

describe("App", function(){
  set("props", "test");
  set("app", function(){
    return App.initialize({props: this.props});
  });

  it("returns the props", function(){
    expect(this.app.myProps()).to.equal("test");
  });
});
