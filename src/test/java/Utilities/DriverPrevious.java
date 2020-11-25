package Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverPrevious {


    private static WebDriver driver;

    public static WebDriver getDriver()
    {
        if (driver == null)
        {

            WebDriverManager.chromedriver().setup();
            driver=new ChromeDriver();

            // firefox için de aşağıdaki şekilde
//            WebDriverManager.firefoxdriver().setup();
//            driver=new FirefoxDriver();
        }
        return driver;
    }

    public static void quitDriver()
    {
        if (driver != null)
        {
            driver.quit();
            driver=null;
        }
    }
}
