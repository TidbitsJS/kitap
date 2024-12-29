interface Book {
  id: string;
  bookName: string;
  bookCover: string | ImageSourcePropType;
  rating: number;
  language: string;
  pageNo: number;
  author: string;
  genre: string[];
  borrows: string;
  totalCopies: string;
  availableCopies: string;
  description: string;
  backgroundColor: string;
}

interface BorrowedBook extends Book {
  borrowId: string;
  borrowDate: string;
  dueDate: string;
  returnDate: string | null;
  status: "Borrowed" | "Returned" | "Overdue";
}
