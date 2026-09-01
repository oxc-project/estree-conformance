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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "subType",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 27,
                  "end": 30
                },
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 31
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 12,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
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
            "name": "order1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 82
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 84,
                              "end": 87
                            },
                            "start": 84,
                            "end": 87
                          },
                          "start": 82,
                          "end": 87
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 78,
                        "end": 87
                      }
                    ],
                    "start": 76,
                    "end": 89
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 110
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 112,
                              "end": 115
                            },
                            "start": 112,
                            "end": 115
                          },
                          "start": 110,
                          "end": 115
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 106,
                        "end": 115
                      }
                    ],
                    "start": 104,
                    "end": 117
                  },
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 132,
                              "end": 135
                            },
                            "start": 132,
                            "end": 135
                          },
                          "start": 130,
                          "end": 135
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 126,
                        "end": 135
                      }
                    ],
                    "start": 124,
                    "end": 137
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 74,
                "end": 153
              },
              "start": 68,
              "end": 153
            },
            "start": 62,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 153
        }
      ],
      "declare": true,
      "start": 50,
      "end": 154
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order1",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 236
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order1",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 246
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 240,
            "end": 251
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 256,
            "end": 259
          },
          "start": 240,
          "end": 259
        },
        "start": 230,
        "end": 259
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order1",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 278
              },
              "optional": false,
              "computed": false,
              "start": 267,
              "end": 278
            },
            "directive": null,
            "start": 267,
            "end": 279
          }
        ],
        "start": 261,
        "end": 297
      },
      "alternate": null,
      "start": 226,
      "end": 297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 310
      },
      "typeParameters": null,
      "extends": [],
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
              "name": "subType",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 324
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 326,
                  "end": 329
                },
                "start": 326,
                "end": 329
              },
              "start": 324,
              "end": 329
            },
            "accessibility": null,
            "static": false,
            "start": 317,
            "end": 330
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 341,
                  "end": 344
                },
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 335,
            "end": 345
          }
        ],
        "start": 311,
        "end": 347
      },
      "declare": false,
      "start": 299,
      "end": 347
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
            "name": "order2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 381
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 383,
                              "end": 386
                            },
                            "start": 383,
                            "end": 386
                          },
                          "start": 381,
                          "end": 386
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 377,
                        "end": 386
                      }
                    ],
                    "start": 375,
                    "end": 388
                  },
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 401
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 403,
                              "end": 406
                            },
                            "start": 403,
                            "end": 406
                          },
                          "start": 401,
                          "end": 406
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 397,
                        "end": 406
                      }
                    ],
                    "start": 395,
                    "end": 408
                  },
                  {
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 421
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 423,
                              "end": 426
                            },
                            "start": 423,
                            "end": 426
                          },
                          "start": 421,
                          "end": 426
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 417,
                        "end": 426
                      }
                    ],
                    "start": 415,
                    "end": 428
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 436
                    },
                    "typeArguments": null,
                    "start": 435,
                    "end": 436
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 443,
                    "end": 452
                  }
                ],
                "start": 373,
                "end": 452
              },
              "start": 367,
              "end": 452
            },
            "start": 361,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 452
        }
      ],
      "declare": true,
      "start": 349,
      "end": 453
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order2",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 535
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order2",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 545
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 550
            },
            "optional": false,
            "computed": false,
            "start": 539,
            "end": 550
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 555,
            "end": 558
          },
          "start": 539,
          "end": 558
        },
        "start": 529,
        "end": 558
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order2",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 572
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 577
              },
              "optional": false,
              "computed": false,
              "start": 566,
              "end": 577
            },
            "directive": null,
            "start": 566,
            "end": 578
          }
        ],
        "start": 560,
        "end": 596
      },
      "alternate": null,
      "start": 525,
      "end": 596
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order1",
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 644
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order1",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 654
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 659
            },
            "optional": false,
            "computed": false,
            "start": 648,
            "end": 659
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 664,
            "end": 667
          },
          "start": 648,
          "end": 667
        },
        "start": 638,
        "end": 667
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order1",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 686
              },
              "optional": false,
              "computed": false,
              "start": 675,
              "end": 686
            },
            "directive": null,
            "start": 675,
            "end": 687
          }
        ],
        "start": 669,
        "end": 705
      },
      "alternate": null,
      "start": 634,
      "end": 705
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order2",
          "optional": false,
          "typeAnnotation": null,
          "start": 710,
          "end": 716
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order2",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 726
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 731
            },
            "optional": false,
            "computed": false,
            "start": 720,
            "end": 731
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 736,
            "end": 739
          },
          "start": 720,
          "end": 739
        },
        "start": 710,
        "end": 739
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order2",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 753
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 758
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 758
            },
            "directive": null,
            "start": 747,
            "end": 759
          }
        ],
        "start": 741,
        "end": 777
      },
      "alternate": null,
      "start": 706,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 777
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
    "value": "A",
    "start": 10,
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
    "value": "subType",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 50,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 237,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 252,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 256,
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
    "type": "Identifier",
    "value": "order1",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 299,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "subType",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 341,
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
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 349,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 443,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 536,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 551,
    "end": 554
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 566,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 660,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "order1",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 732,
    "end": 735
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "order2",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777
  }
]
```
