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
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 59
      },
      "expression": false,
      "start": 41,
      "end": 59
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
          "start": 95,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 95,
        "end": 100
      },
      "directive": null,
      "start": 95,
      "end": 101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 206,
              "end": 212
            },
            "start": 204,
            "end": 212
          },
          "start": 203,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 253,
              "end": 259
            },
            "start": 251,
            "end": 259
          },
          "start": 250,
          "end": 259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 276
                },
                "definite": false,
                "start": 271,
                "end": 276
              }
            ],
            "declare": false,
            "start": 267,
            "end": 277
          }
        ],
        "start": 261,
        "end": 279
      },
      "expression": false,
      "start": 147,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 329
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 330,
            "end": 333
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 335,
            "end": 337
          }
        ],
        "optional": false,
        "start": 312,
        "end": 338
      },
      "directive": null,
      "start": 312,
      "end": 339
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
            "name": "fooFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 378
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooFunctionValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 406
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 440,
                    "end": 446
                  },
                  "start": 438,
                  "end": 446
                },
                "start": 437,
                "end": 446
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "start": 454,
                  "end": 463
                }
              ],
              "start": 448,
              "end": 465
            },
            "expression": false,
            "start": 381,
            "end": 465
          },
          "definite": false,
          "start": 371,
          "end": 465
        }
      ],
      "declare": false,
      "start": 367,
      "end": 465
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
            "name": "lambdaFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 505
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 553,
                    "end": 559
                  },
                  "start": 551,
                  "end": 559
                },
                "start": 550,
                "end": 559
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 576,
                    "end": 582
                  },
                  "start": 574,
                  "end": 582
                },
                "start": 573,
                "end": 582
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 592
              },
              "start": 587,
              "end": 592
            },
            "id": null,
            "generator": false,
            "start": 537,
            "end": 592
          },
          "definite": false,
          "start": 496,
          "end": 592
        }
      ],
      "declare": false,
      "start": 492,
      "end": 593
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
            "name": "lambddaNoVarComment",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 617
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 672,
                    "end": 678
                  },
                  "start": 670,
                  "end": 678
                },
                "start": 669,
                "end": 678
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 695,
                    "end": 701
                  },
                  "start": 693,
                  "end": 701
                },
                "start": 692,
                "end": 701
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 707
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 711
              },
              "start": 706,
              "end": 711
            },
            "id": null,
            "generator": false,
            "start": 656,
            "end": 711
          },
          "definite": false,
          "start": 598,
          "end": 711
        }
      ],
      "declare": false,
      "start": 594,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 722
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 723,
            "end": 725
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 727,
            "end": 729
          }
        ],
        "optional": false,
        "start": 713,
        "end": 730
      },
      "directive": null,
      "start": 713,
      "end": 731
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambddaNoVarComment",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 751
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 752,
            "end": 754
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 756,
            "end": 758
          }
        ],
        "optional": false,
        "start": 732,
        "end": 759
      },
      "directive": null,
      "start": 732,
      "end": 760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 775
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 779,
              "end": 785
            },
            "start": 777,
            "end": 785
          },
          "start": 776,
          "end": 785
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 831,
        "end": 834
      },
      "expression": false,
      "start": 762,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah2",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 850
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 854,
              "end": 860
            },
            "start": 852,
            "end": 860
          },
          "start": 851,
          "end": 860
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 920,
        "end": 923
      },
      "expression": false,
      "start": 836,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah3",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 939
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 943,
              "end": 949
            },
            "start": 941,
            "end": 949
          },
          "start": 940,
          "end": 949
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 987,
        "end": 990
      },
      "expression": false,
      "start": 925,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "lambdaFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 992,
          "end": 1001
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1006
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1009
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "start": 1014,
            "end": 1019
          },
          "id": null,
          "generator": false,
          "start": 1004,
          "end": 1019
        },
        "start": 992,
        "end": 1019
      },
      "directive": null,
      "start": 992,
      "end": 1020
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1075,
          "end": 1076
        },
        "id": null,
        "generator": false,
        "start": 1069,
        "end": 1076
      },
      "directive": null,
      "start": 1069,
      "end": 1077
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1180,
          "end": 1181
        },
        "id": null,
        "generator": false,
        "start": 1174,
        "end": 1181
      },
      "directive": null,
      "start": 1173,
      "end": 1183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1218
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1227,
              "end": 1233
            },
            "start": 1225,
            "end": 1233
          },
          "start": 1224,
          "end": 1233
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1247,
              "end": 1253
            },
            "start": 1245,
            "end": 1253
          },
          "start": 1244,
          "end": 1253
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1260,
        "end": 1263
      },
      "expression": false,
      "start": 1204,
      "end": 1263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1274,
        "end": 1278
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1281,
        "end": 1309
      },
      "expression": false,
      "start": 1265,
      "end": 1309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1320,
        "end": 1324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1327,
        "end": 1418
      },
      "expression": false,
      "start": 1311,
      "end": 1418
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 1418
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "fooWithParameters",
    "start": 156,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "fooWithParameters",
    "start": 312,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "fooFunc",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 381,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "FooFunctionValue",
    "start": 390,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "lambdaFoo",
    "start": 496,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "lambddaNoVarComment",
    "start": 598,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 703,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "lambdaFoo",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "lambddaNoVarComment",
    "start": 732,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 762,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 836,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "blah2",
    "start": 845,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 925,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "blah3",
    "start": 934,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 943,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "lambdaFoo",
    "start": 992,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1204,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "blah4",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1265,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1311,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1417,
    "end": 1418
  }
]
```
