__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 27
          },
          "start": 23,
          "end": 27
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 32
          },
          "start": 28,
          "end": 32
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 51
                },
                "start": 47,
                "end": 51
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 60
                },
                "start": 56,
                "end": 60
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 74,
                "end": 76
              },
              "expression": false,
              "start": 71,
              "end": 76
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 76
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                },
                "start": 82,
                "end": 86
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "start": 91,
                "end": 95
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "value": 1,
                      "raw": "1",
                      "start": 117,
                      "end": 118
                    },
                    "start": 110,
                    "end": 119
                  }
                ],
                "start": 108,
                "end": 121
              },
              "expression": false,
              "start": 105,
              "end": 121
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 82,
            "end": 121
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 131
                },
                "start": 127,
                "end": 131
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "start": 136,
                "end": 140
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 151,
                  "end": 164
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 166,
                "end": 169
              },
              "expression": false,
              "start": 150,
              "end": 169
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 127,
            "end": 169
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 179
                },
                "start": 175,
                "end": 179
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 188
                },
                "start": 184,
                "end": 188
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 197,
              "end": 198
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 175,
            "end": 199
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 209
                },
                "start": 205,
                "end": 209
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "start": 214,
                "end": 218
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 236,
              "end": 237
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 205,
            "end": 238
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 248
                },
                "start": 244,
                "end": 248
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 257
                },
                "start": 253,
                "end": 257
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 269,
              "end": 276
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 279,
                "end": 281
              },
              "expression": false,
              "start": 276,
              "end": 281
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 281
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 291
                },
                "start": 287,
                "end": 291
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 300
                },
                "start": 296,
                "end": 300
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 316,
              "end": 318
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "value": 1,
                      "raw": "1",
                      "start": 330,
                      "end": 331
                    },
                    "start": 323,
                    "end": 332
                  }
                ],
                "start": 321,
                "end": 334
              },
              "expression": false,
              "start": 318,
              "end": 334
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 287,
            "end": 334
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 344
                },
                "start": 340,
                "end": 344
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 353
                },
                "start": 349,
                "end": 353
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 369,
              "end": 371
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    },
                    "start": 377,
                    "end": 385
                  },
                  "start": 372,
                  "end": 385
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 387,
                "end": 390
              },
              "expression": false,
              "start": 371,
              "end": 390
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 340,
            "end": 390
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 400
                },
                "start": 396,
                "end": 400
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 409
                },
                "start": 405,
                "end": 409
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 421,
              "end": 423
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 426,
              "end": 427
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 396,
            "end": 428
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 438
                },
                "start": 434,
                "end": 438
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 447
                },
                "start": 443,
                "end": 447
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "z",
              "start": 468,
              "end": 470
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 473,
              "end": 474
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 434,
            "end": 475
          }
        ],
        "start": 41,
        "end": 477
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 477
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 477
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 29,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 254,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 262,
    "end": 268
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 269,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
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
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 297,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 312,
    "end": 315
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 316,
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
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 350,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 358,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 365,
    "end": 368
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
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
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 406,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 414,
    "end": 420
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 444,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 452,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 459,
    "end": 467
  },
  {
    "type": "PrivateIdentifier",
    "value": "z",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  }
]
```
