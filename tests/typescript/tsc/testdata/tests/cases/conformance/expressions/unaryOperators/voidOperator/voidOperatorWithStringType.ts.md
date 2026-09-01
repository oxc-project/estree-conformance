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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 37,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 51
        }
      ],
      "declare": false,
      "start": 33,
      "end": 52
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                },
                "start": 66,
                "end": 74
              },
              "start": 64,
              "end": 74
            },
            "start": 57,
            "end": 74
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 78,
                "end": 80
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 82,
                "end": 87
              }
            ],
            "start": 77,
            "end": 88
          },
          "definite": false,
          "start": 57,
          "end": 88
        }
      ],
      "declare": false,
      "start": 53,
      "end": 89
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 103
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 107,
          "end": 113
        },
        "start": 105,
        "end": 113
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 123,
              "end": 128
            },
            "start": 116,
            "end": 129
          }
        ],
        "start": 114,
        "end": 131
      },
      "expression": false,
      "start": 91,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 147,
            "end": 164
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 191,
                      "end": 193
                    },
                    "start": 184,
                    "end": 194
                  }
                ],
                "start": 182,
                "end": 196
              },
              "expression": false,
              "start": 179,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 196
          }
        ],
        "start": 141,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 231,
                        "end": 237
                      },
                      "start": 229,
                      "end": 237
                    },
                    "start": 228,
                    "end": 237
                  },
                  "init": null,
                  "definite": false,
                  "start": 228,
                  "end": 237
                }
              ],
              "declare": false,
              "start": 224,
              "end": 238
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 238
          }
        ],
        "start": 211,
        "end": 240
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 199,
      "end": 240
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 250
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [],
            "start": 253,
            "end": 260
          },
          "definite": false,
          "start": 246,
          "end": 260
        }
      ],
      "declare": false,
      "start": 242,
      "end": 261
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
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 298
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
            },
            "prefix": true,
            "start": 301,
            "end": 312
          },
          "definite": false,
          "start": 286,
          "end": 312
        }
      ],
      "declare": false,
      "start": 282,
      "end": 313
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
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 330
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 345
            },
            "prefix": true,
            "start": 333,
            "end": 345
          },
          "definite": false,
          "start": 318,
          "end": 345
        }
      ],
      "declare": false,
      "start": 314,
      "end": 346
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
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 387
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 395,
              "end": 397
            },
            "prefix": true,
            "start": 390,
            "end": 397
          },
          "definite": false,
          "start": 375,
          "end": 397
        }
      ],
      "declare": false,
      "start": 371,
      "end": 398
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
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 415
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                    "start": 425,
                    "end": 426
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 428,
                    "end": 430
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 425,
                  "end": 430
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 435,
                    "end": 437
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 432,
                  "end": 437
                }
              ],
              "start": 423,
              "end": 439
            },
            "prefix": true,
            "start": 418,
            "end": 439
          },
          "definite": false,
          "start": 403,
          "end": 439
        }
      ],
      "declare": false,
      "start": 399,
      "end": 440
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
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 457
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                    "start": 467,
                    "end": 468
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 470,
                    "end": 472
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 467,
                  "end": 472
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 481,
                            "end": 487
                          },
                          "start": 479,
                          "end": 487
                        },
                        "start": 478,
                        "end": 487
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 502
                          },
                          "start": 494,
                          "end": 503
                        }
                      ],
                      "start": 492,
                      "end": 505
                    },
                    "id": null,
                    "generator": false,
                    "start": 477,
                    "end": 505
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 474,
                  "end": 505
                }
              ],
              "start": 465,
              "end": 507
            },
            "prefix": true,
            "start": 460,
            "end": 507
          },
          "definite": false,
          "start": 445,
          "end": 507
        }
      ],
      "declare": false,
      "start": 441,
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
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 553
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 565
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 567
              },
              "optional": false,
              "computed": false,
              "start": 561,
              "end": 567
            },
            "prefix": true,
            "start": 556,
            "end": 567
          },
          "definite": false,
          "start": 541,
          "end": 567
        }
      ],
      "declare": false,
      "start": 537,
      "end": 568
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
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 585
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 596
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 596
            },
            "prefix": true,
            "start": 588,
            "end": 596
          },
          "definite": false,
          "start": 573,
          "end": 596
        }
      ],
      "declare": false,
      "start": 569,
      "end": 597
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
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 614
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 629
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 630,
                "end": 631
              },
              "optional": false,
              "computed": true,
              "start": 622,
              "end": 632
            },
            "prefix": true,
            "start": 617,
            "end": 632
          },
          "definite": false,
          "start": 602,
          "end": 632
        }
      ],
      "declare": false,
      "start": 598,
      "end": 633
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
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 650
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 661
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 658,
              "end": 663
            },
            "prefix": true,
            "start": 653,
            "end": 663
          },
          "definite": false,
          "start": 638,
          "end": 663
        }
      ],
      "declare": false,
      "start": 634,
      "end": 664
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
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 682
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 691
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "optional": false,
                "computed": false,
                "start": 690,
                "end": 695
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 690,
              "end": 697
            },
            "prefix": true,
            "start": 685,
            "end": 697
          },
          "definite": false,
          "start": 669,
          "end": 697
        }
      ],
      "declare": false,
      "start": 665,
      "end": 698
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
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 716
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 731
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 740
              },
              "start": 725,
              "end": 740
            },
            "prefix": true,
            "start": 719,
            "end": 741
          },
          "definite": false,
          "start": 703,
          "end": 741
        }
      ],
      "declare": false,
      "start": 699,
      "end": 742
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
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 760
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 774
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 781
                },
                "optional": false,
                "computed": false,
                "start": 768,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 782,
                  "end": 783
                }
              ],
              "optional": false,
              "start": 768,
              "end": 784
            },
            "prefix": true,
            "start": 763,
            "end": 784
          },
          "definite": false,
          "start": 747,
          "end": 784
        }
      ],
      "declare": false,
      "start": 743,
      "end": 785
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
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 832
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 851
              },
              "prefix": true,
              "start": 840,
              "end": 851
            },
            "prefix": true,
            "start": 835,
            "end": 851
          },
          "definite": false,
          "start": 819,
          "end": 851
        }
      ],
      "declare": false,
      "start": 815,
      "end": 852
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
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 870
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 895
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 904
                  },
                  "start": 889,
                  "end": 904
                },
                "prefix": true,
                "start": 883,
                "end": 905
              },
              "prefix": true,
              "start": 878,
              "end": 905
            },
            "prefix": true,
            "start": 873,
            "end": 905
          },
          "definite": false,
          "start": 857,
          "end": 905
        }
      ],
      "declare": false,
      "start": 853,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 942,
          "end": 944
        },
        "prefix": true,
        "start": 937,
        "end": 944
      },
      "directive": null,
      "start": 937,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 957
        },
        "prefix": true,
        "start": 946,
        "end": 957
      },
      "directive": null,
      "start": 946,
      "end": 958
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 971
        },
        "prefix": true,
        "start": 959,
        "end": 971
      },
      "directive": null,
      "start": 959,
      "end": 972
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 981
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 978,
          "end": 983
        },
        "prefix": true,
        "start": 973,
        "end": 983
      },
      "directive": null,
      "start": 973,
      "end": 984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 996
              },
              "optional": false,
              "computed": false,
              "start": 990,
              "end": 996
            },
            "prefix": true,
            "start": 985,
            "end": 996
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 998
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1000
            },
            "optional": false,
            "computed": false,
            "start": 997,
            "end": 1000
          }
        ],
        "start": 985,
        "end": 1000
      },
      "directive": null,
      "start": 985,
      "end": 1001
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1001
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "public",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 169,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 184,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 199,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 242,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
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
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny1",
    "start": 286,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 301,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny2",
    "start": 318,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 333,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny3",
    "start": 375,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 390,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny4",
    "start": 403,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 428,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny5",
    "start": 445,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 494,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
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
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny6",
    "start": 541,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 556,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny7",
    "start": 573,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 588,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny8",
    "start": 602,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 622,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny9",
    "start": 638,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 653,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 658,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny10",
    "start": 669,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 685,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny11",
    "start": 703,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny12",
    "start": 747,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 763,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 768,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny13",
    "start": 819,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 835,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 840,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 853,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny14",
    "start": 857,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 873,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 878,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 937,
    "end": 941
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 942,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 946,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 951,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 959,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "STRING1",
    "start": 964,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 973,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 978,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 985,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 990,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  }
]
```
