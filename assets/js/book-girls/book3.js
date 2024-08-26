

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/girl-asyut/32.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nhasCHfoaXsfK6A4HTCRSNrhl_0aT_cC?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/33.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nk9Rk8Qgfu9Sbi89Muf3-DckVJq_QYa4?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/34.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nvXtjyoXEAPwcUJ5cRuUvNRekakeBFxb?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/36.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nkfl2-Qzj80wgY1bocIJAr6-3tsW9FgF?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/37.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nsCNie-lAFKnluqc_V_z5qvYGQfEPa7v?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/38.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nvigowbUzcd7OUB9HDUV6WnG2oFjtCZj?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/39.jpg', downloadLink: 'https://drive.google.com/drive/folders/1np8KPo6423cjIkFV8TketYpodHxfbuqc?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/40.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nm5bQt3fwGs-scHPj98kO8xutr6zzRrA?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/41.jpg', downloadLink: '' },
    // يمكنك إضافة المزيد من العناصر هنا
];

// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/girl-asyut/42.jpg', downloadLink: 'https://drive.google.com/drive/folders/1oDddiEmuc2yKLlHSkfRtk2G8xoLplDgO?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/43.jpg', downloadLink: 'https://drive.google.com/drive/folders/1o64vt-hVTNjqwh47bIm3wp8KEM0jHZgr?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/44.jpg', downloadLink: 'https://drive.google.com/drive/folders/1nx0SZ9lOz1AIQ5eZt96loC7v3mJ-kWSp?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/45.jpg', downloadLink: 'https://drive.google.com/drive/folders/1o3snAGpy9on2tbl-BGCb0iZjqh6rOaOo?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/47.jpg', downloadLink: 'https://drive.google.com/drive/folders/1o3lvEKUJFhzkhbwZcVUEpfftMbkTBAZC?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/48.jpg', downloadLink: 'https://drive.google.com/drive/folders/1o57moc73WbfovYElIu1kBsKxxa8I4B0B?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/49.jpg', downloadLink: 'https://drive.google.com/drive/folders/1o0WLSonYEf1E0EqSzKGAeUmfpODfUSXD?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/50.jpg', downloadLink: 'https://drive.google.com/drive/folders/1he-d2OF48JENI02o3wy9GC0_djrImYML?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/68.jpg', downloadLink: 'https://drive.google.com/drive/folders/1b3eQ4DhALRuY7WtqnMEW639MfFqN5yq7?usp=drive_link' },
    { imgSrc: '../assets/imgs/girl-asyut/52.jpg', downloadLink: 'https://drive.google.com/drive/folders/1oGg5YyX-l4wwPoK3m1TsHqXFeb4IdHWr?usp=drive_link' },
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