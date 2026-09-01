__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 24,
          "end": 26
        },
        "const": true,
        "declare": false,
        "start": 11,
        "end": 26
      },
      "alternate": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 48
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 49,
          "end": 51
        },
        "const": true,
        "declare": false,
        "start": 36,
        "end": 51
      },
      "start": 0,
      "end": 51
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 72
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 73,
          "end": 75
        },
        "const": true,
        "declare": false,
        "start": 60,
        "end": 75
      },
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 83,
        "end": 84
      },
      "start": 53,
      "end": 86
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 95,
        "end": 96
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 115,
          "end": 117
        },
        "const": true,
        "declare": false,
        "start": 102,
        "end": 117
      },
      "start": 88,
      "end": 117
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 125,
        "end": 126
      },
      "update": null,
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 146,
          "end": 148
        },
        "const": true,
        "declare": false,
        "start": 133,
        "end": 148
      },
      "start": 119,
      "end": 148
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": null,
            "definite": false,
            "start": 159,
            "end": 160
          }
        ],
        "declare": false,
        "start": 155,
        "end": 160
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 164,
        "end": 166
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 184
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 185,
          "end": 187
        },
        "const": true,
        "declare": false,
        "start": 172,
        "end": 187
      },
      "start": 150,
      "end": 187
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "init": null,
            "definite": false,
            "start": 198,
            "end": 199
          }
        ],
        "declare": false,
        "start": 194,
        "end": 199
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 203,
        "end": 205
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 224,
          "end": 226
        },
        "const": true,
        "declare": false,
        "start": 211,
        "end": 226
      },
      "start": 189,
      "end": 226
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "window",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 286
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 304
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 305,
          "end": 307
        },
        "const": true,
        "declare": false,
        "start": 292,
        "end": 307
      },
      "start": 274,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 27,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 42,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 53,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 66,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 139,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 178,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 217,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 298,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  }
]
```
