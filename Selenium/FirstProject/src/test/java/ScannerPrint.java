import java.util.Scanner;

public class ScannerPrint {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String name = input.next();
        int level = input.nextInt();
        float floatLevel = (float)level;

        System.out.println("My name is " + name + " and my level is " + floatLevel);
    }
}
