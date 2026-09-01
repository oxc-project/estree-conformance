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
        "name": "makeArrayG",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 31
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "typeArguments": null,
                "start": 33,
                "end": 34
              },
              "start": 33,
              "end": 36
            },
            "start": 31,
            "end": 36
          },
          "value": null,
          "start": 23,
          "end": 36
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeArguments": null,
            "start": 39,
            "end": 40
          },
          "start": 39,
          "end": 42
        },
        "start": 37,
        "end": 42
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 57
            },
            "start": 45,
            "end": 58
          }
        ],
        "start": 43,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
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
            "name": "a1Ga",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 82
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 86,
                "end": 88
              }
            ],
            "optional": false,
            "start": 72,
            "end": 89
          },
          "definite": false,
          "start": 65,
          "end": 89
        }
      ],
      "declare": false,
      "start": 61,
      "end": 90
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
            "name": "a1Gb",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 124
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 125,
                  "end": 128
                }
              ],
              "start": 124,
              "end": 129
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 130,
                "end": 131
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 133,
                "end": 135
              }
            ],
            "optional": false,
            "start": 114,
            "end": 136
          },
          "definite": false,
          "start": 107,
          "end": 136
        }
      ],
      "declare": false,
      "start": 103,
      "end": 137
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
            "name": "a1Gc",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 160
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 161,
                  "end": 167
                }
              ],
              "start": 160,
              "end": 168
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 169,
                "end": 170
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 172,
                "end": 174
              }
            ],
            "optional": false,
            "start": 150,
            "end": 175
          },
          "definite": false,
          "start": 143,
          "end": 175
        }
      ],
      "declare": false,
      "start": 139,
      "end": 176
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
            "name": "a1Gd",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 199
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 200,
                  "end": 206
                }
              ],
              "start": 199,
              "end": 207
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 208,
                "end": 209
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 211,
                "end": 213
              }
            ],
            "optional": false,
            "start": 189,
            "end": 214
          },
          "definite": false,
          "start": 182,
          "end": 214
        }
      ],
      "declare": false,
      "start": 178,
      "end": 215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeArrayGOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 250
          }
        ],
        "start": 248,
        "end": 251
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item1",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 252,
          "end": 261
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "typeArguments": null,
              "start": 271,
              "end": 272
            },
            "start": 269,
            "end": 272
          },
          "start": 263,
          "end": 272
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item3",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 283
              },
              "typeArguments": null,
              "start": 282,
              "end": 283
            },
            "start": 280,
            "end": 283
          },
          "start": 274,
          "end": 283
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 304
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 311
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 318
                }
              ],
              "start": 298,
              "end": 319
            },
            "start": 291,
            "end": 320
          }
        ],
        "start": 285,
        "end": 322
      },
      "expression": false,
      "start": 226,
      "end": 322
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
            "name": "a2Ga",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayGOpt",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 348,
                "end": 349
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 351,
                "end": 353
              }
            ],
            "optional": false,
            "start": 334,
            "end": 354
          },
          "definite": false,
          "start": 327,
          "end": 354
        }
      ],
      "declare": false,
      "start": 323,
      "end": 355
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
            "name": "a2Gb",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 365
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 378
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 379,
                  "end": 382
                }
              ],
              "start": 378,
              "end": 383
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 384,
                "end": 385
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 387,
                "end": 389
              }
            ],
            "optional": false,
            "start": 368,
            "end": 390
          },
          "definite": false,
          "start": 361,
          "end": 390
        }
      ],
      "declare": false,
      "start": 357,
      "end": 391
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
            "name": "a2Gc",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 400
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 413
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 414,
                    "end": 417
                  },
                  "start": 414,
                  "end": 419
                }
              ],
              "start": 413,
              "end": 420
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 421,
                "end": 422
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 424,
                "end": 426
              }
            ],
            "optional": false,
            "start": 403,
            "end": 427
          },
          "definite": false,
          "start": 396,
          "end": 427
        }
      ],
      "declare": false,
      "start": 392,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 437
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
    "value": "makeArrayG",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "a1Ga",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 72,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "a1Gb",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 114,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "a1Gc",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 150,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "a1Gd",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 189,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "makeArrayGOpt",
    "start": 235,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "item1",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "item2",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "item3",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "item1",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "item2",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "item3",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a2Ga",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "makeArrayGOpt",
    "start": 334,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "a2Gb",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 368,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a2Gc",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "makeArrayG",
    "start": 403,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  }
]
```
