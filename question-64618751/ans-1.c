/*
 * stackoverflow answer
 * https://stackoverflow.com/questions/64618751/c-array-to-store-the-pointers-of-mallocd-arrays
 * Author: Yihsiu
 */

#include <stdio.h>
#include <stdlib.h>

void storePointers(int ***ptrArray) {
    int *a = (int *)malloc(5 * sizeof(int));
    int *b = (int *)malloc(10 * sizeof(int));

    printf("a: %p\n", a);
    printf("b: %p\n", b);

    *ptrArray = (int **)malloc(2 * sizeof(int*));
    (*ptrArray)[0] = a;
    (*ptrArray)[1] = b;
}

int main(void)
{
    int **mArray = NULL;

    storePointers(&mArray);

    printf("mArray[0]: %p\n", mArray[0]);
    printf("mArray[1]: %p\n", mArray[1]);

    return 0;
}