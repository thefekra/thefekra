

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/16.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/17.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/18.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/19.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/20.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/21.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/22.jpg', downloadLink: '' },
    // يمكنك إضافة المزيد من العناصر هنا
];

// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/23.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/24.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/25.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/26.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/27.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/28.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/29.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/30.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/31.jpg', downloadLink: '' },
    // يمكنك إضافة المزيد من العناصر هنا للدف الأيسر
];

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
    downloadButton.target = '_blank'; // تعيين الهدف لفتح الرابط في نافذة جديدة
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