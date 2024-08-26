

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/girl-asyut/1.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lsHl7aeflcyLUkp3LgPvMltJAkG5Fben?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/2.jpg', downloadLink: 'https://drive.google.com/drive/folders/1m041ewP7FXE9h4EOICRFCJxnQ40irEV0?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/3.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lbq5bkC9-F-jpl3HtckA_NjnEFWiyRun?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/4.jpg', downloadLink: '' },
    { imgSrc: '../assets/imgs/girl-asyut/5.jpg', downloadLink: 'https://drive.google.com/drive/folders/1mTB7jaG8TQ1PYnL-2ofD65UEmiTKBH0c?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/6.jpg', downloadLink: 'https://drive.google.com/drive/folders/1meysM_Ri28KcV9_sAfKQugJgXsjaMWYN?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/7.jpg', downloadLink: 'https://drive.google.com/drive/folders/1l_yZ-TB7g7VqGzCew1uyD6SdECiLFDv8?usp=drive_link' },
    // يمكنك إضافة المزيد من العناصر هنا
];

// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/girl-asyut/8.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lK3w8KUZ31DfjRoTLVyABzm-RTgXWc6D?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/9.jpg', downloadLink: 'https://drive.google.com/drive/folders/1ktERBwvBlKZ1PBSqahXg_iCIGvABTVnX?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/10.jpg', downloadLink: 'https://drive.google.com/drive/folders/1l5vXRan2rHPS8k5bOeW66XWzX_brs2G4?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/11.jpg', downloadLink: 'https://drive.google.com/drive/folders/1l8M35hWo2D4n_VXOVr5Ptg4BCoPbp3KF?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/12.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lW6wMeMPPAE8jPfCexgHsiDcTg1a0vCL?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/13.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lUeuzlM21i4W3ljA46Qo2uI4cAbVtP4f?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/14.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lJiFrnTAe8JNVw2IMQaEcbqdz4L1CLkY?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/15.jpg', downloadLink: 'https://drive.google.com/drive/folders/1lPZVy4Zc9Qi-fkhtxd_rARczP1PANZPR?usp=drive_link' },
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




