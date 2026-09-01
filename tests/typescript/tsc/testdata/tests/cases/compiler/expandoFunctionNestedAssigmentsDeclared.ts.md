__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 16,
          "end": 20
        },
        "start": 14,
        "end": 20
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 21,
        "end": 25
      },
      "expression": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "bla",
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 73,
                            "end": 76
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            },
                            "start": 76,
                            "end": 84
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 73,
                          "end": 85
                        }
                      ],
                      "start": 63,
                      "end": 91
                    },
                    "start": 61,
                    "end": 91
                  },
                  "start": 58,
                  "end": 91
                },
                "init": null,
                "definite": false,
                "start": 58,
                "end": 91
              }
            ],
            "declare": false,
            "start": 54,
            "end": 92
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  "start": 101,
                  "end": 112
                },
                "init": null,
                "definite": false,
                "start": 101,
                "end": 112
              }
            ],
            "declare": false,
            "start": 97,
            "end": 113
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 127,
                      "end": 133
                    },
                    "start": 125,
                    "end": 133
                  },
                  "start": 122,
                  "end": 133
                },
                "init": null,
                "definite": false,
                "start": 122,
                "end": 133
              }
            ],
            "declare": false,
            "start": 118,
            "end": 134
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
                  "name": "fromIf",
                  "optional": false,
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
                  "start": 143,
                  "end": 157
                },
                "init": null,
                "definite": false,
                "start": 143,
                "end": 157
              }
            ],
            "declare": false,
            "start": 139,
            "end": 158
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
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    },
                    "start": 171,
                    "end": 179
                  },
                  "start": 167,
                  "end": 179
                },
                "init": null,
                "definite": false,
                "start": 167,
                "end": 179
              }
            ],
            "declare": false,
            "start": 163,
            "end": 180
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
                  "name": "fromWhileCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 207,
                    "end": 215
                  },
                  "start": 189,
                  "end": 215
                },
                "init": null,
                "definite": false,
                "start": 189,
                "end": 215
              }
            ],
            "declare": false,
            "start": 185,
            "end": 216
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
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 240,
                      "end": 246
                    },
                    "start": 238,
                    "end": 246
                  },
                  "start": 225,
                  "end": 246
                },
                "init": null,
                "definite": false,
                "start": 225,
                "end": 246
              }
            ],
            "declare": false,
            "start": 221,
            "end": 247
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
                  "name": "fromWhileBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
                  },
                  "start": 256,
                  "end": 283
                },
                "init": null,
                "definite": false,
                "start": 256,
                "end": 283
              }
            ],
            "declare": false,
            "start": 252,
            "end": 284
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
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
                  },
                  "start": 293,
                  "end": 311
                },
                "init": null,
                "definite": false,
                "start": 293,
                "end": 311
              }
            ],
            "declare": false,
            "start": 289,
            "end": 312
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
                  "name": "fromDoBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    },
                    "start": 337,
                    "end": 345
                  },
                  "start": 321,
                  "end": 345
                },
                "init": null,
                "definite": false,
                "start": 321,
                "end": 345
              }
            ],
            "declare": false,
            "start": 317,
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
                  "name": "fromDoCondition",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "start": 370,
                    "end": 378
                  },
                  "start": 355,
                  "end": 378
                },
                "init": null,
                "definite": false,
                "start": 355,
                "end": 378
              }
            ],
            "declare": false,
            "start": 351,
            "end": 379
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
                  "name": "forInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
                    },
                    "start": 395,
                    "end": 403
                  },
                  "start": 388,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 388,
                "end": 403
              }
            ],
            "declare": false,
            "start": 384,
            "end": 404
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
                  "name": "forCond",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 422,
                      "end": 428
                    },
                    "start": 420,
                    "end": 428
                  },
                  "start": 413,
                  "end": 428
                },
                "init": null,
                "definite": false,
                "start": 413,
                "end": 428
              }
            ],
            "declare": false,
            "start": 409,
            "end": 429
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
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 451,
                      "end": 457
                    },
                    "start": 449,
                    "end": 457
                  },
                  "start": 438,
                  "end": 457
                },
                "init": null,
                "definite": false,
                "start": 438,
                "end": 457
              }
            ],
            "declare": false,
            "start": 434,
            "end": 458
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
                  "name": "fromForBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 486,
                      "end": 492
                    },
                    "start": 484,
                    "end": 492
                  },
                  "start": 467,
                  "end": 492
                },
                "init": null,
                "definite": false,
                "start": 467,
                "end": 492
              }
            ],
            "declare": false,
            "start": 463,
            "end": 493
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
                  "name": "forIncr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 511,
                      "end": 517
                    },
                    "start": 509,
                    "end": 517
                  },
                  "start": 502,
                  "end": 517
                },
                "init": null,
                "definite": false,
                "start": 502,
                "end": 517
              }
            ],
            "declare": false,
            "start": 498,
            "end": 518
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
                  "name": "forOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 534,
                        "end": 537
                      },
                      "start": 534,
                      "end": 539
                    },
                    "start": 532,
                    "end": 539
                  },
                  "start": 527,
                  "end": 539
                },
                "init": null,
                "definite": false,
                "start": 527,
                "end": 539
              }
            ],
            "declare": false,
            "start": 523,
            "end": 540
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
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    },
                    "start": 562,
                    "end": 570
                  },
                  "start": 549,
                  "end": 570
                },
                "init": null,
                "definite": false,
                "start": 549,
                "end": 570
              }
            ],
            "declare": false,
            "start": 545,
            "end": 571
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
                  "name": "fromForOfBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    },
                    "start": 599,
                    "end": 607
                  },
                  "start": 580,
                  "end": 607
                },
                "init": null,
                "definite": false,
                "start": 580,
                "end": 607
              }
            ],
            "declare": false,
            "start": 576,
            "end": 608
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
                  "name": "forIn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 624,
                        "end": 627
                      },
                      "start": 624,
                      "end": 629
                    },
                    "start": 622,
                    "end": 629
                  },
                  "start": 617,
                  "end": 629
                },
                "init": null,
                "definite": false,
                "start": 617,
                "end": 629
              }
            ],
            "declare": false,
            "start": 613,
            "end": 630
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
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
                    },
                    "start": 652,
                    "end": 660
                  },
                  "start": 639,
                  "end": 660
                },
                "init": null,
                "definite": false,
                "start": 639,
                "end": 660
              }
            ],
            "declare": false,
            "start": 635,
            "end": 661
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
                  "name": "fromForInBodyNested",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
                    },
                    "start": 689,
                    "end": 697
                  },
                  "start": 670,
                  "end": 697
                },
                "init": null,
                "definite": false,
                "start": 670,
                "end": 697
              }
            ],
            "declare": false,
            "start": 666,
            "end": 698
          }
        ],
        "start": 48,
        "end": 700
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 26,
      "end": 700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 706
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bla",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 710
              },
              "optional": false,
              "computed": false,
              "start": 703,
              "end": 710
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 718
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 720,
                    "end": 721
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 715,
                  "end": 721
                }
              ],
              "start": 713,
              "end": 722
            },
            "start": 703,
            "end": 722
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 702,
          "end": 727
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 734
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 738
              },
              "optional": false,
              "computed": false,
              "start": 731,
              "end": 738
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 741,
              "end": 742
            },
            "start": 731,
            "end": 742
          },
          "operator": "+",
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 750
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 754
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 754
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 758,
              "end": 759
            },
            "start": 747,
            "end": 759
          },
          "start": 730,
          "end": 760
        },
        "start": 702,
        "end": 760
      },
      "directive": null,
      "start": 702,
      "end": 761
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 769
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromIf",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 776
          },
          "optional": false,
          "computed": false,
          "start": 766,
          "end": 776
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 779,
          "end": 780
        },
        "start": 766,
        "end": 780
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 791
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inIf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 796
                },
                "optional": false,
                "computed": false,
                "start": 788,
                "end": 796
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 799,
                "end": 800
              },
              "start": 788,
              "end": 800
            },
            "directive": null,
            "start": 788,
            "end": 801
          }
        ],
        "start": 782,
        "end": 803
      },
      "alternate": null,
      "start": 763,
      "end": 803
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 814
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 833
          },
          "optional": false,
          "computed": false,
          "start": 811,
          "end": 833
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 836,
          "end": 837
        },
        "start": 811,
        "end": 837
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 848
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 845,
                "end": 862
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 865,
                "end": 866
              },
              "start": 845,
              "end": 866
            },
            "directive": null,
            "start": 845,
            "end": 867
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 885
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 905
                    },
                    "optional": false,
                    "computed": false,
                    "start": 882,
                    "end": 905
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 908,
                    "end": 909
                  },
                  "start": 882,
                  "end": 909
                },
                "directive": null,
                "start": 882,
                "end": 910
              }
            ],
            "start": 872,
            "end": 916
          }
        ],
        "start": 839,
        "end": 918
      },
      "start": 805,
      "end": 918
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 932
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 933,
                  "end": 943
                },
                "optional": false,
                "computed": false,
                "start": 929,
                "end": 943
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 946,
                "end": 947
              },
              "start": 929,
              "end": 947
            },
            "directive": null,
            "start": 929,
            "end": 948
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 966
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 983
                    },
                    "optional": false,
                    "computed": false,
                    "start": 963,
                    "end": 983
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 986,
                    "end": 987
                  },
                  "start": 963,
                  "end": 987
                },
                "directive": null,
                "start": 963,
                "end": 988
              }
            ],
            "start": 953,
            "end": 994
          }
        ],
        "start": 923,
        "end": 996
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1006
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1022
          },
          "optional": false,
          "computed": false,
          "start": 1003,
          "end": 1022
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1025,
          "end": 1026
        },
        "start": 1003,
        "end": 1026
      },
      "start": 920,
      "end": 1028
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1034,
            "end": 1037
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 1038,
            "end": 1045
          },
          "optional": false,
          "computed": false,
          "start": 1034,
          "end": 1045
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1048,
          "end": 1049
        },
        "start": 1034,
        "end": 1049
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1055
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "forCond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1063
            },
            "optional": false,
            "computed": false,
            "start": 1052,
            "end": 1063
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1066,
            "end": 1067
          },
          "start": 1052,
          "end": 1067
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1071,
          "end": 1072
        },
        "start": 1051,
        "end": 1072
      },
      "update": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1074,
            "end": 1077
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1078,
            "end": 1085
          },
          "optional": false,
          "computed": false,
          "start": 1074,
          "end": 1085
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1088,
          "end": 1089
        },
        "start": 1074,
        "end": 1089
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1099
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1111
                },
                "optional": false,
                "computed": false,
                "start": 1096,
                "end": 1111
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1114,
                "end": 1115
              },
              "start": 1096,
              "end": 1115
            },
            "directive": null,
            "start": 1096,
            "end": 1116
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1131,
                      "end": 1134
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1131,
                    "end": 1152
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1155,
                    "end": 1156
                  },
                  "start": 1131,
                  "end": 1156
                },
                "directive": null,
                "start": 1131,
                "end": 1157
              }
            ],
            "start": 1121,
            "end": 1163
          }
        ],
        "start": 1090,
        "end": 1165
      },
      "start": 1030,
      "end": 1165
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "start": 1175,
              "end": 1176
            },
            "init": null,
            "definite": false,
            "start": 1175,
            "end": 1176
          }
        ],
        "declare": false,
        "start": 1171,
        "end": 1176
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1190
          },
          "optional": false,
          "computed": false,
          "start": 1181,
          "end": 1190
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 1193,
          "end": 1195
        },
        "start": 1181,
        "end": 1195
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1208,
                  "end": 1221
                },
                "optional": false,
                "computed": false,
                "start": 1204,
                "end": 1221
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1224,
                "end": 1225
              },
              "start": 1204,
              "end": 1225
            },
            "directive": null,
            "start": 1204,
            "end": 1226
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1244
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1264
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1241,
                    "end": 1264
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1267,
                    "end": 1268
                  },
                  "start": 1241,
                  "end": 1268
                },
                "directive": null,
                "start": 1241,
                "end": 1269
              }
            ],
            "start": 1231,
            "end": 1275
          }
        ],
        "start": 1198,
        "end": 1277
      },
      "start": 1167,
      "end": 1277
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 1288,
              "end": 1289
            },
            "init": null,
            "definite": false,
            "start": 1288,
            "end": 1289
          }
        ],
        "declare": false,
        "start": 1284,
        "end": 1289
      },
      "right": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1294,
            "end": 1297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forIn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1298,
            "end": 1303
          },
          "optional": false,
          "computed": false,
          "start": 1294,
          "end": 1303
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 1306,
          "end": 1308
        },
        "start": 1294,
        "end": 1308
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1334
                },
                "optional": false,
                "computed": false,
                "start": 1317,
                "end": 1334
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1337,
                "end": 1338
              },
              "start": 1317,
              "end": 1338
            },
            "directive": null,
            "start": 1317,
            "end": 1339
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1354,
                      "end": 1357
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1358,
                      "end": 1377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1354,
                    "end": 1377
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1380,
                    "end": 1381
                  },
                  "start": 1354,
                  "end": 1381
                },
                "directive": null,
                "start": 1354,
                "end": 1382
              }
            ],
            "start": 1344,
            "end": 1388
          }
        ],
        "start": 1311,
        "end": 1390
      },
      "start": 1280,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "bla",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
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
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "fromIf",
    "start": 143,
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
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 163,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "inIf",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "fromWhileCondition",
    "start": 189,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "fromWhileBody",
    "start": 225,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "fromWhileBodyNested",
    "start": 256,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "fromDoBody",
    "start": 293,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "fromDoBodyNested",
    "start": 321,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
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
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "fromDoCondition",
    "start": 355,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "forInit",
    "start": 388,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "forCond",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "fromForBody",
    "start": 438,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "fromForBodyNested",
    "start": 467,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "forIncr",
    "start": 502,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "forOf",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "fromForOfBody",
    "start": 549,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "fromForOfBodyNested",
    "start": 580,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "forIn",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "fromForInBody",
    "start": 639,
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
    "value": "number",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "fromForInBodyNested",
    "start": 670,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 691,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 703,
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
    "value": "bla",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "fromIf",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "inIf",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "fromWhileCondition",
    "start": 815,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "fromWhileBody",
    "start": 849,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "fromWhileBodyNested",
    "start": 886,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 929,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "fromDoBody",
    "start": 933,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 963,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "fromDoBodyNested",
    "start": 967,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "fromDoCondition",
    "start": 1007,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1030,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "forInit",
    "start": 1038,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1052,
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
    "value": "forCond",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "forIncr",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "Foo",
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
    "value": "fromForBody",
    "start": 1100,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "fromForBodyNested",
    "start": 1135,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "forOf",
    "start": 1185,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "fromForOfBody",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "fromForOfBodyNested",
    "start": 1245,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "forIn",
    "start": 1298,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1317,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "fromForInBody",
    "start": 1321,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "fromForInBodyNested",
    "start": 1358,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  }
]
```
