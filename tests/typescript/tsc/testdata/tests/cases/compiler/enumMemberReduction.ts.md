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
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "initializer": null,
            "computed": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 12,
        "end": 30
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 49
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 58,
              "end": 61
            },
            "computed": false,
            "start": 54,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 69,
              "end": 72
            },
            "computed": false,
            "start": 65,
            "end": 72
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "initializer": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 80,
              "end": 83
            },
            "computed": false,
            "start": 76,
            "end": 83
          }
        ],
        "start": 50,
        "end": 86
      },
      "const": false,
      "declare": false,
      "start": 32,
      "end": 86
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringEnumWithEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 114
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 123,
              "end": 125
            },
            "computed": false,
            "start": 119,
            "end": 125
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 133,
              "end": 136
            },
            "computed": false,
            "start": 129,
            "end": 136
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "initializer": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 144,
              "end": 147
            },
            "computed": false,
            "start": 140,
            "end": 147
          }
        ],
        "start": 115,
        "end": 150
      },
      "const": false,
      "declare": false,
      "start": 88,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 170
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 185,
                    "end": 191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 194,
                    "end": 203
                  }
                ],
                "start": 185,
                "end": 203
              },
              "start": 183,
              "end": 203
            },
            "start": 171,
            "end": 203
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 228
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 238
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 240
                },
                "start": 216,
                "end": 240
              },
              "start": 209,
              "end": 241
            }
          ],
          "start": 205,
          "end": 243
        },
        "expression": false,
        "start": 159,
        "end": 243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 264
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 285
                    },
                    "typeArguments": null,
                    "start": 279,
                    "end": 285
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 288,
                    "end": 297
                  }
                ],
                "start": 279,
                "end": 297
              },
              "start": 277,
              "end": 297
            },
            "start": 265,
            "end": 297
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 322
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 332
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "optional": false,
                  "computed": false,
                  "start": 326,
                  "end": 334
                },
                "start": 310,
                "end": 334
              },
              "start": 303,
              "end": 335
            }
          ],
          "start": 299,
          "end": 337
        },
        "expression": false,
        "start": 252,
        "end": 337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 337
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 358
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 380
                },
                "typeArguments": null,
                "start": 374,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "start": 359,
            "end": 380
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 405
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "optional": false,
                  "computed": false,
                  "start": 409,
                  "end": 417
                },
                "start": 393,
                "end": 417
              },
              "start": 386,
              "end": 418
            }
          ],
          "start": 382,
          "end": 420
        },
        "expression": false,
        "start": 346,
        "end": 420
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 420
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 441
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 463
                },
                "typeArguments": null,
                "start": 457,
                "end": 463
              },
              "start": 455,
              "end": 463
            },
            "start": 442,
            "end": 463
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 488
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 498
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 492,
                  "end": 500
                },
                "start": 476,
                "end": 500
              },
              "start": 469,
              "end": 501
            }
          ],
          "start": 465,
          "end": 503
        },
        "expression": false,
        "start": 429,
        "end": 503
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 422,
      "end": 503
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 524
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyStringEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 552
                },
                "typeArguments": null,
                "start": 540,
                "end": 552
              },
              "start": 538,
              "end": 552
            },
            "start": 525,
            "end": 552
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 577
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyStringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 593
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "optional": false,
                  "computed": false,
                  "start": 581,
                  "end": 595
                },
                "start": 565,
                "end": 595
              },
              "start": 558,
              "end": 596
            }
          ],
          "start": 554,
          "end": 598
        },
        "expression": false,
        "start": 512,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 505,
      "end": 598
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn6",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 619
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalEnum",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyStringEnumWithEmpty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 656
                },
                "typeArguments": null,
                "start": 635,
                "end": 656
              },
              "start": 633,
              "end": 656
            },
            "start": 620,
            "end": 656
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 681
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyStringEnumWithEmpty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 706
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "optional": false,
                  "computed": false,
                  "start": 685,
                  "end": 708
                },
                "start": 669,
                "end": 708
              },
              "start": 662,
              "end": 709
            }
          ],
          "start": 658,
          "end": 711
        },
        "expression": false,
        "start": 607,
        "end": 711
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 600,
      "end": 711
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 711
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 32,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "MyStringEnum",
    "start": 37,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 58,
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
    "value": "B",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "MyStringEnumWithEmpty",
    "start": 93,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "String",
    "value": "\"b\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 152,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 171,
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
    "value": "MyEnum",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 216,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 229,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 265,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 310,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 346,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 359,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 386,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 393,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 422,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 442,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 469,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 476,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 489,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 505,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 512,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 525,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "MyStringEnum",
    "start": 540,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 558,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 565,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 578,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "MyStringEnum",
    "start": 581,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 600,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 607,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 620,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "MyStringEnumWithEmpty",
    "start": 635,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "optionalEnum",
    "start": 669,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 682,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "MyStringEnumWithEmpty",
    "start": 685,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  }
]
```
