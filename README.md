##  ১. TypeScript-এ `any`, `unknown` এবং `never` টাইপের মধ্যে পার্থক্য

TypeScript আমাদেরকে স্ট্যাটিক টাইপিং এর সুবিধা দেয়। কখন কোন টাইপ ব্যবহার করা উচিত তা বোঝা গুরুত্বপূর্ণ।

###  `any`
- `any` এমন একটি টাইপ যা TypeScript-এর টাইপ-চেকিংকে বন্ধ করে দেয়।
- কোনো ভ্যারিয়েবলের টাইপ জানা না থাকলে বা যেকোনো ডেটা ধারণ করতে চাইলে `any` ব্যবহার করা হয়।

**উদাহরণ:**
```ts
let data: any = "Hello";
data = 100;
data = true;
```


### `unknown`

-   `unknown` ব্যবহার করা `any`-এর থেকে নিরাপদ ।
-   এটি যেকোনো মান ধারণ করতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করা বাধ্যতামূলক।
    

**উদাহরণ:**

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

```

### `never`

-   `never` টাইপ সেই ভ্যারিয়েবল বা ফাংশনের জন্য ব্যবহৃত হয় যেগুলোর কখনই কোনো মান থাকবে না বা সেই ফাংশন হতে কখনো কিছু রিটার্ন হবে না।
-   সাধারণত এটি এমন ফাংশনে দেখা যায় যা কখনো রিটার্ন করে না (যেমন: error throw করে )।
    

**উদাহরণ:**

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}

```



## ২. TypeScript-এ Enums এর ব্যবহার কী? Numeric ও String Enum-এর উদাহরণ

Enums (Enumeration) হলো নামযুক্ত কনস্ট্যান্টগুলোর একটি সেট তৈরি করার সহজ উপায়। এটি কোড সংগঠিত করতে এবং ম্যাজিক নাম্বার বা স্ট্রিং এড়াতে সাহায্য করে।

###  Numeric Enum

-   ডিফল্টভাবে Enum-এর মান ০ থেকে শুরু হয়।
-   শুরুর মান কাস্টমাইজ করা যায়।
    

**উদাহরণ:**

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up);     // 1
console.log(Direction.Right);  // 4

```

### String Enum

-   এখানে প্রতিটি Key কে একটি স্ট্রিং ভ্যালু দিতে হয়।
-   ডিবাগিং ও readability-এর জন্য বেশ উপকারী।
    

**উদাহরণ:**

```ts
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

console.log(Status.Success); // "SUCCESS"

```
