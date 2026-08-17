export const PARTY = {
  name: "Oisha",
  age: 4,
  // 3 February 2027, 15:00
  date: new Date("2027-02-03T15:00:00+05:00"),
  // TODO: paste the Google Maps link here
  mapUrl: "",
  // Background music: YouTube video id
  youtubeId: "V6P5tGeMYSY",
  adminPin: "1317",
};

export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

type Dict = {
  invitation: string;
  heroTitle: string;
  heroSub: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  whenWhere: string;
  dateText: string;
  timeText: string;
  place: string;
  placeText: string;
  mapBtn: string;
  mapSoon: string;
  gallery: string;
  gallerySub: string;
  rsvp: string;
  rsvpSub: string;
  yourName: string;
  namePh: string;
  coming: string;
  notComing: string;
  guests: string;
  wish: string;
  wishPh: string;
  send: string;
  sending: string;
  thanks: string;
  error: string;
  music: string;
  pin: string;
  pinPh: string;
  open: string;
  wrongPin: string;
  guestList: string;
  totalYes: string;
  totalGuests: string;
  empty: string;
  footer: string;
};

export const T: Record<Lang, Dict> = {
  uz: {
    invitation: "Taklifnoma",
    heroTitle: "Oisha 4 yoshga to'ldi!",
    heroSub: "Sehrli malika bayramiga sizni chin dildan kutamiz",
    days: "kun",
    hours: "soat",
    minutes: "daqiqa",
    seconds: "soniya",
    whenWhere: "Qachon va qayerda",
    dateText: "2027-yil 3-fevral",
    timeText: "15:00 da",
    place: "Manzil",
    placeText: "Sxovat savdo markazi, 3-qavat, bolalar maydonchasi",
    mapBtn: "Xaritada ko'rish",
    mapSoon: "Xarita havolasi tez orada",
    gallery: "Oishaning suratlari",
    gallerySub: "Eng shirin lahzalar",
    rsvp: "Kelishingizni tasdiqlang",
    rsvpSub: "Iltimos, bir necha so'z yozib qoldiring",
    yourName: "Ismingiz",
    namePh: "Ism va familiya",
    coming: "Kelaman",
    notComing: "Kelolmayman",
    guests: "Mehmonlar soni",
    wish: "Tabrik xati",
    wishPh: "Oishaga tilaklaringiz...",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    thanks: "Rahmat! Javobingiz qabul qilindi.",
    error: "Xatolik yuz berdi. Yana urinib ko'ring.",
    music: "Musiqa",
    pin: "Parol",
    pinPh: "Parolni kiriting",
    open: "Ochish",
    wrongPin: "Parol xato",
    guestList: "Mehmonlar ro'yxati",
    totalYes: "Tasdiqlagan",
    totalGuests: "Jami mehmon",
    empty: "Hozircha javoblar yo'q",
    footer: "Sizni kutamiz!",
  },
  ru: {
    invitation: "Приглашение",
    heroTitle: "Оише 4 года!",
    heroSub: "Приглашаем вас на волшебный праздник маленькой принцессы",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    whenWhere: "Когда и где",
    dateText: "3 февраля 2027 года",
    timeText: "в 15:00",
    place: "Адрес",
    placeText: "ТЦ «Сховат», 3-й этаж, детская площадка",
    mapBtn: "Смотреть на карте",
    mapSoon: "Ссылка на карту скоро появится",
    gallery: "Фотографии Оиши",
    gallerySub: "Самые милые моменты",
    rsvp: "Подтвердите участие",
    rsvpSub: "Пожалуйста, оставьте пару слов",
    yourName: "Ваше имя",
    namePh: "Имя и фамилия",
    coming: "Приду",
    notComing: "Не смогу",
    guests: "Количество гостей",
    wish: "Поздравление",
    wishPh: "Пожелания для Оиши...",
    send: "Отправить",
    sending: "Отправляем...",
    thanks: "Спасибо! Ваш ответ получен.",
    error: "Произошла ошибка. Попробуйте снова.",
    music: "Музыка",
    pin: "Пароль",
    pinPh: "Введите пароль",
    open: "Открыть",
    wrongPin: "Неверный пароль",
    guestList: "Список гостей",
    totalYes: "Подтвердили",
    totalGuests: "Всего гостей",
    empty: "Пока нет ответов",
    footer: "Ждём вас!",
  },
  en: {
    invitation: "Invitation",
    heroTitle: "Oisha turns 4!",
    heroSub: "You are warmly invited to a magical little princess party",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    whenWhere: "When & where",
    dateText: "February 3, 2027",
    timeText: "at 3:00 PM",
    place: "Address",
    placeText: "Sxovat shopping mall, 3rd floor, kids playground",
    mapBtn: "View on map",
    mapSoon: "Map link coming soon",
    gallery: "Oisha's photos",
    gallerySub: "The sweetest moments",
    rsvp: "Please RSVP",
    rsvpSub: "Leave us a few words",
    yourName: "Your name",
    namePh: "First and last name",
    coming: "I'll be there",
    notComing: "Can't make it",
    guests: "Number of guests",
    wish: "Birthday wish",
    wishPh: "Your wishes for Oisha...",
    send: "Send",
    sending: "Sending...",
    thanks: "Thank you! Your reply was received.",
    error: "Something went wrong. Please try again.",
    music: "Music",
    pin: "Password",
    pinPh: "Enter password",
    open: "Open",
    wrongPin: "Wrong password",
    guestList: "Guest list",
    totalYes: "Confirmed",
    totalGuests: "Total guests",
    empty: "No replies yet",
    footer: "See you there!",
  },
};
