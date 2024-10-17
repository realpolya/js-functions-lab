const sizes = ['tiny', 'small', 'medium', 'large', 'x-large']

class Mailbox {

  constructor(boxholder, boxSize, array) {
      
      this._id = this.incrementId(array);
      this.boxholder = boxholder;
      this.boxSize  = boxSize;

  }

  incrementId(array) {

      return array.length + 1;

  }

}

const example = [];
const mailbox1 = new Mailbox('Liza', sizes[0], example);
example.push(mailbox1);
const mailbox2 = new Mailbox('Dima', sizes[3], example);
example.push(mailbox2);

export {sizes, Mailbox, example}