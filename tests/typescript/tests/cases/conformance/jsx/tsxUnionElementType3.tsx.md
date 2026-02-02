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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
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
          "start": 95,
          "end": 100
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 110
        },
        "optional": false,
        "computed": false,
        "start": 95,
        "end": 110
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 116,
                    "end": 122
                  },
                  "start": 114,
                  "end": 122
                },
                "accessibility": null,
                "static": false,
                "start": 112,
                "end": 122
              }
            ],
            "start": 111,
            "end": 123
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 125,
            "end": 127
          }
        ],
        "start": 110,
        "end": 128
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
              "start": 135,
              "end": 141
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 161,
                      "end": 165
                    },
                    "start": 154,
                    "end": 166
                  }
                ],
                "start": 144,
                "end": 172
              },
              "expression": false,
              "start": 141,
              "end": 172
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 135,
            "end": 172
          }
        ],
        "start": 129,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 174
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 185
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
          "start": 194,
          "end": 199
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 209
        },
        "optional": false,
        "computed": false,
        "start": 194,
        "end": 209
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  },
                  "start": 213,
                  "end": 221
                },
                "accessibility": null,
                "static": false,
                "start": 212,
                "end": 221
              }
            ],
            "start": 210,
            "end": 223
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 225,
            "end": 227
          }
        ],
        "start": 209,
        "end": 228
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
              "start": 235,
              "end": 241
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 261,
                      "end": 265
                    },
                    "start": 254,
                    "end": 266
                  }
                ],
                "start": 244,
                "end": 272
              },
              "expression": false,
              "start": 241,
              "end": 272
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 235,
            "end": 272
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 291
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
                "body": [],
                "start": 294,
                "end": 297
              },
              "expression": false,
              "start": 291,
              "end": 297
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 277,
            "end": 297
          }
        ],
        "start": 229,
        "end": 299
      },
      "abstract": false,
      "declare": false,
      "start": 176,
      "end": 299
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 310
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
          "start": 319,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 334
        },
        "optional": false,
        "computed": false,
        "start": 319,
        "end": 334
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 335,
            "end": 337
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 339,
            "end": 341
          }
        ],
        "start": 334,
        "end": 342
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
              "start": 349,
              "end": 355
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 375,
                      "end": 379
                    },
                    "start": 368,
                    "end": 380
                  }
                ],
                "start": 358,
                "end": 386
              },
              "expression": false,
              "start": 355,
              "end": 386
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 386
          }
        ],
        "start": 343,
        "end": 388
      },
      "abstract": false,
      "declare": false,
      "start": 301,
      "end": 388
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC4",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 399
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
          "start": 408,
          "end": 413
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 423
        },
        "optional": false,
        "computed": false,
        "start": 408,
        "end": 423
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 424,
            "end": 426
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 428,
            "end": 430
          }
        ],
        "start": 423,
        "end": 431
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
              "start": 438,
              "end": 444
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
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 464,
                      "end": 468
                    },
                    "start": 457,
                    "end": 469
                  }
                ],
                "start": 447,
                "end": 475
              },
              "expression": false,
              "start": 444,
              "end": 475
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 438,
            "end": 475
          }
        ],
        "start": 432,
        "end": 477
      },
      "abstract": false,
      "declare": false,
      "start": 390,
      "end": 477
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
            "name": "EmptyRCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 494
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 500
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 507
            },
            "start": 497,
            "end": 507
          },
          "definite": false,
          "start": 483,
          "end": 507
        }
      ],
      "declare": false,
      "start": 479,
      "end": 508
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
            "name": "PartRCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 523
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 529
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 536
            },
            "start": 526,
            "end": 536
          },
          "definite": false,
          "start": 513,
          "end": 536
        }
      ],
      "declare": false,
      "start": 509,
      "end": 537
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
            "name": "RCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 548
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 554
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 561
            },
            "start": 551,
            "end": 561
          },
          "definite": false,
          "start": 542,
          "end": 561
        }
      ],
      "declare": false,
      "start": 538,
      "end": 562
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "RCComp",
                "start": 578,
                "end": 584
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 585,
                    "end": 586
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hi",
                    "raw": "\"Hi\"",
                    "start": 587,
                    "end": 591
                  },
                  "start": 585,
                  "end": 591
                }
              ],
              "selfClosing": true,
              "start": 577,
              "end": 594
            },
            "children": [],
            "closingElement": null,
            "start": 577,
            "end": 594
          },
          "definite": false,
          "start": 573,
          "end": 594
        }
      ],
      "declare": false,
      "start": 569,
      "end": 595
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 602
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "start": 606,
                "end": 617
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 605,
              "end": 620
            },
            "children": [],
            "closingElement": null,
            "start": 605,
            "end": 620
          },
          "definite": false,
          "start": 600,
          "end": 620
        }
      ],
      "declare": false,
      "start": 596,
      "end": 621
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 628
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "start": 632,
                "end": 643
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 644,
                    "end": 653
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 654,
                    "end": 661
                  },
                  "start": 644,
                  "end": 661
                }
              ],
              "selfClosing": true,
              "start": 631,
              "end": 664
            },
            "children": [],
            "closingElement": null,
            "start": 631,
            "end": 664
          },
          "definite": false,
          "start": 626,
          "end": 664
        }
      ],
      "declare": false,
      "start": 622,
      "end": 665
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 670,
            "end": 671
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "start": 675,
                "end": 685
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 674,
              "end": 688
            },
            "children": [],
            "closingElement": null,
            "start": 674,
            "end": 688
          },
          "definite": false,
          "start": 670,
          "end": 688
        }
      ],
      "declare": false,
      "start": 666,
      "end": 688
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 694
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "start": 698,
                "end": 708
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-extra",
                    "start": 709,
                    "end": 719
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 720,
                    "end": 727
                  },
                  "start": 709,
                  "end": 727
                }
              ],
              "selfClosing": true,
              "start": 697,
              "end": 730
            },
            "children": [],
            "closingElement": null,
            "start": 697,
            "end": 730
          },
          "definite": false,
          "start": 693,
          "end": 730
        }
      ],
      "declare": false,
      "start": 689,
      "end": 730
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 730
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
    "value": "class",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 83,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 87,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 101,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160
  },
  {
    "type": "Null",
    "value": "null",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "RC2",
    "start": 182,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 200,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 254,
    "end": 260
  },
  {
    "type": "Null",
    "value": "null",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 277,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 301,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "RC3",
    "start": 307,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 311,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "render",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 368,
    "end": 374
  },
  {
    "type": "Null",
    "value": "null",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 396,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 400,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 414,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 457,
    "end": 463
  },
  {
    "type": "Null",
    "value": "null",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "EmptyRCComp",
    "start": 483,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "RC3",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "PartRCComp",
    "start": 513,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 530,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "RC4",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "RCComp",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "RC1",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 555,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "RC2",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "JSXIdentifier",
    "value": "RCComp",
    "start": 578,
    "end": 584
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "JSXText",
    "value": "\"Hi\"",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 596,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptyRCComp",
    "start": 606,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptyRCComp",
    "start": 632,
    "end": 643
  },
  {
    "type": "JSXIdentifier",
    "value": "data-prop",
    "start": 644,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 654,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "JSXIdentifier",
    "value": "PartRCComp",
    "start": 675,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 689,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "JSXIdentifier",
    "value": "PartRCComp",
    "start": 698,
    "end": 708
  },
  {
    "type": "JSXIdentifier",
    "value": "data-extra",
    "start": 709,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 720,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  }
]
```
