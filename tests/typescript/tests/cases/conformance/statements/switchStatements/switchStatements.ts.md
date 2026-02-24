__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 36
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
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "start": 37,
                  "end": 46
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 65,
                      "end": 67
                    },
                    "start": 58,
                    "end": 68
                  }
                ],
                "start": 48,
                "end": 74
              },
              "expression": false,
              "start": 25,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 74
          }
        ],
        "start": 12,
        "end": 76
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 76
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 85,
                "end": 88
              },
              "start": 83,
              "end": 88
            },
            "start": 82,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 88
        }
      ],
      "declare": false,
      "start": 78,
      "end": 89
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 112,
            "end": 114
          },
          "consequent": [],
          "start": 107,
          "end": 115
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 125,
            "end": 127
          },
          "consequent": [],
          "start": 120,
          "end": 128
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 138,
            "end": 142
          },
          "consequent": [],
          "start": 133,
          "end": 143
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 153,
            "end": 157
          },
          "consequent": [],
          "start": 148,
          "end": 158
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 177
          },
          "consequent": [],
          "start": 163,
          "end": 178
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 197,
                "end": 199
              }
            ],
            "start": 188,
            "end": 200
          },
          "consequent": [],
          "start": 183,
          "end": 201
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 221
            },
            "typeArguments": null,
            "arguments": [],
            "start": 211,
            "end": 223
          },
          "consequent": [],
          "start": 206,
          "end": 224
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 234,
            "end": 241
          },
          "consequent": [],
          "start": 229,
          "end": 242
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 251,
            "end": 253
          },
          "consequent": [],
          "start": 247,
          "end": 254
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 264,
            "end": 266
          },
          "consequent": [],
          "start": 259,
          "end": 267
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 281
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 283,
                  "end": 285
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 279,
                "end": 285
              }
            ],
            "start": 277,
            "end": 287
          },
          "consequent": [],
          "start": 272,
          "end": 288
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 298,
                "end": 301
              }
            ],
            "start": 297,
            "end": 302
          },
          "consequent": [],
          "start": 293,
          "end": 303
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "prefix": true,
            "start": 313,
            "end": 321
          },
          "consequent": [],
          "start": 308,
          "end": 322
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "prefix": true,
            "start": 332,
            "end": 340
          },
          "consequent": [],
          "start": 327,
          "end": 341
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 355
              },
              "optional": false,
              "computed": false,
              "start": 351,
              "end": 355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 356,
                "end": 357
              }
            ],
            "optional": false,
            "start": 351,
            "end": 358
          },
          "consequent": [],
          "start": 346,
          "end": 359
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 370,
                    "end": 371
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 370,
                  "end": 371
                }
              ],
              "start": 369,
              "end": 372
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 376,
                    "end": 382
                  },
                  "start": 374,
                  "end": 382
                },
                "start": 373,
                "end": 382
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 387,
              "end": 389
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 389
          },
          "consequent": [],
          "start": 364,
          "end": 390
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 402,
                      "end": 403
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 402,
                    "end": 403
                  }
                ],
                "start": 401,
                "end": 404
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    },
                    "start": 406,
                    "end": 414
                  },
                  "start": 405,
                  "end": 414
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 419,
                "end": 421
              },
              "id": null,
              "generator": false,
              "start": 401,
              "end": 421
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 423,
                "end": 424
              }
            ],
            "optional": false,
            "start": 400,
            "end": 425
          },
          "consequent": [],
          "start": 395,
          "end": 426
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [],
          "start": 431,
          "end": 439
        }
      ],
      "start": 90,
      "end": 441
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 530
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              "start": 535,
              "end": 543
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
            "start": 533,
            "end": 544
          }
        ],
        "start": 531,
        "end": 546
      },
      "abstract": false,
      "declare": false,
      "start": 523,
      "end": 546
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 554
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 564
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 571
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 573,
                "end": 579
              },
              "start": 571,
              "end": 579
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
            "start": 567,
            "end": 579
          }
        ],
        "start": 565,
        "end": 581
      },
      "abstract": false,
      "declare": false,
      "start": 547,
      "end": 581
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "typeArguments": null,
        "arguments": [],
        "start": 591,
        "end": 598
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeArguments": null,
            "arguments": [],
            "start": 611,
            "end": 618
          },
          "consequent": [],
          "start": 606,
          "end": 619
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 633
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 635,
                  "end": 637
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 631,
                "end": 637
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 643
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 645,
                  "end": 647
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 639,
                "end": 647
              }
            ],
            "start": 629,
            "end": 649
          },
          "consequent": [],
          "start": 624,
          "end": 650
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 665
            },
            "typeArguments": null,
            "arguments": [],
            "start": 660,
            "end": 667
          },
          "consequent": [],
          "start": 655,
          "end": 668
        }
      ],
      "start": 583,
      "end": 670
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 680,
        "end": 682
      },
      "cases": [],
      "start": 672,
      "end": 687
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 696,
        "end": 698
      },
      "cases": [],
      "start": 688,
      "end": 703
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 712,
        "end": 716
      },
      "cases": [],
      "start": 704,
      "end": 721
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 730,
        "end": 734
      },
      "cases": [],
      "start": 722,
      "end": 739
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 757
      },
      "cases": [],
      "start": 740,
      "end": 762
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 775,
          "end": 779
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 780,
            "end": 782
          }
        ],
        "start": 771,
        "end": 783
      },
      "cases": [],
      "start": 763,
      "end": 788
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 807
        },
        "typeArguments": null,
        "arguments": [],
        "start": 797,
        "end": 809
      },
      "cases": [],
      "start": 789,
      "end": 814
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 823,
        "end": 830
      },
      "cases": [],
      "start": 815,
      "end": 835
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 844,
        "end": 846
      },
      "cases": [],
      "start": 836,
      "end": 851
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 860,
        "end": 862
      },
      "cases": [],
      "start": 852,
      "end": 867
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 880
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 882,
              "end": 884
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 878,
            "end": 884
          }
        ],
        "start": 876,
        "end": 886
      },
      "cases": [],
      "start": 868,
      "end": 891
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 901,
            "end": 904
          }
        ],
        "start": 900,
        "end": 905
      },
      "cases": [],
      "start": 892,
      "end": 910
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
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
                "start": 920,
                "end": 921
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 920,
              "end": 921
            }
          ],
          "start": 919,
          "end": 922
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 926,
                "end": 932
              },
              "start": 924,
              "end": 932
            },
            "start": 923,
            "end": 932
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 937,
          "end": 939
        },
        "id": null,
        "generator": false,
        "start": 919,
        "end": 939
      },
      "cases": [],
      "start": 911,
      "end": 944
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 955,
                  "end": 956
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 955,
                "end": 956
              }
            ],
            "start": 954,
            "end": 957
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
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
                    "start": 961,
                    "end": 962
                  },
                  "typeArguments": null,
                  "start": 961,
                  "end": 962
                },
                "start": 959,
                "end": 962
              },
              "start": 958,
              "end": 962
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 967,
            "end": 969
          },
          "id": null,
          "generator": false,
          "start": 954,
          "end": 969
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 971,
            "end": 972
          }
        ],
        "optional": false,
        "start": 953,
        "end": 973
      },
      "cases": [],
      "start": 945,
      "end": 978
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 980
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
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
    "value": "return",
    "start": 58,
    "end": 64
  },
  {
    "type": "String",
    "value": "''",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
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
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 107,
    "end": 111
  },
  {
    "type": "String",
    "value": "''",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 120,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 133,
    "end": 137
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 148,
    "end": 152
  },
  {
    "type": "Null",
    "value": "null",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 163,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 168,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 183,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 206,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Object",
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
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 229,
    "end": 233
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 234,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 308,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 313,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 327,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 332,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 346,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 384,
    "end": 386
  },
  {
    "type": "String",
    "value": "''",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 416,
    "end": 418
  },
  {
    "type": "String",
    "value": "''",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 555,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 606,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 611,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "''",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 655,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "String",
    "value": "''",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Null",
    "value": "null",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 748,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 763,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 771,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 823,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 892,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 934,
    "end": 936
  },
  {
    "type": "String",
    "value": "''",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 964,
    "end": 966
  },
  {
    "type": "String",
    "value": "''",
    "start": 967,
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
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  }
]
```
