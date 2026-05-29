#include <stdio.h>
#include <ctype.h>
#include <string.h>

char keywords[][10] = {"int", "while", "return", "begin", "end"};

struct Symbol {
    char name[20];
} symtab[100];

int symcount = 0;

int isKeyword(char *word) {
    for(int i=0;i<5;i++) {
        if(strcmp(word, keywords[i])==0)
            return 1;
    }
    return 0;
}

void addSymbol(char *word) {
    for(int i=0;i<symcount;i++) {
        if(strcmp(symtab[i].name, word)==0)
            return;
    }
    strcpy(symtab[symcount++].name, word);
}

int main() {
    FILE *fp;
    char ch, buffer[50];
    int i = 0;

    fp = fopen("input.txt", "r");

    if(fp == NULL) {
        printf("File not found\n");
        return 0;
    }

    while((ch = fgetc(fp)) != EOF) {

        if(isalnum(ch)) {
            buffer[i++] = ch;
        } else {
            buffer[i] = '\0';

            if(i > 0) {
                if(isKeyword(buffer))
                    printf("%s → KEYWORD\n", buffer);
                else if(isdigit(buffer[0]))
                    printf("%s → NUMBER\n", buffer);
                else {
                    printf("%s → IDENTIFIER\n", buffer);
                    addSymbol(buffer);
                }
            }

            i = 0;

            if(ch == '=' || ch == '+' || ch == '/' || ch == '>') {
                printf("%c → OPERATOR\n", ch);
            }
        }
    }

    printf("\n📌 Symbol Table:\n");
    for(int i=0;i<symcount;i++) {
        printf("%s\n", symtab[i].name);
    }

    fclose(fp);
    return 0;
}