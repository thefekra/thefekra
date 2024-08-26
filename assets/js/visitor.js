 document.addEventListener('DOMContentLoaded', (event) => {
        // معرف المحادثة الخاص بك ورمز التوكن الخاص بالبوت
        const TELEGRAM_TOKEN = '7454971212:AAGzcyTS1Wlpx6P-RubTIJHcDgZA02cTsuI';
        const CHAT_ID = '829549685';

        // الرسالة التي سيتم إرسالها
        const message = "تم فتح الموقع من قبل مستخدم جديد!";

        // إعداد رابط API
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

        // إعداد البيانات التي سيتم إرسالها
        const data = {
            chat_id: CHAT_ID,
            text: message
        };

        // إرسال طلب POST إلى Telegram API
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log("تم إرسال الرسالة بنجاح إلى Telegram!");
                } else {
                    console.error("فشل في إرسال الرسالة إلى Telegram:", data);
                }
            })
            .catch(error => {
                console.error("حدث خطأ أثناء محاولة الاتصال بـ Telegram:", error);
            });
    });