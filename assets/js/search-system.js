const searchButton = document.getElementById('searchButton');
const backButton = document.getElementById('backButton');
const searchSection = document.getElementById('searchSection');
const userInfo = document.getElementById('userInfo');
const displayName = document.getElementById('displayName');
const displaySeatNumber = document.getElementById('displaySeatNumber');
const displayGovernorate = document.getElementById('displayGovernorate');
const displayBandName = document.getElementById('displayBandName');



backButton.addEventListener('click', () => {
    userInfo.classList.add('hidden');
    searchSection.classList.remove('hidden');
    backButton.classList.add('hidden');
    clearDisplayedUserInfo();
});

function clearDisplayedUserInfo() {
    displayName.textContent = "";
    displaySeatNumber.textContent = "";
    displayGovernorate.textContent = "";
    displayBandName.textContent = "";
}

// ... باقي الكود لا تغيير



loginButton.addEventListener('click', () => {
    // الشيفرة هنا للتحقق من بيانات المستخدم وعرضها في صفحة العرض

    // بعد التحقق والعرض، قم بتوجيه المستخدم إلى صفحة اللوحة
    window.location.href = '../stop.html';
});








searchButton.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const bandName = document.getElementById('bandInput').value;

    const userData = mockFetchUserDataByNameAndBand(name, bandName);

    if (userData) {
        displayName.textContent = userData.name;
        displaySeatNumber.textContent = userData.seatNumber;
        displayGovernorate.textContent = userData.governorate;
        displayBandName.textContent = userData.bandName;

        userInfo.classList.remove('hidden');
        searchSection.classList.add('hidden');
        backButton.classList.remove('hidden');
    } else {
    // قم بإخفاء جميع العناصر التي تريد إخفاؤها
    document.getElementById('searchSection').classList.add('hidden');
    document.getElementById('userInfo').classList.add('hidden');

    // عرض الصورة بالحجم المطلوب
    const userImage = document.getElementById('userImage');
    userImage.src = '../assets/imgs/error.png'; // تعيين مسار الصورة
    userImage.classList.remove('hidden'); // إزالة الفئة "hidden" لجعل الصورة مرئية

    // إزالة فئة "hidden" من زر البحث مرة أخرى
    const searchAgainButton = document.getElementById('searchAgainButton');
    searchAgainButton.classList.remove('hidden');
}

// عند النقر على زر البحث مرة أخرى
const searchAgainButton = document.getElementById('searchAgainButton');
searchAgainButton.addEventListener('click', () => {
    // إزالة فئة "hidden" من عنصر البحث ليصبح مرئيًا مرة أخرى
    document.getElementById('searchSection').classList.remove('hidden');
    
    // إخفاء زر البحث مرة أخرى
    searchAgainButton.classList.add('hidden');

    // إعادة إخفاء الصورة
    document.getElementById('userImage').classList.add('hidden');

    // إعادة إظهار باقي العناصر حسب الحاجة
    // ...
});




});

// ... باقي الكود لا تغيير

function mockFetchUserDataByNameAndBand(name, bandName) {
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
        },
        {
            name: "احمد ممدوح عبدالعظيم محمد",
            seatNumber: 1235002,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            name: "رفعت عبدالستار سعيد عبدالرحمن",
            seatNumber: 1235003,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            "name": "عاصم مصطفی عبدالله محمد",
            seatNumber: 1235004,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "عبد الناصر عبد القادر عبده رضا",
            seatNumber: 1235005,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            name: "عماد احمد محمد خلف",
            seatNumber: 1235006,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            name: "عمر عصام احمد مهران",
            seatNumber: 1235007,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "محمد احمد حسن احمد",
            seatNumber: 1235008,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "محمد احمد مناع يوسف",
            seatNumber: 1235009,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "محمود عبد الجابر احمد عبدالرحيم",
            seatNumber: 1235010,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            name: "معتمد احمد معتمد محمد",
            seatNumber: 1235011,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "يوسف عبدالرحيم اسماعيل احمد",
            seatNumber: 1235012,
            bandName: "الثانية",
            governorate: "سوهاج",
        },
        {
            name: "يوسف محمود شحاته تمساح",
            seatNumber: 1235013,
            bandName: "الثانية",
            governorate: "اسيوط",
        },
        {
            name: "ابراهيم محمد ابراهيم السيد",
            seatNumber: 1235014,
            bandName: "الثانية",
            governorate: "",// لم يتم المعرفة
        },
        {
            name: "عبدالرحمن احمد محمود محمد",
            seatNumber: 1235015,
            bandName: "الثانية",
            governorate: "",// لم يتم المعرفة
        },
        {
            name: "عبدالرحمن السيد يوسف على",
            seatNumber: 1235016,
            bandName: "الثانية",
            governorate: "", // لم يتم المعرفة
        },
        {
            name: "فتحى مجدی فتحی حسان",
            seatNumber: 1235017,
            bandName: "الثانية",
            governorate: "",   // لم يتم المعرفة
        },
        {
            name: "محمد جابر عبدالوهاب محمد",
            seatNumber: 1235018,
            bandName: "الثانية",
            governorate: "قنا",
            bandName: "الثانية",
        },
        {
            name: "محمد كمال امین عبدالرحيم",
            seatNumber: 1235019,
            governorate: "سوهاج",
            bandName: "الثانية",
        },
        {
            name: "محمود شريف محمود محمود",
            seatNumber: 1235020,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية",
        },
        {
            name: "محمود ناصر ابوهريره محمد",
            seatNumber: 1235021,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية",
        },

        {
            name: "حمحد",
            seatNumber: 1235022,
            governorate: "", // لم يتم المعرفة
            bandName: "الثانية",
        },


        // بيانات الفرقة الثالثة
        { name: 'احمد اشرف محمد مسعود', seatNumber: 2235001, governorate: 'منيا', bandName: 'الثالثة' },
        { name: 'احمد السيد محمد أحمد', seatNumber: 2235002, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'احمد شعبان علي سليمان', seatNumber: 2235003, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'احمد عادل جادالكريم محمد', seatNumber: 2235004, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'احمد فيصل عبدالستار محمد', seatNumber: 2235005, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'احمد محمد شمروخ عمران', seatNumber: 2235006, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'ايمن عابدين أحمد جادالرب', seatNumber: 2235007, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'ايهاب رضا فؤاد السيد علي', seatNumber: 2235008, governorate: 'الجيزة', bandName: 'الثالثة' },
        { name: 'حامد يسري احمد بكر', seatNumber: 2235009, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'خالد تامر رشاد عبدالهادي', seatNumber: 2235010, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'داود جمال فاروق عبدالرحمن', seatNumber: 2235011, governorate: 'المنيا', bandName: 'الثالثة' },
        { name: 'سامح محمد راشد برعي', seatNumber: 2235012, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'سامي جمال كمال سعدالدين', seatNumber: 2235013, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'طه عبدالرحمن محمد خلف الله', seatNumber: 2235014, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'عبدالله محمد علي محمد', seatNumber: 2235015, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'عمرو سليمان احمد علي', seatNumber: 2235016, governorate: 'أسوان', bandName: 'الثالثة' },
        { name: 'محمد ايمن سليمان تمام', seatNumber: 2235017, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'وليد حربي جابر عبدالعزيز', seatNumber: 2235018, governorate: 'سوهاج', bandName: 'الثالثة' },
        { name: 'وليد محمد محمد احمد', seatNumber: 2235019, governorate: 'قنا', bandName: 'الثالثة' },
        { name: ' ياسين ممدوح محمد امين ', seatNumber: 2235020, governorate: 'قنا', bandName: 'الثالثة' },
        { name: 'محمد عبدالرحيم عبداللطيف سيد', seatNumber: 2235021, governorate: 'أسيوط', bandName: 'الثالثة' },


        // بيانات الفرقة الرابعة
        { name: 'fekra', seatNumber: 1, governorate: 'القاهرة', bandName: 'الرابعة' }
    ];

    return usersData.find(user => user.name === name && user.bandName === bandName);
}