__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "__a",
              "raw": "\"__a\"",
              "start": 15,
              "end": 20
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "start": 15,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "(Anonymous function)",
              "raw": "\"(Anonymous function)\"",
              "start": 30,
              "end": 52
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 55,
              "end": 56
            },
            "computed": false,
            "start": 30,
            "end": 56
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "(Anonymous class)",
              "raw": "\"(Anonymous class)\"",
              "start": 62,
              "end": 81
            },
            "initializer": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 84,
              "end": 85
            },
            "computed": false,
            "start": 62,
            "end": 85
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "__call",
              "raw": "\"__call\"",
              "start": 91,
              "end": 99
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 102,
              "end": 104
            },
            "computed": false,
            "start": 91,
            "end": 104
          }
        ],
        "start": 9,
        "end": 106
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 106
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "___call",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 150
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 154,
                  "end": 160
                },
                "start": 152,
                "end": 160
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 178,
                      "end": 179
                    },
                    "start": 171,
                    "end": 180
                  }
                ],
                "start": 161,
                "end": 186
              },
              "expression": false,
              "start": 134,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 127,
            "end": 186
          }
        ],
        "start": 121,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 107,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 217,
              "end": 221
            },
            "start": 210,
            "end": 222
          }
        ],
        "start": 204,
        "end": 224
      },
      "expression": false,
      "start": 189,
      "end": 224
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 238
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "__call",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 267
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 271,
                      "end": 277
                    },
                    "start": 269,
                    "end": 277
                  },
                  "start": 268,
                  "end": 277
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 280,
                  "end": 286
                },
                "start": 278,
                "end": 286
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 304,
                      "end": 305
                    },
                    "start": 297,
                    "end": 306
                  }
                ],
                "start": 287,
                "end": 312
              },
              "expression": false,
              "start": 252,
              "end": 312
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 245,
            "end": 312
          }
        ],
        "start": 239,
        "end": 314
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 225,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "String",
    "value": "\"__a\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"(Anonymous function)\"",
    "start": 30,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"(Anonymous class)\"",
    "start": 62,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"__call\"",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 134,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "___call",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 171,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 189,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 210,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 225,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "__call",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 297,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  }
]
```
