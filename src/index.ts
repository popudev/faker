import { Faker, vi, faker } from "@faker-js/faker";
import fs from "fs";

const fakerVI = new Faker({
  locale: [vi],
});

const users: any = [];

function formatUserNumber(number) {
  const formattedNumber = String(number).padStart(4, "0");
  const userString = "USER" + formattedNumber;
  return userString;
}

const orgIds = [
  "01ec76f2-3c8d-46c5-b2c6-816591a16cdd",
  "04f30c89-979d-4753-ad52-3bf42027d1fd",
  "06578308-6217-48a6-b795-e667adae3085",
  "079fcf15-932e-4418-9f8e-b0efc999a23c",
];

for (let i = 1; i <= 1000; i++) {
  const lastName = fakerVI.person.lastName();
  const firstName = fakerVI.person.firstName();
  const fullName = lastName + " " + firstName;
  const createdAt = faker.date.anytime();

  const user = {
    accessFailedCount: 0,
    code: formatUserNumber(i),
    createdAt: createdAt.getTime(),
    deletedAt: null,
    docType: "UserRecord",
    email: faker.internet.email({ firstName, lastName }),
    firstName: firstName,
    fullName: fullName,
    id: faker.string.uuid(),
    jobPositionName: "Nhân viên",
    lastName: lastName,
    order: fullName.split(" ").reverse().join(" "),
    password: "$2b$10$74qu7fc7NrSrSzti/myyHOv0kqcHB0etvIxII53jUlbkI.qCl7Md2",
    phone: faker.phone.number("+84 ### ### ###"),
    roleIds: ["9cec7cd7-9a87-40a0-95f9-fddea9583be8"],
    updatedAt: createdAt.getTime(),
    username: faker.internet.userName({ firstName, lastName }),
    workUnitId: orgIds[i % 4],
  };

  users.push(user);
}

fs.writeFileSync("./users_mock.json", JSON.stringify(users));
//
