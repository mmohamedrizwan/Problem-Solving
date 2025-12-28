// Used for Arrays.toString() to print the array nicely.
import java.util.Arrays;

/**
 * It sorts an array in ascending order using Bubble sort
 * with an optimization using a swapped flag.
 */
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1}; // Unsorted array
        boolean swapped = false;
        do {
            swapped = false;
            // length - 1 prevents ArrayIndexOutOfBoundsException
            for (int i = 0; i < arr.length - 1; i++) {
                // Compares adjacent elements
                if (arr[i] > arr[i+1]) {
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    // Swaps them if they are in the wrong order
                    // Largest elements "bubbles" to the end
                    swapped = true;
                    // Repeats until no swaps are needed
                }
            }
        } while (swapped);

        System.out.println(Arrays.toString(arr));
    }
}

/**
 * | Case                  | Time Complexity |
 * | --------------------- | --------------- |
 * | Best (already sorted) | **O(n)**        | -> Do while ends on first stage itself
 * | Average               | **O(n²)**       |
 * | Worst                 | **O(n²)**       |
 */