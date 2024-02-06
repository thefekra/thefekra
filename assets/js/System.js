const searchButton = document.getElementById('searchButton');
const searchSection = document.getElementById('searchSection');
const backButton = document.getElementById('backButton');
const userInfo = document.getElementById('userInfo');

searchButton.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const seatNumber = parseInt(document.getElementById('seatNumberInput').value);

    const userData = mockFetchUserData(name, seatNumber);

    if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));

        // توجيه المستخدم إلى صفحة الفرقة المناسبة بناءً على الفرقة والنوع
        if (userData.bandName === 'الأولى') {
            if (userData.gender === 'بنين') {
                window.location.href = '../book-boys/book-boy1.html';
            } else {
                window.location.href = '../book-girls/book-girl1.html';
            }
        } else if (userData.bandName === 'الثانية') {
            if (userData.gender === 'بنين') {
                window.location.href = '../book-boys/book-boy2.html';
            } else {
                window.location.href = '../book-girls/book-girl2.html';
            }
        } else if (userData.bandName === 'الثالثة') {
            if (userData.gender === 'بنين') {
                window.location.href = '../book-boys-BIO-Asyut/book-boy3.html';
            } else {
                window.location.href = '../book-girls/book-girl3.html';
            }
        } else if (userData.bandName === 'الرابعة') {
            if (userData.gender === 'بنين') {
                window.location.href = '../book-boys/book-boy4.html';
            } else {
                window.location.href = '../book-girls/book-girl4.html';
            }
            // ... باقي الفرق والنوع
        }
    }  else {
    userInfo.classList.add('hidden');
    searchSection.classList.remove('hidden');
    backButton.classList.add('hidden');
    alert('خطأ في العملية تأكد من أنك لم تضف همزة مثل كلمة (احمد) أو أن رقم الاكاديمي خطأ');
}

});

backButton.addEventListener('click', () => {
    searchSection.classList.remove('hidden');
    userInfo.classList.add('hidden');
    backButton.classList.add('hidden');
});

// ... المزيد من الكود لا تغير

function mockFetchUserData(name, seatNumber) {
    const usersData = [
    
        // بيانات الفرقة الأولى
        // ...
        { name: 'احمد', seatNumber: 01, governorate: 'منيا', bandName: 'الأولى' , gender: 'بنين' },
        { name: 'احمد', seatNumber: 10, governorate: 'منيا', bandName: 'الأولى', gender: 'بنات' },

        // بيانات الفرقة الثانية
        // ...


        {
            name: "ابراهيم عبدالسلام محمد عبدالله",
            seatNumber: 1235001,
            bandName: "الثانية",
            governorate: "سوهاج",
            gender: 'بنين'
        },
        {
            name: "احمد ممدوح عبدالعظيم محمد",
            seatNumber: 1235002,
            bandName: "الثانية",
            governorate: "سوهاج",
            gender: 'بنين'
        },
        {
            name: "رفعت عبدالستار سعيد عبدالرحمن",
            seatNumber: 1235003,
            bandName: "الثانية",
            governorate: "سوهاج",
            gender: 'بنين'
        },
        {
            "name": "عاصم مصطفی عبدالله محمد",
            seatNumber: 1235004,
            bandName: "الثانية",
            governorate: "اسيوط",
            gender: 'بنين'
        },
        {
            name: "عبد الناصر عبد القادر عبده رضا",
            seatNumber: 1235005,
            bandName: "الثانية",
            governorate: "سوهاج",
            gender: 'بنين'
        },
        {
            name: "عماد احمد محمد خلف",
            seatNumber: 1235006,
            bandName: "الثانية",
            governorate: "سوهاج",
            gender: 'بنين'
        },
        {
            name: "عمر عصام احمد مهران",
            seatNumber: 1235007,
            bandName: "الثانية",
            governorate: "اسيوط",
            gender: 'بنين'
        },
        {
            name: "محمد احمد حسن احمد",
            seatNumber: 1235008,
            bandName: "الثانية",
            governorate: "اسيوط", gender: 'بنين'
        },
        {
            name: "محمد احمد مناع يوسف",
            seatNumber: 1235009,
            bandName: "الثانية",
            governorate: "اسيوط", gender: 'بنين'
        },
        {
            name: "محمود عبد الجابر احمد عبدالرحيم",
            seatNumber: 1235010,
            bandName: "الثانية",
            governorate: "سوهاج", gender: 'بنين'
        },
        {
            name: "معتمد احمد معتمد محمد",
            seatNumber: 1235011,
            bandName: "الثانية",
            governorate: "اسيوط", gender: 'بنين'
        },
        {
            name: "يوسف عبدالرحيم اسماعيل احمد",
            seatNumber: 1235012,
            bandName: "الثانية",
            governorate: "سوهاج", gender: 'بنين'
        },
        {
            name: "يوسف محمود شحاته تمساح",
            seatNumber: 1235013,
            bandName: "الثانية",
            governorate: "اسيوط", gender: 'بنين'
        },
        {
            name: "ابراهيم محمد ابراهيم السيد",
            seatNumber: 1235014,
            bandName: "الثانية",
            governorate: "", gender: 'بنين'           // لم يتم المعرفة
        },
        {
            name: "عبدالرحمن احمد محمود محمد",
            seatNumber: 1235015,
            bandName: "الثانية",
            governorate: "", gender: 'بنين'// لم يتم المعرفة
        },
        {
            name: "عبدالرحمن السيد يوسف على",
            seatNumber: 1235016,
            bandName: "الثانية",
            governorate: "", gender: 'بنين' // لم يتم المعرفة
        },
        {
            name: "فتحى مجدی فتحی حسان",
            seatNumber: 1235017,
            bandName: "الثانية",
            governorate: "", gender: 'بنين'  // لم يتم المعرفة
        },
        {
            name: "محمد جابر عبدالوهاب محمد",
            seatNumber: 1235018,
            bandName: "الثانية",
            governorate: "قنا",
            bandName: "الثانية", gender: 'بنين'
        },
        {
            name: "محمد كمال امین عبدالرحيم",
            seatNumber: 1235019,
            governorate: "سوهاج",
            bandName: "الثانية", gender: 'بنين'
        },
        {
            name: "محمود شريف محمود محمود",
            seatNumber: 1235020,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية", gender: 'بنين'
        },
        {
            name: "محمود ناصر ابوهريره محمد",
            seatNumber: 1235021,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية", gender: 'بنين'
        },

        {
            name: "حمحد",
            seatNumber: 1235022,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية"  , gender: 'بنين'
        },


        // بيانات الفرقة الثالثة
        { name: 'احمد اشرف محمد مسعود', seatNumber: 2235001, governorate: 'منيا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'احمد السيد محمد أحمد', seatNumber: 2235002, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'احمد شعبان علي سليمان', seatNumber: 2235003, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'احمد عادل جادالكريم محمد', seatNumber: 2235004, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'احمد فيصل عبدالستار محمد', seatNumber: 2235005, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'احمد محمد شمروخ عمران', seatNumber: 2235006, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'ايمن عابدين أحمد جادالرب', seatNumber: 2235007, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'ايهاب رضا فؤاد السيد علي', seatNumber: 2235008, governorate: 'الجيزة', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'حامد يسري احمد بكر', seatNumber: 2235009, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'خالد تامر رشاد عبدالهادي', seatNumber: 2235010, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'داود جمال فاروق عبدالرحمن', seatNumber: 2235011, governorate: 'المنيا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'سامح محمد راشد برعي', seatNumber: 2235012, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'سامي جمال كمال سعدالدين', seatNumber: 2235013, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'طه عبدالرحمن محمد خلف الله', seatNumber: 2235014, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'عبدالله محمد علي محمد', seatNumber: 2235015, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'عمرو سليمان احمد علي', seatNumber: 2235016, governorate: 'أسوان', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'محمد ايمن سليمان تمام', seatNumber: 2235017, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'وليد حربي جابر عبدالعزيز', seatNumber: 2235018, governorate: 'سوهاج', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'وليد محمد محمد احمد', seatNumber: 2235019, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: ' ياسين ممدوح محمد امين ', seatNumber: 2235020, governorate: 'قنا', bandName: 'الثالثة', gender: 'بنين' },
        { name: 'محمد عبدالرحيم عبداللطيف سيد', seatNumber: 2235021, governorate: 'أسيوط', bandName: 'الثالثة', gender: 'بنين' },


        // بيانات الفرقة الرابعة
        { name: 'fekra', seatNumber: 1, governorate: 'القاهرة', bandName: 'الرابعة', gender: 'بنين' }
    ];

    return usersData.find(user => user.name === name && user.seatNumber === seatNumber);
}