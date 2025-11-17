const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return "Invalid input type";
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arr: Item[]): Item[] => {
  return arr.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (obj: Book): void => {
  const { title, author, publishedYear, isAvailable } = obj;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const uniqueArray: T[] = [];
  const mixedArray = [...arr1, ...arr2];

  const isUnique = (value: T): boolean => {
    for (let i = 0; i < uniqueArray.length; i++) {
      if (uniqueArray[i] === value) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < mixedArray.length; i++) {
    if (isUnique(mixedArray[i])) {
      uniqueArray.push(mixedArray[i]);
    }
  }

  return uniqueArray;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  const totalPrice = products.reduce((acc, curr): number => {
    const { price, quantity, discount } = curr;

    const validDiscount =
      discount !== undefined ? Math.min(Math.max(discount, 0), 100) : 0;

    acc += price * quantity - price * quantity * (validDiscount / 100);

    return acc;
  }, 0);

  return totalPrice;
};
