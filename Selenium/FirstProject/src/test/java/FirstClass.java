import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstClass {
    public static void main(String[] args) throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        driver.get("https://x.com");
        Thread.sleep(2000);
        driver.manage().window().fullscreen();
        Thread.sleep(4000);

        driver.navigate().to("https://udemy.com");
        driver.manage().window().maximize();
        Thread.sleep(4000);

        driver.navigate().back();
        driver.navigate().forward();

        String currUrl = driver.getCurrentUrl();

        System.out.println(currUrl);
        System.out.println(driver.getTitle());

        driver.quit();
    }
}