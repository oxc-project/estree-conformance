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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 138
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "typeArguments": null,
              "start": 150,
              "end": 151
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 151
          }
        ],
        "start": 136,
        "end": 152
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 156,
              "end": 157
            },
            "start": 154,
            "end": 157
          },
          "start": 153,
          "end": 157
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "typeArguments": null,
          "start": 166,
          "end": 167
        },
        "start": 164,
        "end": 167
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "start": 170,
            "end": 179
          }
        ],
        "start": 168,
        "end": 181
      },
      "expression": false,
      "start": 124,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 210
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 211,
            "end": 212
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 214,
            "end": 216
          }
        ],
        "optional": false,
        "start": 207,
        "end": 217
      },
      "directive": null,
      "start": 207,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 222
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 223,
            "end": 224
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 226,
            "end": 228
          }
        ],
        "optional": false,
        "start": 219,
        "end": 229
      },
      "directive": null,
      "start": 219,
      "end": 230
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberVariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 255
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Number",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 270
          },
          "typeArguments": null,
          "start": 264,
          "end": 270
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "accessibility": null,
            "static": false,
            "start": 277,
            "end": 287
          }
        ],
        "start": 271,
        "end": 289
      },
      "declare": false,
      "start": 232,
      "end": 289
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberVariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 310
                },
                "typeArguments": null,
                "start": 297,
                "end": 310
              },
              "start": 295,
              "end": 310
            },
            "start": 294,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 310
        }
      ],
      "declare": false,
      "start": 290,
      "end": 311
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 318
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 325,
                "end": 326
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 329
              }
            ],
            "optional": false,
            "start": 321,
            "end": 330
          },
          "definite": false,
          "start": 316,
          "end": 330
        }
      ],
      "declare": false,
      "start": 312,
      "end": 331
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 346
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
              "start": 347,
              "end": 348
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 348
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 362,
                    "end": 368
                  },
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
                        "start": 370,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 370,
                      "end": 371
                    },
                    "start": 368,
                    "end": 371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 362,
                  "end": 371
                }
              ],
              "start": 360,
              "end": 373
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 373
          }
        ],
        "start": 346,
        "end": 374
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 378,
                "end": 379
              },
              "typeArguments": null,
              "start": 378,
              "end": 379
            },
            "start": 376,
            "end": 379
          },
          "start": 375,
          "end": 379
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 385
              },
              "typeArguments": null,
              "start": 384,
              "end": 385
            },
            "start": 382,
            "end": 385
          },
          "start": 381,
          "end": 385
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "start": 389,
            "end": 398
          }
        ],
        "start": 387,
        "end": 400
      },
      "expression": false,
      "start": 333,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 425,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 430,
            "end": 431
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 441
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 443,
                  "end": 445
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 435,
                "end": 445
              }
            ],
            "start": 433,
            "end": 447
          }
        ],
        "optional": false,
        "start": 425,
        "end": 448
      },
      "directive": null,
      "start": 425,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 454
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 455,
            "end": 456
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 466
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 468,
                  "end": 470
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 470
              }
            ],
            "start": 458,
            "end": 472
          }
        ],
        "optional": false,
        "start": 450,
        "end": 473
      },
      "directive": null,
      "start": 450,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 479
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 480,
            "end": 482
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 485,
                "end": 487
              }
            ],
            "start": 484,
            "end": 488
          }
        ],
        "optional": false,
        "start": 475,
        "end": 489
      },
      "directive": null,
      "start": 475,
      "end": 490
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 124,
  "end": 490
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 142,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "''",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 232,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "NumberVariant",
    "start": 242,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 256,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 264,
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
    "value": "x",
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
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "NumberVariant",
    "start": 297,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 389,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "''",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 484,
    "end": 485
  },
  {
    "type": "String",
    "value": "''",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  }
]
```
