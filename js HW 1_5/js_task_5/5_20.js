// В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
    blacklistedEmails = [];
    
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    };
  
    blacklist(email) {
       this.blacklistedEmails.push(email);
    };
    
  isBlacklisted(email) {
     return this.blacklistedEmails.includes(email);
  }
    
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"
  
  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango.isBlacklisted("mango@mail.com")); // false
  console.log(mango.isBlacklisted("poly@mail.com")); // true
  