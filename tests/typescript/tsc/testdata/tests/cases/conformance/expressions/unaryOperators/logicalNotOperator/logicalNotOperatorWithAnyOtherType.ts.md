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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
              },
              "start": 34,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 39
        }
      ],
      "declare": false,
      "start": 27,
      "end": 40
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 49
        }
      ],
      "declare": false,
      "start": 41,
      "end": 50
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 61,
                  "end": 64
                },
                "start": 61,
                "end": 66
              },
              "start": 59,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 70,
                "end": 72
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              }
            ],
            "start": 69,
            "end": 77
          },
          "definite": false,
          "start": 55,
          "end": 77
        }
      ],
      "declare": false,
      "start": 51,
      "end": 78
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 102,
                    "end": 104
                  },
                  "start": 99,
                  "end": 104
                },
                "start": 96,
                "end": 104
              },
              "start": 94,
              "end": 104
            },
            "start": 91,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 104
        }
      ],
      "declare": true,
      "start": 79,
      "end": 104
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
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
                  "start": 118,
                  "end": 119
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 121,
                  "end": 123
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 123
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
                  "start": 125,
                  "end": 126
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 134,
                    "end": 137
                  },
                  "id": null,
                  "generator": false,
                  "start": 128,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 125,
                "end": 137
              }
            ],
            "start": 116,
            "end": 138
          },
          "definite": false,
          "start": 109,
          "end": 138
        }
      ],
      "declare": false,
      "start": 105,
      "end": 139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 156,
          "end": 159
        },
        "start": 154,
        "end": 159
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 171
                },
                "init": null,
                "definite": false,
                "start": 170,
                "end": 171
              }
            ],
            "declare": false,
            "start": 166,
            "end": 172
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "start": 177,
            "end": 186
          }
        ],
        "start": 160,
        "end": 188
      },
      "expression": false,
      "start": 140,
      "end": 188
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
        "start": 195,
        "end": 196
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
              "start": 210,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 213,
                "end": 216
              },
              "start": 211,
              "end": 216
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
            "start": 203,
            "end": 217
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
              "start": 229,
              "end": 232
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 250
                        },
                        "init": null,
                        "definite": false,
                        "start": 249,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 245,
                    "end": 251
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "start": 260,
                    "end": 269
                  }
                ],
                "start": 235,
                "end": 275
              },
              "expression": false,
              "start": 232,
              "end": 275
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 275
          }
        ],
        "start": 197,
        "end": 277
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 277
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
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
                        "type": "TSAnyKeyword",
                        "start": 310,
                        "end": 313
                      },
                      "start": 308,
                      "end": 313
                    },
                    "start": 307,
                    "end": 313
                  },
                  "init": null,
                  "definite": false,
                  "start": 307,
                  "end": 313
                }
              ],
              "declare": false,
              "start": 303,
              "end": 314
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 296,
            "end": 314
          }
        ],
        "start": 290,
        "end": 316
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 278,
      "end": 316
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
            "start": 321,
            "end": 325
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "typeArguments": null,
            "arguments": [],
            "start": 328,
            "end": 335
          },
          "definite": false,
          "start": 321,
          "end": 335
        }
      ],
      "declare": false,
      "start": 317,
      "end": 336
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 374
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 382
            },
            "prefix": true,
            "start": 377,
            "end": 382
          },
          "definite": false,
          "start": 358,
          "end": 382
        }
      ],
      "declare": false,
      "start": 354,
      "end": 383
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 404
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 412
            },
            "prefix": true,
            "start": 407,
            "end": 412
          },
          "definite": false,
          "start": 388,
          "end": 412
        }
      ],
      "declare": false,
      "start": 384,
      "end": 413
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 434
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 439
            },
            "prefix": true,
            "start": 437,
            "end": 439
          },
          "definite": false,
          "start": 418,
          "end": 439
        }
      ],
      "declare": false,
      "start": 414,
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 461
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 466
            },
            "prefix": true,
            "start": 464,
            "end": 466
          },
          "definite": false,
          "start": 445,
          "end": 466
        }
      ],
      "declare": false,
      "start": 441,
      "end": 467
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 472,
            "end": 488
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 495
            },
            "prefix": true,
            "start": 491,
            "end": 495
          },
          "definite": false,
          "start": 472,
          "end": 495
        }
      ],
      "declare": false,
      "start": 468,
      "end": 496
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 517
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 525
            },
            "prefix": true,
            "start": 520,
            "end": 525
          },
          "definite": false,
          "start": 501,
          "end": 525
        }
      ],
      "declare": false,
      "start": 497,
      "end": 526
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 568
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 581
            },
            "prefix": true,
            "start": 571,
            "end": 581
          },
          "definite": false,
          "start": 552,
          "end": 581
        }
      ],
      "declare": false,
      "start": 548,
      "end": 582
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 603
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 607,
              "end": 611
            },
            "prefix": true,
            "start": 606,
            "end": 611
          },
          "definite": false,
          "start": 587,
          "end": 611
        }
      ],
      "declare": false,
      "start": 583,
      "end": 612
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 658
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 666
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 667,
                "end": 668
              },
              "optional": false,
              "computed": true,
              "start": 662,
              "end": 669
            },
            "prefix": true,
            "start": 661,
            "end": 669
          },
          "definite": false,
          "start": 642,
          "end": 669
        }
      ],
      "declare": false,
      "start": 638,
      "end": 670
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 692
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 700
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "optional": false,
              "computed": false,
              "start": 696,
              "end": 702
            },
            "prefix": true,
            "start": 695,
            "end": 702
          },
          "definite": false,
          "start": 675,
          "end": 702
        }
      ],
      "declare": false,
      "start": 671,
      "end": 703
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 725
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 733
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "optional": false,
              "computed": false,
              "start": 729,
              "end": 735
            },
            "prefix": true,
            "start": 728,
            "end": 735
          },
          "definite": false,
          "start": 708,
          "end": 735
        }
      ],
      "declare": false,
      "start": 704,
      "end": 736
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 758
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 766
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 762,
              "end": 768
            },
            "prefix": true,
            "start": 761,
            "end": 768
          },
          "definite": false,
          "start": 741,
          "end": 768
        }
      ],
      "declare": false,
      "start": 737,
      "end": 769
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 791
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 796
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 798
              },
              "optional": false,
              "computed": false,
              "start": 795,
              "end": 798
            },
            "prefix": true,
            "start": 794,
            "end": 798
          },
          "definite": false,
          "start": 774,
          "end": 798
        }
      ],
      "declare": false,
      "start": 770,
      "end": 799
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
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null,
            "start": 804,
            "end": 821
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 828
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 825,
              "end": 830
            },
            "prefix": true,
            "start": 824,
            "end": 830
          },
          "definite": false,
          "start": 804,
          "end": 830
        }
      ],
      "declare": false,
      "start": 800,
      "end": 831
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
            "name": "ResultIsBoolean15",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 853
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 857,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 857,
                "end": 862
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 857,
              "end": 864
            },
            "prefix": true,
            "start": 856,
            "end": 864
          },
          "definite": false,
          "start": 836,
          "end": 864
        }
      ],
      "declare": false,
      "start": 832,
      "end": 865
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
            "name": "ResultIsBoolean16",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 887
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 895
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 902
              },
              "start": 892,
              "end": 902
            },
            "prefix": true,
            "start": 890,
            "end": 903
          },
          "definite": false,
          "start": 870,
          "end": 903
        }
      ],
      "declare": false,
      "start": 866,
      "end": 904
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
            "name": "ResultIsBoolean17",
            "optional": false,
            "typeAnnotation": null,
            "start": 909,
            "end": 926
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 931,
                "end": 935
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 938,
                "end": 947
              },
              "start": 931,
              "end": 947
            },
            "prefix": true,
            "start": 929,
            "end": 948
          },
          "definite": false,
          "start": 909,
          "end": 948
        }
      ],
      "declare": false,
      "start": 905,
      "end": 949
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
            "name": "ResultIsBoolean18",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 971
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 976,
                "end": 980
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 983,
                "end": 987
              },
              "start": 976,
              "end": 987
            },
            "prefix": true,
            "start": 974,
            "end": 988
          },
          "definite": false,
          "start": 954,
          "end": 988
        }
      ],
      "declare": false,
      "start": 950,
      "end": 989
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
            "name": "ResultIsBoolean19",
            "optional": false,
            "typeAnnotation": null,
            "start": 994,
            "end": 1011
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1025
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1037
              },
              "start": 1016,
              "end": 1037
            },
            "prefix": true,
            "start": 1014,
            "end": 1038
          },
          "definite": false,
          "start": 994,
          "end": 1038
        }
      ],
      "declare": false,
      "start": 990,
      "end": 1039
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
            "name": "ResultIsBoolean20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1086
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1094
              },
              "prefix": true,
              "start": 1090,
              "end": 1094
            },
            "prefix": true,
            "start": 1089,
            "end": 1094
          },
          "definite": false,
          "start": 1069,
          "end": 1094
        }
      ],
      "declare": false,
      "start": 1065,
      "end": 1095
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
            "name": "ResultIsBoolean21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1100,
            "end": 1117
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1127
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1130,
                    "end": 1134
                  },
                  "start": 1124,
                  "end": 1134
                },
                "prefix": true,
                "start": 1122,
                "end": 1135
              },
              "prefix": true,
              "start": 1121,
              "end": 1135
            },
            "prefix": true,
            "start": 1120,
            "end": 1135
          },
          "definite": false,
          "start": 1100,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1096,
      "end": 1136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1171
        },
        "prefix": true,
        "start": 1167,
        "end": 1171
      },
      "directive": null,
      "start": 1167,
      "end": 1172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1178
        },
        "prefix": true,
        "start": 1173,
        "end": 1178
      },
      "directive": null,
      "start": 1173,
      "end": 1179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1185
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1186,
            "end": 1187
          },
          "optional": false,
          "computed": true,
          "start": 1181,
          "end": 1188
        },
        "prefix": true,
        "start": 1180,
        "end": 1188
      },
      "directive": null,
      "start": 1180,
      "end": 1189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1191,
              "end": 1194
            },
            "prefix": true,
            "start": 1190,
            "end": 1194
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1196,
            "end": 1200
          }
        ],
        "start": 1190,
        "end": 1200
      },
      "directive": null,
      "start": 1190,
      "end": 1201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1209
          },
          "optional": false,
          "computed": false,
          "start": 1203,
          "end": 1209
        },
        "prefix": true,
        "start": 1202,
        "end": 1209
      },
      "directive": null,
      "start": 1202,
      "end": 1210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1212,
            "end": 1213
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1214,
            "end": 1215
          },
          "optional": false,
          "computed": false,
          "start": 1212,
          "end": 1215
        },
        "prefix": true,
        "start": 1211,
        "end": 1215
      },
      "directive": null,
      "start": 1211,
      "end": 1216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1216
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 109,
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
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
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
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 222,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
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
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 278,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 296,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 358,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 388,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 418,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "ResultIsBoolean4",
    "start": 445,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 472,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 501,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean7",
    "start": 552,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 572,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean8",
    "start": 587,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 606,
    "end": 607
  },
  {
    "type": "Null",
    "value": "null",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 638,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean9",
    "start": 642,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean10",
    "start": 675,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 704,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean11",
    "start": 708,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean12",
    "start": 741,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 762,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean13",
    "start": 774,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean14",
    "start": 804,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean15",
    "start": 836,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean16",
    "start": 870,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 892,
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
    "value": "ANY1",
    "start": 898,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean17",
    "start": 909,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Null",
    "value": "null",
    "start": 931,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 938,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean18",
    "start": 954,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Null",
    "value": "null",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 981,
    "end": 982
  },
  {
    "type": "Null",
    "value": "null",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 990,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean19",
    "start": 994,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1016,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1028,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean20",
    "start": 1069,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean21",
    "start": 1100,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1130,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1174,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1181,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1203,
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
    "value": "a",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  }
]
```
