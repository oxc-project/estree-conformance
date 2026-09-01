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
                "start": 44,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "start": 39,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 47
        }
      ],
      "declare": true,
      "start": 27,
      "end": 48
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
            "start": 61,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 65
        }
      ],
      "declare": true,
      "start": 49,
      "end": 66
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
                  "start": 85,
                  "end": 88
                },
                "start": 85,
                "end": 90
              },
              "start": 83,
              "end": 90
            },
            "start": 79,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 79,
          "end": 90
        }
      ],
      "declare": true,
      "start": 67,
      "end": 91
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
                    "start": 115,
                    "end": 117
                  },
                  "start": 112,
                  "end": 117
                },
                "start": 109,
                "end": 117
              },
              "start": 107,
              "end": 117
            },
            "start": 104,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 117
        }
      ],
      "declare": true,
      "start": 92,
      "end": 118
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
                      "start": 139,
                      "end": 140
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 141,
                          "end": 143
                        },
                        "start": 141,
                        "end": 143
                      },
                      "start": 140,
                      "end": 143
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 139,
                    "end": 144
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
                      "start": 145,
                      "end": 146
                    },
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
                            "start": 154,
                            "end": 157
                          },
                          "start": 151,
                          "end": 157
                        },
                        "start": 148,
                        "end": 157
                      },
                      "start": 146,
                      "end": 157
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 145,
                    "end": 157
                  }
                ],
                "start": 137,
                "end": 158
              },
              "start": 135,
              "end": 158
            },
            "start": 131,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 131,
          "end": 158
        }
      ],
      "declare": true,
      "start": 119,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 173
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
          "start": 177,
          "end": 180
        },
        "start": 175,
        "end": 180
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
                  "start": 191,
                  "end": 192
                },
                "init": null,
                "definite": false,
                "start": 191,
                "end": 192
              }
            ],
            "declare": false,
            "start": 187,
            "end": 193
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "start": 198,
            "end": 207
          }
        ],
        "start": 181,
        "end": 209
      },
      "expression": false,
      "start": 161,
      "end": 209
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
        "start": 216,
        "end": 217
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
              "start": 231,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 234,
                "end": 237
              },
              "start": 232,
              "end": 237
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
            "start": 224,
            "end": 238
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
              "start": 250,
              "end": 253
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
                          "start": 270,
                          "end": 271
                        },
                        "init": null,
                        "definite": false,
                        "start": 270,
                        "end": 271
                      }
                    ],
                    "declare": false,
                    "start": 266,
                    "end": 272
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 289
                    },
                    "start": 281,
                    "end": 290
                  }
                ],
                "start": 256,
                "end": 296
              },
              "expression": false,
              "start": 253,
              "end": 296
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 243,
            "end": 296
          }
        ],
        "start": 218,
        "end": 298
      },
      "abstract": false,
      "declare": false,
      "start": 210,
      "end": 298
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 310
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
                        "start": 339,
                        "end": 342
                      },
                      "start": 337,
                      "end": 342
                    },
                    "start": 336,
                    "end": 342
                  },
                  "init": null,
                  "definite": false,
                  "start": 336,
                  "end": 342
                }
              ],
              "declare": true,
              "start": 324,
              "end": 343
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 317,
            "end": 343
          }
        ],
        "start": 311,
        "end": 345
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 299,
      "end": 345
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "typeArguments": null,
                "start": 364,
                "end": 365
              },
              "start": 362,
              "end": 365
            },
            "start": 358,
            "end": 365
          },
          "init": null,
          "definite": false,
          "start": 358,
          "end": 365
        }
      ],
      "declare": true,
      "start": 346,
      "end": 366
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
            "name": "ResultIsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 408
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 416
            },
            "prefix": true,
            "start": 411,
            "end": 416
          },
          "definite": false,
          "start": 394,
          "end": 416
        }
      ],
      "declare": false,
      "start": 390,
      "end": 417
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 437
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 445
            },
            "prefix": true,
            "start": 440,
            "end": 445
          },
          "definite": false,
          "start": 422,
          "end": 445
        }
      ],
      "declare": false,
      "start": 418,
      "end": 446
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 466
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            },
            "prefix": true,
            "start": 469,
            "end": 471
          },
          "definite": false,
          "start": 451,
          "end": 471
        }
      ],
      "declare": false,
      "start": 447,
      "end": 472
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 492
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 497
            },
            "prefix": true,
            "start": 495,
            "end": 497
          },
          "definite": false,
          "start": 477,
          "end": 497
        }
      ],
      "declare": false,
      "start": 473,
      "end": 498
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 518
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 525
            },
            "prefix": true,
            "start": 521,
            "end": 525
          },
          "definite": false,
          "start": 503,
          "end": 525
        }
      ],
      "declare": false,
      "start": 499,
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 531,
            "end": 546
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 554
            },
            "prefix": true,
            "start": 549,
            "end": 554
          },
          "definite": false,
          "start": 531,
          "end": 554
        }
      ],
      "declare": false,
      "start": 527,
      "end": 555
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 596
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 609
            },
            "prefix": true,
            "start": 599,
            "end": 609
          },
          "definite": false,
          "start": 581,
          "end": 609
        }
      ],
      "declare": false,
      "start": 577,
      "end": 610
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 630
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 634,
              "end": 638
            },
            "prefix": true,
            "start": 633,
            "end": 638
          },
          "definite": false,
          "start": 615,
          "end": 638
        }
      ],
      "declare": false,
      "start": 611,
      "end": 639
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 684
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 692
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 693,
                "end": 694
              },
              "optional": false,
              "computed": true,
              "start": 688,
              "end": 695
            },
            "prefix": true,
            "start": 687,
            "end": 695
          },
          "definite": false,
          "start": 669,
          "end": 695
        }
      ],
      "declare": false,
      "start": 665,
      "end": 695
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 700,
            "end": 715
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 723
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "optional": false,
              "computed": false,
              "start": 719,
              "end": 725
            },
            "prefix": true,
            "start": 718,
            "end": 725
          },
          "definite": false,
          "start": 700,
          "end": 725
        }
      ],
      "declare": false,
      "start": 696,
      "end": 726
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 747
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
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
            "start": 750,
            "end": 757
          },
          "definite": false,
          "start": 731,
          "end": 757
        }
      ],
      "declare": false,
      "start": 727,
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 779
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 787
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 789
              },
              "optional": false,
              "computed": false,
              "start": 783,
              "end": 789
            },
            "prefix": true,
            "start": 782,
            "end": 789
          },
          "definite": false,
          "start": 763,
          "end": 789
        }
      ],
      "declare": false,
      "start": 759,
      "end": 790
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
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 811
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 818
              },
              "optional": false,
              "computed": false,
              "start": 815,
              "end": 818
            },
            "prefix": true,
            "start": 814,
            "end": 818
          },
          "definite": false,
          "start": 795,
          "end": 818
        }
      ],
      "declare": false,
      "start": 791,
      "end": 819
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
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null,
            "start": 824,
            "end": 840
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 847
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 844,
              "end": 849
            },
            "prefix": true,
            "start": 843,
            "end": 849
          },
          "definite": false,
          "start": 824,
          "end": 849
        }
      ],
      "declare": false,
      "start": 820,
      "end": 850
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
            "name": "ResultIsNumber14",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 871
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
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
                  "start": 875,
                  "end": 876
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 880
                },
                "optional": false,
                "computed": false,
                "start": 875,
                "end": 880
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 875,
              "end": 882
            },
            "prefix": true,
            "start": 874,
            "end": 882
          },
          "definite": false,
          "start": 855,
          "end": 882
        }
      ],
      "declare": false,
      "start": 851,
      "end": 883
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
            "name": "ResultIsNumber15",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 904
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 912
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 919
              },
              "start": 909,
              "end": 919
            },
            "prefix": true,
            "start": 907,
            "end": 920
          },
          "definite": false,
          "start": 888,
          "end": 920
        }
      ],
      "declare": false,
      "start": 884,
      "end": 921
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
            "name": "ResultIsNumber16",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 942
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 947,
                "end": 951
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 963
              },
              "start": 947,
              "end": 963
            },
            "prefix": true,
            "start": 945,
            "end": 964
          },
          "definite": false,
          "start": 926,
          "end": 964
        }
      ],
      "declare": false,
      "start": 922,
      "end": 965
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
            "name": "ResultIsNumber17",
            "optional": false,
            "typeAnnotation": null,
            "start": 970,
            "end": 986
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 991,
                "end": 995
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 998,
                "end": 1002
              },
              "start": 991,
              "end": 1002
            },
            "prefix": true,
            "start": 989,
            "end": 1003
          },
          "definite": false,
          "start": 970,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 966,
      "end": 1004
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
            "name": "ResultIsNumber18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1025
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1039
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1051
              },
              "start": 1030,
              "end": 1051
            },
            "prefix": true,
            "start": 1028,
            "end": 1052
          },
          "definite": false,
          "start": 1009,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1005,
      "end": 1053
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
            "name": "ResultIsNumber19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1099
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1107
              },
              "prefix": true,
              "start": 1103,
              "end": 1107
            },
            "prefix": true,
            "start": 1102,
            "end": 1107
          },
          "definite": false,
          "start": 1083,
          "end": 1107
        }
      ],
      "declare": false,
      "start": 1079,
      "end": 1108
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
            "name": "ResultIsNumber20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1129
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "UnaryExpression",
                "operator": "~",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1139
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1142,
                    "end": 1146
                  },
                  "start": 1136,
                  "end": 1146
                },
                "prefix": true,
                "start": 1134,
                "end": 1147
              },
              "prefix": true,
              "start": 1133,
              "end": 1147
            },
            "prefix": true,
            "start": 1132,
            "end": 1147
          },
          "definite": false,
          "start": 1113,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1182
        },
        "prefix": true,
        "start": 1178,
        "end": 1182
      },
      "directive": null,
      "start": 1178,
      "end": 1183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1189
        },
        "prefix": true,
        "start": 1184,
        "end": 1189
      },
      "directive": null,
      "start": 1184,
      "end": 1190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1192,
            "end": 1196
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1197,
            "end": 1198
          },
          "optional": false,
          "computed": true,
          "start": 1192,
          "end": 1199
        },
        "prefix": true,
        "start": 1191,
        "end": 1199
      },
      "directive": null,
      "start": 1191,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1205
            },
            "prefix": true,
            "start": 1201,
            "end": 1205
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1207,
            "end": 1211
          }
        ],
        "start": 1201,
        "end": 1211
      },
      "directive": null,
      "start": 1201,
      "end": 1212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1214,
            "end": 1218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1219,
            "end": 1220
          },
          "optional": false,
          "computed": false,
          "start": 1214,
          "end": 1220
        },
        "prefix": true,
        "start": 1213,
        "end": 1220
      },
      "directive": null,
      "start": 1213,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1229
          },
          "optional": false,
          "computed": false,
          "start": 1223,
          "end": 1229
        },
        "prefix": true,
        "start": 1222,
        "end": 1229
      },
      "directive": null,
      "start": 1222,
      "end": 1230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1232,
            "end": 1233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1235
          },
          "optional": false,
          "computed": false,
          "start": 1232,
          "end": 1235
        },
        "prefix": true,
        "start": 1231,
        "end": 1235
      },
      "directive": null,
      "start": 1231,
      "end": 1236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1239,
              "end": 1243
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1245
            },
            "optional": false,
            "computed": false,
            "start": 1239,
            "end": 1245
          },
          "prefix": true,
          "start": 1238,
          "end": 1245
        },
        "prefix": true,
        "start": 1237,
        "end": 1245
      },
      "directive": null,
      "start": 1237,
      "end": 1246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1246
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 27,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 49,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 67,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 92,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 198,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
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
    "value": "class",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 224,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 281,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 299,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 317,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 324,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 336,
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
    "value": "any",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 346,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber",
    "start": 394,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 422,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 451,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 477,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 503,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 522,
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
    "start": 527,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 531,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 581,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 600,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
    "start": 615,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 633,
    "end": 634
  },
  {
    "type": "Null",
    "value": "null",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber8",
    "start": 669,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 696,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber9",
    "start": 700,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 719,
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
    "value": "x",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber10",
    "start": 731,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 750,
    "end": 751
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
    "value": "ResultIsNumber11",
    "start": 763,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 791,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber12",
    "start": 795,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 820,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber13",
    "start": 824,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 851,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber14",
    "start": 855,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber15",
    "start": 888,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber16",
    "start": 926,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Null",
    "value": "null",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 954,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber17",
    "start": 970,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Null",
    "value": "null",
    "start": 991,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 996,
    "end": 997
  },
  {
    "type": "Null",
    "value": "null",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber18",
    "start": 1009,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1030,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1042,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber19",
    "start": 1083,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber20",
    "start": 1113,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1142,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "obj1",
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
    "type": "Identifier",
    "value": "x",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  }
]
```
