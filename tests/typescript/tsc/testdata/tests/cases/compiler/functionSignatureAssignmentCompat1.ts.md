__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParserFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "eventEmitter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 28,
                "end": 48
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "buffer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 58,
                    "end": 64
                  },
                  "start": 56,
                  "end": 64
                },
                "start": 50,
                "end": 64
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 27,
            "end": 72
          }
        ],
        "start": 21,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parsers",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 92
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 114
                },
                "typeArguments": null,
                "start": 104,
                "end": 114
              },
              "start": 102,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 99,
            "end": 115
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 128
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "delimiter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 129,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 160
                },
                "typeArguments": null,
                "start": 150,
                "end": 160
              },
              "start": 148,
              "end": 160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 120,
            "end": 161
          }
        ],
        "start": 93,
        "end": 163
      },
      "declare": false,
      "start": 75,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "parsers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parsers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 192
                },
                "typeArguments": null,
                "start": 185,
                "end": 192
              },
              "start": 183,
              "end": 192
            },
            "start": 176,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 192
        }
      ],
      "declare": true,
      "start": 164,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 211
                },
                "typeArguments": null,
                "start": 201,
                "end": 211
              },
              "start": 199,
              "end": 211
            },
            "start": 198,
            "end": 211
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "raw",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
            },
            "optional": false,
            "computed": false,
            "start": 214,
            "end": 225
          },
          "definite": false,
          "start": 198,
          "end": 225
        }
      ],
      "declare": false,
      "start": 194,
      "end": 226
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 251
                },
                "typeArguments": null,
                "start": 241,
                "end": 251
              },
              "start": 239,
              "end": 251
            },
            "start": 238,
            "end": 251
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "parsers",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 261
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readline",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 270
            },
            "optional": false,
            "computed": false,
            "start": 254,
            "end": 270
          },
          "definite": false,
          "start": 238,
          "end": 270
        }
      ],
      "declare": false,
      "start": 234,
      "end": 271
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParserFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 299
                },
                "typeArguments": null,
                "start": 289,
                "end": 299
              },
              "start": 287,
              "end": 299
            },
            "start": 286,
            "end": 299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parsers",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "readline",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 318
              },
              "optional": false,
              "computed": false,
              "start": 302,
              "end": 318
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 302,
            "end": 320
          },
          "definite": false,
          "start": 286,
          "end": 320
        }
      ],
      "declare": false,
      "start": 282,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 327
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "eventEmitter",
    "start": 28,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 75,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Parsers",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 104,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 120,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "delimiter",
    "start": 129,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 150,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 164,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Parsers",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 201,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 241,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "ParserFunc",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "readline",
    "start": 310,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  }
]
```
