package utils;


import java.util.Random;


public class Randomizer {
    private static Random random = new Random();

    private Randomizer(){}

    public static String randomizeString(String string) {
        char [] chars = string.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            int j = random.nextInt(chars.length);

            char temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
        }

        return new String(chars);
    }
}
