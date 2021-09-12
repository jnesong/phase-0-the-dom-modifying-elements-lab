// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
const newContent = document.createTextNode("Jenny is the champion");
newHeader.appendChild(newContent);



/*
it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
    expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
  });

  it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
    expect(newHeader.id, "Make sure you create an <h1> with id 'victory'").eql('victory')
  });

  it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
    expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
  });
  */
