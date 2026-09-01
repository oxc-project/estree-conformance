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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 24,
              "end": 29
            },
            "computed": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "initializer": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 40,
              "end": 45
            },
            "computed": false,
            "start": 35,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 54
            },
            "initializer": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 57,
              "end": 61
            },
            "computed": false,
            "start": 52,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N2",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 69
            },
            "initializer": {
              "type": "Literal",
              "value": 25,
              "raw": "25",
              "start": 72,
              "end": 74
            },
            "computed": false,
            "start": 67,
            "end": 74
          }
        ],
        "start": 13,
        "end": 77
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 77
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
            "name": "someNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
            },
            "start": 91,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 109
        }
      ],
      "declare": true,
      "start": 79,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 125
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "N2",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 132
        },
        "start": 115,
        "end": 132
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 150
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 157
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 157
              },
              "start": 140,
              "end": 157
            },
            "directive": null,
            "start": 140,
            "end": 158
          }
        ],
        "start": 134,
        "end": 160
      },
      "alternate": null,
      "start": 111,
      "end": 160
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
            "name": "unionOfEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 193
                      },
                      "start": 189,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 189,
                    "end": 193
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 197
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 200
                      },
                      "start": 196,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 196,
                    "end": 200
                  }
                ],
                "start": 189,
                "end": 200
              },
              "start": 187,
              "end": 200
            },
            "start": 176,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 200
        }
      ],
      "declare": true,
      "start": 162,
      "end": 201
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 217
        },
        "operator": ">",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 231
        },
        "start": 207,
        "end": 231
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 249
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 252,
                "end": 256
              },
              "start": 239,
              "end": 256
            },
            "directive": null,
            "start": 239,
            "end": 257
          }
        ],
        "start": 233,
        "end": 259
      },
      "alternate": null,
      "start": 203,
      "end": 259
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
            "name": "someString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              },
              "start": 283,
              "end": 291
            },
            "start": 273,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 273,
          "end": 291
        }
      ],
      "declare": true,
      "start": 261,
      "end": 291
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 307
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 314
        },
        "start": 297,
        "end": 314
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someString",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 332
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 339
                },
                "optional": false,
                "computed": false,
                "start": 335,
                "end": 339
              },
              "start": 322,
              "end": 339
            },
            "directive": null,
            "start": 322,
            "end": 340
          }
        ],
        "start": 316,
        "end": 342
      },
      "alternate": null,
      "start": 293,
      "end": 342
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 371
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 375,
          "end": 381
        },
        "start": 373,
        "end": 381
      },
      "body": null,
      "expression": false,
      "start": 345,
      "end": 382
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 400
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 403,
              "end": 408
            },
            "computed": false,
            "start": 398,
            "end": 408
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
            },
            "initializer": {
              "type": "Literal",
              "value": 1000,
              "raw": "1000",
              "start": 419,
              "end": 423
            },
            "computed": false,
            "start": 414,
            "end": 423
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "someValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 443
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 434,
              "end": 445
            },
            "computed": false,
            "start": 429,
            "end": 445
          }
        ],
        "start": 392,
        "end": 448
      },
      "const": false,
      "declare": false,
      "start": 384,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 460
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 468
          },
          "optional": false,
          "computed": false,
          "start": 463,
          "end": 468
        },
        "start": 450,
        "end": 468
      },
      "directive": null,
      "start": 450,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 480
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 485
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "N1",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "optional": false,
          "computed": false,
          "start": 483,
          "end": 488
        },
        "start": 470,
        "end": 488
      },
      "directive": null,
      "start": 470,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 500
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 505
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 508
          },
          "optional": false,
          "computed": false,
          "start": 503,
          "end": 508
        },
        "start": 490,
        "end": 508
      },
      "directive": null,
      "start": 490,
      "end": 509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "25",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 91,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 115,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 140,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 162,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "unionOfEnum",
    "start": 176,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 207,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "unionOfEnum",
    "start": 220,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 239,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 261,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 273,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 297,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 322,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 345,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 362,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 384,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "someValue",
    "start": 434,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 450,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 470,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "someNumber",
    "start": 490,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  }
]
```
