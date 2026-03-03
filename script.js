let listBook = [
  {
    id: "B1",
    name: "Tuổi Trẻ Và Những Ước Mơ",
    prices: 80000,
    author: "Nguyễn Văn A",
    category: "Tiểu thuyết",
  },
  {
    id: "B2",
    name: "Đắc Nhân Tâm",
    prices: 100000,
    author: "Trần Thị B",
    category: "Tiểu thuyết",
  },
  {
    id: "B3",
    name: "Lịch Sử Việt Nam",
    prices: 170000,
    author: "Phạm Văn C",
    category: "Lịch Sử",
  },
  {
    id: "B4",
    name: "Khoa Học Trí Tuệ Nhân Tạo",
    prices: 280000,
    author: "Phùng Văn D",
    category: "Khoa Học",
  },
  {
    id: "B5",
    name: "Kinh Tế Và Phát Triển",
    prices: 80000,
    author: "Nguyễn Văn A",
    category: "Kinh Tế",
  },
];

// Case 1: hàm thêm sách
let createNewBook = () => {
  let id;
  let name;
  let prices;
  let author;
  let category;
  let isValid = false;

  // Kiểm tra ID đã tồn tại hay chưa
  do {
    id = prompt("Mời bạn nhập ID sách");
    if (!id || id.trim() == "") {
      alert("Bạn không được để trống ID!");
      continue;
    }

    let findID = listBook.find((book) => {
      return book.id == id;
    });

    if (findID) {
      alert("ID đã tồn tại mời bạn nhập ID khác!");
      continue;
    }
    break;
  } while (!isValid);

  // Kiểm tra tên sách đã tồn tại hay chưa
  do {
    name = prompt("Mời bạn nhập tên sách");
    if (!name || name.trim() == "") {
      alert("Bạn không được để trống tên sách!");
      continue;
    }

    let findName = listBook.find((book) => {
      return book.name == name;
    });

    if (findName) {
      alert("Sách đã tồn tại trong kho");
      continue;
    }
    break;
  } while (!isValid);

  // Kiểm tra tính hợp lệ của giá
  do {
    prices = +prompt("Mời bạn nhập vào giá của sách");
    if (isNaN(prices) || prices <= 0) {
      alert("Dữ liệu bạn nhập không hợp lệ!");
      continue;
    }
    break;
  } while (!isValid);

  // validate dữ liệu tác giả
  do {
    author = prompt("Mời bạn nhập tên tác giả");
    if (!author || author.trim() == "") {
      alert("Bạn không được để trống tên tác giả!");
      continue;
    }
    break;
  } while (!isValid);

  // Kiểm tra thể loại
  do {
    category = prompt(
      "Mời bạn nhập vào thể loại sách(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
    );
    if (!category || category.trim() == "") {
      alert("Bạn không được để trống thể loại sách!");
      continue;
    }

    let findCategory = listBook.find((book) => {
      return book.category == category;
    });

    if (!findCategory) {
      alert(
        "Thể loại của bạn phải hợp lệ(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
      );
      continue;
    }
    break;
  } while (!isValid);

  let newBook = {
    id: id,
    name: name,
    prices: prices,
    author: author,
    category: category,
  };

  listBook.push(newBook);
  alert(`Đã thêm sách thành công ${newBook.name}`);
};

// case 2: Hàm xóa sách
let deleteBook = (listBook) => {
  let searchBookName = prompt("Nhập vào tên sách bạn muốn xóa!");
  let index = listBook.findIndex((book) => {
    return book.name.toLowerCase() === searchBookName.toLowerCase();
  });

  if (!index) {
    alert("Không tìm thấy tên sách!");
  } else {
    let confirm = prompt("Bạn có chắc chắn muốn xóa sách không(Y/N)");

    if (confirm == "Y") {
      listBook.splice(index, 1);
      alert(`Đã xóa sách ${searchBookName} khỏi kho thành công`);
    } else {
      alert(`Đã hủy thao tác xóa sách`);
    }
  }
};

// Case 3: Hiển thị danh sách sách
let displayListBook = (listBook) => {
  let display = [];
  listBook.forEach((book) => {
    let books = `ID: ${book.id} | Name: ${book.name} | Prices: ${book.prices} | Author: ${book.author} | Category: ${book.category}`;
    display.push(books);
  });

  alert(display.join("\n"));
};

// Case 4: Cập nhật sách
let updateBook = (listBook) => {
  let isValid = false;
  let nameBook = prompt("Nhập tên sách muốn cập nhật");
  let findName = listBook.find((book) => {
    return book.name == nameBook;
  });

  if (!findName) {
    alert("Sách không được tìm thấy trong kho");
  } else {
    do {
      newPrices = +prompt("Mời bạn nhập vào giá của sách");
      if (isNaN(newPrices) || newPrices <= 0) {
        alert("Dữ liệu bạn nhập không hợp lệ!");
        continue;
      }
      break;
    } while (!isValid);

    // validate dữ liệu tác giả
    do {
      newAuthor = prompt("Mời bạn nhập tên tác giả");
      if (!newAuthor || newAuthor.trim() == "") {
        alert("Bạn không được để trống tên tác giả!");
        continue;
      }
      break;
    } while (!isValid);

    // Kiểm tra thể loại
    do {
      newCategory = prompt(
        "Mời bạn nhập vào thể loại sách(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
      );
      if (!newCategory || newCategory.trim() == "") {
        alert("Bạn không được để trống thể loại sách!");
        continue;
      }

      let findCategory = listBook.find((book) => {
        return book.category == newCategory;
      });

      if (!findCategory) {
        alert(
          "Thể loại của bạn phải hợp lệ(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
        );
        continue;
      }
      break;
    } while (!isValid);

    let index = listBook.findIndex((book) => {
      return book.name.toLowerCase() === searchBookName.toLowerCase();
    });
    if (index) {
      listBook[index].prices = newPrices;
      listBook[index].author = newAuthor;
      listBook[index].category = newCategory;
    }

    alert("Đã cập nhật sách thành công");
  }
};

// Case 5: Tìm sách theo tên or tác giả
let findBookByNameOrAuthor = (listBook) => {
  let choice = prompt("Bạn muốn tìm liếm sách theo tên(N) hay theo tác giả(A)");
  if (choice == "N") {
    let nameBook = prompt("Nhập tên sách muốn tìm");
    let findName = listBook.find((book) => {
      return book.name == nameBook;
    });

    if (!findName) {
      alert("Sách không được tìm thấy trong kho");
    } else {
      alert(`${nameBook} có trong kho`);
    }
  } else {
    let nameAuthor = prompt("Nhập tên tác giả sách muốn tìm");
    let findName = listBook.find((book) => {
      return book.author == nameAuthor;
    });

    if (!findName) {
      alert("Sách không được tìm thấy trong kho");
    } else {
      alert(findName);
    }
  }
};

let choice;

// Case 6: Lọc sách
let filterBookByCategory = (listBook) => {
  let isValid = false;
  do {
    let filterCategory = prompt(
      "Mời bạn nhập vào thể loại sách muốn lọc(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
    );
    if (!filterCategory || filterCategory.trim() == "") {
      alert("Bạn không được để trống thể loại sách!");
      continue;
    }

    let findCategory = listBook.find((book) => {
      return book.category == filterCategory;
    });

    if (!findCategory) {
      alert(
        "Thể loại của bạn phải hợp lệ(Tiểu thuyết/Lịch sử/Khoa học/Kinh tế)",
      );
      continue;
    }

    let filterBook = listBook.filter((book) => {
      return book.category == filterCategory;
    });

    let display = [];
    filterBook.forEach((book) => {
      let books = `ID: ${book.id} | Name: ${book.name} | Prices: ${book.prices} | Author: ${book.author} | Category: ${book.category}`;
      display.push(books);
    });

    alert(display.join("\n"));
    break;
  } while (!isValid);
};

// Case 7: Hàm tính tổng số tiền
let totalPrices = (listBook) => {
  let total = listBook.reduce((acc, cur) => {
    return (acc += cur.prices);
  }, 0);
  alert(`Tổng giá sách trong kho là: ${total}`);
};

// Case 8: Sắp xếp theo giá
let sortByPrices = (listBook) => {
  let confirm = prompt("Bạn muốn sắp xếp theo tăng dần(T) hay giảm dần (G)");
  if (confirm == "T") {
    let sortT = listBook.sort((a, b) => {
      return a.prices - b.prices;
    });
    let display = [];
    sortT.forEach((book) => {
      let books = book.prices;
      display.push(books);
    });

    alert(display.join("\n"));
  } else {
    let sortT = listBook.sort((a, b) => {
      return b.prices - a.prices;
    });

    let display = [];
    sortT.forEach((book) => {
      let books = book.prices;
      display.push(books);
    });

    alert(display.join("\n"));
  }
};

do {
  choice = +prompt(`
====================================
                        HỆ THỐNG QUẢN LÝ SÁCH
====================================
1. Thêm sách
2. Xóa sách
3. Hiển thị danh sách sách
4. Cập nhật thông tin sách
5. Tìm sách
6. Lọc Sách theo thể loại
7. Tổng giá trị kho sách
8. Sắp xếp sách theo giá
9. Tìm kiếm sách theo khoảng giá
0. Thoát
====================================
`);

  switch (choice) {
    case 1:
      createNewBook();
      break;
    case 2:
      deleteBook(listBook);
      break;
    case 3:
      displayListBook(listBook);
      break;
    case 4:
      updateBook(listBook);
      break;
    case 5:
      findBookByNameOrAuthor(listBook);
      break;
    case 6:
      filterBookByCategory(listBook);
      break;
    case 7:
      totalPrices(listBook);
      break;
    case 8:
      sortByPrices(listBook);
      break;
    case 9:
      break;
    case 0:
      alert("Thank For User!");
      break;
    default:
      alert("Lựa chọn không hợp lệ vui lòng lựa chọn(0-9)!");
      break;
  }
} while (choice != 0);
