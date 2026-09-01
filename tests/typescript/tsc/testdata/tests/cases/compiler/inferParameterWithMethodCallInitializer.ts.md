__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
          "start": 22,
          "end": 28
        },
        "start": 20,
        "end": 28
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 42,
              "end": 43
            },
            "start": 35,
            "end": 44
          }
        ],
        "start": 29,
        "end": 46
      },
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 60
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 76
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                },
                "start": 78,
                "end": 86
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 104,
                      "end": 105
                    },
                    "start": 97,
                    "end": 106
                  }
                ],
                "start": 87,
                "end": 112
              },
              "expression": false,
              "start": 76,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 67,
            "end": 112
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 128
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 133,
                        "end": 137
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 133,
                      "end": 147
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 133,
                    "end": 149
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 149
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 160
                  },
                  "typeArguments": null,
                  "start": 152,
                  "end": 160
                },
                "start": 150,
                "end": 160
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
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
              "start": 128,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 117,
            "end": 186
          }
        ],
        "start": 61,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "weird",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 217
              },
              "typeArguments": null,
              "start": 210,
              "end": 217
            },
            "start": 208,
            "end": 217
          },
          "start": 204,
          "end": 217
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 223,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 237
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 237
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 223,
            "end": 239
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 239
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "start": 247,
            "end": 256
          }
        ],
        "start": 241,
        "end": 258
      },
      "expression": false,
      "start": 189,
      "end": 258
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 270
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 288
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Example",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 302
                      },
                      "typeArguments": null,
                      "start": 295,
                      "end": 302
                    },
                    "start": 293,
                    "end": 302
                  },
                  "start": 289,
                  "end": 302
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 308,
                        "end": 312
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 322
                      },
                      "optional": false,
                      "computed": false,
                      "start": 308,
                      "end": 322
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 308,
                    "end": 324
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 324
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "start": 336,
                    "end": 345
                  }
                ],
                "start": 326,
                "end": 351
              },
              "expression": false,
              "start": 288,
              "end": 351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 277,
            "end": 351
          }
        ],
        "start": 271,
        "end": 353
      },
      "abstract": false,
      "declare": false,
      "start": 259,
      "end": 353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "getNumber",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 35,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "getNumber",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 97,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 117,
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
    "value": "a",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "getNumber",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 159,
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
    "type": "Identifier",
    "value": "a",
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
    "value": "weird",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "getNumber",
    "start": 228,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Weird",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 277,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 295,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "getNumber",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  }
]
```
