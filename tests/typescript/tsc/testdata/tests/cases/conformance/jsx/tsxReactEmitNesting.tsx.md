__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "vdom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              },
              "start": 16,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 21
        }
      ],
      "declare": true,
      "start": 0,
      "end": 22
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
            "name": "ctrl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 44
        }
      ],
      "declare": true,
      "start": 23,
      "end": 45
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
            "name": "model",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "start": 58,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 68
        }
      ],
      "declare": true,
      "start": 46,
      "end": 69
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
            "name": "render",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 145
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ctrl",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 153
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "model",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 160
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "section",
                  "start": 170,
                  "end": 177
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "class",
                      "start": 178,
                      "end": 183
                    },
                    "value": {
                      "type": "Literal",
                      "value": "todoapp",
                      "raw": "\"todoapp\"",
                      "start": 184,
                      "end": 193
                    },
                    "start": 178,
                    "end": 193
                  }
                ],
                "selfClosing": false,
                "start": 169,
                "end": 194
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 194,
                  "end": 203
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "header",
                      "start": 204,
                      "end": 210
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "class",
                          "start": 211,
                          "end": 216
                        },
                        "value": {
                          "type": "Literal",
                          "value": "header",
                          "raw": "\"header\"",
                          "start": 217,
                          "end": 225
                        },
                        "start": 211,
                        "end": 225
                      }
                    ],
                    "selfClosing": false,
                    "start": 203,
                    "end": 226
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 226,
                      "end": 239
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 240,
                          "end": 242
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 239,
                        "end": 243
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "todos <x>",
                          "raw": "todos &lt;x&gt;",
                          "start": 243,
                          "end": 258
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 260,
                          "end": 262
                        },
                        "start": 258,
                        "end": 263
                      },
                      "start": 239,
                      "end": 263
                    },
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 263,
                      "end": 276
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "input",
                          "start": 277,
                          "end": 282
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 283,
                              "end": 288
                            },
                            "value": {
                              "type": "Literal",
                              "value": "new-todo",
                              "raw": "\"new-todo\"",
                              "start": 289,
                              "end": 299
                            },
                            "start": 283,
                            "end": 299
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "autofocus",
                              "start": 300,
                              "end": 309
                            },
                            "value": null,
                            "start": 300,
                            "end": 309
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "autocomplete",
                              "start": 310,
                              "end": 322
                            },
                            "value": {
                              "type": "Literal",
                              "value": "off",
                              "raw": "\"off\"",
                              "start": 323,
                              "end": 328
                            },
                            "start": 310,
                            "end": 328
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "placeholder",
                              "start": 329,
                              "end": 340
                            },
                            "value": {
                              "type": "Literal",
                              "value": "What needs to be done?",
                              "raw": "\"What needs to be done?\"",
                              "start": 341,
                              "end": 365
                            },
                            "start": 329,
                            "end": 365
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "value",
                              "start": 366,
                              "end": 371
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 373,
                                  "end": 378
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newTodo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 379,
                                  "end": 386
                                },
                                "optional": false,
                                "computed": false,
                                "start": 373,
                                "end": 386
                              },
                              "start": 372,
                              "end": 387
                            },
                            "start": 366,
                            "end": 387
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onKeyup",
                              "start": 388,
                              "end": 395
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 397,
                                      "end": 401
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "addTodo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 402,
                                      "end": 409
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 397,
                                    "end": 409
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 410,
                                    "end": 414
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 397,
                                  "end": 414
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 415,
                                    "end": 419
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "model",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 421,
                                    "end": 426
                                  }
                                ],
                                "optional": false,
                                "start": 397,
                                "end": 427
                              },
                              "start": 396,
                              "end": 428
                            },
                            "start": 388,
                            "end": 428
                          }
                        ],
                        "selfClosing": true,
                        "start": 276,
                        "end": 431
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 276,
                      "end": 431
                    },
                    {
                      "type": "JSXText",
                      "value": "\n        ",
                      "raw": "\n        ",
                      "start": 431,
                      "end": 440
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "header",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 449
                  },
                  "start": 203,
                  "end": 449
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 449,
                  "end": 458
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "section",
                      "start": 459,
                      "end": 466
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "class",
                          "start": 467,
                          "end": 472
                        },
                        "value": {
                          "type": "Literal",
                          "value": "main",
                          "raw": "\"main\"",
                          "start": 473,
                          "end": 479
                        },
                        "start": 467,
                        "end": 479
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "style",
                          "start": 480,
                          "end": 485
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "display",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 495
                                },
                                "value": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "model",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 497,
                                        "end": 502
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "todos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 503,
                                        "end": 508
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 497,
                                      "end": 508
                                    },
                                    "operator": "&&",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "model",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 512,
                                          "end": 517
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "todos",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 518,
                                          "end": 523
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 512,
                                        "end": 523
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 524,
                                        "end": 530
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 512,
                                      "end": 530
                                    },
                                    "start": 497,
                                    "end": 530
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": "block",
                                    "raw": "\"block\"",
                                    "start": 534,
                                    "end": 541
                                  },
                                  "alternate": {
                                    "type": "Literal",
                                    "value": "none",
                                    "raw": "\"none\"",
                                    "start": 544,
                                    "end": 550
                                  },
                                  "start": 496,
                                  "end": 550
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 488,
                                "end": 550
                              }
                            ],
                            "start": 487,
                            "end": 551
                          },
                          "start": 486,
                          "end": 552
                        },
                        "start": 480,
                        "end": 552
                      }
                    ],
                    "selfClosing": false,
                    "start": 458,
                    "end": 553
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 553,
                      "end": 566
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "input",
                          "start": 567,
                          "end": 572
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 573,
                              "end": 578
                            },
                            "value": {
                              "type": "Literal",
                              "value": "toggle-all",
                              "raw": "\"toggle-all\"",
                              "start": 579,
                              "end": 591
                            },
                            "start": 573,
                            "end": 591
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "type",
                              "start": 592,
                              "end": 596
                            },
                            "value": {
                              "type": "Literal",
                              "value": "checkbox",
                              "raw": "\"checkbox\"",
                              "start": 597,
                              "end": 607
                            },
                            "start": 592,
                            "end": 607
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onChange",
                              "start": 608,
                              "end": 616
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ctrl",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 618,
                                      "end": 622
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "toggleAll",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 623,
                                      "end": 632
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 618,
                                    "end": 632
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 633,
                                    "end": 637
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 618,
                                  "end": 637
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ctrl",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 638,
                                    "end": 642
                                  }
                                ],
                                "optional": false,
                                "start": 618,
                                "end": 643
                              },
                              "start": 617,
                              "end": 644
                            },
                            "start": 608,
                            "end": 644
                          }
                        ],
                        "selfClosing": true,
                        "start": 566,
                        "end": 646
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 566,
                      "end": 646
                    },
                    {
                      "type": "JSXText",
                      "value": "\n            ",
                      "raw": "\n            ",
                      "start": 646,
                      "end": 659
                    },
                    {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ul",
                          "start": 660,
                          "end": 662
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "class",
                              "start": 663,
                              "end": 668
                            },
                            "value": {
                              "type": "Literal",
                              "value": "todo-list",
                              "raw": "\"todo-list\"",
                              "start": 669,
                              "end": 680
                            },
                            "start": 663,
                            "end": 680
                          }
                        ],
                        "selfClosing": false,
                        "start": 659,
                        "end": 681
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n                ",
                          "raw": "\n                ",
                          "start": 681,
                          "end": 698
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "model",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 699,
                                  "end": 704
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "filteredTodos",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 705,
                                  "end": 718
                                },
                                "optional": false,
                                "computed": false,
                                "start": 699,
                                "end": 718
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "map",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 719,
                                "end": 722
                              },
                              "optional": false,
                              "computed": false,
                              "start": 699,
                              "end": 722
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "todo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 724,
                                    "end": 728
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "JSXElement",
                                  "openingElement": {
                                    "type": "JSXOpeningElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "li",
                                      "start": 754,
                                      "end": 756
                                    },
                                    "typeArguments": null,
                                    "attributes": [
                                      {
                                        "type": "JSXAttribute",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "class",
                                          "start": 757,
                                          "end": 762
                                        },
                                        "value": {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "ObjectExpression",
                                            "properties": [
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 765,
                                                  "end": 769
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": true,
                                                  "raw": "true",
                                                  "start": 771,
                                                  "end": 775
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 765,
                                                "end": 775
                                              },
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "completed",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 777,
                                                  "end": 786
                                                },
                                                "value": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 788,
                                                    "end": 792
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "completed",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 793,
                                                    "end": 802
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 788,
                                                  "end": 802
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 777,
                                                "end": 802
                                              },
                                              {
                                                "type": "Property",
                                                "kind": "init",
                                                "key": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "editing",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 804,
                                                  "end": 811
                                                },
                                                "value": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "todo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 813,
                                                    "end": 817
                                                  },
                                                  "operator": "==",
                                                  "right": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "model",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 821,
                                                      "end": 826
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "editedTodo",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 827,
                                                      "end": 837
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 821,
                                                    "end": 837
                                                  },
                                                  "start": 813,
                                                  "end": 837
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "optional": false,
                                                "start": 804,
                                                "end": 837
                                              }
                                            ],
                                            "start": 764,
                                            "end": 838
                                          },
                                          "start": 763,
                                          "end": 839
                                        },
                                        "start": 757,
                                        "end": 839
                                      }
                                    ],
                                    "selfClosing": false,
                                    "start": 753,
                                    "end": 840
                                  },
                                  "children": [
                                    {
                                      "type": "JSXText",
                                      "value": "\n                        ",
                                      "raw": "\n                        ",
                                      "start": 840,
                                      "end": 865
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 866,
                                          "end": 869
                                        },
                                        "typeArguments": null,
                                        "attributes": [
                                          {
                                            "type": "JSXAttribute",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "class",
                                              "start": 870,
                                              "end": 875
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "value": "view",
                                              "raw": "\"view\"",
                                              "start": 876,
                                              "end": 882
                                            },
                                            "start": 870,
                                            "end": 882
                                          }
                                        ],
                                        "selfClosing": false,
                                        "start": 865,
                                        "end": 883
                                      },
                                      "children": [
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 883,
                                          "end": 912
                                        },
                                        {
                                          "type": "JSXExpressionContainer",
                                          "expression": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                              "type": "UnaryExpression",
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 915,
                                                  "end": 919
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "editable",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 920,
                                                  "end": 928
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 915,
                                                "end": 928
                                              },
                                              "prefix": true,
                                              "start": 914,
                                              "end": 928
                                            },
                                            "consequent": {
                                              "type": "JSXElement",
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "input",
                                                  "start": 965,
                                                  "end": 970
                                                },
                                                "typeArguments": null,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "class",
                                                      "start": 971,
                                                      "end": 976
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "toggle",
                                                      "raw": "\"toggle\"",
                                                      "start": 977,
                                                      "end": 985
                                                    },
                                                    "start": 971,
                                                    "end": 985
                                                  },
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "type",
                                                      "start": 986,
                                                      "end": 990
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "checkbox",
                                                      "raw": "\"checkbox\"",
                                                      "start": 991,
                                                      "end": 1001
                                                    },
                                                    "start": 986,
                                                    "end": 1001
                                                  }
                                                ],
                                                "selfClosing": false,
                                                "start": 964,
                                                "end": 1002
                                              },
                                              "children": [],
                                              "closingElement": {
                                                "type": "JSXClosingElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "input",
                                                  "start": 1004,
                                                  "end": 1009
                                                },
                                                "start": 1002,
                                                "end": 1010
                                              },
                                              "start": 964,
                                              "end": 1010
                                            },
                                            "alternate": {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 1045,
                                              "end": 1049
                                            },
                                            "start": 913,
                                            "end": 1049
                                          },
                                          "start": 912,
                                          "end": 1079
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1079,
                                          "end": 1108
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "label",
                                              "start": 1109,
                                              "end": 1114
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "onDoubleClick",
                                                  "start": 1115,
                                                  "end": 1128
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "expression": {
                                                    "type": "ArrowFunctionExpression",
                                                    "expression": false,
                                                    "async": false,
                                                    "typeParameters": null,
                                                    "params": [],
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
                                                                "name": "ctrl",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1135,
                                                                "end": 1139
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "editTodo",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1140,
                                                                "end": 1148
                                                              },
                                                              "optional": false,
                                                              "computed": false,
                                                              "start": 1135,
                                                              "end": 1148
                                                            },
                                                            "typeArguments": null,
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "todo",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 1149,
                                                                "end": 1153
                                                              }
                                                            ],
                                                            "optional": false,
                                                            "start": 1135,
                                                            "end": 1154
                                                          },
                                                          "directive": null,
                                                          "start": 1135,
                                                          "end": 1154
                                                        }
                                                      ],
                                                      "start": 1134,
                                                      "end": 1155
                                                    },
                                                    "id": null,
                                                    "generator": false,
                                                    "start": 1130,
                                                    "end": 1155
                                                  },
                                                  "start": 1129,
                                                  "end": 1156
                                                },
                                                "start": 1115,
                                                "end": 1156
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1108,
                                            "end": 1157
                                          },
                                          "children": [
                                            {
                                              "type": "JSXExpressionContainer",
                                              "expression": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "todo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1158,
                                                  "end": 1162
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "title",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1163,
                                                  "end": 1168
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1158,
                                                "end": 1168
                                              },
                                              "start": 1157,
                                              "end": 1169
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "label",
                                              "start": 1171,
                                              "end": 1176
                                            },
                                            "start": 1169,
                                            "end": 1177
                                          },
                                          "start": 1108,
                                          "end": 1177
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1177,
                                          "end": 1206
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "button",
                                              "start": 1207,
                                              "end": 1213
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "class",
                                                  "start": 1214,
                                                  "end": 1219
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": "destroy",
                                                  "raw": "\"destroy\"",
                                                  "start": 1220,
                                                  "end": 1229
                                                },
                                                "start": 1214,
                                                "end": 1229
                                              },
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "onClick",
                                                  "start": 1230,
                                                  "end": 1237
                                                },
                                                "value": {
                                                  "type": "JSXExpressionContainer",
                                                  "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "ctrl",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1239,
                                                          "end": 1243
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "removeTodo",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1244,
                                                          "end": 1254
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 1239,
                                                        "end": 1254
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "bind",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1255,
                                                        "end": 1259
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 1239,
                                                      "end": 1259
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "ctrl",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1260,
                                                        "end": 1264
                                                      },
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "todo",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1265,
                                                        "end": 1269
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 1239,
                                                    "end": 1270
                                                  },
                                                  "start": 1238,
                                                  "end": 1271
                                                },
                                                "start": 1230,
                                                "end": 1271
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1206,
                                            "end": 1272
                                          },
                                          "children": [],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "button",
                                              "start": 1274,
                                              "end": 1280
                                            },
                                            "start": 1272,
                                            "end": 1281
                                          },
                                          "start": 1206,
                                          "end": 1281
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                            ",
                                          "raw": "\n                            ",
                                          "start": 1281,
                                          "end": 1310
                                        },
                                        {
                                          "type": "JSXElement",
                                          "openingElement": {
                                            "type": "JSXOpeningElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "div",
                                              "start": 1311,
                                              "end": 1314
                                            },
                                            "typeArguments": null,
                                            "attributes": [
                                              {
                                                "type": "JSXAttribute",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "class",
                                                  "start": 1315,
                                                  "end": 1320
                                                },
                                                "value": {
                                                  "type": "Literal",
                                                  "value": "iconBorder",
                                                  "raw": "\"iconBorder\"",
                                                  "start": 1321,
                                                  "end": 1333
                                                },
                                                "start": 1315,
                                                "end": 1333
                                              }
                                            ],
                                            "selfClosing": false,
                                            "start": 1310,
                                            "end": 1334
                                          },
                                          "children": [
                                            {
                                              "type": "JSXText",
                                              "value": "\n                                ",
                                              "raw": "\n                                ",
                                              "start": 1334,
                                              "end": 1367
                                            },
                                            {
                                              "type": "JSXElement",
                                              "openingElement": {
                                                "type": "JSXOpeningElement",
                                                "name": {
                                                  "type": "JSXIdentifier",
                                                  "name": "div",
                                                  "start": 1368,
                                                  "end": 1371
                                                },
                                                "typeArguments": null,
                                                "attributes": [
                                                  {
                                                    "type": "JSXAttribute",
                                                    "name": {
                                                      "type": "JSXIdentifier",
                                                      "name": "class",
                                                      "start": 1372,
                                                      "end": 1377
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": "icon",
                                                      "raw": "\"icon\"",
                                                      "start": 1378,
                                                      "end": 1384
                                                    },
                                                    "start": 1372,
                                                    "end": 1384
                                                  }
                                                ],
                                                "selfClosing": true,
                                                "start": 1367,
                                                "end": 1386
                                              },
                                              "children": [],
                                              "closingElement": null,
                                              "start": 1367,
                                              "end": 1386
                                            },
                                            {
                                              "type": "JSXText",
                                              "value": "\n                            ",
                                              "raw": "\n                            ",
                                              "start": 1386,
                                              "end": 1415
                                            }
                                          ],
                                          "closingElement": {
                                            "type": "JSXClosingElement",
                                            "name": {
                                              "type": "JSXIdentifier",
                                              "name": "div",
                                              "start": 1417,
                                              "end": 1420
                                            },
                                            "start": 1415,
                                            "end": 1421
                                          },
                                          "start": 1310,
                                          "end": 1421
                                        },
                                        {
                                          "type": "JSXText",
                                          "value": "\n                        ",
                                          "raw": "\n                        ",
                                          "start": 1421,
                                          "end": 1446
                                        }
                                      ],
                                      "closingElement": {
                                        "type": "JSXClosingElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 1448,
                                          "end": 1451
                                        },
                                        "start": 1446,
                                        "end": 1452
                                      },
                                      "start": 865,
                                      "end": 1452
                                    },
                                    {
                                      "type": "JSXText",
                                      "value": "\n                    ",
                                      "raw": "\n                    ",
                                      "start": 1452,
                                      "end": 1473
                                    }
                                  ],
                                  "closingElement": {
                                    "type": "JSXClosingElement",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "li",
                                      "start": 1475,
                                      "end": 1477
                                    },
                                    "start": 1473,
                                    "end": 1478
                                  },
                                  "start": 753,
                                  "end": 1478
                                },
                                "id": null,
                                "generator": false,
                                "start": 723,
                                "end": 1478
                              }
                            ],
                            "optional": false,
                            "start": 699,
                            "end": 1496
                          },
                          "start": 698,
                          "end": 1497
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 1497,
                          "end": 1510
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ul",
                          "start": 1512,
                          "end": 1514
                        },
                        "start": 1510,
                        "end": 1515
                      },
                      "start": 659,
                      "end": 1515
                    },
                    {
                      "type": "JSXText",
                      "value": "\n        ",
                      "raw": "\n        ",
                      "start": 1515,
                      "end": 1524
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "section",
                      "start": 1526,
                      "end": 1533
                    },
                    "start": 1524,
                    "end": 1534
                  },
                  "start": 458,
                  "end": 1534
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 1534,
                  "end": 1539
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "section",
                  "start": 1541,
                  "end": 1548
                },
                "start": 1539,
                "end": 1549
              },
              "start": 169,
              "end": 1549
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 1549
          },
          "definite": false,
          "start": 139,
          "end": 1549
        }
      ],
      "declare": false,
      "start": 135,
      "end": 1549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1550
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "vdom",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "ctrl",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 46,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 58,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "ctrl",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "JSXIdentifier",
    "value": "section",
    "start": 170,
    "end": 177
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "JSXText",
    "value": "\"todoapp\"",
    "start": 184,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "JSXIdentifier",
    "value": "header",
    "start": 204,
    "end": 210
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXText",
    "value": "\"header\"",
    "start": 217,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 226,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "JSXText",
    "value": "todos &lt;x&gt;",
    "start": 243,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 259,
    "end": 260
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 263,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 277,
    "end": 282
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 283,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "JSXText",
    "value": "\"new-todo\"",
    "start": 289,
    "end": 299
  },
  {
    "type": "JSXIdentifier",
    "value": "autofocus",
    "start": 300,
    "end": 309
  },
  {
    "type": "JSXIdentifier",
    "value": "autocomplete",
    "start": 310,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "JSXText",
    "value": "\"off\"",
    "start": 323,
    "end": 328
  },
  {
    "type": "JSXIdentifier",
    "value": "placeholder",
    "start": 329,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "JSXText",
    "value": "\"What needs to be done?\"",
    "start": 341,
    "end": 365
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "JSXIdentifier",
    "value": "newTodo",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "JSXIdentifier",
    "value": "onKeyup",
    "start": 388,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXIdentifier",
    "value": "ctrl",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "JSXIdentifier",
    "value": "addTodo",
    "start": 402,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410
  },
  {
    "type": "JSXIdentifier",
    "value": "bind",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "ctrl",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "/",
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
    "type": "JSXText",
    "value": "\n        ",
    "start": 431,
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
    "value": "header",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 449,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "JSXIdentifier",
    "value": "section",
    "start": 459,
    "end": 466
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "JSXText",
    "value": "\"main\"",
    "start": 473,
    "end": 479
  },
  {
    "type": "JSXIdentifier",
    "value": "style",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "display",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "JSXIdentifier",
    "value": "todos",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 509,
    "end": 511
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 517,
    "end": 518
  },
  {
    "type": "JSXIdentifier",
    "value": "todos",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 523,
    "end": 524
  },
  {
    "type": "JSXIdentifier",
    "value": "length",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 532,
    "end": 533
  },
  {
    "type": "String",
    "value": "\"block\"",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 553,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 567,
    "end": 572
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "JSXText",
    "value": "\"toggle-all\"",
    "start": 579,
    "end": 591
  },
  {
    "type": "JSXIdentifier",
    "value": "type",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "JSXText",
    "value": "\"checkbox\"",
    "start": 597,
    "end": 607
  },
  {
    "type": "JSXIdentifier",
    "value": "onChange",
    "start": 608,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "JSXIdentifier",
    "value": "ctrl",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "JSXIdentifier",
    "value": "toggleAll",
    "start": 623,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "JSXIdentifier",
    "value": "bind",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "ctrl",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 646,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "JSXIdentifier",
    "value": "ul",
    "start": 660,
    "end": 662
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 663,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "JSXText",
    "value": "\"todo-list\"",
    "start": 669,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "JSXText",
    "value": "\n                ",
    "start": 681,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "JSXIdentifier",
    "value": "filteredTodos",
    "start": 705,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "JSXIdentifier",
    "value": "map",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "JSXIdentifier",
    "value": "li",
    "start": 754,
    "end": 756
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "completed",
    "start": 777,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793
  },
  {
    "type": "JSXIdentifier",
    "value": "completed",
    "start": 793,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "editing",
    "start": 804,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 818,
    "end": 820
  },
  {
    "type": "JSXIdentifier",
    "value": "model",
    "start": 821,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "JSXIdentifier",
    "value": "editedTodo",
    "start": 827,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 839,
    "end": 840
  },
  {
    "type": "JSXText",
    "value": "\n                        ",
    "start": 840,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 866,
    "end": 869
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "JSXText",
    "value": "\"view\"",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 882,
    "end": 883
  },
  {
    "type": "JSXText",
    "value": "\n                            ",
    "start": 883,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 914,
    "end": 915
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "JSXIdentifier",
    "value": "editable",
    "start": 920,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 964,
    "end": 965
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 965,
    "end": 970
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 971,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "JSXText",
    "value": "\"toggle\"",
    "start": 977,
    "end": 985
  },
  {
    "type": "JSXIdentifier",
    "value": "type",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "JSXText",
    "value": "\"checkbox\"",
    "start": 991,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "JSXIdentifier",
    "value": "input",
    "start": 1004,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1045,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "JSXText",
    "value": "\n                            ",
    "start": 1079,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "JSXIdentifier",
    "value": "onDoubleClick",
    "start": 1115,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1132,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "JSXIdentifier",
    "value": "ctrl",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "JSXIdentifier",
    "value": "editTodo",
    "start": 1140,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
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
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "JSXIdentifier",
    "value": "title",
    "start": 1163,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 1171,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "JSXText",
    "value": "\n                            ",
    "start": 1177,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 1207,
    "end": 1213
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "JSXText",
    "value": "\"destroy\"",
    "start": 1220,
    "end": 1229
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "JSXIdentifier",
    "value": "ctrl",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "JSXIdentifier",
    "value": "removeTodo",
    "start": 1244,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "JSXIdentifier",
    "value": "bind",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "ctrl",
    "start": 1260,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "JSXText",
    "value": "\n                            ",
    "start": 1281,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 1315,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "JSXText",
    "value": "\"iconBorder\"",
    "start": 1321,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "JSXText",
    "value": "\n                                ",
    "start": 1334,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "JSXText",
    "value": "\"icon\"",
    "start": 1378,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "JSXText",
    "value": "\n                            ",
    "start": 1386,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "JSXText",
    "value": "\n                        ",
    "start": 1421,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "JSXText",
    "value": "\n                    ",
    "start": 1452,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "JSXIdentifier",
    "value": "li",
    "start": 1475,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 1497,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "JSXIdentifier",
    "value": "ul",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 1515,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "JSXIdentifier",
    "value": "section",
    "start": 1526,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 1534,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "JSXIdentifier",
    "value": "section",
    "start": 1541,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1548,
    "end": 1549
  }
]
```
