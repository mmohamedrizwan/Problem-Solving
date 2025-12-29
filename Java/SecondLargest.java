public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {10, 20, 20, 8, 15};

        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {
            // This condition will store only the second largest element If it available in the prev of the largest element,
            // If second largest is available after the largest element then this will not help.
            if (num > largest) {
                // Stores previous largest element
                second = largest;
                // Stores the largest number
                largest = num;
            }
            // This will helps to find the second largest element if it is available after the largest element.
            // Also, if duplicate element available then it will help to find the second largest element.
            else if (num > second && num != largest) {
                second = num;
            }
        }
        System.out.println(second);
    }   
}