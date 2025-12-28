/**
 * 1.A palindrome string reads the same forwards and backward, like madam or racecar, and is identified
 * by comparing the original string to its reversed version, often ignoring case and non-alphanumeric
 * characters for practical checks.
 * 2. Reverse the string
 */

public class ReverseString {
    public static void main(String[] args) {
        String str = "Java";
        String rev = "";
        
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }

        System.out.println(rev);
        System.out.println(str.equals(rev));
    }
}

// Time complexity -> O(n)