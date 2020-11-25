$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("_01_Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Senaryo ;"
    },
    {
      "line": 2,
      "value": "#1- siteyi açınız."
    },
    {
      "line": 3,
      "value": "#2- username ve password u gönderin ve Login butonuna tıklatın."
    },
    {
      "line": 4,
      "value": "#3- Login olduğunuzu doğrulayın."
    }
  ],
  "line": 6,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 310500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#username ve password girerek login doğrulama"
    }
  ],
  "line": 10,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#siteyi aç - basgara a git"
    }
  ],
  "line": 13,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#username ve passwordu gir ve login butonuna tıklat"
    }
  ],
  "line": 15,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Login olduğunu doğrula"
    }
  ],
  "line": 17,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 8373245500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 958350200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 40800,
  "status": "passed"
});
formatter.after({
  "duration": 6752872100,
  "status": "passed"
});
formatter.uri("_02_Country.feature");
formatter.feature({
  "line": 1,
  "name": "Country functionality",
  "description": "",
  "id": "country-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 121600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create Country",
  "description": "",
  "id": "country-functionality;create-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Navigate to country page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Create a country",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 7243250000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 847430700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.navigate_to_country_page()"
});
formatter.result({
  "duration": 3759494900,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.create_a_country()"
});
formatter.result({
  "duration": 1254584600,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 10231947200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027successfully\u0027) to be present in element [[ChromeDriver: chrome on WINDOWS (cdab4d9af07a5d6388eeff45d8d36a57)] -\u003e xpath: //div[@id\u003d\u0027toast-container\u0027]] (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-INTB117\u0027, ip: \u0027192.168.42.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TECHNO~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4833}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cdab4d9af07a5d6388eeff45d8d36a57\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Pages._Parent.verifyElementContainsText(_Parent.java:75)\r\n\tat Pages.DialogContent.findElementAndVerifyContainsText(DialogContent.java:216)\r\n\tat StepDefinitions._02_CountrySteps.success_message_should_be_displayed(_02_CountrySteps.java:33)\r\n\tat ✽.Then Success message should be displayed(_02_Country.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6194261000,
  "status": "passed"
});
formatter.uri("_06_Nationalities.feature");
formatter.feature({
  "line": 1,
  "name": "Nationalities functionality",
  "description": "",
  "id": "nationalities-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Nationalities page",
  "keyword": "And "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 7984667700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 816927400,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "_06_NationalitiesSteps.navigateToNationalitiesPage()"
});
formatter.result({
  "duration": 4514037100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Nationalities All functionality",
  "description": "",
  "id": "nationalities-functionality;nationalities-all-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    },
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Create a Nationality name as \"iscb9\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User edit the \"iscb9\" to \"iscb9\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User delete the \"iscb9\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "iscb9",
      "offset": 30
    }
  ],
  "location": "_06_NationalitiesSteps.createANationalityNameAs(String)"
});
formatter.result({
  "duration": 1104118000,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 710758000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iscb9",
      "offset": 15
    },
    {
      "val": "iscb9",
      "offset": 26
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_edit_the_to(String,String)"
});
formatter.result({
  "duration": 4390421200,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 697159300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iscb9",
      "offset": 17
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_delete_the(String)"
});
formatter.result({
  "duration": 3876089700,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 602193900,
  "status": "passed"
});
formatter.after({
  "duration": 5764184100,
  "status": "passed"
});
formatter.uri("_09_EnteranceExam.feature");
formatter.feature({
  "line": 1,
  "name": "Entrance Exam functionality",
  "description": "",
  "id": "entrance-exam-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 81200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 8162339000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 803763000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create entrance exam",
  "description": "",
  "id": "entrance-exam-functionality;create-entrance-exam",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "entranceExamsParent"
      ],
      "line": 12
    },
    {
      "cells": [
        "entranceExamsSetup"
      ],
      "line": 13
    },
    {
      "cells": [
        "entranceExamsChild"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "nameInput",
        "ExamOneIsmet3"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Click in the new exam form",
  "rows": [
    {
      "cells": [
        "academicPeriod"
      ],
      "line": 23
    },
    {
      "cells": [
        "option1"
      ],
      "line": 24
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 25
    },
    {
      "cells": [
        "option1"
      ],
      "line": 26
    },
    {
      "cells": [
        "documentType"
      ],
      "line": 27
    },
    {
      "cells": [
        "option1"
      ],
      "line": 28
    },
    {
      "cells": [
        "examsAddBtn"
      ],
      "line": 29
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "entranceExamsParent"
      ],
      "line": 35
    },
    {
      "cells": [
        "entranceExamsSetup"
      ],
      "line": 36
    },
    {
      "cells": [
        "entranceExamsChild"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User delete the \"ExamOneIsmet3\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 4038833700,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 817148400,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 719746700,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.clickInTheNewExamForm(DataTable)"
});
formatter.result({
  "duration": 1527036200,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 10252699000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027successfully\u0027) to be present in element [[ChromeDriver: chrome on WINDOWS (367b9053f8ed80801d84f19a26a05c8c)] -\u003e xpath: //div[@id\u003d\u0027toast-container\u0027]] (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-INTB117\u0027, ip: \u0027192.168.42.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TECHNO~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4883}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 367b9053f8ed80801d84f19a26a05c8c\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Pages._Parent.verifyElementContainsText(_Parent.java:75)\r\n\tat Pages.DialogContent.findElementAndVerifyContainsText(DialogContent.java:216)\r\n\tat StepDefinitions._02_CountrySteps.success_message_should_be_displayed(_02_CountrySteps.java:33)\r\n\tat ✽.Then Success message should be displayed(_09_EnteranceExam.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ExamOneIsmet3",
      "offset": 17
    }
  ],
  "location": "_03_CountryCreateEditDeleteSteps.user_delete_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6149980900,
  "status": "passed"
});
formatter.uri("_11_Student.feature");
formatter.feature({
  "line": 1,
  "name": "Students functionality",
  "description": "",
  "id": "students-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 124300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 7809471600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 715444300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 12200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create entrance exam",
  "description": "",
  "id": "students-functionality;create-entrance-exam",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on the element in the left class",
  "rows": [
    {
      "cells": [
        "studentParent"
      ],
      "line": 12
    },
    {
      "cells": [
        "studentsButton"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on the element in the content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "firstNameInput",
        "ismet"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastNameInput",
        "temur"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Click in the new exam form",
  "rows": [
    {
      "cells": [
        "genderDropdown"
      ],
      "line": 23
    },
    {
      "cells": [
        "option1"
      ],
      "line": 24
    },
    {
      "cells": [
        "gradeLevel"
      ],
      "line": 25
    },
    {
      "cells": [
        "option1"
      ],
      "line": 26
    },
    {
      "cells": [
        "schoolDepartmentDropdown"
      ],
      "line": 27
    },
    {
      "cells": [
        "option1"
      ],
      "line": 28
    },
    {
      "cells": [
        "sectionDropdown"
      ],
      "line": 29
    },
    {
      "cells": [
        "option1"
      ],
      "line": 30
    },
    {
      "cells": [
        "citizenshipDropdown"
      ],
      "line": 31
    },
    {
      "cells": [
        "option1"
      ],
      "line": 32
    },
    {
      "cells": [
        "studentDocumentType"
      ],
      "line": 33
    },
    {
      "cells": [
        "option1"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "studentDocumentNumber",
        "1234567899"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Click in the new exam form",
  "rows": [
    {
      "cells": [
        "representatives"
      ],
      "line": 40
    },
    {
      "cells": [
        "repAddBtn"
      ],
      "line": 41
    },
    {
      "cells": [
        "repSelect"
      ],
      "line": 42
    },
    {
      "cells": [
        "option1"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User sending the keys in the form content class",
  "rows": [
    {
      "cells": [
        "repFirstName",
        "ahmet"
      ],
      "line": 46
    },
    {
      "cells": [
        "repLastName",
        "yilmaz"
      ],
      "line": 47
    },
    {
      "cells": [
        "repMobilPhone",
        "1234567899"
      ],
      "line": 48
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Click in the new exam form",
  "rows": [
    {
      "cells": [
        "repAddBtn2"
      ],
      "line": 51
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheLeftClass(DataTable)"
});
formatter.result({
  "duration": 4103133400,
  "status": "passed"
});
formatter.match({
  "location": "_08_DataTableSteps.clickOnTheElementInTheContentClass(DataTable)"
});
formatter.result({
  "duration": 585946400,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 2234584700,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.clickInTheNewExamForm(DataTable)"
});
formatter.result({
  "duration": 3619462400,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 417123300,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.clickInTheNewExamForm(DataTable)"
});
formatter.result({
  "duration": 2237749100,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.userSendingTheKeysInTheFormContentClass(DataTable)"
});
formatter.result({
  "duration": 1327803000,
  "status": "passed"
});
formatter.match({
  "location": "_09_EntranceExamSteps.clickInTheNewExamForm(DataTable)"
});
formatter.result({
  "duration": 537206200,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 10154650000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027successfully\u0027) to be present in element [[ChromeDriver: chrome on WINDOWS (4a430777abe994f18f40dc08591f4a6e)] -\u003e xpath: //div[@id\u003d\u0027toast-container\u0027]] (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-INTB117\u0027, ip: \u0027192.168.42.77\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TECHNO~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4906}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4a430777abe994f18f40dc08591f4a6e\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Pages._Parent.verifyElementContainsText(_Parent.java:75)\r\n\tat Pages.DialogContent.findElementAndVerifyContainsText(DialogContent.java:216)\r\n\tat StepDefinitions._02_CountrySteps.success_message_should_be_displayed(_02_CountrySteps.java:33)\r\n\tat ✽.Then Success message should be displayed(_11_Student.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 6142876600,
  "status": "passed"
});
});