# Caché (Furniture store)

This project was developed for an online store with the support of a hierarchical DBMS produced by InterSystems, positioned by the manufacturer as a multi-model.

Most of the project was built on the built-in programming language Caché Object Script (COS). In addition to COS, Caché provides developers with APIs for using object and SQL access to the same data.

# Features

  - Add, remove, and move goods
  - Drag and drop object
  - Catalog
  - News blog

The development took quite a long time (2-4 weeks xd).  As [Rishat7c] writes on the [Vk.com][df1]

![Иллюстрация к проекту](https://pp.userapi.com/c837332/v837332286/4a913/4HrHj2IK9yo.jpg)

# Other

Каждый метод может иметь:
- Имя
- Список формальных параметров
- Возвращаемые значения
- Программный код
- Имя метода должно быть уникально внутри класса
Методы класса реализуются ввиде функций методы / процедур Cache' Objet Script 4
Параметры методу могут передоваться по ссылки и по значению 
в Cache' можно выделить два вида элементов:
- Метод класса 

ClassMethod ИМЯ (Список параметров)
{
	Код Метода
}

- Экземплярный метод

Method ИМЯ (Список параметров)
{
	Код Метода
}

Метод может иметь любое число аргументов
При определении аргументов необходимо указать их тип

Method Add(x As %Integer, y As %Integer)
{
	Quit x+y
}

При создании метода можно указать значение аргумента по умолчанию Пример: y As %Integer = 10

Method ИМЯ(Список параметров) As ТИП

Поддерживаемые Basic, Java и COS

Методы экземпляров используются если создан объект 
