package utils;


import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;



public class StringUtils {

    private StringUtils(){}

    public static Set<String> finalCheck(Set<String> words, String initialWord) {
        Set<String> result = new HashSet<>();
        StringBuilder sb = new StringBuilder();


        char[] firstArray = initialWord.toCharArray();
        Arrays.sort(firstArray);
        String standard = new String(firstArray);

        boolean isOk;
        char[] secondArray;


        for (String word: words) {
            if (word.length() <= initialWord.length()) {

                isOk = true;

                secondArray = word.toCharArray();
                Arrays.sort(secondArray);

                for (int i = 0; i < secondArray.length - 1; i++) {
                    if (secondArray[i] == secondArray [i + 1]) {
                        sb.append(secondArray[i]);
                    } else {
                        if (!sb.toString().equals("")) {
                            sb.append(secondArray[i]);
                            if (!standard.contains(sb)){
                                isOk = false;
                            }
                        }
                        sb.setLength(0);
                    }
                }

                if (sb.length() != 0) {
                    sb.append(secondArray[secondArray.length - 1]);

                    if (!standard.contains(sb)){
                        isOk = false;
                    }

                }
                if (isOk) {
                    result.add(word);
                }
                sb.setLength(0);
            }
        }

        return result;
    }
}
