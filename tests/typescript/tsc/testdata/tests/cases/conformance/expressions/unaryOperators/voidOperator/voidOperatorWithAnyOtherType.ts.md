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
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            },
            "start": 43,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 43,
          "end": 51
        }
      ],
      "declare": true,
      "start": 31,
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 69
        }
      ],
      "declare": true,
      "start": 53,
      "end": 70
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
                  "start": 81,
                  "end": 84
                },
                "start": 81,
                "end": 86
              },
              "start": 79,
              "end": 86
            },
            "start": 75,
            "end": 86
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 90,
                "end": 92
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 94,
                "end": 96
              }
            ],
            "start": 89,
            "end": 97
          },
          "definite": false,
          "start": 75,
          "end": 97
        }
      ],
      "declare": false,
      "start": 71,
      "end": 98
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
                    "start": 122,
                    "end": 124
                  },
                  "start": 119,
                  "end": 124
                },
                "start": 116,
                "end": 124
              },
              "start": 114,
              "end": 124
            },
            "start": 111,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 124
        }
      ],
      "declare": true,
      "start": 99,
      "end": 125
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
            "start": 130,
            "end": 134
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
                  "start": 138,
                  "end": 139
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 140,
                  "end": 142
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 138,
                "end": 142
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
                  "start": 143,
                  "end": 144
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 145,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 143,
                "end": 146
              }
            ],
            "start": 137,
            "end": 147
          },
          "definite": false,
          "start": 130,
          "end": 147
        }
      ],
      "declare": false,
      "start": 126,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 162
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
          "start": 166,
          "end": 169
        },
        "start": 164,
        "end": 169
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 184,
                      "end": 187
                    },
                    "start": 182,
                    "end": 187
                  },
                  "start": 180,
                  "end": 187
                },
                "init": null,
                "definite": true,
                "start": 180,
                "end": 187
              }
            ],
            "declare": false,
            "start": 176,
            "end": 188
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "start": 193,
            "end": 202
          }
        ],
        "start": 170,
        "end": 204
      },
      "expression": false,
      "start": 150,
      "end": 204
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
        "start": 211,
        "end": 212
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
              "start": 226,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 229,
                "end": 232
              },
              "start": 227,
              "end": 232
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
            "start": 219,
            "end": 233
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
              "start": 245,
              "end": 248
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 269,
                              "end": 272
                            },
                            "start": 267,
                            "end": 272
                          },
                          "start": 265,
                          "end": 272
                        },
                        "init": null,
                        "definite": true,
                        "start": 265,
                        "end": 272
                      }
                    ],
                    "declare": false,
                    "start": 261,
                    "end": 273
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 290
                    },
                    "start": 282,
                    "end": 291
                  }
                ],
                "start": 251,
                "end": 297
              },
              "expression": false,
              "start": 248,
              "end": 297
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 297
          }
        ],
        "start": 213,
        "end": 299
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 299
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 311
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
                        "start": 333,
                        "end": 336
                      },
                      "start": 331,
                      "end": 336
                    },
                    "start": 329,
                    "end": 336
                  },
                  "init": null,
                  "definite": true,
                  "start": 329,
                  "end": 336
                }
              ],
              "declare": false,
              "start": 325,
              "end": 337
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 318,
            "end": 337
          }
        ],
        "start": 312,
        "end": 339
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 300,
      "end": 339
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
            "start": 344,
            "end": 348
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "typeArguments": null,
            "arguments": [],
            "start": 351,
            "end": 358
          },
          "definite": false,
          "start": 344,
          "end": 358
        }
      ],
      "declare": false,
      "start": 340,
      "end": 359
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
            "start": 381,
            "end": 393
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "prefix": true,
            "start": 396,
            "end": 405
          },
          "definite": false,
          "start": 381,
          "end": 405
        }
      ],
      "declare": false,
      "start": 377,
      "end": 406
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
            "start": 411,
            "end": 423
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 435
            },
            "prefix": true,
            "start": 426,
            "end": 435
          },
          "definite": false,
          "start": 411,
          "end": 435
        }
      ],
      "declare": false,
      "start": 407,
      "end": 436
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
            "start": 441,
            "end": 453
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "prefix": true,
            "start": 456,
            "end": 462
          },
          "definite": false,
          "start": 441,
          "end": 462
        }
      ],
      "declare": false,
      "start": 437,
      "end": 463
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
            "start": 468,
            "end": 480
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "prefix": true,
            "start": 483,
            "end": 489
          },
          "definite": false,
          "start": 468,
          "end": 489
        }
      ],
      "declare": false,
      "start": 464,
      "end": 490
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
            "start": 495,
            "end": 507
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "prefix": true,
            "start": 510,
            "end": 518
          },
          "definite": false,
          "start": 495,
          "end": 518
        }
      ],
      "declare": false,
      "start": 491,
      "end": 519
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
            "start": 524,
            "end": 536
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 548
            },
            "prefix": true,
            "start": 539,
            "end": 548
          },
          "definite": false,
          "start": 524,
          "end": 548
        }
      ],
      "declare": false,
      "start": 520,
      "end": 549
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
            "start": 575,
            "end": 587
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 604
            },
            "prefix": true,
            "start": 590,
            "end": 604
          },
          "definite": false,
          "start": 575,
          "end": 604
        }
      ],
      "declare": false,
      "start": 571,
      "end": 605
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
            "start": 610,
            "end": 622
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 630,
              "end": 634
            },
            "prefix": true,
            "start": 625,
            "end": 634
          },
          "definite": false,
          "start": 610,
          "end": 634
        }
      ],
      "declare": false,
      "start": 606,
      "end": 635
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
            "start": 665,
            "end": 677
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 689
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 690,
                "end": 691
              },
              "optional": false,
              "computed": true,
              "start": 685,
              "end": 692
            },
            "prefix": true,
            "start": 680,
            "end": 692
          },
          "definite": false,
          "start": 665,
          "end": 692
        }
      ],
      "declare": false,
      "start": 661,
      "end": 692
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
            "start": 697,
            "end": 710
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 722
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "optional": false,
              "computed": false,
              "start": 718,
              "end": 724
            },
            "prefix": true,
            "start": 713,
            "end": 724
          },
          "definite": false,
          "start": 697,
          "end": 724
        }
      ],
      "declare": false,
      "start": 693,
      "end": 725
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
            "start": 730,
            "end": 743
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "optional": false,
              "computed": false,
              "start": 751,
              "end": 757
            },
            "prefix": true,
            "start": 746,
            "end": 757
          },
          "definite": false,
          "start": 730,
          "end": 757
        }
      ],
      "declare": false,
      "start": 726,
      "end": 758
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
            "start": 763,
            "end": 776
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
                "start": 784,
                "end": 788
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 790
              },
              "optional": false,
              "computed": false,
              "start": 784,
              "end": 790
            },
            "prefix": true,
            "start": 779,
            "end": 790
          },
          "definite": false,
          "start": 763,
          "end": 790
        }
      ],
      "declare": false,
      "start": 759,
      "end": 791
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
            "start": 796,
            "end": 809
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
                "start": 817,
                "end": 818
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "optional": false,
              "computed": false,
              "start": 817,
              "end": 820
            },
            "prefix": true,
            "start": 812,
            "end": 820
          },
          "definite": false,
          "start": 796,
          "end": 820
        }
      ],
      "declare": false,
      "start": 792,
      "end": 821
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
            "start": 826,
            "end": 839
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
                "start": 847,
                "end": 850
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 847,
              "end": 852
            },
            "prefix": true,
            "start": 842,
            "end": 852
          },
          "definite": false,
          "start": 826,
          "end": 852
        }
      ],
      "declare": false,
      "start": 822,
      "end": 853
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
            "name": "ResultIsAny15",
            "optional": false,
            "typeAnnotation": null,
            "start": 858,
            "end": 871
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
                  "start": 879,
                  "end": 880
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 884
                },
                "optional": false,
                "computed": false,
                "start": 879,
                "end": 884
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 879,
              "end": 886
            },
            "prefix": true,
            "start": 874,
            "end": 886
          },
          "definite": false,
          "start": 858,
          "end": 886
        }
      ],
      "declare": false,
      "start": 854,
      "end": 887
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
            "name": "ResultIsAny16",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 905
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 917
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 924
              },
              "start": 914,
              "end": 924
            },
            "prefix": true,
            "start": 908,
            "end": 925
          },
          "definite": false,
          "start": 892,
          "end": 925
        }
      ],
      "declare": false,
      "start": 888,
      "end": 926
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
            "name": "ResultIsAny17",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 944
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 953,
                "end": 957
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 969
              },
              "start": 953,
              "end": 969
            },
            "prefix": true,
            "start": 947,
            "end": 970
          },
          "definite": false,
          "start": 931,
          "end": 970
        }
      ],
      "declare": false,
      "start": 927,
      "end": 971
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
            "name": "ResultIsAny18",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 989
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 998,
                "end": 1002
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1005,
                "end": 1009
              },
              "start": 998,
              "end": 1009
            },
            "prefix": true,
            "start": 992,
            "end": 1010
          },
          "definite": false,
          "start": 976,
          "end": 1010
        }
      ],
      "declare": false,
      "start": 972,
      "end": 1011
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
            "name": "ResultIsAny19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1016,
            "end": 1029
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1047
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1059
              },
              "start": 1038,
              "end": 1059
            },
            "prefix": true,
            "start": 1032,
            "end": 1060
          },
          "definite": false,
          "start": 1016,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1012,
      "end": 1061
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
            "name": "ResultIsAny20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1108
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
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1121,
                "end": 1124
              },
              "prefix": true,
              "start": 1116,
              "end": 1124
            },
            "prefix": true,
            "start": 1111,
            "end": 1124
          },
          "definite": false,
          "start": 1095,
          "end": 1124
        }
      ],
      "declare": false,
      "start": 1091,
      "end": 1125
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
            "name": "ResultIsAny21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1130,
            "end": 1143
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
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1165
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1168,
                    "end": 1172
                  },
                  "start": 1162,
                  "end": 1172
                },
                "prefix": true,
                "start": 1156,
                "end": 1173
              },
              "prefix": true,
              "start": 1151,
              "end": 1173
            },
            "prefix": true,
            "start": 1146,
            "end": 1173
          },
          "definite": false,
          "start": 1130,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1210,
          "end": 1213
        },
        "prefix": true,
        "start": 1205,
        "end": 1213
      },
      "directive": null,
      "start": 1205,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1220,
          "end": 1224
        },
        "prefix": true,
        "start": 1215,
        "end": 1224
      },
      "directive": null,
      "start": 1215,
      "end": 1225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1235
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1236,
            "end": 1237
          },
          "optional": false,
          "computed": true,
          "start": 1231,
          "end": 1238
        },
        "prefix": true,
        "start": 1226,
        "end": 1238
      },
      "directive": null,
      "start": 1226,
      "end": 1239
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
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1248
            },
            "prefix": true,
            "start": 1240,
            "end": 1248
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1250,
            "end": 1254
          }
        ],
        "start": 1240,
        "end": 1254
      },
      "directive": null,
      "start": 1240,
      "end": 1255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
            "start": 1261,
            "end": 1265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1267
          },
          "optional": false,
          "computed": false,
          "start": 1261,
          "end": 1267
        },
        "prefix": true,
        "start": 1256,
        "end": 1267
      },
      "directive": null,
      "start": 1256,
      "end": 1268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
            "start": 1274,
            "end": 1275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1276,
            "end": 1277
          },
          "optional": false,
          "computed": false,
          "start": 1274,
          "end": 1277
        },
        "prefix": true,
        "start": 1269,
        "end": 1277
      },
      "directive": null,
      "start": 1269,
      "end": 1278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 1278
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 31,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
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
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 99,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "1",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 282,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
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
    "type": "Identifier",
    "value": "namespace",
    "start": 300,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "value": "export",
    "start": 318,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 330,
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
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny1",
    "start": 381,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 396,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny2",
    "start": 411,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 426,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny3",
    "start": 441,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 456,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny4",
    "start": 468,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 483,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny5",
    "start": 495,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 510,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 520,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny6",
    "start": 524,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 539,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 571,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny7",
    "start": 575,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 595,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny8",
    "start": 610,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 625,
    "end": 629
  },
  {
    "type": "Null",
    "value": "null",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny9",
    "start": 665,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 680,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 689,
    "end": 690
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny10",
    "start": 697,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 713,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 726,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny11",
    "start": 730,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 746,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny12",
    "start": 763,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 779,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny13",
    "start": 796,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 812,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 822,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny14",
    "start": 826,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 842,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 847,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny15",
    "start": 858,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 874,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 888,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny16",
    "start": 892,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 908,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 914,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny17",
    "start": 931,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Null",
    "value": "null",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 960,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny18",
    "start": 976,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Null",
    "value": "null",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny19",
    "start": 1016,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1038,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1050,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny20",
    "start": 1095,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny21",
    "start": 1130,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1220,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1226,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1231,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1256,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1269,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  }
]
```
