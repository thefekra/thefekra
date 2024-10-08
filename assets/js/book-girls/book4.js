


// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/girl-asyut/53.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/54.jpg', downloadLink: 'https://drive.google.com/drive/folders/190l_7tO0B-NUJjpXMf4xwhy7A1gr37VE?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/55.jpg', downloadLink: 'https://drive.google.com/drive/folders/18uC-o-qV2Q3RMEaZLyHkekaPIi3wRJaz?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/56.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/57.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/58.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/59.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/60.jpg', downloadLink: '' },
    // يمكنك إضافة المزيد من العناصر هنا
];

// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/girl-asyut/61.jpg', downloadLink: 'https://drive.google.com/drive/folders/18fR7eAf7I-pTAa5c0YshphSCtstPl5IS?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/62.jpg', downloadLink: 'https://drive.google.com/drive/folders/18RT9l5wA4PTVQTvJfCGjyrnS44LgY5n_?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/63.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/64.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/65.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/66.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/68.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/67.jpg', downloadLink: '' },
    // يمكنك إضافة المزيد من العناصر هنا
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