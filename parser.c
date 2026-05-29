#include <stdio.h>
#include <string.h>

int main() {
    FILE *fp;
    char content[1000];

    fp = fopen("input.txt", "r");

    if(fp == NULL) {
        printf("File not found\n");
        return 0;
    }

    fread(content, sizeof(char), 1000, fp);

    // Rule 1: main function
    if(!strstr(content, "int main()")) {
        printf("❌ Error: Missing 'int main()'\n");
        return 0;
    }

    // Rule 2: begin-end
    if(!strstr(content, "begin") || !strstr(content, "end")) {
        printf("❌ Error: Missing 'begin' or 'end'\n");
        return 0;
    }

    // Rule 3: while loop
    if(!strstr(content, "while")) {
        printf("❌ Error: Missing 'while' loop\n");
        return 0;
    }

    // Rule 4: return
    if(!strstr(content, "return")) {
        printf("❌ Error: Missing 'return'\n");
        return 0;
    }

    printf("✅ Valid Program\n");

    fclose(fp);
    return 0;
}