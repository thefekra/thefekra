


// الكود الخاص بإنشاء الصناديق في الدف الأيمن
const booksDataRight = [
    { imgSrc: '../assets/imgs/51.jpg', downloadLink: 'https://download939.mediafire.com/nrklnhfrn8hgF9B3c9xQAey_D17Uz4q_o7qRCV5sFQHGPJ-5TnqGnwWQcaLrYkqYRNIEkk-CD0GKkCcdZPpXL_4hmX6av1WMruOlC9uQKVoF6SMKSm0r-JGLVb5tWlq7SRaYBhcu77jZBgT-x9ZmfqumwiSOcfwqLWE8ip8dkANg_v0/5121mqazmify23o/%D9%86%D8%A8%D8%A7%D8%AA' },
    { imgSrc: '../assets/imgs/52.jpg', downloadLink: 'https://download1590.mediafire.com/xfnqm2131ucgg9KjJ3wKGaq_ZA6R0KVHkveXcwHQt7mpaLArrE91AayDRQXwLXEcuF73Ms0ckInfupv5Pq4t57StnmPza56dZjkv1QVZUYPNmdcV35E33BFxgJ9Vg8zted7-eY3sZs5SyGzu1tGEJHMd59k7sncamX9noh6i8jB4hYM/a3xjfne4vkwigie/%D8%AD%D9%8A%D9%88%D8%A7%D9%86' },
    { imgSrc: '../assets/imgs/53.jpg', downloadLink: 'https://download1074.mediafire.com/ku29r2844slgBnUas53cMcgAAfuPeIpXWsY_rvxioThPzh34i3DBxmVr1RlpZfgaFr0yXYwo4F8tBSv7SG_pU-KCAQZNoFdMftJKhfKUTh14gDJfakckVPrX0n6iam2kNbX59iAoX57-XqOxGh1EgV4s8VH5gWaxCf1HxO8yXfXlhf8/i33kox54k86nwph/%D8%A7%D8%B5%D9%88%D9%84+%D9%81%D9%84%D8%B3%D9%81%D9%8A%D8%A9' },
    { imgSrc: '../assets/imgs/54.jpg', downloadLink: 'https://download1503.mediafire.com/2oboppz2zitgfq_heKffZDGVAbL8OAS0m-tYMbOPLsDf9VNHUrkRz-bQ390Ug_-YJVhOqLZbARjWwp2VmURns24mxf8FLI539KLXrO_ZUvTFCMEX7s99kl_0xYwrbTx6P3DZLmqFGHtXz0RF7m968LCy12VZHDZERDd4HQxOE5raGBU/7u7ig9jz96z3d11/%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9+%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9' },
    { imgSrc: '../assets/imgs/55.jpg', downloadLink: 'https://download1519.mediafire.com/3a1e2htsyowgIGV_tTsib63cg2g0vqlsYHP_WQXT7KHNbbWy8oxKivcglTf5j3ETU7zMuZOipejGgzoaqwQbSuhfmmClb5Dx4fai1RAMmRnPN8A46oATe78W8-8QuLpJtP63Lpw_OWUdQBTMnSZi25vtYLA_G6CIJWDvczmE4Zqo6wg/8dapl0uk9ir1lnx/%D8%B7%D8%B1%D9%82+%D8%AA%D8%AF%D8%B1%D9%8A%D8%B3' },
    { imgSrc: '../assets/imgs/56.jpg', downloadLink: 'https://download1648.mediafire.com/s8vtzvia0xbgiJ9fOPL1qlEaeog8toCdR_9gdCqzp2rERZlnTWe5ccFFgZGmjqxzhQeqBEpaqhsJwo1SzG2xcB-NqPo5ebzRcQwMiqhLq4iHa_8uMLO0wDuAbGfrrHz_GeLIQZ-irnZu7UWBCwTG5MAlxqDQXNA9hxeJr9C5jRYwISU/rwgrtuv4o9iypcr/%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%B5%D8%AD%D9%8A%D8%A9' },
    { imgSrc: '../assets/imgs/57.jpg', downloadLink: 'https://download939.mediafire.com/f6zyuj0ktxhgx87BgbSHLpL_R5qDnOC-d9phHyMea58vGrgdzXpBZANSydRJvg_Wr631KVp_zkH3-tWA87hIU1rpKlvGFDGiGpNXb9B57gbi6919EGbaRZjqRFVcLPS3YUhNjw4Mx4QInUat-lXTiH1TErl2_6iGdl9b93Bwg5Af4lc/89yz769g4pq6o4v/%D9%83%D8%AA%D8%A8+%D8%B4%D8%B1%D8%AD+%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85+%D8%A7%D9%84%D8%B5%D9%81+%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3+%D9%88%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9+%D9%88%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB' },
    { imgSrc: '../assets/imgs/58.jpg', downloadLink: 'https://download1588.mediafire.com/4xhsgq8zh3ngVJZ3H0lsBNLUbwjIcMFICapMyTpTneyy2SfuB4uRNoei_ti-HlPGu-LNwVUBiuHn0oeqVgeKKiphckJ8OdRjwxM3T_TxUxfC9mcHSgpydWgl9PyD8EIKREu3C3GVXihTjOsrzHTwLkCeuBmnDGLrMTN819NGk9auEEU/4it4mksv1ftuwen/%D9%85%D9%84%D9%81%D8%A7%D8%AA+%D8%B9%D8%A7%D9%85%D9%87+%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA' },

    // يمكنك إضافة المزيد من العناصر هنا

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيمن
];


// الكود الخاص بإنشاء الصناديق في الدف الأيسر
const booksDataLeft = [
    { imgSrc: '../assets/imgs/59.jpg', downloadLink: 'https://download1078.mediafire.com/nxlx14vitrsgj924WrIqMja4aHy4sETiNq2MQUKi81urk8mwG0RFSUGg6OsaMbM7kLc90dkT0c9u_UEt3QPp0DZPtusDvLURnjhqoTlh3JB_0fR2EsBddRXuDDpQTIDt5VxmeLl7z791BQhmKvWt4uiCy3YLJyVZk66UgSGDJYpU0bc/m884m73xx6klqq3/%D9%86%D8%A8%D8%A7%D8%AA' },
    { imgSrc: '../assets/imgs/60.jpg', downloadLink: 'https://download1586.mediafire.com/jze4staalu1goV5Mk_ohdiAmBvgSXrCUDlArvOUu9mnkpU0iMLk8pahgCTGnN66bvaWVRkcmapXM_C75vawb8N3YVUBk2xcrz2R_RG_XF_jA6wrJ--S-ZHFX_TV5tTrj0B39yf3p96c58Z2ZySFr-pfwwLkYNLqDdKpQtJmL-qBdAL8/6op15xklygj71p3/%D8%AD%D9%8A%D9%88%D8%A7%D9%86' },
    { imgSrc: '../assets/imgs/61.jpg', downloadLink: 'https://download1501.mediafire.com/utyqvawwmsrgqkQsaDRucsCoRppDmptm8I3GtLbvitJJ99yJ3mwVP-MY5eiT-PyqzGWYmh6uVR2uceR_44Mz0RMi3fFr81MIeKGMNoKalv7x-0RlsIUFkpZNuodBq2XE4XmpuxRn_5eH5xthmL5o2bYvJqvuV_j9oSBlP2OhIK1YSII/gwt30tax03f57nm/%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9' },
    { imgSrc: '../assets/imgs/62.jpg', downloadLink: 'https://download1509.mediafire.com/m4p1o5balaugb6-JOuqZIAb0kBqbCiqlPrB8Oyvj-XuBEPADVwYcbZZlxH16n83jd8_nTouSFjf7uTYVmpm5twL6g-dilZy7LCJJIo5iLxGXaDiP3PEWVb28y_GmqqfVEQK4sqA0q8E9cJo5BHpNB0AfVh1OsWODdeiH7QpqP8_PhTM/8tregn29dekki4d/%D8%A7%D9%84%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D9%86%D9%81%D8%B3%D9%8A%D8%A9' },
    { imgSrc: '../assets/imgs/63.jpg', downloadLink: 'https://download1085.mediafire.com/a0rtvessestg-OBJkPOX9zzvWv34Olpkn3DOnYQslW31RFun1hmHTQAvpoP76-6DtSmI7_4Hwa9-j8PB8--wdiCJPmc_0746uWps0dGplIBXAg8lcjX-KLu4YYukX_O3uN5m9_9XduHYGvNs7ND6SF9TQTHCO0MAVlz59HGF6IoK5As/2tjmkndwdqfu1tq/%D8%B9%D9%84%D9%85+%D8%A7%D9%84%D9%86%D9%81%D8%B3+%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A' },
    { imgSrc: '../assets/imgs/64.jpg', downloadLink: 'https://download857.mediafire.com/7ja3c7o0rlcglaahACpH1atOl1xLVWFyzo7Ak3s7ncyGcXyCir7WJS0wzjZdIYEZU3-i79nQWl5YmU4LRMizrtN-jJ6IHT5i9N9gIJw1PtqQPN3lzRkwtUSl9S3DbX_cg6mDPYVzFgAmVlzzoNdBWt6SaJFMrQvyxR2mt0Qcl7j85ro/f7gjrave287xg52/%D8%AD%D8%AF%D9%8A%D8%AB' },
    { imgSrc: '../assets/imgs/65.jpg', downloadLink: 'https://download1078.mediafire.com/y4q3bjbp8aygJEU5my_DTlA7oeI4fO2vT7kEfJN37zhySamw-R3-fFq8-8Qn4AMuPzQIcAQU7heN4leWPz9BCUaCsSviDlXOX1FGbJzEDJN8_Nq-j_l_10okfKbL45VVS4drb1aRLe-Kk_mZ8AT6UMTFUiDkqXcfrnxMQtcO4e2aP0Y/jpn22d6rgyonjzu/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA' },

    // يمكنك إضافة المزيد من العناصر هنا للدف الأيسر
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




