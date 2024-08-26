


// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/51.jpg', downloadLink: 'https://drive.google.com/drive/folders/1KN_yVpPuUgaqoSu7w3PB2h2nV9bpRTAi?usp=drive_link' },
    { imgSrc: '../assets/imgs/52.jpg', downloadLink: 'https://drive.google.com/drive/folders/1l38V6enypAgvXm4wzs2SNQkO5QBdxGm4?usp=drive_link' },
    { imgSrc: '../assets/imgs/53.jpg', downloadLink: 'https://drive.google.com/drive/folders/1wm5m63oyZemA8N7PZNnXpcrbHXx_y45M?usp=drive_link' },
    { imgSrc: '../assets/imgs/54.jpg', downloadLink: 'https://drive.google.com/drive/folders/1JWtNHO_XpB-X2gnftHedf5D8jlcy69Hw?usp=drive_link' },
    { imgSrc: '../assets/imgs/55.jpg', downloadLink: 'https://drive.google.com/drive/folders/1Cu5vYg1R0gmrFNU0sxjASgq_3ICeL-j3?usp=drive_link' },
    { imgSrc: '../assets/imgs/56.jpg', downloadLink: 'https://drive.google.com/drive/folders/1bAyZhh7qUTpPw23DoGQVP5hBx96Js9bO?usp=drive_link' },
    { imgSrc: '../assets/imgs/58.jpg', downloadLink: 'https://drive.google.com/drive/folders/1S6PhbE8gTn2UVP70ZK0FIgR8zuDST2bk?usp=drive_link' },

    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/59.jpg', downloadLink: 'https://drive.google.com/drive/folders/18rJIf1V6WJIAE648uEQLQ5s-9XEzlRzC?usp=drive_link' },
    { imgSrc: '../assets/imgs/60.jpg', downloadLink: 'https://drive.google.com/drive/folders/1Ra3UQNtNlxAbKr3rm_YLfjypXj7Talz3?usp=drive_link' },
    { imgSrc: '../assets/imgs/61.jpg', downloadLink: 'https://drive.google.com/drive/folders/14aQOnavmjEIgnbDMoWlE1sjGTaa-hqUk?usp=drive_link' },
    { imgSrc: '../assets/imgs/62.jpg', downloadLink: 'https://drive.google.com/drive/folders/1zte5yx8dOPmu2WSPjesZNPNGIDjAhpLo?usp=drive_link' },
    { imgSrc: '../assets/imgs/63.jpg', downloadLink: 'https://drive.google.com/drive/folders/1xgbZl9-fCVbmFI20wciFw_Gff49a273_?usp=drive_link' },
    { imgSrc: '../assets/imgs/64.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nb8SA-1m_8P83bgKSDHPaMlYenbNXsNJ?usp=drive_link' },
    { imgSrc: '../assets/imgs/65.jpg', downloadLink: 'https://drive.google.com/drive/folders/1xO5jQ5jFy6sa0wIOSniS8jXaq7-Uvdc5?usp=drive_link' },

    // يمكنك إضافةالمزيد من العناصر هنا للدف الأيسر
];


// ده الكود بدون للنكات  علشان لو حبيت تعمل تعديل ومش كل شويه تحذف للنك 
// // الكود الخاص بإنشاء الصناديق في الدف الأيمن
// const booksDataRight = [
//     { imgSrc: '../assets/imgs/51.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/52.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/53.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/54.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/55.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/56.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/57.jpg', downloadLink: '#' },
    
//     // يمكنك إضافة المزيد من العناصر هنا

//     // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
// ];


// // الكود الخاص بإنشاء الصناديق في الدف الأيسر
// const booksDataLeft = [
//     { imgSrc: '../assets/imgs/58.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/59.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/60.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/61.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/62.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/63.jpg', downloadLink: '#' },
//     { imgSrc: '../assets/imgs/64.jpg', downloadLink: '#' },   
//     // يمكنك إضافة المزيد من العناصر هنا للدف الأيسر
// ];


// توليد صناديق الكتب وإضافتها إلى عنصر الـ div بالـ id "content-left"
const contentLeftDiv = document.getElementById('content-left');

// توليد صناديق الكتب وإضافتها إلى عنصر الـ div بالـ id "content-right"
const contentRightDiv = document.getElementById('content-right');

// دالة لإنشاء صندوق الكتاب
function createBookCover(imgSrc, downloadLink) {
    const bookCoverDiv = document.createElement('div');
    bookCoverDiv.classList.add('book-cover');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Book Cover';
    bookCoverDiv.appendChild(img);

    const downloadButton = document.createElement('a');
    downloadButton.classList.add('download-button');
    downloadButton.href = downloadLink;
    downloadButton.textContent = 'تحميل';
    bookCoverDiv.appendChild(downloadButton);

    return bookCoverDiv;
}

// دالة لتجميع الصناديق في صف أفقي
function createRowOfBooks(books) {
    const rowDiv = document.createElement('div');
    books.forEach(book => {
        const bookCoverDiv = createBookCover(book.imgSrc, book.downloadLink);
        rowDiv.appendChild(bookCoverDiv);
    });
    return rowDiv;
}

// عدد الصناديق في كل صف
const boxesPerRow = 4;

// تجزئة الكتب إلى صفوف وإضافتها إلى الدف الأيسر
for (let i = 0; i < booksDataLeft.length; i += boxesPerRow) {
    const rowBooks = booksDataLeft.slice(i, i + boxesPerRow);
    const rowDiv = createRowOfBooks(rowBooks);
    contentLeftDiv.appendChild(rowDiv);
}

// تجزئة الكتب إلى صفوف وإضافتها إلى الدف الأيمن
for (let i = 0; i < booksDataRight.length; i += boxesPerRow) {
    const rowBooks = booksDataRight.slice(i, i + boxesPerRow);
    const rowDiv = createRowOfBooks(rowBooks);
    contentRightDiv.appendChild(rowDiv);
}




