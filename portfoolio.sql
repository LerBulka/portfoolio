-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 15 2024 г., 23:00
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `portfoolio`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `description`) VALUES
(1, 'Веб-дизайн', 'Работы по созданию уникальных дизайнов для веб-сайтов. Разработка красивых макетов, которые не только привлекают внимание, но и обеспечивают удобство использования для пользователей. От простых х до более сложных и креативных концепций.'),
(2, 'Учебные проекты ', 'Вы можете ознакомиться с моими учебными проектами, которые охватывают широкий спектр областей, таких как разработка веб-сайтов, программирование на различных языках и создание веб-приложений.'),
(3, 'Графический дизайн', 'Мои работы в области графического дизайна, включая создание уникального фирменного стиля, логотипов, иллюстраций и других графических элементов.');

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `image_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`image_id`, `project_id`, `image_url`, `description`, `createdAt`, `updatedAt`) VALUES
(4, 1, 'https://sun9-34.userapi.com/impg/TmiNYJK5jXppg50ygAOmGgziBq6iowfzwwHfyA/d2TeoEQxXAU.jpg?size=697x2160&quality=96&sign=ac07a057639eb6fa34bd690270899a99&type=album', NULL, '2024-05-09', '2024-05-09'),
(5, 1, 'https://sun9-54.userapi.com/impg/72-VLOeUsa6YKuUcssjklZFVajKubyxLSKV6Mw/ZnWtgNOpE7Y.jpg?size=1252x2160&quality=96&sign=2c05811c5625fcbde27ccef3bbc65b84&type=album', NULL, '2024-05-09', '2024-05-09'),
(6, 1, 'https://sun9-20.userapi.com/impg/IXkpgEx6km04R8Vda7BfxFsqew4p5dy3d5Ohtw/9KUzSs7BbLg.jpg?size=1199x2160&quality=96&sign=08b326546053be33d697299801eee118&type=album', NULL, '2024-05-09', '2024-05-09'),
(7, 2, 'https://sun9-22.userapi.com/impg/GO0oidl7NuMo08xO5W7VBWVgjpe35qOnagqJdg/tdRfWzJ-q1c.jpg?size=268x1080&quality=96&sign=037dcf7193837c005af225a83d88d970&type=album', NULL, '2024-05-09', '2024-05-09'),
(8, 2, 'https://sun9-48.userapi.com/impg/-WPyD1XvkPHd0iDczx-WyuajKJRFww1fSiAWbA/_Ox0bj1ZAXg.jpg?size=634x1080&quality=96&sign=014df555864c7176e51bf0d3bcc79c91&type=album', NULL, '2024-05-09', '2024-05-09'),
(9, 2, 'https://sun9-38.userapi.com/impg/3HblZGRu3ZhDKEAoz7ZgJuOvMRwnvvLA9JFvfg/NWAkTkfp4F4.jpg?size=417x1080&quality=96&sign=2fe76fa3e4a1dfb52b7f6adcda1b41e7&type=album', NULL, '2024-05-09', '2024-05-09');

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  `project_url` varchar(255) DEFAULT NULL,
  `github_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`project_id`, `category_id`, `subcategory_id`, `title`, `subtitle`, `description`, `image_name`, `createdAt`, `updatedAt`, `project_url`, `github_url`) VALUES
(1, 1, 3, 'InCom Profit', 'Бухгалтерские услуги', 'Дизайн главной страницы, страницы услуг и отдельной страницы услуги для сайта бухгалтерской компании.', 'incomprofit.png', '2024-04-30', '2024-04-30', NULL, NULL),
(2, 1, 2, 'Swanlaundry', 'Химчистка на заказ', 'Дизайн главной страницы, блога, и страницы заказа химчистки онлайн.', 'swanlaundry.png', '2024-04-30', '2024-04-30', 'https://swanlaundry.ee/', NULL),
(3, 2, 6, 'Paw Palace', 'Сайт гостиницы для животных', 'Создание сайта на React, с возможностью забронировать место для питомца в гостиннице, написать отзыв, видеть список услуг.', 'pawpalace.png', '2024-04-30', '2024-04-30', NULL, NULL),
(5, 3, 13, 'InCom Profit logo', 'Логотип для бухгалтерской компании', 'Описание проекта создание логотипа InCom Profit', 'incomprofitlogo.png', '2024-04-30', '2024-04-30', NULL, NULL),
(11, 1, 4, 'Varshavskiy', 'Интернет-магазин ювелирных изделий', 'Дизайн страницы каталога украшений, страницы оформления заказа, корзины и личного кабинета пользователя.', 'varshavsky.png', '2024-05-15', '2024-05-15', 'https://varshavskiy.eu/', NULL),
(12, 1, 3, 'Facade Japan', 'Каталог фасадных панелей', 'Дизайн главной страницы, страница каталога, контакты, полезная информация и о нас.', 'facadejapan.png', '2024-05-15', '2024-05-15', 'https://facadejapan.eu/ru/', NULL),
(13, 1, 2, 'Extrapolar', 'Фирма предоставляет услуги дизайна интерьера', 'Дизайн главной страницы, создание формы обратной связи.', 'extrapolar.png', '2024-05-15', '2024-05-15', 'https://www.extrapolar.com.cy/', NULL),
(14, 1, 2, 'Lettagroup', 'Фирма аренды рабочей силы', 'Дизайн главной страницы для фирмы, которая предлагает раюочую силу.', 'lettagroup.png', '2024-05-15', '2024-05-15', 'https://lettagroup.ee/ru/', NULL),
(15, 1, 4, 'Soft Decor', 'Салон ковров ручной работы', 'Дизайн главной страницы, каталога, страницы контактов для компании перекупщика ковров.', 'softdecor.png', '2024-05-15', '2024-05-15', '', NULL),
(16, 3, 13, 'SK Legal', 'Фирма юридических услуг', 'Создание логотипа с использованием Adobe Illustrator.', 'sklegal.png', '2024-05-15', '2024-05-15', NULL, NULL),
(17, 3, 13, 'Paradise', 'Суши-бар', 'Создание лого и фирменного стиля заведения.', 'paradiselogo.png', '2024-05-15', '2024-05-15', NULL, NULL),
(18, 3, 13, 'Ognecvet', 'Свечи ручной работы', 'Создание логотипа для идентификации личного бренда.', 'ognecvet.png', '2024-05-15', '2024-05-15', NULL, NULL),
(19, 3, 14, 'Policert', 'Электромонтажная фирма', 'Создание логотипа, визиток, баннера и флаера', 'policert.png', '2024-05-15', '2024-05-15', NULL, NULL),
(20, 3, 14, 'Paradise', 'Суши-бар', 'Создание фирменного стиля для суши-бара.', 'paradisecards.png', '2024-05-15', '2024-05-15', NULL, NULL),
(21, 3, 12, 'Noor Jalgttur', 'Баннер для клуба велосипедистов.', '', 'jalgttur.png', '2024-05-15', '2024-05-15', NULL, NULL),
(22, 3, 12, 'Swanlaundry', 'Рекламный банер для химчистки.', '', 'swanlaundryad.png', '2024-05-15', '2024-05-15', NULL, NULL),
(23, 3, 12, 'M.I.K.S. klubi', 'Клуб эстонского языка для детей', 'Баннер для рекламы.', 'miksad.png', '2024-05-15', '2024-05-15', NULL, NULL),
(24, 3, 12, 'Рекламный баннер', 'Баннер для страницы интернет-магазина', '', 'bannerproject.png', '2024-05-15', '2024-05-15', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `subcategories`
--

CREATE TABLE `subcategories` (
  `subcategory_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `subcategories`
--

INSERT INTO `subcategories` (`subcategory_id`, `category_id`, `name`) VALUES
(2, 1, 'Лэндинги'),
(3, 1, 'Многостранничники'),
(4, 1, 'Интернет-магазины'),
(6, 2, 'React'),
(7, 2, 'PHP'),
(8, 2, 'ASP.NET'),
(12, 3, 'Графика'),
(13, 3, 'Логотипы'),
(14, 3, 'Фирменный стиль');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `subcategory_id` (`subcategory_id`);

--
-- Индексы таблицы `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`subcategory_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `subcategory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projects_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`subcategory_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
