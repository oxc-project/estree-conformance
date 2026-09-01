__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 107
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "start": 104,
            "end": 115
          },
          "typeArguments": null,
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": null,
      "expression": false,
      "start": 75,
      "end": 116
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 142
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 149
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    },
                    "start": 149,
                    "end": 157
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 147,
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
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 162
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 164,
                      "end": 170
                    },
                    "start": 162,
                    "end": 170
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 170
                }
              ],
              "start": 146,
              "end": 171
            },
            "start": 144,
            "end": 171
          },
          "start": 143,
          "end": 171
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 185
            },
            "start": 174,
            "end": 185
          },
          "typeArguments": null,
          "start": 174,
          "end": 185
        },
        "start": 172,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 117,
      "end": 186
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 195
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 206
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 208,
                  "end": 210
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 204,
                "end": 210
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 219
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 221,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 216,
                "end": 228
              }
            ],
            "start": 198,
            "end": 230
          },
          "definite": false,
          "start": 192,
          "end": 230
        }
      ],
      "declare": false,
      "start": 188,
      "end": 230
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 240
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 251
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 253,
                  "end": 257
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 249,
                "end": 257
              }
            ],
            "start": 243,
            "end": 259
          },
          "definite": false,
          "start": 236,
          "end": 259
        }
      ],
      "declare": false,
      "start": 232,
      "end": 259
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 269
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 280
                },
                "value": {
                  "type": "Literal",
                  "value": 500,
                  "raw": "500",
                  "start": 282,
                  "end": 285
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 285
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "ignore-prop",
                  "raw": "\"ignore-prop\"",
                  "start": 291,
                  "end": 304
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 306,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 291,
                "end": 313
              }
            ],
            "start": 272,
            "end": 315
          },
          "definite": false,
          "start": 265,
          "end": 315
        }
      ],
      "declare": false,
      "start": 261,
      "end": 315
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
            "name": "defaultObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 333,
                "end": 336
              },
              "start": 331,
              "end": 336
            },
            "start": 321,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 336
        }
      ],
      "declare": false,
      "start": 317,
      "end": 337
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 353
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 357,
                "end": 365
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 356,
              "end": 368
            },
            "children": [],
            "closingElement": null,
            "start": 356,
            "end": 368
          },
          "definite": false,
          "start": 351,
          "end": 368
        }
      ],
      "declare": false,
      "start": 345,
      "end": 368
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 377
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 381,
                "end": 389
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 397
                  },
                  "start": 390,
                  "end": 398
                }
              ],
              "selfClosing": true,
              "start": 380,
              "end": 400
            },
            "children": [],
            "closingElement": null,
            "start": 380,
            "end": 400
          },
          "definite": false,
          "start": 375,
          "end": 400
        }
      ],
      "declare": false,
      "start": 369,
      "end": 400
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 409
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 413,
                "end": 421
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 426,
                    "end": 428
                  },
                  "start": 422,
                  "end": 429
                }
              ],
              "selfClosing": true,
              "start": 412,
              "end": 432
            },
            "children": [],
            "closingElement": null,
            "start": 412,
            "end": 432
          },
          "definite": false,
          "start": 407,
          "end": 432
        }
      ],
      "declare": false,
      "start": 401,
      "end": 432
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 445,
                "end": 453
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 462
                  },
                  "start": 454,
                  "end": 463
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 471
                  },
                  "start": 464,
                  "end": 472
                }
              ],
              "selfClosing": true,
              "start": 444,
              "end": 475
            },
            "children": [],
            "closingElement": null,
            "start": 444,
            "end": 475
          },
          "definite": false,
          "start": 439,
          "end": 475
        }
      ],
      "declare": false,
      "start": 433,
      "end": 475
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 484
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 488,
                "end": 496
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 505
                  },
                  "start": 497,
                  "end": 506
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 507,
                    "end": 509
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 511,
                      "end": 513
                    },
                    "start": 510,
                    "end": 514
                  },
                  "start": 507,
                  "end": 514
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 520,
                          "end": 523
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 525,
                          "end": 529
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 520,
                        "end": 529
                      }
                    ],
                    "start": 519,
                    "end": 530
                  },
                  "start": 515,
                  "end": 531
                }
              ],
              "selfClosing": true,
              "start": 487,
              "end": 533
            },
            "children": [],
            "closingElement": null,
            "start": 487,
            "end": 533
          },
          "definite": false,
          "start": 482,
          "end": 533
        }
      ],
      "declare": false,
      "start": 476,
      "end": 533
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
            "name": "c6",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 542
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 546,
                "end": 554
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 563
                  },
                  "start": 555,
                  "end": 564
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 570,
                          "end": 572
                        },
                        "value": {
                          "type": "Literal",
                          "value": 10000,
                          "raw": "10000",
                          "start": 574,
                          "end": 579
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 570,
                        "end": 579
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 584
                        },
                        "value": {
                          "type": "Literal",
                          "value": "true",
                          "raw": "\"true\"",
                          "start": 586,
                          "end": 592
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 581,
                        "end": 592
                      }
                    ],
                    "start": 569,
                    "end": 593
                  },
                  "start": 565,
                  "end": 594
                }
              ],
              "selfClosing": true,
              "start": 545,
              "end": 597
            },
            "children": [],
            "closingElement": null,
            "start": 545,
            "end": 597
          },
          "definite": false,
          "start": 540,
          "end": 597
        }
      ],
      "declare": false,
      "start": 534,
      "end": 597
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 606
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 610,
                "end": 618
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 633
                  },
                  "start": 619,
                  "end": 634
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy",
                    "start": 635,
                    "end": 637
                  },
                  "value": null,
                  "start": 635,
                  "end": 637
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 642,
                    "end": 645
                  },
                  "start": 638,
                  "end": 646
                }
              ],
              "selfClosing": true,
              "start": 609,
              "end": 649
            },
            "children": [],
            "closingElement": null,
            "start": 609,
            "end": 649
          },
          "definite": false,
          "start": 604,
          "end": 649
        }
      ],
      "declare": false,
      "start": 598,
      "end": 650
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
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 701
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 705,
                "end": 713
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ignore-prop",
                    "start": 714,
                    "end": 725
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 727,
                      "end": 730
                    },
                    "start": 726,
                    "end": 731
                  },
                  "start": 714,
                  "end": 731
                }
              ],
              "selfClosing": true,
              "start": 704,
              "end": 734
            },
            "children": [],
            "closingElement": null,
            "start": 704,
            "end": 734
          },
          "definite": false,
          "start": 699,
          "end": 734
        }
      ],
      "declare": false,
      "start": 693,
      "end": 734
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
            "name": "c9",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 743
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 747,
                "end": 755
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "ignore-prop",
                          "raw": "\"ignore-prop\"",
                          "start": 762,
                          "end": 775
                        },
                        "value": {
                          "type": "Literal",
                          "value": 200,
                          "raw": "200",
                          "start": 776,
                          "end": 779
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 762,
                        "end": 779
                      }
                    ],
                    "start": 760,
                    "end": 781
                  },
                  "start": 756,
                  "end": 782
                }
              ],
              "selfClosing": true,
              "start": 746,
              "end": 785
            },
            "children": [],
            "closingElement": null,
            "start": 746,
            "end": 785
          },
          "definite": false,
          "start": 741,
          "end": 785
        }
      ],
      "declare": false,
      "start": 735,
      "end": 786
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
            "name": "c10",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 796
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OneThing",
                "start": 800,
                "end": 808
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 817
                  },
                  "start": 809,
                  "end": 818
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "yy1",
                    "start": 819,
                    "end": 822
                  },
                  "value": {
                    "type": "Literal",
                    "value": "boo",
                    "raw": "\"boo\"",
                    "start": 823,
                    "end": 828
                  },
                  "start": 819,
                  "end": 828
                }
              ],
              "selfClosing": true,
              "start": 799,
              "end": 831
            },
            "children": [],
            "closingElement": null,
            "start": 799,
            "end": 831
          },
          "definite": false,
          "start": 793,
          "end": 831
        }
      ],
      "declare": false,
      "start": 787,
      "end": 832
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 832
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
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
    "value": "JSX",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 117,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "OneThing",
    "start": 134,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
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
    "value": "yy1",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "500",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 291,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "defaultObj",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 357,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 381,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 401,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 476,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 488,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 534,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 546,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 556,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "10000",
    "start": 574,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "yy1",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 586,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 598,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 609,
    "end": 610
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 610,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "defaultObj",
    "start": 623,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634
  },
  {
    "type": "JSXIdentifier",
    "value": "yy",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 693,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 705,
    "end": 713
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 714,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 735,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 747,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 762,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 776,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 787,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "JSXIdentifier",
    "value": "OneThing",
    "start": 800,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 810,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 817,
    "end": 818
  },
  {
    "type": "JSXIdentifier",
    "value": "yy1",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "JSXText",
    "value": "\"boo\"",
    "start": 823,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  }
]
```
