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
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 94
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
              "type": "TSAnyKeyword",
              "start": 98,
              "end": 101
            },
            "start": 96,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            },
            "start": 109,
            "end": 115
          },
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                },
                "prefix": true,
                "start": 127,
                "end": 135
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 140,
                "end": 148
              },
              "start": 127,
              "end": 148
            },
            "start": 120,
            "end": 149
          }
        ],
        "start": 116,
        "end": 151
      },
      "expression": false,
      "start": 77,
      "end": 151
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
            "name": "arrayOfStringsNumbersAndBooleans",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 191
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 195,
                "end": 203
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 205,
                "end": 210
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 212,
                "end": 213
              },
              {
                "type": "Literal",
                "value": "strung",
                "raw": "\"strung\"",
                "start": 215,
                "end": 223
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 225,
                "end": 226
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 228,
                "end": 232
              }
            ],
            "start": 194,
            "end": 233
          },
          "definite": false,
          "start": 159,
          "end": 233
        }
      ],
      "declare": false,
      "start": 153,
      "end": 234
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
            "name": "foundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 263,
                    "end": 272
                  }
                ],
                "start": 254,
                "end": 272
              },
              "start": 252,
              "end": 272
            },
            "start": 241,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayOfStringsNumbersAndBooleans",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 275,
              "end": 312
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 321
              }
            ],
            "optional": false,
            "start": 275,
            "end": 322
          },
          "definite": false,
          "start": 241,
          "end": 322
        }
      ],
      "declare": false,
      "start": 235,
      "end": 323
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
            "name": "readonlyArrayOfStringsNumbersAndBooleans",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 371
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayOfStringsNumbersAndBooleans",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 423
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 433,
                        "end": 439
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 442,
                        "end": 449
                      }
                    ],
                    "start": 424,
                    "end": 449
                  }
                ],
                "start": 423,
                "end": 450
              },
              "start": 410,
              "end": 450
            },
            "start": 374,
            "end": 450
          },
          "definite": false,
          "start": 331,
          "end": 450
        }
      ],
      "declare": false,
      "start": 325,
      "end": 451
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
            "name": "readonlyFoundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 479,
                    "end": 485
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 488,
                    "end": 497
                  }
                ],
                "start": 479,
                "end": 497
              },
              "start": 477,
              "end": 497
            },
            "start": 458,
            "end": 497
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyArrayOfStringsNumbersAndBooleans",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 545
              },
              "optional": false,
              "computed": false,
              "start": 500,
              "end": 545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 554
              }
            ],
            "optional": false,
            "start": 500,
            "end": 555
          },
          "definite": false,
          "start": 458,
          "end": 555
        }
      ],
      "declare": false,
      "start": 452,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 556
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
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
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 106,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 120,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 136,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "arrayOfStringsNumbersAndBooleans",
    "start": 159,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"strung\"",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "foundNumber",
    "start": 241,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 263,
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
    "value": "arrayOfStringsNumbersAndBooleans",
    "start": 275,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 313,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "readonlyArrayOfStringsNumbersAndBooleans",
    "start": 331,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "arrayOfStringsNumbersAndBooleans",
    "start": 374,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 410,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 442,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 452,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "readonlyFoundNumber",
    "start": 458,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 479,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 488,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "readonlyArrayOfStringsNumbersAndBooleans",
    "start": 500,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 546,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  }
]
```
