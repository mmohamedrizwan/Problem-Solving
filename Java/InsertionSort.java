/**
 * Virtually split the array into a sorted and an unsorted array.
 * Assume that the first element is already sorted and remaining elements are unsorted.
 * Select an unsorted element and compare with all elements in the sorted part.
 * If the elements in the sorted part is smaller than the selected element, proceed to the next
 * element in the unsorted part. Else, shift larger elements in the sorted parts towards the right.
 * Insert the selected element at the right index.
 * Repeat till all the unsorted elements are placed in the right order.
 */

import java.util.Arrays;

public class InsertionSort {
    private static void sort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int numberToInsert = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > numberToInsert) {
                arr[j+1] = arr[j];
                j--;
            }
            // After moving forward the number insert the unsorted element into the sorted elements
            arr[j+1] = numberToInsert;
        }
    }
    public static void main(String[] args) {
        int[] arr = {8, 20, -2, 4, -6};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

// Big-O = O(n^2)