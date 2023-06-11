/*Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, входження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

Оголошена функція isNumberInRange(start, end, number)
У виразі перевірки використаний оператор &&
Виклик isNumberInRange(10, 30, 17) повертає true
Виклик isNumberInRange(10, 30, 5) повертає false
Виклик isNumberInRange(20, 50, 24) повертає true
Виклик isNumberInRange(20, 50, 76) повертає false*/

function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    return isInRange;
  }