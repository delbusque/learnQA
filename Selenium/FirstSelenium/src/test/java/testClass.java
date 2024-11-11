import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class testClass {
    public static void main(String[] args) throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        driver.get("https://x.com");

        Thread.sleep(2000);
        driver.manage().window().fullscreen();
        Thread.sleep(2000);

        driver.navigate().to("https://udemy.com");
        driver.manage().window().maximize();
        Thread.sleep(2000);

        String currUrl = driver.getCurrentUrl();
        System.out.println(currUrl);
        System.out.println(driver.getTitle());

        driver.navigate().back();
        Thread.sleep(2000);
        driver.get("https://google.com");

        System.out.println(driver.getTitle());

        driver.quit();
    }
}
