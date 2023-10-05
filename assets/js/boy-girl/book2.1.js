

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
   { imgSrc: '../assets/imgs/19.jpg', downloadLink: 'https://drive.google.com/drive/folders/1HyrRCp7NoZFduA0rkRvhpVgystbiXPTQ?usp=drive_link' },
    { imgSrc: '../assets/imgs/20.jpg', downloadLink: 'https://drive.google.com/drive/folders/1HsRJqV4BKL5DBgZoZyV8wpQIawoOROux?usp=drive_link' },
    { imgSrc: '../assets/imgs/21.jpg', downloadLink: 'https://drive.google.com/drive/folders/1_ngZQ3kb_ZgeOjsH4cLbbzhyRgvRc-tm?usp=drive_link' },
    { imgSrc: '../assets/imgs/22.jpg', downloadLink: 'https://drive.google.com/file/d/1t3_Oxwwr4LyItl43O_SQSX9kFfvhyQun/view?usp=sharing' },
    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/24.jpg', downloadLink: 'https://drive.google.com/file/d/1eCmVfqU7SV2pXPlI-2_cMozOYSTqNdvv/view?usp=drive_link' },
   { imgSrc: '../assets/imgs/29.jpg', downloadLink: 'https://drive.google.com/drive/folders/1QjhmEBOZ5UakgYMG5ZkdLhR-uDJeoy8Y?usp=drive_link' },
    { imgSrc: '../assets/imgs/31.jpg', downloadLink: 'https://drive.google.com/file/d/1koyzTAAKwrlW7zrSt2jupo5P9GRkbTx1/view?usp=drive_link' },
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