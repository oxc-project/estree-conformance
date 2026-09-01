__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item1",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 17
            },
            "typeArguments": null,
            "start": 12,
            "end": 17
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item2",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
            "typeArguments": null,
            "start": 20,
            "end": 25
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 42
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 54,
                "end": 61
              },
              "start": 52,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 49,
            "end": 62
          }
        ],
        "start": 43,
        "end": 64
      },
      "declare": false,
      "start": 28,
      "end": 64
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 81
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 94
          },
          "typeArguments": null,
          "start": 90,
          "end": 94
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 107,
                  "end": 110
                },
                "start": 107,
                "end": 110
              },
              "start": 105,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 111
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 121,
                    "end": 127
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 130,
                    "end": 139
                  }
                ],
                "start": 121,
                "end": 139
              },
              "start": 119,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 150,
                "end": 157
              },
              "start": 148,
              "end": 157
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 158
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 168,
                  "end": 172
                },
                "start": 168,
                "end": 172
              },
              "start": 166,
              "end": 172
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 173
          }
        ],
        "start": 95,
        "end": 175
      },
      "declare": false,
      "start": 66,
      "end": 175
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item2",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 192
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 205
          },
          "typeArguments": null,
          "start": 201,
          "end": 205
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 218,
                  "end": 221
                },
                "start": 218,
                "end": 221
              },
              "start": 216,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 212,
            "end": 222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 230
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 232,
                    "end": 238
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 241,
                    "end": 250
                  }
                ],
                "start": 232,
                "end": 250
              },
              "start": 230,
              "end": 250
            },
            "accessibility": null,
            "static": false,
            "start": 227,
            "end": 251
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 261,
                "end": 268
              },
              "start": 259,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 256,
            "end": 269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 279,
                  "end": 284
                },
                "start": 279,
                "end": 284
              },
              "start": 277,
              "end": 284
            },
            "accessibility": null,
            "static": false,
            "start": 274,
            "end": 285
          }
        ],
        "start": 206,
        "end": 287
      },
      "declare": false,
      "start": 177,
      "end": 287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 302
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 310
              },
              "typeArguments": null,
              "start": 306,
              "end": 310
            },
            "start": 304,
            "end": 310
          },
          "start": 303,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 323
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 328
                  },
                  "optional": false,
                  "computed": false,
                  "start": 322,
                  "end": 328
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 333,
                  "end": 336
                },
                "start": 322,
                "end": 336
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 345
                  },
                  "optional": false,
                  "computed": false,
                  "start": 340,
                  "end": 345
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 359
                },
                "start": 340,
                "end": 359
              },
              "start": 322,
              "end": 359
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 376
                      },
                      "optional": false,
                      "computed": false,
                      "start": 371,
                      "end": 376
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 383
                    },
                    "optional": false,
                    "computed": false,
                    "start": 371,
                    "end": 383
                  },
                  "directive": null,
                  "start": 371,
                  "end": 384
                }
              ],
              "start": 361,
              "end": 390
            },
            "alternate": null,
            "start": 318,
            "end": 390
          }
        ],
        "start": 312,
        "end": 392
      },
      "expression": false,
      "start": 289,
      "end": 392
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 407
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 415
              },
              "typeArguments": null,
              "start": 411,
              "end": 415
            },
            "start": 409,
            "end": 415
          },
          "start": 408,
          "end": 415
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 428
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 432
                  },
                  "optional": false,
                  "computed": false,
                  "start": 427,
                  "end": 432
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 446
                },
                "start": 427,
                "end": 446
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 456
                  },
                  "optional": false,
                  "computed": false,
                  "start": 450,
                  "end": 456
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 461,
                  "end": 464
                },
                "start": 450,
                "end": 464
              },
              "start": 427,
              "end": 464
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 481
                      },
                      "optional": false,
                      "computed": false,
                      "start": 476,
                      "end": 481
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 488
                    },
                    "optional": false,
                    "computed": false,
                    "start": 476,
                    "end": 488
                  },
                  "directive": null,
                  "start": 476,
                  "end": 489
                }
              ],
              "start": 466,
              "end": 537
            },
            "alternate": null,
            "start": 423,
            "end": 537
          }
        ],
        "start": 417,
        "end": 539
      },
      "expression": false,
      "start": 394,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 554
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 562
              },
              "typeArguments": null,
              "start": 558,
              "end": 562
            },
            "start": 556,
            "end": 562
          },
          "start": 555,
          "end": 562
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 575
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 579
                },
                "optional": false,
                "computed": false,
                "start": 574,
                "end": 579
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 583,
                    "end": 584
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 588
                  },
                  "optional": false,
                  "computed": false,
                  "start": 583,
                  "end": 588
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 602
                },
                "start": 583,
                "end": 602
              },
              "start": 574,
              "end": 602
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 615
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 616,
                        "end": 619
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 619
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 626
                    },
                    "optional": false,
                    "computed": false,
                    "start": 614,
                    "end": 626
                  },
                  "directive": null,
                  "start": 614,
                  "end": 627
                }
              ],
              "start": 604,
              "end": 633
            },
            "alternate": null,
            "start": 570,
            "end": 633
          }
        ],
        "start": 564,
        "end": 635
      },
      "expression": false,
      "start": 541,
      "end": 635
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 650
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 658
              },
              "typeArguments": null,
              "start": 654,
              "end": 658
            },
            "start": 652,
            "end": 658
          },
          "start": 651,
          "end": 658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 675
                  },
                  "optional": false,
                  "computed": false,
                  "start": 670,
                  "end": 675
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 689
                },
                "start": 670,
                "end": 689
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 698
                },
                "optional": false,
                "computed": false,
                "start": 693,
                "end": 698
              },
              "start": 670,
              "end": 698
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 712,
                        "end": 715
                      },
                      "optional": false,
                      "computed": false,
                      "start": 710,
                      "end": 715
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 722
                    },
                    "optional": false,
                    "computed": false,
                    "start": 710,
                    "end": 722
                  },
                  "directive": null,
                  "start": 710,
                  "end": 723
                }
              ],
              "start": 700,
              "end": 729
            },
            "alternate": null,
            "start": 666,
            "end": 729
          }
        ],
        "start": 660,
        "end": 731
      },
      "expression": false,
      "start": 637,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 746
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 754
              },
              "typeArguments": null,
              "start": 750,
              "end": 754
            },
            "start": 748,
            "end": 754
          },
          "start": 747,
          "end": 754
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 771
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 776
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 780
                  },
                  "optional": false,
                  "computed": false,
                  "start": 775,
                  "end": 780
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 794
                },
                "start": 775,
                "end": 794
              },
              "start": 766,
              "end": 794
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 811
                      },
                      "optional": false,
                      "computed": false,
                      "start": 806,
                      "end": 811
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 818
                    },
                    "optional": false,
                    "computed": false,
                    "start": 806,
                    "end": 818
                  },
                  "directive": null,
                  "start": 806,
                  "end": 819
                }
              ],
              "start": 796,
              "end": 825
            },
            "alternate": null,
            "start": 762,
            "end": 825
          }
        ],
        "start": 756,
        "end": 827
      },
      "expression": false,
      "start": 733,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 842
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 850
              },
              "typeArguments": null,
              "start": 846,
              "end": 850
            },
            "start": 844,
            "end": 850
          },
          "start": 843,
          "end": 850
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 863
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 867
                  },
                  "optional": false,
                  "computed": false,
                  "start": 862,
                  "end": 867
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 881
                },
                "start": 862,
                "end": 881
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 886
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 890
                },
                "optional": false,
                "computed": false,
                "start": 885,
                "end": 890
              },
              "start": 862,
              "end": 890
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 903
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 907
                      },
                      "optional": false,
                      "computed": false,
                      "start": 902,
                      "end": 907
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 908,
                      "end": 914
                    },
                    "optional": false,
                    "computed": false,
                    "start": 902,
                    "end": 914
                  },
                  "directive": null,
                  "start": 902,
                  "end": 915
                }
              ],
              "start": 892,
              "end": 921
            },
            "alternate": null,
            "start": 858,
            "end": 921
          }
        ],
        "start": 852,
        "end": 923
      },
      "expression": false,
      "start": 829,
      "end": 923
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 938
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 946
              },
              "typeArguments": null,
              "start": 942,
              "end": 946
            },
            "start": 940,
            "end": 946
          },
          "start": 939,
          "end": 946
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 959
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 963
                },
                "optional": false,
                "computed": false,
                "start": 958,
                "end": 963
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 968
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 969,
                    "end": 972
                  },
                  "optional": false,
                  "computed": false,
                  "start": 967,
                  "end": 972
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 986
                },
                "start": 967,
                "end": 986
              },
              "start": 958,
              "end": 986
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 998,
                        "end": 999
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1000,
                        "end": 1003
                      },
                      "optional": false,
                      "computed": false,
                      "start": 998,
                      "end": 1003
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 998,
                    "end": 1010
                  },
                  "directive": null,
                  "start": 998,
                  "end": 1011
                }
              ],
              "start": 988,
              "end": 1017
            },
            "alternate": null,
            "start": 954,
            "end": 1017
          }
        ],
        "start": 948,
        "end": 1019
      },
      "expression": false,
      "start": 925,
      "end": 1019
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1030,
        "end": 1034
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1042
              },
              "typeArguments": null,
              "start": 1038,
              "end": 1042
            },
            "start": 1036,
            "end": 1042
          },
          "start": 1035,
          "end": 1042
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1054,
                    "end": 1055
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1056,
                    "end": 1059
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1054,
                  "end": 1059
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1073
                },
                "start": 1054,
                "end": 1073
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1078
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1082
                },
                "optional": false,
                "computed": false,
                "start": 1077,
                "end": 1082
              },
              "start": 1054,
              "end": 1082
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1094,
                        "end": 1095
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1096,
                        "end": 1099
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1094,
                      "end": 1099
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1106
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1094,
                    "end": 1106
                  },
                  "directive": null,
                  "start": 1094,
                  "end": 1107
                }
              ],
              "start": 1084,
              "end": 1155
            },
            "alternate": null,
            "start": 1050,
            "end": 1155
          }
        ],
        "start": 1044,
        "end": 1157
      },
      "expression": false,
      "start": 1021,
      "end": 1157
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Types",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1191
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1197
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1200,
              "end": 1201
            },
            "computed": false,
            "start": 1194,
            "end": 1201
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1206
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1209,
              "end": 1210
            },
            "computed": false,
            "start": 1203,
            "end": 1210
          }
        ],
        "start": 1192,
        "end": 1212
      },
      "const": false,
      "declare": false,
      "start": 1181,
      "end": 1212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1227
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1237
            },
            "typeArguments": null,
            "start": 1230,
            "end": 1237
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1247
            },
            "typeArguments": null,
            "start": 1240,
            "end": 1247
          }
        ],
        "start": 1230,
        "end": 1247
      },
      "declare": false,
      "start": 1214,
      "end": 1248
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1260,
        "end": 1267
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1274,
              "end": 1278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1285
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1286,
                    "end": 1289
                  },
                  "start": 1280,
                  "end": 1289
                },
                "typeArguments": null,
                "start": 1280,
                "end": 1289
              },
              "start": 1278,
              "end": 1289
            },
            "accessibility": null,
            "static": false,
            "start": 1274,
            "end": 1290
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1302,
                "end": 1308
              },
              "start": 1300,
              "end": 1308
            },
            "accessibility": null,
            "static": false,
            "start": 1295,
            "end": 1309
          },
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
              "start": 1314,
              "end": 1320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
              },
              "start": 1320,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1314,
            "end": 1329
          }
        ],
        "start": 1268,
        "end": 1331
      },
      "declare": false,
      "start": 1250,
      "end": 1331
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1350
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1361
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1363,
                    "end": 1368
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1369,
                    "end": 1372
                  },
                  "start": 1363,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1363,
                "end": 1372
              },
              "start": 1361,
              "end": 1372
            },
            "accessibility": null,
            "static": false,
            "start": 1357,
            "end": 1373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
              },
              "start": 1383,
              "end": 1391
            },
            "accessibility": null,
            "static": false,
            "start": 1378,
            "end": 1392
          }
        ],
        "start": 1351,
        "end": 1394
      },
      "declare": false,
      "start": 1333,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1405,
        "end": 1410
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inst",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1425
              },
              "typeArguments": null,
              "start": 1417,
              "end": 1425
            },
            "start": 1415,
            "end": 1425
          },
          "start": 1411,
          "end": 1425
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1440,
              "end": 1444
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inst",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1468
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1469,
                      "end": 1473
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1464,
                    "end": 1473
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1499
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1500,
                          "end": 1503
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1494,
                        "end": 1503
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1523,
                                    "end": 1527
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1528,
                                    "end": 1533
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1523,
                                  "end": 1533
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1534,
                                  "end": 1540
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1523,
                                "end": 1540
                              },
                              "directive": null,
                              "start": 1523,
                              "end": 1541
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1558,
                              "end": 1564
                            }
                          ],
                          "start": 1505,
                          "end": 1578
                        }
                      ],
                      "start": 1489,
                      "end": 1578
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Types",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1596,
                          "end": 1601
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1602,
                          "end": 1605
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1596,
                        "end": 1605
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inst",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1625,
                                    "end": 1629
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1630,
                                    "end": 1635
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1625,
                                  "end": 1635
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toExponential",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1636,
                                  "end": 1649
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1625,
                                "end": 1649
                              },
                              "directive": null,
                              "start": 1625,
                              "end": 1650
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1667,
                              "end": 1673
                            }
                          ],
                          "start": 1607,
                          "end": 1687
                        }
                      ],
                      "start": 1591,
                      "end": 1687
                    }
                  ],
                  "start": 1456,
                  "end": 1697
                }
              ],
              "start": 1446,
              "end": 1703
            },
            "start": 1433,
            "end": 1703
          }
        ],
        "start": 1427,
        "end": 1705
      },
      "expression": false,
      "start": 1396,
      "end": 1705
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1735,
            "end": 1736
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1744,
                    "end": 1750
                  },
                  "start": 1742,
                  "end": 1750
                },
                "start": 1740,
                "end": 1750
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1756,
                    "end": 1762
                  },
                  "start": 1754,
                  "end": 1762
                },
                "start": 1752,
                "end": 1762
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1765,
                "end": 1769
              },
              "start": 1763,
              "end": 1769
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1773,
              "end": 1775
            },
            "id": null,
            "generator": false,
            "start": 1739,
            "end": 1775
          },
          "definite": false,
          "start": 1735,
          "end": 1775
        }
      ],
      "declare": false,
      "start": 1729,
      "end": 1776
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1788,
        "end": 1789
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1798,
                "end": 1804
              },
              "start": 1796,
              "end": 1804
            },
            "accessibility": null,
            "static": false,
            "start": 1794,
            "end": 1805
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1809
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1812,
                "end": 1818
              },
              "start": 1810,
              "end": 1818
            },
            "accessibility": null,
            "static": false,
            "start": 1808,
            "end": 1819
          }
        ],
        "start": 1790,
        "end": 1821
      },
      "declare": false,
      "start": 1778,
      "end": 1821
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1834
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1840
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1842,
                "end": 1848
              },
              "start": 1840,
              "end": 1848
            },
            "accessibility": null,
            "static": false,
            "start": 1839,
            "end": 1849
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1852,
              "end": 1853
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1855,
                "end": 1861
              },
              "start": 1853,
              "end": 1861
            },
            "accessibility": null,
            "static": false,
            "start": 1852,
            "end": 1862
          }
        ],
        "start": 1835,
        "end": 1864
      },
      "declare": false,
      "start": 1823,
      "end": 1864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 1871,
        "end": 1872
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1876
            },
            "typeArguments": null,
            "start": 1875,
            "end": 1876
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1880
            },
            "typeArguments": null,
            "start": 1879,
            "end": 1880
          }
        ],
        "start": 1875,
        "end": 1880
      },
      "declare": false,
      "start": 1866,
      "end": 1881
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
            "name": "u",
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
                  "start": 1892,
                  "end": 1893
                },
                "typeArguments": null,
                "start": 1892,
                "end": 1893
              },
              "start": 1890,
              "end": 1893
            },
            "start": 1889,
            "end": 1893
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1896,
              "end": 1898
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1902,
              "end": 1905
            },
            "start": 1896,
            "end": 1905
          },
          "definite": false,
          "start": 1889,
          "end": 1905
        }
      ],
      "declare": false,
      "start": 1883,
      "end": 1906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1909
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1910,
              "end": 1911
            },
            "optional": false,
            "computed": false,
            "start": 1908,
            "end": 1911
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1916
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1918
            },
            "optional": false,
            "computed": false,
            "start": 1915,
            "end": 1918
          },
          "start": 1908,
          "end": 1918
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1923
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1926,
                "end": 1927
              },
              "optional": false,
              "computed": false,
              "start": 1924,
              "end": 1927
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1929,
                "end": 1930
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1931,
                "end": 1932
              },
              "optional": false,
              "computed": false,
              "start": 1929,
              "end": 1932
            }
          ],
          "optional": false,
          "start": 1922,
          "end": 1933
        },
        "start": 1908,
        "end": 1933
      },
      "directive": null,
      "start": 1908,
      "end": 1934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1936,
              "end": 1937
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "optional": false,
            "computed": false,
            "start": 1936,
            "end": 1939
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1943,
              "end": 1944
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1946
            },
            "optional": false,
            "computed": false,
            "start": 1943,
            "end": 1946
          },
          "start": 1936,
          "end": 1946
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1950,
            "end": 1951
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1952,
                "end": 1953
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1954,
                "end": 1955
              },
              "optional": false,
              "computed": false,
              "start": 1952,
              "end": 1955
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1957,
                "end": 1958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1959,
                "end": 1960
              },
              "optional": false,
              "computed": false,
              "start": 1957,
              "end": 1960
            }
          ],
          "optional": false,
          "start": 1950,
          "end": 1961
        },
        "start": 1936,
        "end": 1961
      },
      "directive": null,
      "start": 1936,
      "end": 1962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Additive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1991,
        "end": 1999
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "+",
              "raw": "'+'",
              "start": 2002,
              "end": 2005
            },
            "start": 2002,
            "end": 2005
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "-",
              "raw": "'-'",
              "start": 2008,
              "end": 2011
            },
            "start": 2008,
            "end": 2011
          }
        ],
        "start": 2002,
        "end": 2011
      },
      "declare": false,
      "start": 1986,
      "end": 2012
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Multiplicative",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2032
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "*",
              "raw": "'*'",
              "start": 2035,
              "end": 2038
            },
            "start": 2035,
            "end": 2038
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "/",
              "raw": "'/'",
              "start": 2041,
              "end": 2044
            },
            "start": 2041,
            "end": 2044
          }
        ],
        "start": 2035,
        "end": 2044
      },
      "declare": false,
      "start": 2013,
      "end": 2045
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AdditiveObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2057,
        "end": 2068
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2078
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Additive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2080,
                  "end": 2088
                },
                "typeArguments": null,
                "start": 2080,
                "end": 2088
              },
              "start": 2078,
              "end": 2088
            },
            "accessibility": null,
            "static": false,
            "start": 2075,
            "end": 2088
          }
        ],
        "start": 2069,
        "end": 2090
      },
      "declare": false,
      "start": 2047,
      "end": 2090
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplicativeObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2119
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Multiplicative",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2145
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2145
              },
              "start": 2129,
              "end": 2145
            },
            "accessibility": null,
            "static": false,
            "start": 2126,
            "end": 2145
          }
        ],
        "start": 2120,
        "end": 2147
      },
      "declare": false,
      "start": 2092,
      "end": 2147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2154,
        "end": 2157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AdditiveObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2160,
              "end": 2171
            },
            "typeArguments": null,
            "start": 2160,
            "end": 2171
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MultiplicativeObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2174,
              "end": 2191
            },
            "typeArguments": null,
            "start": 2174,
            "end": 2191
          }
        ],
        "start": 2160,
        "end": 2191
      },
      "declare": false,
      "start": 2149,
      "end": 2191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2209,
          "end": 2212
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2218,
                  "end": 2221
                },
                "typeArguments": null,
                "start": 2218,
                "end": 2221
              },
              "start": 2216,
              "end": 2221
            },
            "start": 2213,
            "end": 2221
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "SwitchStatement",
              "discriminant": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2237,
                  "end": 2240
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2241,
                  "end": 2244
                },
                "optional": false,
                "computed": false,
                "start": 2237,
                "end": 2244
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "Literal",
                    "value": "+",
                    "raw": "'+'",
                    "start": 2261,
                    "end": 2264
                  },
                  "consequent": [
                    {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onlyPlus",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2280,
                              "end": 2288
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2289,
                                  "end": 2292
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2293,
                                  "end": 2296
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2289,
                                "end": 2296
                              }
                            ],
                            "optional": false,
                            "start": 2280,
                            "end": 2297
                          },
                          "directive": null,
                          "start": 2280,
                          "end": 2298
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 2311,
                          "end": 2318
                        }
                      ],
                      "start": 2266,
                      "end": 2328
                    }
                  ],
                  "start": 2256,
                  "end": 2328
                }
              ],
              "start": 2229,
              "end": 2334
            }
          ],
          "start": 2223,
          "end": 2336
        },
        "expression": false,
        "start": 2200,
        "end": 2336
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2193,
      "end": 2336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyPlus",
        "optional": false,
        "typeAnnotation": null,
        "start": 2347,
        "end": 2355
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "+",
                "raw": "'+'",
                "start": 2361,
                "end": 2364
              },
              "start": 2361,
              "end": 2364
            },
            "start": 2359,
            "end": 2364
          },
          "start": 2356,
          "end": 2364
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
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 2377,
              "end": 2380
            },
            "start": 2370,
            "end": 2381
          }
        ],
        "start": 2366,
        "end": 2383
      },
      "expression": false,
      "start": 2338,
      "end": 2383
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "never",
        "optional": false,
        "typeAnnotation": null,
        "start": 2424,
        "end": 2429
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNeverKeyword",
              "start": 2437,
              "end": 2442
            },
            "start": 2435,
            "end": 2442
          },
          "start": 2430,
          "end": 2442
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 2445,
          "end": 2450
        },
        "start": 2443,
        "end": 2450
      },
      "body": null,
      "expression": false,
      "start": 2407,
      "end": 2451
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2464,
        "end": 2471
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2478,
              "end": 2482
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2485,
              "end": 2486
            },
            "computed": false,
            "start": 2478,
            "end": 2486
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2492,
              "end": 2496
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2499,
              "end": 2500
            },
            "computed": false,
            "start": 2492,
            "end": 2500
          }
        ],
        "start": 2472,
        "end": 2503
      },
      "const": true,
      "declare": false,
      "start": 2453,
      "end": 2503
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionOfBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2510,
        "end": 2520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2531
            },
            "typeArguments": null,
            "start": 2523,
            "end": 2531
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeBar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2542
            },
            "typeArguments": null,
            "start": 2534,
            "end": 2542
          }
        ],
        "start": 2523,
        "end": 2542
      },
      "declare": false,
      "start": 2505,
      "end": 2543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2549,
        "end": 2557
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 2562,
              "end": 2566
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2575
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2576,
                    "end": 2580
                  },
                  "start": 2568,
                  "end": 2580
                },
                "typeArguments": null,
                "start": 2568,
                "end": 2580
              },
              "start": 2566,
              "end": 2580
            },
            "accessibility": null,
            "static": false,
            "start": 2562,
            "end": 2580
          }
        ],
        "start": 2560,
        "end": 2582
      },
      "declare": false,
      "start": 2544,
      "end": 2583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeBar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2597
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 2602,
              "end": 2606
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BarEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2608,
                    "end": 2615
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2616,
                    "end": 2620
                  },
                  "start": 2608,
                  "end": 2620
                },
                "typeArguments": null,
                "start": 2608,
                "end": 2620
              },
              "start": 2606,
              "end": 2620
            },
            "accessibility": null,
            "static": false,
            "start": 2602,
            "end": 2620
          }
        ],
        "start": 2600,
        "end": 2622
      },
      "declare": false,
      "start": 2584,
      "end": 2623
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2634,
        "end": 2639
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2647,
                "end": 2654
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnionOfBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2655,
                      "end": 2665
                    },
                    "typeArguments": null,
                    "start": 2655,
                    "end": 2665
                  }
                ],
                "start": 2654,
                "end": 2666
              },
              "start": 2647,
              "end": 2666
            },
            "start": 2645,
            "end": 2666
          },
          "start": 2640,
          "end": 2666
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2678,
                  "end": 2683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2684,
                  "end": 2688
                },
                "optional": false,
                "computed": false,
                "start": 2678,
                "end": 2688
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2693,
                "end": 2702
              },
              "start": 2678,
              "end": 2702
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2727
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2728,
                      "end": 2732
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2722,
                    "end": 2732
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2753,
                          "end": 2760
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2761,
                          "end": 2765
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2753,
                        "end": 2765
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2783,
                          "end": 2789
                        }
                      ],
                      "start": 2748,
                      "end": 2789
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BarEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2807,
                          "end": 2814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2815,
                          "end": 2819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2807,
                        "end": 2819
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2837,
                          "end": 2843
                        }
                      ],
                      "start": 2802,
                      "end": 2843
                    },
                    {
                      "type": "SwitchCase",
                      "test": null,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "never",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2881,
                              "end": 2886
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2887,
                                  "end": 2892
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2893,
                                  "end": 2897
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2887,
                                "end": 2897
                              }
                            ],
                            "optional": false,
                            "start": 2881,
                            "end": 2898
                          },
                          "directive": null,
                          "start": 2881,
                          "end": 2899
                        }
                      ],
                      "start": 2856,
                      "end": 2899
                    }
                  ],
                  "start": 2714,
                  "end": 2909
                }
              ],
              "start": 2704,
              "end": 2915
            },
            "alternate": null,
            "start": 2674,
            "end": 2915
          }
        ],
        "start": 2668,
        "end": 2917
      },
      "expression": false,
      "start": 2625,
      "end": 2917
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 2951,
        "end": 2956
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
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2963,
              "end": 2967
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "TypeA",
                  "raw": "\"TypeA\"",
                  "start": 2969,
                  "end": 2976
                },
                "start": 2969,
                "end": 2976
              },
              "start": 2967,
              "end": 2976
            },
            "accessibility": null,
            "static": false,
            "start": 2963,
            "end": 2977
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2982,
              "end": 2988
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Cool stuff!",
                  "raw": "\"Cool stuff!\"",
                  "start": 2990,
                  "end": 3003
                },
                "start": 2990,
                "end": 3003
              },
              "start": 2988,
              "end": 3003
            },
            "accessibility": null,
            "static": false,
            "start": 2982,
            "end": 3004
          }
        ],
        "start": 2957,
        "end": 3006
      },
      "declare": false,
      "start": 2941,
      "end": 3006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3018,
        "end": 3023
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
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3030,
              "end": 3034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "TypeB",
                  "raw": "\"TypeB\"",
                  "start": 3036,
                  "end": 3043
                },
                "start": 3036,
                "end": 3043
              },
              "start": 3034,
              "end": 3043
            },
            "accessibility": null,
            "static": false,
            "start": 3030,
            "end": 3044
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3049,
              "end": 3055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3057,
                  "end": 3058
                },
                "start": 3057,
                "end": 3058
              },
              "start": 3055,
              "end": 3058
            },
            "accessibility": null,
            "static": false,
            "start": 3049,
            "end": 3059
          }
        ],
        "start": 3024,
        "end": 3061
      },
      "declare": false,
      "start": 3008,
      "end": 3061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 3068,
        "end": 3072
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3075,
              "end": 3080
            },
            "typeArguments": null,
            "start": 3075,
            "end": 3080
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3083,
              "end": 3088
            },
            "typeArguments": null,
            "start": 3083,
            "end": 3088
          }
        ],
        "start": 3075,
        "end": 3088
      },
      "declare": false,
      "start": 3063,
      "end": 3089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3108,
        "end": 3114
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 3118,
              "end": 3125
            },
            "start": 3116,
            "end": 3125
          },
          "start": 3115,
          "end": 3125
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
            "start": 3128,
            "end": 3129
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3133,
                "end": 3137
              },
              "typeArguments": null,
              "start": 3133,
              "end": 3137
            },
            "start": 3133,
            "end": 3137
          },
          "start": 3128,
          "end": 3137
        },
        "start": 3126,
        "end": 3137
      },
      "body": null,
      "expression": false,
      "start": 3091,
      "end": 3138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WorksProperly",
        "optional": false,
        "typeAnnotation": null,
        "start": 3149,
        "end": 3162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3169,
                "end": 3173
              },
              "typeArguments": null,
              "start": 3169,
              "end": 3173
            },
            "start": 3167,
            "end": 3173
          },
          "start": 3163,
          "end": 3173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3185,
                  "end": 3189
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3190,
                  "end": 3194
                },
                "optional": false,
                "computed": false,
                "start": 3185,
                "end": 3194
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "TypeA",
                "raw": "\"TypeA\"",
                "start": 3199,
                "end": 3206
              },
              "start": 3185,
              "end": 3206
            },
            "consequent": {
              "type": "BlockStatement",
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
                        "name": "value1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3224,
                        "end": 3230
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3233,
                          "end": 3237
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3238,
                          "end": 3244
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3233,
                        "end": 3244
                      },
                      "definite": false,
                      "start": 3224,
                      "end": 3244
                    }
                  ],
                  "declare": false,
                  "start": 3218,
                  "end": 3245
                }
              ],
              "start": 3208,
              "end": 3251
            },
            "alternate": null,
            "start": 3181,
            "end": 3251
          }
        ],
        "start": 3175,
        "end": 3253
      },
      "expression": false,
      "start": 3140,
      "end": 3253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoesNotWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 3264,
        "end": 3275
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3282,
              "end": 3289
            },
            "start": 3280,
            "end": 3289
          },
          "start": 3276,
          "end": 3289
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3301,
                "end": 3307
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3308,
                  "end": 3312
                }
              ],
              "optional": false,
              "start": 3301,
              "end": 3313
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3329,
                        "end": 3333
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3334,
                        "end": 3338
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3329,
                      "end": 3338
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "TypeA",
                      "raw": "\"TypeA\"",
                      "start": 3343,
                      "end": 3350
                    },
                    "start": 3329,
                    "end": 3350
                  },
                  "consequent": {
                    "type": "BlockStatement",
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
                              "name": "value1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3372,
                              "end": 3378
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3381,
                                "end": 3385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3386,
                                "end": 3392
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3381,
                              "end": 3392
                            },
                            "definite": false,
                            "start": 3372,
                            "end": 3392
                          }
                        ],
                        "declare": false,
                        "start": 3366,
                        "end": 3393
                      }
                    ],
                    "start": 3352,
                    "end": 3403
                  },
                  "alternate": null,
                  "start": 3325,
                  "end": 3403
                }
              ],
              "start": 3315,
              "end": 3409
            },
            "alternate": null,
            "start": 3297,
            "end": 3409
          }
        ],
        "start": 3291,
        "end": 3411
      },
      "expression": false,
      "start": 3255,
      "end": 3411
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "typeAnnotation": null,
        "start": 3440,
        "end": 3445
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 3454,
              "end": 3458
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "testA",
                  "raw": "'testA'",
                  "start": 3460,
                  "end": 3467
                },
                "start": 3460,
                "end": 3467
              },
              "start": 3458,
              "end": 3467
            },
            "accessibility": null,
            "static": false,
            "start": 3454,
            "end": 3468
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bananas",
              "optional": false,
              "typeAnnotation": null,
              "start": 3473,
              "end": 3480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 3482,
                  "end": 3483
                },
                "start": 3482,
                "end": 3483
              },
              "start": 3480,
              "end": 3483
            },
            "accessibility": null,
            "static": false,
            "start": 3473,
            "end": 3484
          }
        ],
        "start": 3448,
        "end": 3486
      },
      "declare": false,
      "start": 3435,
      "end": 3486
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3495,
        "end": 3500
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 3509,
              "end": 3513
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "testB",
                  "raw": "'testB'",
                  "start": 3515,
                  "end": 3522
                },
                "start": 3515,
                "end": 3522
              },
              "start": 3513,
              "end": 3522
            },
            "accessibility": null,
            "static": false,
            "start": 3509,
            "end": 3523
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apples",
              "optional": false,
              "typeAnnotation": null,
              "start": 3528,
              "end": 3534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3536,
                  "end": 3537
                },
                "start": 3536,
                "end": 3537
              },
              "start": 3534,
              "end": 3537
            },
            "accessibility": null,
            "static": false,
            "start": 3528,
            "end": 3538
          }
        ],
        "start": 3503,
        "end": 3540
      },
      "declare": false,
      "start": 3490,
      "end": 3540
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 3549,
        "end": 3557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3560,
              "end": 3565
            },
            "typeArguments": null,
            "start": 3560,
            "end": 3565
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3568,
              "end": 3573
            },
            "typeArguments": null,
            "start": 3568,
            "end": 3573
          }
        ],
        "start": 3560,
        "end": 3573
      },
      "declare": false,
      "start": 3544,
      "end": 3574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapOfAllTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 3581,
        "end": 3594
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 3597,
          "end": 3603
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 3604,
              "end": 3610
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllTests",
                "optional": false,
                "typeAnnotation": null,
                "start": 3612,
                "end": 3620
              },
              "typeArguments": null,
              "start": 3612,
              "end": 3620
            }
          ],
          "start": 3603,
          "end": 3621
        },
        "start": 3597,
        "end": 3621
      },
      "declare": false,
      "start": 3576,
      "end": 3622
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
            "name": "doTestingStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 3630,
            "end": 3644
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapOfTests",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapOfAllTests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3660,
                      "end": 3673
                    },
                    "typeArguments": null,
                    "start": 3660,
                    "end": 3673
                  },
                  "start": 3658,
                  "end": 3673
                },
                "start": 3648,
                "end": 3673
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ids",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3680,
                      "end": 3686
                    },
                    "start": 3680,
                    "end": 3688
                  },
                  "start": 3678,
                  "end": 3688
                },
                "start": 3675,
                "end": 3688
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ids",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3699,
                        "end": 3702
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3703,
                        "end": 3710
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3699,
                      "end": 3710
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3711,
                            "end": 3713
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "kind": "let",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3731,
                                    "end": 3735
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 3731,
                                  "end": 3735
                                }
                              ],
                              "declare": false,
                              "start": 3727,
                              "end": 3736
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3745,
                                  "end": 3749
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapOfTests",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3752,
                                    "end": 3762
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3763,
                                    "end": 3765
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 3752,
                                  "end": 3766
                                },
                                "start": 3745,
                                "end": 3766
                              },
                              "directive": null,
                              "start": 3745,
                              "end": 3767
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "test",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3780,
                                    "end": 3784
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3785,
                                    "end": 3789
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3780,
                                  "end": 3789
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "testA",
                                  "raw": "'testA'",
                                  "start": 3794,
                                  "end": 3801
                                },
                                "start": 3780,
                                "end": 3801
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3817,
                                          "end": 3824
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3825,
                                          "end": 3828
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3817,
                                        "end": 3828
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3829,
                                            "end": 3833
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bananas",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3834,
                                            "end": 3841
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3829,
                                          "end": 3841
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3817,
                                      "end": 3842
                                    },
                                    "directive": null,
                                    "start": 3817,
                                    "end": 3843
                                  }
                                ],
                                "start": 3803,
                                "end": 3853
                              },
                              "alternate": null,
                              "start": 3776,
                              "end": 3853
                            },
                            {
                              "type": "SwitchStatement",
                              "discriminant": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3870,
                                  "end": 3874
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3875,
                                  "end": 3879
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3870,
                                "end": 3879
                              },
                              "cases": [
                                {
                                  "type": "SwitchCase",
                                  "test": {
                                    "type": "Literal",
                                    "value": "testA",
                                    "raw": "'testA'",
                                    "start": 3900,
                                    "end": 3907
                                  },
                                  "consequent": [
                                    {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "console",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3927,
                                                "end": 3934
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "log",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3935,
                                                "end": 3938
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3927,
                                              "end": 3938
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "test",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3939,
                                                  "end": 3943
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "bananas",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3944,
                                                  "end": 3951
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3939,
                                                "end": 3951
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3927,
                                            "end": 3952
                                          },
                                          "directive": null,
                                          "start": 3927,
                                          "end": 3953
                                        }
                                      ],
                                      "start": 3909,
                                      "end": 3967
                                    }
                                  ],
                                  "start": 3895,
                                  "end": 3967
                                }
                              ],
                              "start": 3862,
                              "end": 3977
                            }
                          ],
                          "start": 3717,
                          "end": 3983
                        },
                        "id": null,
                        "generator": false,
                        "start": 3711,
                        "end": 3983
                      }
                    ],
                    "optional": false,
                    "start": 3699,
                    "end": 3984
                  },
                  "directive": null,
                  "start": 3699,
                  "end": 3985
                }
              ],
              "start": 3693,
              "end": 3987
            },
            "id": null,
            "generator": false,
            "start": 3647,
            "end": 3987
          },
          "definite": false,
          "start": 3630,
          "end": 3987
        }
      ],
      "declare": false,
      "start": 3624,
      "end": 3988
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3988
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Item1",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Item2",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 66,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Item1",
    "start": 76,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 130,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 177,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Item2",
    "start": 187,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 193,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 241,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 289,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "goo1",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 329,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 337,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 350,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 394,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "goo2",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 437,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 457,
    "end": 460
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 541,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 593,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 637,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 680,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 690,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 712,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 733,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 785,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 808,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 812,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 829,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 846,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 872,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 882,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "foo5",
    "start": 934,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 942,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 964,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 973,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 977,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1021,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1064,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1181,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 1219,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "StrType",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "NumType",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1250,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "StrType",
    "start": 1260,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1295,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1333,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "NumType",
    "start": 1343,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1363,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1378,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1385,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1396,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 1405,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1433,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1440,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 1464,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1494,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 1523,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1528,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1534,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1591,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "Types",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 1602,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "inst",
    "start": 1625,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1636,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1729,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1744,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1756,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1765,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1770,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1778,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1798,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1812,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1823,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1855,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1866,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1883,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1902,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1912,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1947,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Additive",
    "start": 1991,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "String",
    "value": "'+'",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "String",
    "value": "'-'",
    "start": 2008,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2013,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "Multiplicative",
    "start": 2018,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "String",
    "value": "'*'",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "String",
    "value": "'/'",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2047,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "AdditiveObj",
    "start": 2057,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2075,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "Additive",
    "start": 2080,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2092,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "MultiplicativeObj",
    "start": 2102,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2126,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "Multiplicative",
    "start": 2131,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2149,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2154,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "AdditiveObj",
    "start": 2160,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "MultiplicativeObj",
    "start": 2174,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2193,
    "end": 2199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2200,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2209,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2213,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2218,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2229,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2237,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2241,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2256,
    "end": 2260
  },
  {
    "type": "String",
    "value": "'+'",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "onlyPlus",
    "start": 2280,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2289,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2293,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2311,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2338,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "onlyPlus",
    "start": 2347,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "String",
    "value": "'+'",
    "start": 2361,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2377,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2407,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2415,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2424,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2430,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2437,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2445,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2453,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2459,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 2464,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2492,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2505,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "UnionOfBar",
    "start": 2510,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "TypeBar1",
    "start": 2523,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "TypeBar2",
    "start": 2534,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2544,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "TypeBar1",
    "start": 2549,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2562,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 2568,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2576,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2584,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "TypeBar2",
    "start": 2589,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2602,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 2608,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2616,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2625,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 2634,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2640,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2647,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "UnionOfBar",
    "start": 2655,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2674,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2678,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2684,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2689,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2693,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2714,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2722,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2728,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2748,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 2753,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2761,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2783,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2802,
    "end": 2806
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 2807,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2815,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2837,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2856,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2881,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2887,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2893,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2941,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 2951,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 2963,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "String",
    "value": "\"TypeA\"",
    "start": 2969,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "Value1",
    "start": 2982,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "String",
    "value": "\"Cool stuff!\"",
    "start": 2990,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3008,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 3018,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 3030,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "String",
    "value": "\"TypeB\"",
    "start": 3036,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "Value2",
    "start": 3049,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3063,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 3068,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 3075,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 3083,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3091,
    "end": 3098
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3099,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "isType",
    "start": 3108,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3118,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3130,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 3133,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3140,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "WorksProperly",
    "start": 3149,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3163,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 3169,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3181,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3185,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 3190,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3195,
    "end": 3198
  },
  {
    "type": "String",
    "value": "\"TypeA\"",
    "start": 3199,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3218,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 3224,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3233,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "Value1",
    "start": 3238,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3255,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "DoesNotWork",
    "start": 3264,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3276,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3282,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3297,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "isType",
    "start": 3301,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3308,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3325,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3329,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 3334,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3339,
    "end": 3342
  },
  {
    "type": "String",
    "value": "\"TypeA\"",
    "start": 3343,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3366,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 3372,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3381,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "Value1",
    "start": 3386,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3435,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "TestA",
    "start": 3440,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3454,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "String",
    "value": "'testA'",
    "start": 3460,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "bananas",
    "start": 3473,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3490,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "TestB",
    "start": 3495,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3509,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "String",
    "value": "'testB'",
    "start": 3515,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "apples",
    "start": 3528,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3544,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "AllTests",
    "start": 3549,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "TestA",
    "start": 3560,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "TestB",
    "start": 3568,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3576,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "MapOfAllTests",
    "start": 3581,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3597,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3604,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "AllTests",
    "start": 3612,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3624,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "doTestingStuff",
    "start": 3630,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "mapOfTests",
    "start": 3648,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "MapOfAllTests",
    "start": 3660,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 3675,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3680,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3690,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 3699,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 3703,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3711,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3714,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3727,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3731,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3745,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "mapOfTests",
    "start": 3752,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3763,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3776,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3780,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3785,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3790,
    "end": 3793
  },
  {
    "type": "String",
    "value": "'testA'",
    "start": 3794,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3817,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3825,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3829,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "bananas",
    "start": 3834,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3862,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3870,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3875,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3895,
    "end": 3899
  },
  {
    "type": "String",
    "value": "'testA'",
    "start": 3900,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3927,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3935,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3939,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "bananas",
    "start": 3944,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3987,
    "end": 3988
  }
]
```
