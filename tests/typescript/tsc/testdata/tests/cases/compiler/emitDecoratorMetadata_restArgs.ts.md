__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 46
                },
                "typeArguments": null,
                "start": 32,
                "end": 46
              },
              "start": 30,
              "end": 46
            },
            "start": 14,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 46
        }
      ],
      "declare": true,
      "start": 0,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMethodDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 96
                },
                "typeArguments": null,
                "start": 81,
                "end": 96
              },
              "start": 79,
              "end": 96
            },
            "start": 62,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 96
        }
      ],
      "declare": true,
      "start": 48,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 116
          },
          "start": 99,
          "end": 116
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 142
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 150
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 143,
                  "end": 150
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 152,
                "end": 154
              },
              "expression": false,
              "start": 142,
              "end": 154
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 131,
            "end": 154
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 177
                },
                "start": 159,
                "end": 177
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 188
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 196
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 189,
                  "end": 196
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 198,
                "end": 200
              },
              "expression": false,
              "start": 188,
              "end": 200
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 200
          }
        ],
        "start": 125,
        "end": 202
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 202
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 221
          },
          "start": 204,
          "end": 221
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 247
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 255
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 257,
                        "end": 263
                      },
                      "start": 257,
                      "end": 265
                    },
                    "start": 255,
                    "end": 265
                  },
                  "value": null,
                  "start": 248,
                  "end": 265
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 267,
                "end": 269
              },
              "expression": false,
              "start": 247,
              "end": 269
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 236,
            "end": 269
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 292
                },
                "start": 274,
                "end": 292
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 303
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
                      "type": "TSThisType",
                      "start": 310,
                      "end": 314
                    },
                    "start": 308,
                    "end": 314
                  },
                  "start": 304,
                  "end": 314
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 323
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 325,
                        "end": 331
                      },
                      "start": 325,
                      "end": 333
                    },
                    "start": 323,
                    "end": 333
                  },
                  "value": null,
                  "start": 316,
                  "end": 333
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 335,
                "end": 337
              },
              "expression": false,
              "start": 303,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 274,
            "end": 337
          }
        ],
        "start": 230,
        "end": 339
      },
      "abstract": false,
      "declare": false,
      "start": 204,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 339
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "MyClassDecorator",
    "start": 14,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator",
    "start": 32,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "MyMethodDecorator",
    "start": 62,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "MethodDecorator",
    "start": 81,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "MyClassDecorator",
    "start": 100,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "MyMethodDecorator",
    "start": 160,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "MyClassDecorator",
    "start": 205,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 236,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "MyMethodDecorator",
    "start": 275,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  }
]
```
