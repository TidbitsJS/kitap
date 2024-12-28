import {
  bookAtomicHabits,
  bookCrackingTheCodingInterview,
  bookEloquentJavaScript,
  bookReactInAction,
} from "./books";

export const myBooks = [
  {
    ...bookAtomicHabits,
    borrowId: "1",
    borrowDate: "2023-01-01",
    dueDate: "2023-01-15",
    returnDate: "2023-01-10",
    status: "Borrowed",
  },
  {
    ...bookCrackingTheCodingInterview,
    borrowId: "2",
    borrowDate: "2023-01-02",
    dueDate: "2023-01-16",
    returnDate: "2023-01-11",
    status: "Borrowed",
  },
  {
    ...bookEloquentJavaScript,
    borrowId: "3",
    borrowDate: "2023-01-03",
    dueDate: "2023-01-17",
    returnDate: "2023-01-12",
    status: "Borrowed",
  },
  {
    ...bookReactInAction,
    borrowId: "4",
    borrowDate: "2023-01-04",
    dueDate: "2023-01-18",
    returnDate: "2023-01-13",
    status: "Borrowed",
  },
];
