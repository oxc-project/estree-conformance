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
        "name": "BigIntIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBigIntKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 37,
                  "end": 45
                },
                "start": 32,
                "end": 45
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 31,
            "end": 50
          }
        ],
        "start": 25,
        "end": 68
      },
      "declare": false,
      "start": 0,
      "end": 68
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                },
                "start": 81,
                "end": 89
              },
              "start": 79,
              "end": 89
            },
            "start": 76,
            "end": 89
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 93,
                "end": 94
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 96,
                "end": 97
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 99,
                "end": 100
              }
            ],
            "start": 92,
            "end": 101
          },
          "definite": false,
          "start": 76,
          "end": 101
        }
      ],
      "declare": false,
      "start": 70,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "start": 107,
            "end": 118
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 125,
              "end": 126
            },
            "optional": false,
            "computed": true,
            "start": 121,
            "end": 127
          },
          "definite": false,
          "start": 107,
          "end": 127
        }
      ],
      "declare": false,
      "start": 103,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 132
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 139,
            "end": 142
          },
          "optional": false,
          "computed": true,
          "start": 135,
          "end": 143
        },
        "start": 129,
        "end": 143
      },
      "directive": null,
      "start": 129,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 148
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 154
          },
          "property": {
            "type": "Literal",
            "value": null,
            "raw": "1n",
            "bigint": "1",
            "start": 155,
            "end": 157
          },
          "optional": false,
          "computed": true,
          "start": 151,
          "end": 158
        },
        "start": 145,
        "end": 158
      },
      "directive": null,
      "start": 145,
      "end": 159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 179
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 183,
                "end": 184
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 186,
                "end": 187
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 189,
                "end": 190
              }
            ],
            "start": 182,
            "end": 191
          },
          "property": {
            "type": "Literal",
            "value": null,
            "raw": "1n",
            "bigint": "1",
            "start": 192,
            "end": 194
          },
          "optional": false,
          "computed": true,
          "start": 182,
          "end": 195
        },
        "start": 176,
        "end": 195
      },
      "directive": null,
      "start": 176,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 229,
                  "end": 232
                },
                "start": 223,
                "end": 232
              },
              "start": 221,
              "end": 232
            },
            "start": 218,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 232
        }
      ],
      "declare": false,
      "start": 214,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 282
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 285,
          "end": 288
        },
        "start": 279,
        "end": 288
      },
      "directive": null,
      "start": 279,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 296,
          "end": 301
        },
        "start": 290,
        "end": 301
      },
      "directive": null,
      "start": 290,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 306
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 315
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 309,
          "end": 317
        },
        "start": 303,
        "end": 317
      },
      "directive": null,
      "start": 303,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 322
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "123n",
          "bigint": "123",
          "start": 325,
          "end": 329
        },
        "start": 319,
        "end": 329
      },
      "directive": null,
      "start": 319,
      "end": 330
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
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 430,
                "end": 436
              },
              "start": 428,
              "end": 436
            },
            "start": 422,
            "end": 436
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "0n",
            "bigint": "0",
            "start": 439,
            "end": 441
          },
          "definite": false,
          "start": 422,
          "end": 441
        }
      ],
      "declare": false,
      "start": 416,
      "end": 442
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
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 476
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 477,
                "end": 478
              }
            ],
            "start": 462,
            "end": 479
          },
          "definite": false,
          "start": 449,
          "end": 479
        }
      ],
      "declare": false,
      "start": 443,
      "end": 480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 491
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 498
          },
          "optional": false,
          "computed": true,
          "start": 481,
          "end": 499
        },
        "right": {
          "type": "Literal",
          "value": 170,
          "raw": "0xAA",
          "start": 502,
          "end": 506
        },
        "start": 481,
        "end": 506
      },
      "directive": null,
      "start": 481,
      "end": 507
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 534
          },
          "property": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 541
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bigNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 548
              }
            ],
            "optional": false,
            "start": 535,
            "end": 549
          },
          "optional": false,
          "computed": true,
          "start": 524,
          "end": 550
        },
        "right": {
          "type": "Literal",
          "value": 170,
          "raw": "0xAA",
          "start": 553,
          "end": 557
        },
        "start": 524,
        "end": 557
      },
      "directive": null,
      "start": 524,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 569
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 570,
            "end": 573
          },
          "optional": false,
          "computed": true,
          "start": 559,
          "end": 574
        },
        "right": {
          "type": "Literal",
          "value": 187,
          "raw": "0xBB",
          "start": 577,
          "end": 581
        },
        "start": 559,
        "end": 581
      },
      "directive": null,
      "start": 559,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "typedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 593
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 594,
            "end": 595
          },
          "optional": false,
          "computed": true,
          "start": 583,
          "end": 596
        },
        "right": {
          "type": "Literal",
          "value": 204,
          "raw": "0xCC",
          "start": 599,
          "end": 603
        },
        "start": 583,
        "end": 603
      },
      "directive": null,
      "start": 583,
      "end": 604
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 604
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
    "value": "BigIntIndex",
    "start": 10,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 32,
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
    "value": "bigint",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 76,
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
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 214,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 416,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "bigNum",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 449,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 466,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 481,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "bigNum",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Numeric",
    "value": "0xAA",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 524,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "bigNum",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Numeric",
    "value": "0xAA",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 559,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 569,
    "end": 570
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "0xBB",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 583,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "0xCC",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  }
]
```
