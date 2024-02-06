

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/cairo/b-1/1.jpg', downloadLink: 'https://drive.google.com/file/d/1xGonF4ScsWpquNkBRcsffDzEMZTE90mE/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/2.jpg', downloadLink: 'https://drive.google.com/file/d/1Io-BcTDBcKNvOzIk_8AcOcukeQoF22FQ/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/3.jpg', downloadLink: 'https://drive.google.com/file/d/1T5XZzYrqkCTGMG_Dt0uC7pfkM6IIUD3o/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/4.jpg', downloadLink: 'https://drive.google.com/file/d/1hMZ48IA8kXYIXLNJlMstHs1Ep17u_4th/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/5.jpg', downloadLink: 'https://drive.google.com/file/d/1kRIxC5TxD76rAV6iQhUdv2CUb7lxw_Xs/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/6.jpg', downloadLink: 'https://drive.google.com/file/d/19MZbBAqPUxkjUe1FmibWRMoSnSFQO_dx/view?usp=drive_link' },
    { imgSrc: '../assets/imgs/cairo/b-1/7.jpg', downloadLink: 'https://drive.google.com/file/d/11lfXbYqJue3ADFt-v3-35MNWQk-Dbks1/view?usp=drive_link' },
    // يمكنك إضافة المزيد من العناصر هنا
];

// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
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




