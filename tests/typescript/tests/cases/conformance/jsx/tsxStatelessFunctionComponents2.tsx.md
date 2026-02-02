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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
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
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 100
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 103,
                      "end": 109
                    },
                    "start": 101,
                    "end": 109
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 96,
                  "end": 109
                }
              ],
              "start": 95,
              "end": 110
            },
            "start": 93,
            "end": 110
          },
          "start": 92,
          "end": 110
        }
      ],
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
                  "start": 123,
                  "end": 126
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 122,
                "end": 127
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello, ",
                  "raw": "Hello, ",
                  "start": 127,
                  "end": 134
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "start": 134,
                  "end": 137
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 139,
                  "end": 142
                },
                "start": 137,
                "end": 143
              },
              "start": 122,
              "end": 143
            },
            "start": 115,
            "end": 144
          }
        ],
        "start": 112,
        "end": 146
      },
      "expression": false,
      "start": 77,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 164
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
          "start": 173,
          "end": 178
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 188
        },
        "optional": false,
        "computed": false,
        "start": 173,
        "end": 188
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
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  },
                  "start": 196,
                  "end": 204
                },
                "accessibility": null,
                "static": false,
                "start": 191,
                "end": 204
              }
            ],
            "start": 189,
            "end": 206
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 208,
            "end": 210
          }
        ],
        "start": 188,
        "end": 211
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
              "start": 215,
              "end": 221
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
                          "start": 236,
                          "end": 239
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 235,
                        "end": 240
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 242,
                          "end": 245
                        },
                        "start": 240,
                        "end": 246
                      },
                      "start": 235,
                      "end": 246
                    },
                    "start": 228,
                    "end": 247
                  }
                ],
                "start": 224,
                "end": 250
              },
              "expression": false,
              "start": 221,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 215,
            "end": 250
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 252,
            "end": 269
          }
        ],
        "start": 212,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 148,
      "end": 271
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
            "start": 283,
            "end": 284
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 288,
                "end": 293
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 287,
              "end": 296
            },
            "children": [],
            "closingElement": null,
            "start": 287,
            "end": 296
          },
          "definite": false,
          "start": 283,
          "end": 296
        }
      ],
      "declare": false,
      "start": 279,
      "end": 297
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
            "start": 340,
            "end": 341
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 345,
                "end": 350
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 351,
                    "end": 354
                  },
                  "value": {
                    "type": "Literal",
                    "value": "k",
                    "raw": "\"k\"",
                    "start": 355,
                    "end": 358
                  },
                  "start": 351,
                  "end": 358
                }
              ],
              "selfClosing": true,
              "start": 344,
              "end": 361
            },
            "children": [],
            "closingElement": null,
            "start": 344,
            "end": 361
          },
          "definite": false,
          "start": 340,
          "end": 361
        }
      ],
      "declare": false,
      "start": 336,
      "end": 362
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
            "start": 415,
            "end": 416
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 420,
                "end": 425
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 426,
                    "end": 429
                  },
                  "value": {
                    "type": "Literal",
                    "value": "myRef",
                    "raw": "\"myRef\"",
                    "start": 430,
                    "end": 437
                  },
                  "start": 426,
                  "end": 437
                }
              ],
              "selfClosing": true,
              "start": 419,
              "end": 440
            },
            "children": [],
            "closingElement": null,
            "start": 419,
            "end": 440
          },
          "definite": false,
          "start": 415,
          "end": 440
        }
      ],
      "declare": false,
      "start": 411,
      "end": 441
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 482
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 486,
                "end": 496
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 497,
                    "end": 500
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 502,
                          "end": 503
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 507,
                              "end": 508
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 509,
                              "end": 517
                            },
                            "optional": false,
                            "computed": false,
                            "start": 507,
                            "end": 517
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "substr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 524
                          },
                          "optional": false,
                          "computed": false,
                          "start": 507,
                          "end": 524
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 525,
                            "end": 527
                          }
                        ],
                        "optional": false,
                        "start": 507,
                        "end": 528
                      },
                      "id": null,
                      "generator": false,
                      "start": 502,
                      "end": 528
                    },
                    "start": 501,
                    "end": 529
                  },
                  "start": 497,
                  "end": 529
                }
              ],
              "selfClosing": true,
              "start": 485,
              "end": 532
            },
            "children": [],
            "closingElement": null,
            "start": 485,
            "end": 532
          },
          "definite": false,
          "start": 481,
          "end": 532
        }
      ],
      "declare": false,
      "start": 477,
      "end": 533
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 572
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 576,
                "end": 586
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 587,
                    "end": 590
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 592,
                          "end": 593
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 597,
                              "end": 598
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 607
                            },
                            "optional": false,
                            "computed": false,
                            "start": 597,
                            "end": 607
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "subtr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 613
                          },
                          "optional": false,
                          "computed": false,
                          "start": 597,
                          "end": 613
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 614,
                            "end": 616
                          }
                        ],
                        "optional": false,
                        "start": 597,
                        "end": 617
                      },
                      "id": null,
                      "generator": false,
                      "start": 592,
                      "end": 617
                    },
                    "start": 591,
                    "end": 618
                  },
                  "start": 587,
                  "end": 618
                }
              ],
              "selfClosing": true,
              "start": 575,
              "end": 621
            },
            "children": [],
            "closingElement": null,
            "start": 575,
            "end": 621
          },
          "definite": false,
          "start": 571,
          "end": 621
        }
      ],
      "declare": false,
      "start": 567,
      "end": 622
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 674
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 678,
                "end": 688
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 689,
                    "end": 692
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 694,
                          "end": 695
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 699,
                          "end": 700
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notARealProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 701,
                          "end": 717
                        },
                        "optional": false,
                        "computed": false,
                        "start": 699,
                        "end": 717
                      },
                      "id": null,
                      "generator": false,
                      "start": 694,
                      "end": 717
                    },
                    "start": 693,
                    "end": 718
                  },
                  "start": 689,
                  "end": 718
                }
              ],
              "selfClosing": true,
              "start": 677,
              "end": 721
            },
            "children": [],
            "closingElement": null,
            "start": 677,
            "end": 721
          },
          "definite": false,
          "start": 673,
          "end": 721
        }
      ],
      "declare": false,
      "start": 669,
      "end": 722
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 757
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 761,
                "end": 771
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 772,
                    "end": 775
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 777,
                      "end": 780
                    },
                    "start": 776,
                    "end": 781
                  },
                  "start": 772,
                  "end": 781
                }
              ],
              "selfClosing": true,
              "start": 760,
              "end": 784
            },
            "children": [],
            "closingElement": null,
            "start": 760,
            "end": 784
          },
          "definite": false,
          "start": 756,
          "end": 784
        }
      ],
      "declare": false,
      "start": 752,
      "end": 785
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 852
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 856,
                "end": 859
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 860,
                    "end": 863
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 865,
                          "end": 866
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 870,
                          "end": 871
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "innerText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 881
                        },
                        "optional": false,
                        "computed": false,
                        "start": 870,
                        "end": 881
                      },
                      "id": null,
                      "generator": false,
                      "start": 865,
                      "end": 881
                    },
                    "start": 864,
                    "end": 882
                  },
                  "start": 860,
                  "end": 882
                }
              ],
              "selfClosing": true,
              "start": 855,
              "end": 885
            },
            "children": [],
            "closingElement": null,
            "start": 855,
            "end": 885
          },
          "definite": false,
          "start": 851,
          "end": 885
        }
      ],
      "declare": false,
      "start": 847,
      "end": 886
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 970
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 974,
                "end": 977
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 978,
                    "end": 981
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 983,
                          "end": 984
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 988,
                          "end": 989
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "propertyNotOnHtmlDivElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 990,
                          "end": 1017
                        },
                        "optional": false,
                        "computed": false,
                        "start": 988,
                        "end": 1017
                      },
                      "id": null,
                      "generator": false,
                      "start": 983,
                      "end": 1017
                    },
                    "start": 982,
                    "end": 1018
                  },
                  "start": 978,
                  "end": 1018
                }
              ],
              "selfClosing": true,
              "start": 973,
              "end": 1021
            },
            "children": [],
            "closingElement": null,
            "start": 973,
            "end": 1021
          },
          "definite": false,
          "start": 969,
          "end": 1021
        }
      ],
      "declare": false,
      "start": 965,
      "end": 1022
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 1023
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
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Greet",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
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
    "value": "name",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "JSXText",
    "value": "Hello, ",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 138,
    "end": 139
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "BigGreeter",
    "start": 154,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 241,
    "end": 242
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 252,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "JSXIdentifier",
    "value": "Greet",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "JSXIdentifier",
    "value": "Greet",
    "start": 345,
    "end": 350
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "JSXText",
    "value": "\"k\"",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "JSXIdentifier",
    "value": "Greet",
    "start": 420,
    "end": 425
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "JSXText",
    "value": "\"myRef\"",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "JSXIdentifier",
    "value": "BigGreeter",
    "start": 486,
    "end": 496
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 504,
    "end": 506
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "JSXIdentifier",
    "value": "greeting",
    "start": 509,
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
    "value": "substr",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "JSXIdentifier",
    "value": "BigGreeter",
    "start": 576,
    "end": 586
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 594,
    "end": 596
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 598,
    "end": 599
  },
  {
    "type": "JSXIdentifier",
    "value": "greeting",
    "start": 599,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "JSXIdentifier",
    "value": "subtr",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "JSXIdentifier",
    "value": "BigGreeter",
    "start": 678,
    "end": 688
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 696,
    "end": 698
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 700,
    "end": 701
  },
  {
    "type": "JSXIdentifier",
    "value": "notARealProperty",
    "start": 701,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "JSXIdentifier",
    "value": "BigGreeter",
    "start": 761,
    "end": 771
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 856,
    "end": 859
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 867,
    "end": 869
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 871,
    "end": 872
  },
  {
    "type": "JSXIdentifier",
    "value": "innerText",
    "start": 872,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 965,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 973,
    "end": 974
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 974,
    "end": 977
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 978,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 985,
    "end": 987
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990
  },
  {
    "type": "JSXIdentifier",
    "value": "propertyNotOnHtmlDivElement",
    "start": 990,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  }
]
```
