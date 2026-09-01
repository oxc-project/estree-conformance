__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "memo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                "start": 28,
                "end": 29
              },
              "typeArguments": null,
              "start": 28,
              "end": 29
            },
            "start": 26,
            "end": 29
          },
          "start": 25,
          "end": 29
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "typeArguments": null,
          "start": 32,
          "end": 33
        },
        "start": 30,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
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
            "name": "HoverCardText",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
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
                              "name": "label",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 75
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 77,
                                "end": 80
                              },
                              "start": 75,
                              "end": 80
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 70,
                            "end": 81
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "text",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 82,
                              "end": 86
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 88,
                                "end": 91
                              },
                              "start": 86,
                              "end": 91
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 82,
                            "end": 92
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "className",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 102
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 105,
                                "end": 111
                              },
                              "start": 103,
                              "end": 111
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 93,
                            "end": 111
                          }
                        ],
                        "start": 68,
                        "end": 113
                      },
                      "start": 66,
                      "end": 113
                    },
                    "start": 65,
                    "end": 113
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 118,
                    "end": 122
                  },
                  "start": 115,
                  "end": 122
                },
                "start": 64,
                "end": 122
              },
              "start": 62,
              "end": 122
            },
            "start": 49,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 122
        }
      ],
      "declare": true,
      "start": 35,
      "end": 123
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
            "name": "DEFAULT_NULL_VALUE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "start": 138,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 164
        }
      ],
      "declare": true,
      "start": 124,
      "end": 165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 190,
              "end": 196
            },
            "start": 188,
            "end": 196
          },
          "start": 185,
          "end": 196
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "params",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 213
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 214,
                    "end": 220
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 222,
                    "end": 225
                  }
                ],
                "start": 213,
                "end": 226
              },
              "start": 207,
              "end": 226
            },
            "start": 205,
            "end": 226
          },
          "start": 198,
          "end": 226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 229,
          "end": 235
        },
        "start": 227,
        "end": 235
      },
      "body": null,
      "expression": false,
      "start": 166,
      "end": 236
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nf",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 260,
              "end": 263
            },
            "start": 258,
            "end": 263
          },
          "start": 257,
          "end": 263
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "opts",
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
                    "name": "precision",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 282
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 284,
                      "end": 290
                    },
                    "start": 282,
                    "end": 290
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 273,
                  "end": 291
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rounding",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 300
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 302,
                      "end": 308
                    },
                    "start": 300,
                    "end": 308
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 292,
                  "end": 308
                }
              ],
              "start": 271,
              "end": 310
            },
            "start": 269,
            "end": 310
          },
          "start": 265,
          "end": 310
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 313,
          "end": 319
        },
        "start": 311,
        "end": 319
      },
      "body": null,
      "expression": false,
      "start": 237,
      "end": 320
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 342
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "memo",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 349
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Example",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 366
                  },
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isLogin",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 379,
                              "end": 386
                            },
                            "init": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 389,
                              "end": 393
                            },
                            "definite": false,
                            "start": 379,
                            "end": 393
                          }
                        ],
                        "declare": false,
                        "start": 373,
                        "end": 394
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 412,
                              "end": 415
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 411,
                            "end": 416
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "\n      ",
                              "raw": "\n      ",
                              "start": 416,
                              "end": 423
                            },
                            {
                              "type": "JSXElement",
                              "openingElement": {
                                "type": "JSXOpeningElement",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "div",
                                  "start": 424,
                                  "end": 427
                                },
                                "typeArguments": null,
                                "attributes": [],
                                "selfClosing": false,
                                "start": 423,
                                "end": 428
                              },
                              "children": [
                                {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 429,
                                      "end": 430
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "label",
                                        "raw": "'label'",
                                        "start": 431,
                                        "end": 438
                                      }
                                    ],
                                    "optional": false,
                                    "start": 429,
                                    "end": 439
                                  },
                                  "start": 428,
                                  "end": 440
                                }
                              ],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "div",
                                  "start": 442,
                                  "end": 445
                                },
                                "start": 440,
                                "end": 446
                              },
                              "start": 423,
                              "end": 446
                            },
                            {
                              "type": "JSXText",
                              "value": "\n      ",
                              "raw": "\n      ",
                              "start": 446,
                              "end": 453
                            },
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isLogin",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 455,
                                    "end": 462
                                  },
                                  "prefix": true,
                                  "start": 454,
                                  "end": 462
                                },
                                "consequent": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "DEFAULT_NULL_VALUE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 475,
                                  "end": 493
                                },
                                "alternate": {
                                  "type": "JSXElement",
                                  "openingElement": {
                                    "type": "JSXOpeningElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "HoverCardText",
                                      "start": 515,
                                      "end": 528
                                    },
                                    "typeArguments": null,
                                    "attributes": [
                                      {
                                        "type": "JSXAttribute",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "className",
                                          "start": 539,
                                          "end": 548
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "test",
                                          "raw": "\"test\"",
                                          "start": 549,
                                          "end": 555
                                        },
                                        "start": 539,
                                        "end": 555
                                      },
                                      {
                                        "type": "JSXAttribute",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "label",
                                          "start": 566,
                                          "end": 571
                                        },
                                        "value": {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "JSXElement",
                                            "openingElement": {
                                              "type": "JSXOpeningElement",
                                              "name": {
                                                "type": "JSXIdentifier",
                                                "name": "div",
                                                "start": 587,
                                                "end": 590
                                              },
                                              "typeArguments": null,
                                              "attributes": [],
                                              "selfClosing": false,
                                              "start": 586,
                                              "end": 591
                                            },
                                            "children": [
                                              {
                                                "type": "JSXText",
                                                "value": "\n              ",
                                                "raw": "\n              ",
                                                "start": 591,
                                                "end": 606
                                              },
                                              {
                                                "type": "JSXExpressionContainer",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "t",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 607,
                                                    "end": 608
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": "some.key",
                                                      "raw": "'some.key'",
                                                      "start": 609,
                                                      "end": 619
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
                                                            "name": "s1",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 639,
                                                            "end": 641
                                                          },
                                                          "value": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "nf",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 643,
                                                              "end": 645
                                                            },
                                                            "typeArguments": null,
                                                            "arguments": [
                                                              {
                                                                "type": "Literal",
                                                                "value": 1,
                                                                "raw": "1",
                                                                "start": 646,
                                                                "end": 647
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
                                                                      "name": "precision",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 651,
                                                                      "end": 660
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": 2,
                                                                      "raw": "2",
                                                                      "start": 662,
                                                                      "end": 663
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 651,
                                                                    "end": 663
                                                                  },
                                                                  {
                                                                    "type": "Property",
                                                                    "kind": "init",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "rounding",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 665,
                                                                      "end": 673
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": "down",
                                                                      "raw": "'down'",
                                                                      "start": 675,
                                                                      "end": 681
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 665,
                                                                    "end": 681
                                                                  }
                                                                ],
                                                                "start": 649,
                                                                "end": 683
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "start": 643,
                                                            "end": 684
                                                          },
                                                          "method": false,
                                                          "shorthand": false,
                                                          "computed": false,
                                                          "optional": false,
                                                          "start": 639,
                                                          "end": 684
                                                        },
                                                        {
                                                          "type": "Property",
                                                          "kind": "init",
                                                          "key": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "s2",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 702,
                                                            "end": 704
                                                          },
                                                          "value": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "nf",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 706,
                                                              "end": 708
                                                            },
                                                            "typeArguments": null,
                                                            "arguments": [
                                                              {
                                                                "type": "Literal",
                                                                "value": 2,
                                                                "raw": "2",
                                                                "start": 709,
                                                                "end": 710
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
                                                                      "name": "precision",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 714,
                                                                      "end": 723
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": 2,
                                                                      "raw": "2",
                                                                      "start": 725,
                                                                      "end": 726
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 714,
                                                                    "end": 726
                                                                  },
                                                                  {
                                                                    "type": "Property",
                                                                    "kind": "init",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "rounding",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 728,
                                                                      "end": 736
                                                                    },
                                                                    "value": {
                                                                      "type": "Literal",
                                                                      "value": "down",
                                                                      "raw": "'down'",
                                                                      "start": 738,
                                                                      "end": 744
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 728,
                                                                    "end": 744
                                                                  }
                                                                ],
                                                                "start": 712,
                                                                "end": 746
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "start": 706,
                                                            "end": 747
                                                          },
                                                          "method": false,
                                                          "shorthand": false,
                                                          "computed": false,
                                                          "optional": false,
                                                          "start": 702,
                                                          "end": 747
                                                        }
                                                      ],
                                                      "start": 621,
                                                      "end": 764
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 607,
                                                  "end": 765
                                                },
                                                "start": 606,
                                                "end": 766
                                              },
                                              {
                                                "type": "JSXText",
                                                "value": "\n            ",
                                                "raw": "\n            ",
                                                "start": 766,
                                                "end": 779
                                              }
                                            ],
                                            "closingElement": {
                                              "type": "JSXClosingElement",
                                              "name": {
                                                "type": "JSXIdentifier",
                                                "name": "div",
                                                "start": 781,
                                                "end": 784
                                              },
                                              "start": 779,
                                              "end": 785
                                            },
                                            "start": 586,
                                            "end": 785
                                          },
                                          "start": 572,
                                          "end": 797
                                        },
                                        "start": 566,
                                        "end": 797
                                      },
                                      {
                                        "type": "JSXAttribute",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "text",
                                          "start": 808,
                                          "end": 812
                                        },
                                        "value": {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "JSXElement",
                                            "openingElement": {
                                              "type": "JSXOpeningElement",
                                              "name": {
                                                "type": "JSXIdentifier",
                                                "name": "div",
                                                "start": 828,
                                                "end": 831
                                              },
                                              "typeArguments": null,
                                              "attributes": [],
                                              "selfClosing": false,
                                              "start": 827,
                                              "end": 832
                                            },
                                            "children": [
                                              {
                                                "type": "JSXText",
                                                "value": "\n              ",
                                                "raw": "\n              ",
                                                "start": 832,
                                                "end": 847
                                              },
                                              {
                                                "type": "JSXExpressionContainer",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "nf",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 848,
                                                    "end": 850
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0",
                                                      "start": 851,
                                                      "end": 852
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
                                                            "name": "precision",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 856,
                                                            "end": 865
                                                          },
                                                          "value": {
                                                            "type": "Literal",
                                                            "value": 2,
                                                            "raw": "2",
                                                            "start": 867,
                                                            "end": 868
                                                          },
                                                          "method": false,
                                                          "shorthand": false,
                                                          "computed": false,
                                                          "optional": false,
                                                          "start": 856,
                                                          "end": 868
                                                        },
                                                        {
                                                          "type": "Property",
                                                          "kind": "init",
                                                          "key": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "rounding",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 870,
                                                            "end": 878
                                                          },
                                                          "value": {
                                                            "type": "Literal",
                                                            "value": "down",
                                                            "raw": "'down'",
                                                            "start": 880,
                                                            "end": 886
                                                          },
                                                          "method": false,
                                                          "shorthand": false,
                                                          "computed": false,
                                                          "optional": false,
                                                          "start": 870,
                                                          "end": 886
                                                        }
                                                      ],
                                                      "start": 854,
                                                      "end": 888
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 848,
                                                  "end": 889
                                                },
                                                "start": 847,
                                                "end": 890
                                              },
                                              {
                                                "type": "JSXText",
                                                "value": " USDT\n            ",
                                                "raw": " USDT\n            ",
                                                "start": 890,
                                                "end": 908
                                              }
                                            ],
                                            "closingElement": {
                                              "type": "JSXClosingElement",
                                              "name": {
                                                "type": "JSXIdentifier",
                                                "name": "div",
                                                "start": 910,
                                                "end": 913
                                              },
                                              "start": 908,
                                              "end": 914
                                            },
                                            "start": 827,
                                            "end": 914
                                          },
                                          "start": 813,
                                          "end": 926
                                        },
                                        "start": 808,
                                        "end": 926
                                      }
                                    ],
                                    "selfClosing": false,
                                    "start": 514,
                                    "end": 936
                                  },
                                  "children": [],
                                  "closingElement": {
                                    "type": "JSXClosingElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "HoverCardText",
                                      "start": 938,
                                      "end": 951
                                    },
                                    "start": 936,
                                    "end": 952
                                  },
                                  "start": 514,
                                  "end": 952
                                },
                                "start": 454,
                                "end": 960
                              },
                              "start": 453,
                              "end": 961
                            },
                            {
                              "type": "JSXText",
                              "value": "\n    ",
                              "raw": "\n    ",
                              "start": 961,
                              "end": 966
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 968,
                              "end": 971
                            },
                            "start": 966,
                            "end": 972
                          },
                          "start": 411,
                          "end": 972
                        },
                        "start": 398,
                        "end": 977
                      }
                    ],
                    "start": 369,
                    "end": 979
                  },
                  "expression": false,
                  "start": 350,
                  "end": 979
                }
              ],
              "optional": false,
              "start": 345,
              "end": 980
            },
            "definite": false,
            "start": 335,
            "end": 980
          }
        ],
        "declare": false,
        "start": 329,
        "end": 981
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 322,
      "end": 981
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 981
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "memo",
    "start": 17,
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
    "value": "T",
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
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "HoverCardText",
    "start": 49,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117
  },
  {
    "type": "Null",
    "value": "null",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 124,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_NULL_VALUE",
    "start": 138,
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
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 166,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 174,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 237,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
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
    "value": "precision",
    "start": 273,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "rounding",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
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
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "memo",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 350,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 373,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "isLogin",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 416,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "String",
    "value": "'label'",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 441,
    "end": 442
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 446,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "isLogin",
    "start": 455,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_NULL_VALUE",
    "start": 475,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "JSXIdentifier",
    "value": "HoverCardText",
    "start": 515,
    "end": 528
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 539,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "JSXText",
    "value": "\"test\"",
    "start": 549,
    "end": 555
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 586,
    "end": 587
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "JSXText",
    "value": "\n              ",
    "start": 591,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "String",
    "value": "'some.key'",
    "start": 609,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "precision",
    "start": 651,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "rounding",
    "start": 665,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "String",
    "value": "'down'",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "precision",
    "start": 714,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "rounding",
    "start": 728,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "String",
    "value": "'down'",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 766,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 780,
    "end": 781
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 781,
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
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 827,
    "end": 828
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "JSXText",
    "value": "\n              ",
    "start": 832,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "nf",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "precision",
    "start": 856,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "rounding",
    "start": 870,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "String",
    "value": "'down'",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "JSXText",
    "value": " USDT\n            ",
    "start": 890,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 909,
    "end": 910
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 937,
    "end": 938
  },
  {
    "type": "JSXIdentifier",
    "value": "HoverCardText",
    "start": 938,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 967,
    "end": 968
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  }
]
```
