

// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/32.jpg', downloadLink: 'https://drive.google.com/drive/folders/1c0Nu2dL9af7Ta8gTy9UiBG66Kq4kw_xg?usp=sharing' },
    { imgSrc: '../assets/imgs/33.jpg', downloadLink: 'https://drive.google.com/drive/folders/1UclHkhMc-0Xcq-LfZTic7imEMa8YeMcg?usp=sharing' },
    { imgSrc: '../assets/imgs/34.jpg', downloadLink: 'https://drive.google.com/drive/folders/1cMKMg7nd7KdrtEveaKSy8LKfyPrqojt3?usp=drive_link' },
    { imgSrc: '../assets/imgs/35.jpg', downloadLink: 'https://drive.google.com/drive/folders/1C9I6pmcXhp-7LX24IBtrPMeXcmdvGW4d?usp=drive_link' },
    { imgSrc: '../assets/imgs/36.jpg', downloadLink: 'https://drive.google.com/drive/folders/1W2dNKyiSSs9CHxf1nvTNKCpSPGDZibaH?usp=drive_link' },
    { imgSrc: '../assets/imgs/37.jpg', downloadLink: 'https://drive.google.com/drive/folders/1FAH9ZjG6aKe39kfWIa1HBzRnhTtWE148?usp=drive_link' },
    { imgSrc: '../assets/imgs/38.jpg', downloadLink: 'https://drive.google.com/drive/folders/137SHbxc2hENQRrnIC2NSlOz53B6L5UOn?usp=drive_link' },
    { imgSrc: '../assets/imgs/39.jpg', downloadLink: 'https://drive.google.com/drive/folders/17u1TfA2AjFCaClXjW1aOfOqS_ecMOsjy?usp=drive_link' },
    { imgSrc: '../assets/imgs/40.jpg', downloadLink: 'https://drive.google.com/drive/folders/1voP6knN0-CeH-Kq8BZeI_7emOYjIn8Ss?usp=drive_link' },

    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/img/41.jpg', downloadLink: 'https://drive.google.com/drive/folders/1N2bMleftoRMSxwZGnXXLbNRkzpigSrh4?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/42.jpg', downloadLink: 'https://drive.google.com/drive/folders/1GLv3TVsmfeoa2dMIt2Mkd9jCI-0fRiPd?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/43.jpg', downloadLink: 'https://drive.google.com/drive/folders/1REpGuMaxJSWpyfYm-IVYpXaM8Cj1SIwZ?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/44.jpg', downloadLink: 'https://drive.google.com/drive/folders/1Z1dgHRf9vB5CTMd2xgPHqzlC4u_rEX1-?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/45.jpg', downloadLink: 'https://drive.google.com/drive/folders/124-E8aUiERtlp24KCLjs5hHAIjaeq6Y9?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/46.jpg', downloadLink: 'https://drive.google.com/drive/folders/1RPNmG8yNZtyhfW_5qhU9ESEaVI3zvxPO?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/47.jpg', downloadLink: 'https://drive.google.com/drive/folders/1PBDUzf5IlPBMBrnS6s9oPPQ0XEu7VNrF?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/48.jpg', downloadLink: 'https://drive.google.com/drive/folders/1kSJtXcTm-EarPaUFISehTcFv3xd3EpXj?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/49.jpg', downloadLink: 'https://drive.google.com/drive/folders/1i_pt0pfVLf7x5eX32H_iOARIxBwLAhR2?usp=drive_link' },
    { imgSrc: '../assets/imgs/img/50.jpg', downloadLink: 'https://drive.google.com/drive/folders/1HdcWnm8MVjnw3NAdPolSKHosJzENEsE1?usp=drive_link' },

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
