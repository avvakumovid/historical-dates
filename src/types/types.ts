export type HistoricalDate = {
  id: number;
  typeId: number;
  year: number;
  description: string;
};

export type HistoricalDateType = {
  id: number;
  name: string;
  yearStart: number;
  yearEnd: number;
};

export type HistoricalDateList = {
  type: HistoricalDateType;
  dates: HistoricalDate[];
};

export const dateType: HistoricalDateType[] = [
  {
    id: 1,
    name: 'Наука',
    yearStart: 1953,
    yearEnd: 1974,
  },
  {
    id: 2,
    name: 'Кино',
    yearStart: 1975,
    yearEnd: 1983,
  },
  {
    id: 3,
    name: 'Литература',
    yearStart: 1984,
    yearEnd: 1992,
  },
  {
    id: 4,
    name: 'Музыка',
    yearStart: 1993,
    yearEnd: 2001,
  },
  {
    id: 5,
    name: 'Искусство',
    yearStart: 2002,
    yearEnd: 2010,
  },
  {
    id: 6,
    name: 'Спорт',
    yearStart: 2011,
    yearEnd: 2024,
  },
];

export const historicalDates: HistoricalDate[] = [
  {
    id: 1,
    typeId: 1,
    year: 1953,
    description:
      'Открытие структуры ДНК: Джеймс Уотсон и Фрэнсис Крик публикуют статью о двойной спирали ДНК, что стало основой молекулярной генетики.',
  },
  {
    id: 2,
    typeId: 1,
    year: 1954,
    description:
      'Создание первого ядерного реактора для производства электричества: реактор в Обнинске, СССР, стал первым в мире коммерческим атомным энергетическим источником',
  },
  {
    id: 3,
    typeId: 1,
    year: 1957,
    description: 'Запуск «Спутник-1»: первый искусственный спутник Земли, положивший начало эпохе космических исследований.',
  },
  {
    id: 4,
    typeId: 1,
    year: 1960,
    description: 'Изобретение лазера: Теодор Майман создает первый работающий лазер, что открывает новые горизонты в физике и технологиях.',
  },
  {
    id: 5,
    typeId: 1,
    year: 1961,
    description:
      'Полет Юрия Гагарина: первый человек в космосе, что стало значимым событием в космических исследованиях и символом успеха советской науки.',
  },
  {
    id: 6,
    typeId: 1,
    year: 1965,
    description:
      'Открытие космического микроволнового фона: Арно Пензиас и Роберт Уилсон обнаруживают реликтовое излучение, подтверждающее теорию Большого взрыва.',
  },
  {
    id: 7,
    typeId: 1,
    year: 1967,
    description:
      'Открытие пульсаров: Джоселин Белл Бернелл и Антони Хьюиш открывают быстро вращающиеся нейтронные звезды, которые значительно расширяют понимание звездной эволюции.',
  },
  {
    id: 8,
    typeId: 1,
    year: 1970,
    description:
      'Первое успешное клонирование растений: метод тканевой культуры позволяет клонировать растения, что приводит к революции в сельском хозяйстве.',
  },
  {
    id: 9,
    typeId: 1,
    year: 1974,
    description:
      'Создание первого микропроцессора: Intel разрабатывает 4004, что приводит к развитию компьютерной технологии и началу эры персональных компьютеров',
  },
  {
    id: 10,
    typeId: 1,
    year: 1974,
    description:
      'Начало изучения вируса Эбола: первый документально зафиксированный случай, когда исследователи идентифицируют вирус, вызывающий геморрагическую лихорадку, что открывает новую область в вирусологии.',
  },
  {
    id: 11,
    typeId: 2,
    year: 1975,
    description: 'Выход фильма "Челюсти" Стивена Спилберга, который стал первым блокбастером в истории кино и изменил подход к производству фильмов.',
  },
  {
    id: 12,
    typeId: 2,
    year: 1976,
    description: 'Смерть актёра и режиссёра Орсона Уэллса, оказавшего значительное влияние на развитие кино.',
  },
  {
    id: 13,
    typeId: 2,
    year: 1977,
    description: 'Выход "Звёздных войн" Джорджа Лукаса, который стал культовым фильмом и положил начало успешной франшизе.',
  },
  {
    id: 14,
    typeId: 2,
    year: 1978,
    description: 'Премьера фильма "Скала" с Аль Пачино, который получил признание за оригинальный сюжет и характерные выступления.',
  },
  {
    id: 15,
    typeId: 2,
    year: 1979,
    description: 'Выход фильма "Чужой" Ридли Скотта, который установил новые стандарты в жанре научной фантастики и ужасов.',
  },
  {
    id: 16,
    typeId: 2,
    year: 1980,
    description: 'Премьера фильма "Сияние" Стэнли Кубрика, который стал культовым фильмом ужасов и был основан на романе Стивена Кинга.',
  },
  {
    id: 17,
    typeId: 2,
    year: 1981,
    description: 'Каннский кинофестиваль наградил "Апокалипсис сегодня" Фрэнсиса Форда Копполы Золотой пальмовой ветвью.',
  },
  {
    id: 18,
    typeId: 2,
    year: 1982,
    description: 'Выход "Э.T." Спилберга, который стал одним из самых кассовых фильмов в истории и символом дружбы и детской фантазии.',
  },
  {
    id: 19,
    typeId: 2,
    year: 1983,
    description: 'Выход "Звёздных войн: Эпизод VI – Возвращение джедая", завершающий трилогию и устанавливающий рекорды кассовых сборов.',
  },
  {
    id: 20,
    typeId: 2,
    year: 1983,
    description: 'Смерть актрисы Вивьен Ли, известной своей ролью Скарлетт О\'Хара в "Унесённых ветром", оставившей значительное наследие в кино.',
  },

  {
    id: 21,
    typeId: 3,
    year: 1984,
    description:
      'Публикация романа Джорджа Оруэлла "1984", который стал классикой антиутопической литературы и широко обсуждается в контексте тоталитаризма.',
  },
  {
    id: 22,
    typeId: 3,
    year: 1985,
    description: 'Выход романа "В поисках утраченного времени" Марселя Пруста в английском переводе, что привело к новому интересу к произведению.',
  },
  {
    id: 23,
    typeId: 3,
    year: 1986,
    description: 'Премия "Букер" присуждена К. В. Джеймсу за роман "Сиреневый цветок", что повысило его известность в литературных кругах.',
  },
  {
    id: 24,
    typeId: 3,
    year: 1987,
    description: 'Публикация "Книга оспаривания" Нила Геймана, которая стала важной вехой в развитии современной фэнтези и фэнтезийной литературы.',
  },
  {
    id: 25,
    typeId: 3,
    year: 1988,
    description: 'Выход "Тёмной башни" Стивена Кинга, который стал первой книгой в его эпопее, соединяющей различные жанры.',
  },
  {
    id: 26,
    typeId: 3,
    year: 1989,
    description: 'Смерть выдающегося писателя и поэта Т. С. Элиота, чьи работы оставили значительный след в английской литературе.',
  },
  {
    id: 27,
    typeId: 3,
    year: 1990,
    description:
      'Публикация "Маленького принца" Антуана де Сент-Экзюпери в новой редакции, что вновь привлекло внимание к этому классическому произведению.',
  },
  {
    id: 28,
    typeId: 3,
    year: 1991,
    description:
      'Выход "Левиафан" Нила Стивенсона, который стал культовым произведением в жанре киберпанка и предвосхитил многие современные технологии.',
  },
  {
    id: 29,
    typeId: 3,
    year: 1992,
    description: 'Премия "Пулицера" присуждена Тони Моррисон за роман "Песнь Соломона", что закрепило её репутацию выдающегося писателя.',
  },
  {
    id: 30,
    typeId: 3,
    year: 1992,
    description: 'Выход "Невозможного" Дэвида Митчелла, который стал важным произведением в постмодернистской литературе.',
  },
  {
    id: 31,
    typeId: 4,
    year: 1993,
    description: 'Выход альбома "The Chronic" Доктора Дре, который оказал огромное влияние на развитие хип-хопа и поп-культуры.',
  },
  {
    id: 32,
    typeId: 4,
    year: 1994,
    description: 'Премьера "MTV Unplugged" Нирваны, где группа исполнила акустическую версию своих хитов, ставшую культовой.',
  },
  {
    id: 33,
    typeId: 4,
    year: 1995,
    description: 'Выход альбома "Jagged Little Pill" Алланис Мориссетт, который стал символом 90-х и принес успех женской рок-музыке.',
  },
  {
    id: 34,
    typeId: 4,
    year: 1996,
    description: 'Смерть легендарного рэпера Тупака Шакура, что стало трагическим событием в мире музыки и оказало влияние на хип-хоп.',
  },
  {
    id: 35,
    typeId: 4,
    year: 1997,
    description: 'Выход альбома "OK Computer" группы Radiohead, который считается одной из величайших записей всех времён.',
  },
  {
    id: 36,
    typeId: 4,
    year: 1998,
    description: 'Выпуск дебютного альбома "The Miseducation of Lauryn Hill", который завоевал множество наград и закрепил статус Лорин Хилл.',
  },
  {
    id: 37,
    typeId: 4,
    year: 1999,
    description: 'Выход альбома "Millennium" группы Backstreet Boys, который стал одним из самых успешных альбомов поп-музыки.',
  },
  {
    id: 38,
    typeId: 4,
    year: 2000,
    description: 'Премьера мюзикла "Rent" на Бродвее, который стал культовым и оказал влияние на музыкальный театр.',
  },
  {
    id: 39,
    typeId: 4,
    year: 2001,
    description: 'Теракты 11 сентября в США, которые оказали огромное влияние на музыкальную индустрию и привели к изменению тематики песен.',
  },
  {
    id: 40,
    typeId: 4,
    year: 2001,
    description: 'Выход альбома "Justified" Джастина Тимберлейка, который стал успешным дебютом сольной карьеры после ухода из *NSYNC.',
  },
  {
    id: 41,
    typeId: 5,
    year: 2002,
    description: 'Выставка "Documenta 11" в Касселе, Германия, привлекла внимание к современному искусству и новым подходам к выставкам.',
  },
  {
    id: 42,
    typeId: 5,
    year: 2003,
    description:
      'Открытие музея современного искусства "Тейт Модерн" в Лондоне, который стал одним из ведущих центров современного искусства в мире.',
  },
  {
    id: 43,
    typeId: 5,
    year: 2004,
    description: 'Смерть художника Роба Лафи, известного своими работами в жанре граффити и уличного искусства, оставившего значительное наследие.',
  },
  {
    id: 44,
    typeId: 5,
    year: 2005,
    description: 'Выставка "Серебряный век" в Музее современного искусства в Нью-Йорке, посвященная современному российскому искусству.',
  },
  {
    id: 45,
    typeId: 5,
    year: 2006,
    description:
      'Участие художницы Яой Кусамы в Венецианской биеннале, что укрепило её репутацию как одной из самых влиятельных современных художниц.',
  },
  {
    id: 46,
    typeId: 5,
    year: 2007,
    description: 'Выставка "Скульптура" в Центре Помпиду в Париже, представившая работы ведущих современных скульпторов.',
  },
  {
    id: 47,
    typeId: 5,
    year: 2008,
    description:
      'Выход фильма "Золотой компас", основанного на серии книг Филипа Пулмана, который оказал влияние на современное визуальное искусство.',
  },
  {
    id: 48,
    typeId: 5,
    year: 2009,
    description: 'Выставка "Феномен современного искусства" в Музее Гуггенхайма в Нью-Йорке, посвященная новым направлениям в искусстве.',
  },
  {
    id: 49,
    typeId: 5,
    year: 2010,
    description: 'Открытие "Сонной бури" в Лондонской галерее, выставки, ставшей знаковым событием в современном искусстве.',
  },
  {
    id: 50,
    typeId: 5,
    year: 2010,
    description: 'Премия Тёрнера присуждена художнице Керри Джеймс Маршалл, что ознаменовало её вклад в современное искусство.',
  },
  {
    id: 51,
    typeId: 6,
    year: 2011,
    description:
      'Джордан Спитцер выиграл Золотую медаль на чемпионате мира по легкой атлетике в Тэгу, Южная Корея, став одним из самых известных легкоатлетов.',
  },
  {
    id: 52,
    typeId: 6,
    year: 2012,
    description:
      'Летние Олимпийские игры в Лондоне, где США стали лидерами по количеству медалей, а Майкл Фелпс завоевал свои 22 олимпийские медали.',
  },
  {
    id: 53,
    typeId: 6,
    year: 2013,
    description: 'Бостонский марафон, который стал местом трагического теракта, унесшего жизни и повредившего сотни участников и зрителей.',
  },
  {
    id: 54,
    typeId: 6,
    year: 2014,
    description: 'Чемпионат мира по футболу в Бразилии, где Германия завоевала трофей, победив Аргентину в финале.',
  },
  {
    id: 55,
    typeId: 6,
    year: 2015,
    description: 'Выход фильма "Крусейдеры" о карьере известного баскетболиста Леброна Джеймса, который стал культурным феноменом.',
  },
  {
    id: 56,
    typeId: 6,
    year: 2016,
    description: 'Летние Олимпийские игры в Рио-де-Жанейро, на которых были установлены новые рекорды и запомнившиеся выступления.',
  },
  {
    id: 57,
    typeId: 6,
    year: 2017,
    description: 'Россию отстранили от участия в зимних Олимпийских играх 2018 года из-за допингового скандала.',
  },
  {
    id: 58,
    typeId: 6,
    year: 2018,
    description: 'Чемпионат мира по футболу в России, где Франция выиграла свой второй титул, обыграв Хорватию в финале.',
  },
  {
    id: 59,
    typeId: 6,
    year: 2019,
    description:
      'Токийские Олимпийские игры перенесены на 2021 год из-за пандемии COVID-19, что стало беспрецедентным событием в спортивной истории.',
  },
  {
    id: 60,
    typeId: 6,
    year: 2021,
    description: 'Летние Олимпийские игры в Токио прошли без зрителей, впервые в истории, из-за ограничений, связанных с пандемией.',
  },
  {
    id: 61,
    typeId: 6,
    year: 2022,
    description: 'Чемпионат мира по футболу в Катаре был впервые проведен в ноябре и декабре, что изменило традиционный график турнира.',
  },
  {
    id: 62,
    typeId: 6,
    year: 2023,
    description: 'Всемирные спортивные игры в Бенедикте, которые отметили растущее влияние экологии в спорте.',
  },
  {
    id: 63,
    typeId: 6,
    year: 2024,
    description: 'Летние Олимпийские игры в Париже, ожидающиеся как важное событие с акцентом на устойчивое развитие и инклюзивность.',
  },
];

export const historicalDateList: HistoricalDateList[] = [
  {
    type: {
      id: 1,
      name: 'Наука',
      yearStart: 1953,
      yearEnd: 1974,
    },
    dates: [
      {
        id: 1,
        typeId: 1,
        year: 1953,
        description:
          'Открытие структуры ДНК: Джеймс Уотсон и Фрэнсис Крик публикуют статью о двойной спирали ДНК, что стало основой молекулярной генетики.',
      },
      {
        id: 2,
        typeId: 1,
        year: 1954,
        description:
          'Создание первого ядерного реактора для производства электричества: реактор в Обнинске, СССР, стал первым в мире коммерческим атомным энергетическим источником',
      },
      {
        id: 3,
        typeId: 1,
        year: 1957,
        description: 'Запуск «Спутник-1»: первый искусственный спутник Земли, положивший начало эпохе космических исследований.',
      },
      {
        id: 4,
        typeId: 1,
        year: 1960,
        description: 'Изобретение лазера: Теодор Майман создает первый работающий лазер, что открывает новые горизонты в физике и технологиях.',
      },
      {
        id: 5,
        typeId: 1,
        year: 1961,
        description:
          'Полет Юрия Гагарина: первый человек в космосе, что стало значимым событием в космических исследованиях и символом успеха советской науки.',
      },
      {
        id: 6,
        typeId: 1,
        year: 1965,
        description:
          'Открытие космического микроволнового фона: Арно Пензиас и Роберт Уилсон обнаруживают реликтовое излучение, подтверждающее теорию Большого взрыва.',
      },
      {
        id: 7,
        typeId: 1,
        year: 1967,
        description:
          'Открытие пульсаров: Джоселин Белл Бернелл и Антони Хьюиш открывают быстро вращающиеся нейтронные звезды, которые значительно расширяют понимание звездной эволюции.',
      },
      {
        id: 8,
        typeId: 1,
        year: 1970,
        description:
          'Первое успешное клонирование растений: метод тканевой культуры позволяет клонировать растения, что приводит к революции в сельском хозяйстве.',
      },
      {
        id: 9,
        typeId: 1,
        year: 1974,
        description:
          'Создание первого микропроцессора: Intel разрабатывает 4004, что приводит к развитию компьютерной технологии и началу эры персональных компьютеров',
      },
      {
        id: 10,
        typeId: 1,
        year: 1974,
        description:
          'Начало изучения вируса Эбола: первый документально зафиксированный случай, когда исследователи идентифицируют вирус, вызывающий геморрагическую лихорадку, что открывает новую область в вирусологии.',
      },
    ],
  },
  {
    type: {
      id: 2,
      name: 'Кино',
      yearStart: 1975,
      yearEnd: 1983,
    },
    dates: [
      {
        id: 11,
        typeId: 2,
        year: 1975,
        description:
          'Выход фильма "Челюсти" Стивена Спилберга, который стал первым блокбастером в истории кино и изменил подход к производству фильмов.',
      },
      {
        id: 12,
        typeId: 2,
        year: 1976,
        description: 'Смерть актёра и режиссёра Орсона Уэллса, оказавшего значительное влияние на развитие кино.',
      },
      {
        id: 13,
        typeId: 2,
        year: 1977,
        description: 'Выход "Звёздных войн" Джорджа Лукаса, который стал культовым фильмом и положил начало успешной франшизе.',
      },
      {
        id: 14,
        typeId: 2,
        year: 1978,
        description: 'Премьера фильма "Скала" с Аль Пачино, который получил признание за оригинальный сюжет и характерные выступления.',
      },
      {
        id: 15,
        typeId: 2,
        year: 1979,
        description: 'Выход фильма "Чужой" Ридли Скотта, который установил новые стандарты в жанре научной фантастики и ужасов.',
      },
      {
        id: 16,
        typeId: 2,
        year: 1980,
        description: 'Премьера фильма "Сияние" Стэнли Кубрика, который стал культовым фильмом ужасов и был основан на романе Стивена Кинга.',
      },
      {
        id: 17,
        typeId: 2,
        year: 1981,
        description: 'Каннский кинофестиваль наградил "Апокалипсис сегодня" Фрэнсиса Форда Копполы Золотой пальмовой ветвью.',
      },
      {
        id: 18,
        typeId: 2,
        year: 1982,
        description: 'Выход "Э.T." Спилберга, который стал одним из самых кассовых фильмов в истории и символом дружбы и детской фантазии.',
      },
      {
        id: 19,
        typeId: 2,
        year: 1983,
        description: 'Выход "Звёздных войн: Эпизод VI – Возвращение джедая", завершающий трилогию и устанавливающий рекорды кассовых сборов.',
      },
      {
        id: 20,
        typeId: 2,
        year: 1983,
        description:
          'Смерть актрисы Вивьен Ли, известной своей ролью Скарлетт О\'Хара в "Унесённых ветром", оставившей значительное наследие в кино.',
      },
    ],
  },
  {
    type: {
      id: 3,
      name: 'Литература',
      yearStart: 1984,
      yearEnd: 1992,
    },
    dates: [
      {
        id: 21,
        typeId: 3,
        year: 1984,
        description:
          'Публикация романа Джорджа Оруэлла "1984", который стал классикой антиутопической литературы и широко обсуждается в контексте тоталитаризма.',
      },
      {
        id: 22,
        typeId: 3,
        year: 1985,
        description:
          'Выход романа "В поисках утраченного времени" Марселя Пруста в английском переводе, что привело к новому интересу к произведению.',
      },
      {
        id: 23,
        typeId: 3,
        year: 1986,
        description: 'Премия "Букер" присуждена К. В. Джеймсу за роман "Сиреневый цветок", что повысило его известность в литературных кругах.',
      },
      {
        id: 24,
        typeId: 3,
        year: 1987,
        description:
          'Публикация "Книга оспаривания" Нила Геймана, которая стала важной вехой в развитии современной фэнтези и фэнтезийной литературы.',
      },
      {
        id: 25,
        typeId: 3,
        year: 1988,
        description: 'Выход "Тёмной башни" Стивена Кинга, который стал первой книгой в его эпопее, соединяющей различные жанры.',
      },
      {
        id: 26,
        typeId: 3,
        year: 1989,
        description: 'Смерть выдающегося писателя и поэта Т. С. Элиота, чьи работы оставили значительный след в английской литературе.',
      },
      {
        id: 27,
        typeId: 3,
        year: 1990,
        description:
          'Публикация "Маленького принца" Антуана де Сент-Экзюпери в новой редакции, что вновь привлекло внимание к этому классическому произведению.',
      },
      {
        id: 28,
        typeId: 3,
        year: 1991,
        description:
          'Выход "Левиафан" Нила Стивенсона, который стал культовым произведением в жанре киберпанка и предвосхитил многие современные технологии.',
      },
      {
        id: 29,
        typeId: 3,
        year: 1992,
        description: 'Премия "Пулицера" присуждена Тони Моррисон за роман "Песнь Соломона", что закрепило её репутацию выдающегося писателя.',
      },
      {
        id: 30,
        typeId: 3,
        year: 1992,
        description: 'Выход "Невозможного" Дэвида Митчелла, который стал важным произведением в постмодернистской литературе.',
      },
    ],
  },
  {
    type: {
      id: 4,
      name: 'Музыка',
      yearStart: 1993,
      yearEnd: 2001,
    },
    dates: [
      {
        id: 31,
        typeId: 4,
        year: 1993,
        description: 'Выход альбома "The Chronic" Доктора Дре, который оказал огромное влияние на развитие хип-хопа и поп-культуры.',
      },
      {
        id: 32,
        typeId: 4,
        year: 1994,
        description: 'Премьера "MTV Unplugged" Нирваны, где группа исполнила акустическую версию своих хитов, ставшую культовой.',
      },
      {
        id: 33,
        typeId: 4,
        year: 1995,
        description: 'Выход альбома "Jagged Little Pill" Алланис Мориссетт, который стал символом 90-х и принес успех женской рок-музыке.',
      },
      {
        id: 34,
        typeId: 4,
        year: 1996,
        description: 'Смерть легендарного рэпера Тупака Шакура, что стало трагическим событием в мире музыки и оказало влияние на хип-хоп.',
      },
      {
        id: 35,
        typeId: 4,
        year: 1997,
        description: 'Выход альбома "OK Computer" группы Radiohead, который считается одной из величайших записей всех времён.',
      },
      {
        id: 36,
        typeId: 4,
        year: 1998,
        description: 'Выпуск дебютного альбома "The Miseducation of Lauryn Hill", который завоевал множество наград и закрепил статус Лорин Хилл.',
      },
      {
        id: 37,
        typeId: 4,
        year: 1999,
        description: 'Выход альбома "Millennium" группы Backstreet Boys, который стал одним из самых успешных альбомов поп-музыки.',
      },
      {
        id: 38,
        typeId: 4,
        year: 2000,
        description: 'Премьера мюзикла "Rent" на Бродвее, который стал культовым и оказал влияние на музыкальный театр.',
      },
      {
        id: 39,
        typeId: 4,
        year: 2001,
        description: 'Теракты 11 сентября в США, которые оказали огромное влияние на музыкальную индустрию и привели к изменению тематики песен.',
      },
      {
        id: 40,
        typeId: 4,
        year: 2001,
        description: 'Выход альбома "Justified" Джастина Тимберлейка, который стал успешным дебютом сольной карьеры после ухода из *NSYNC.',
      },
    ],
  },
  {
    type: {
      id: 5,
      name: 'Искусство',
      yearStart: 2002,
      yearEnd: 2010,
    },
    dates: [
      {
        id: 41,
        typeId: 5,
        year: 2002,
        description: 'Выставка "Documenta 11" в Касселе, Германия, привлекла внимание к современному искусству и новым подходам к выставкам.',
      },
      {
        id: 42,
        typeId: 5,
        year: 2003,
        description:
          'Открытие музея современного искусства "Тейт Модерн" в Лондоне, который стал одним из ведущих центров современного искусства в мире.',
      },
      {
        id: 43,
        typeId: 5,
        year: 2004,
        description:
          'Смерть художника Роба Лафи, известного своими работами в жанре граффити и уличного искусства, оставившего значительное наследие.',
      },
      {
        id: 44,
        typeId: 5,
        year: 2005,
        description: 'Выставка "Серебряный век" в Музее современного искусства в Нью-Йорке, посвященная современному российскому искусству.',
      },
      {
        id: 45,
        typeId: 5,
        year: 2006,
        description:
          'Участие художницы Яой Кусамы в Венецианской биеннале, что укрепило её репутацию как одной из самых влиятельных современных художниц.',
      },
      {
        id: 46,
        typeId: 5,
        year: 2007,
        description: 'Выставка "Скульптура" в Центре Помпиду в Париже, представившая работы ведущих современных скульпторов.',
      },
      {
        id: 47,
        typeId: 5,
        year: 2008,
        description:
          'Выход фильма "Золотой компас", основанного на серии книг Филипа Пулмана, который оказал влияние на современное визуальное искусство.',
      },
      {
        id: 48,
        typeId: 5,
        year: 2009,
        description: 'Выставка "Феномен современного искусства" в Музее Гуггенхайма в Нью-Йорке, посвященная новым направлениям в искусстве.',
      },
      {
        id: 49,
        typeId: 5,
        year: 2010,
        description: 'Открытие "Сонной бури" в Лондонской галерее, выставки, ставшей знаковым событием в современном искусстве.',
      },
      {
        id: 50,
        typeId: 5,
        year: 2010,
        description: 'Премия Тёрнера присуждена художнице Керри Джеймс Маршалл, что ознаменовало её вклад в современное искусство.',
      },
    ],
  },
  {
    type: {
      id: 6,
      name: 'Спорт',
      yearStart: 2011,
      yearEnd: 2024,
    },
    dates: [
      {
        id: 51,
        typeId: 6,
        year: 2011,
        description:
          'Джордан Спитцер выиграл Золотую медаль на чемпионате мира по легкой атлетике в Тэгу, Южная Корея, став одним из самых известных легкоатлетов.',
      },
      {
        id: 52,
        typeId: 6,
        year: 2012,
        description:
          'Летние Олимпийские игры в Лондоне, где США стали лидерами по количеству медалей, а Майкл Фелпс завоевал свои 22 олимпийские медали.',
      },
      {
        id: 53,
        typeId: 6,
        year: 2013,
        description: 'Бостонский марафон, который стал местом трагического теракта, унесшего жизни и повредившего сотни участников и зрителей.',
      },
      {
        id: 54,
        typeId: 6,
        year: 2014,
        description: 'Чемпионат мира по футболу в Бразилии, где Германия завоевала трофей, победив Аргентину в финале.',
      },
      {
        id: 55,
        typeId: 6,
        year: 2015,
        description: 'Выход фильма "Крусейдеры" о карьере известного баскетболиста Леброна Джеймса, который стал культурным феноменом.',
      },
      {
        id: 56,
        typeId: 6,
        year: 2016,
        description: 'Летние Олимпийские игры в Рио-де-Жанейро, на которых были установлены новые рекорды и запомнившиеся выступления.',
      },
      {
        id: 57,
        typeId: 6,
        year: 2017,
        description: 'Россию отстранили от участия в зимних Олимпийских играх 2018 года из-за допингового скандала.',
      },
      {
        id: 58,
        typeId: 6,
        year: 2018,
        description: 'Чемпионат мира по футболу в России, где Франция выиграла свой второй титул, обыграв Хорватию в финале.',
      },
      {
        id: 59,
        typeId: 6,
        year: 2019,
        description:
          'Токийские Олимпийские игры перенесены на 2021 год из-за пандемии COVID-19, что стало беспрецедентным событием в спортивной истории.',
      },
      {
        id: 60,
        typeId: 6,
        year: 2021,
        description: 'Летние Олимпийские игры в Токио прошли без зрителей, впервые в истории, из-за ограничений, связанных с пандемией.',
      },
    ],
  },
];
