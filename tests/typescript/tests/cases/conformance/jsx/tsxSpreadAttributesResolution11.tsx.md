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
      "end": 75
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 89,
            "end": 91
          },
          "definite": false,
          "start": 83,
          "end": 91
        }
      ],
      "declare": false,
      "start": 77,
      "end": 92
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
            "name": "obj1",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 110,
                          "end": 111
                        },
                        "start": 110,
                        "end": 111
                      },
                      "start": 108,
                      "end": 111
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 107,
                    "end": 111
                  }
                ],
                "start": 105,
                "end": 113
              },
              "start": 103,
              "end": 113
            },
            "start": 99,
            "end": 113
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 125,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 126
              }
            ],
            "start": 116,
            "end": 128
          },
          "definite": false,
          "start": 99,
          "end": 128
        }
      ],
      "declare": false,
      "start": 93,
      "end": 128
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
            "name": "obj3",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 145,
                          "end": 149
                        },
                        "start": 145,
                        "end": 149
                      },
                      "start": 143,
                      "end": 149
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 150
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 160
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 162,
                        "end": 168
                      },
                      "start": 160,
                      "end": 168
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 168
                  }
                ],
                "start": 141,
                "end": 170
              },
              "start": 139,
              "end": 170
            },
            "start": 135,
            "end": 170
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 182,
                  "end": 186
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 179,
                "end": 186
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 201
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 203,
                  "end": 207
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 207
              }
            ],
            "start": 173,
            "end": 209
          },
          "definite": false,
          "start": 135,
          "end": 209
        }
      ],
      "declare": false,
      "start": 129,
      "end": 209
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 225
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 235,
                  "end": 236
                },
                "start": 235,
                "end": 236
              },
              "start": 233,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 232,
            "end": 236
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 244,
                  "end": 248
                },
                "start": 244,
                "end": 248
              },
              "start": 242,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 241,
            "end": 248
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overwrite",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 253,
            "end": 270
          }
        ],
        "start": 226,
        "end": 272
      },
      "declare": false,
      "start": 211,
      "end": 272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 293
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 307
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 317
        },
        "optional": false,
        "computed": false,
        "start": 302,
        "end": 317
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 322
            },
            "typeArguments": null,
            "start": 318,
            "end": 322
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 324,
            "end": 326
          }
        ],
        "start": 317,
        "end": 327
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 340
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 361,
                          "end": 364
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 360,
                        "end": 365
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 365,
                          "end": 370
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 372,
                          "end": 375
                        },
                        "start": 370,
                        "end": 376
                      },
                      "start": 360,
                      "end": 376
                    },
                    "start": 353,
                    "end": 377
                  }
                ],
                "start": 343,
                "end": 383
              },
              "expression": false,
              "start": 340,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 334,
            "end": 383
          }
        ],
        "start": 328,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 274,
      "end": 385
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
            "name": "anyobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 399,
                "end": 402
              },
              "start": 397,
              "end": 402
            },
            "start": 391,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 402
        }
      ],
      "declare": false,
      "start": 387,
      "end": 403
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 419,
                "end": 432
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
                    "start": 437,
                    "end": 440
                  },
                  "start": 433,
                  "end": 441
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 442,
                    "end": 443
                  },
                  "value": null,
                  "start": 442,
                  "end": 443
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 444,
                    "end": 453
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 454,
                    "end": 458
                  },
                  "start": 444,
                  "end": 458
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 467
                  },
                  "start": 459,
                  "end": 468
                }
              ],
              "selfClosing": true,
              "start": 418,
              "end": 471
            },
            "children": [],
            "closingElement": null,
            "start": 418,
            "end": 471
          },
          "definite": false,
          "start": 414,
          "end": 471
        }
      ],
      "declare": false,
      "start": 410,
      "end": 471
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 478
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 482,
                "end": 495
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
                    "start": 500,
                    "end": 504
                  },
                  "start": 496,
                  "end": 505
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 514
                  },
                  "start": 506,
                  "end": 515
                }
              ],
              "selfClosing": true,
              "start": 481,
              "end": 518
            },
            "children": [],
            "closingElement": null,
            "start": 481,
            "end": 518
          },
          "definite": false,
          "start": 476,
          "end": 518
        }
      ],
      "declare": false,
      "start": 472,
      "end": 518
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 525
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 529,
                "end": 542
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 543,
                    "end": 544
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 546,
                      "end": 547
                    },
                    "start": 545,
                    "end": 548
                  },
                  "start": 543,
                  "end": 548
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 549,
                    "end": 558
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 559,
                    "end": 563
                  },
                  "start": 549,
                  "end": 563
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 572
                  },
                  "start": 564,
                  "end": 573
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 580
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 582,
                          "end": 586
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 579,
                        "end": 586
                      }
                    ],
                    "start": 578,
                    "end": 587
                  },
                  "start": 574,
                  "end": 588
                }
              ],
              "selfClosing": true,
              "start": 528,
              "end": 591
            },
            "children": [],
            "closingElement": null,
            "start": 528,
            "end": 591
          },
          "definite": false,
          "start": 523,
          "end": 591
        }
      ],
      "declare": false,
      "start": 519,
      "end": 591
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 598
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 602,
                "end": 615
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "overwrite",
                    "start": 616,
                    "end": 625
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 626,
                    "end": 630
                  },
                  "start": 616,
                  "end": 630
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 639
                  },
                  "start": 631,
                  "end": 640
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 641,
                    "end": 642
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 644,
                      "end": 645
                    },
                    "start": 643,
                    "end": 646
                  },
                  "start": 641,
                  "end": 646
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 652,
                          "end": 653
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 655,
                          "end": 659
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 652,
                        "end": 659
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 661,
                          "end": 662
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 664,
                          "end": 665
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 661,
                        "end": 665
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 667,
                          "end": 676
                        },
                        "value": {
                          "type": "Literal",
                          "value": "world",
                          "raw": "\"world\"",
                          "start": 677,
                          "end": 684
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 667,
                        "end": 684
                      }
                    ],
                    "start": 651,
                    "end": 685
                  },
                  "start": 647,
                  "end": 686
                }
              ],
              "selfClosing": true,
              "start": 601,
              "end": 689
            },
            "children": [],
            "closingElement": null,
            "start": 601,
            "end": 689
          },
          "definite": false,
          "start": 596,
          "end": 689
        }
      ],
      "declare": false,
      "start": 592,
      "end": 689
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 694,
            "end": 696
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 700,
                "end": 713
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 719,
                          "end": 720
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 722,
                          "end": 723
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 719,
                        "end": 723
                      }
                    ],
                    "start": 718,
                    "end": 724
                  },
                  "start": 714,
                  "end": 725
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
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 731,
                          "end": 740
                        },
                        "value": {
                          "type": "Literal",
                          "value": "world",
                          "raw": "\"world\"",
                          "start": 742,
                          "end": 749
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 731,
                        "end": 749
                      }
                    ],
                    "start": 730,
                    "end": 750
                  },
                  "start": 726,
                  "end": 751
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 757,
                          "end": 758
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 760,
                          "end": 764
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 757,
                        "end": 764
                      }
                    ],
                    "start": 756,
                    "end": 765
                  },
                  "start": 752,
                  "end": 766
                }
              ],
              "selfClosing": true,
              "start": 699,
              "end": 769
            },
            "children": [],
            "closingElement": null,
            "start": 699,
            "end": 769
          },
          "definite": false,
          "start": 694,
          "end": 769
        }
      ],
      "declare": false,
      "start": 690,
      "end": 769
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 776
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "OverWriteAttr",
                "start": 780,
                "end": 793
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyobj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 804
                  },
                  "start": 794,
                  "end": 805
                }
              ],
              "selfClosing": true,
              "start": 779,
              "end": 808
            },
            "children": [],
            "closingElement": null,
            "start": 779,
            "end": 808
          },
          "definite": false,
          "start": 774,
          "end": 808
        }
      ],
      "declare": false,
      "start": 770,
      "end": 808
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 808
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
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 110,
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
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "OverWriteAttr",
    "start": 280,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 294,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 302,
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
    "value": "Component",
    "start": 308,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 371,
    "end": 372
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 419,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 442,
    "end": 443
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 444,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 482,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 529,
    "end": 542
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 549,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 602,
    "end": 615
  },
  {
    "type": "JSXIdentifier",
    "value": "overwrite",
    "start": 616,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 644,
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
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 667,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 700,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "overwrite",
    "start": 731,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 742,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "/",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "JSXIdentifier",
    "value": "OverWriteAttr",
    "start": 780,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "anyobj",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  }
]
```
