Домашнее задание по курсу «Технологии разработки веб-приложений»
Вариант: ТРВП-001

Разработать клиент-серверное приложение, реализующее функциональные
требования (CRUD-операции), заданные в пределах указанной предметной области, с
соблюдением следующих технических требований:
• Клиентская сторона приложения должна быть разработана с использованием
языка разметки HTML, таблиц стилей CSS и языка программирования JavaScript.
Разрешено использовать любую библиотеку/фреймворк для построения
пользовательского веб-интерфейса.
• Серверная сторона приложения должна быть разработана с использованием
языка программирования JavaScript и платформы Node.js. Разрешено
использовать любую библиотеку/фреймворк для создания сервера.
• Взаимодействие между клиентом и сервером должно осуществляться через
спроектированный REST-like API.
• Данные на серверной стороне должны храниться в базе данных. Разрешено
использовать любую БД и СУБД, к которой возможно подключиться из JavaScript-
кода.
• Вместо JavaScript разрешено использовать TypeScript.
Приложение представляет собой раздел личного кабинета менеджера интернет-
провайдера, отвечающий за распределение работы на конечный период времени. В
разделе указывается список мастеров с возможностью добавления мастера в список,
удаления его из списка и редактирования информации о нем. Информация о мастере:
ФИО (строка), ID (строка, нередактируемый атрибут). У каждого мастера есть список
назначенных ему заявок на подключение интернета, в который можно добавлять заявки
и удалять их из списка, а также переводить заявку с одного мастера на другого. Атрибуты
заявки: адрес (строка), сложность (выбор варианта из списка в условных единицах), ID
(строка, нередактируемый атрибут). Каждый мастер может выполнить несколько заявок
с суммарной сложностью N. Если добавляемая (любым способом) мастеру заявка
превышает заданный лимит сложности N, должно отобразиться уведомление-
предупреждение о невозможности назначения заявки данному мастеру. Соотношение
уровней сложности в условных единицах, а также величина N задается разработчиком.