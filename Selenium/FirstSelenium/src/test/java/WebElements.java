import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class WebElements {
    public static void main(String[] args) throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        driver.get("https://the-internet.herokuapp.com/");
        driver.findElement(By.linkText("Sortable Data Tables")).click();
        // WebElement table = driver.findElement(By.id("table1"));
        WebElement table = driver.findElement(By.cssSelector("table#table1"));

        List<WebElement> tableRows = table.findElements(By.tagName("tr"));
        System.out.println(tableRows.get(1).getText());


        Thread.sleep(3000);
        driver.quit();
    }
}
