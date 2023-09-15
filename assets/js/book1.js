

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/1.jpg', downloadLink: 'https://drive.google.com/drive/folders/1TcacIZmEmKa3l-R7ls0FIzn2Cdyonvgn?usp=drive_link' },
    { imgSrc: '../assets/imgs/2.jpg', downloadLink: 'https://drive.google.com/drive/folders/1TqW8SeSNufzk6C5iEcXykyfXcAVVbwhj?usp=drive_link' },
    { imgSrc: '../assets/imgs/3.jpg', downloadLink: 'https://drive.google.com/drive/folders/1XJYd-ezjfThIgshPj95DsLb_gxuWCESG?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/4.jpg', downloadLink: 'https://drive.google.com/drive/folders/1mA1xMJ1X2nVNYhIsEfqmloLYrfQVSt3f?usp=drive_link' },
    { imgSrc: '../assets/imgs/5.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lAGPuX5IEWq7KuWJ_88zA0IHneaUc6FF?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/6.jpg', downloadLink: 'https://drive.google.com/drive/folders/1mEC9VdkK9Pmh5otYoDN-ApRKuGjvR5rK?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/7.jpg', downloadLink: 'https://drive.google.com/drive/folders/1mMfrqUUeXbZTVsRdHXcLGWFcDfwhOxBw?usp=drive_link' },
    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/8.jpg', downloadLink: 'https://drive.google.com/drive/folders/1U3Jktx5IA3bh2kk5HG0O_xwN4WvgGez9?usp=drive_link' },
    { imgSrc: '../assets/imgs/9.jpg', downloadLink: 'https://drive.google.com/drive/folders/1V0VLVmTQ5V_n5dA5n51hLf9x5LDBUyFu?usp=drive_link' },
    { imgSrc: '../assets/imgs/10.jpg', downloadLink: 'https://drive.google.com/drive/folders/1qGef6WRWKHxdb6DvtISK_9MAhG20GX1V?usp=drive_link' },
    { imgSrc: '../assets/imgs/11.jpg', downloadLink: 'https://drive.google.com/drive/folders/1W0dWbeJyCFTB5GzQ87EjcwzNfNQcFCgm?usp=drive_link' },
    { imgSrc: '../assets/imgs/12.jpg', downloadLink: 'https://drive.google.com/drive/folders/1W4rV3Ge76i4qWjRLxd_LUXRBpogkPA5Z?usp=drive_link' },
    { imgSrc: '../assets/imgs/13.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lIRG3R7Mnm2QB8Z603L48yxISbUmCWfL?usp=drive_link' },
    { imgSrc: '../assets/imgs/14.jpg', downloadLink: 'https://drive.google.com/drive/folders/1aImWb1mcwRZ_0vT_JwWygrhVNXH-hmt0?usp=drive_link' },
    { imgSrc: '../assets/imgs/15.jpg', downloadLink: 'https://drive.google.com/drive/folders/1WlBu4exwDAiDytzWfSp1ZBmUzYyrWSl9?usp=drive_link' },
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




