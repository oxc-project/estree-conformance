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
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 40
        }
      ],
      "declare": false,
      "start": 28,
      "end": 41
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 50,
              "end": 55
            },
            "start": 46,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 46,
          "end": 55
        }
      ],
      "declare": false,
      "start": 42,
      "end": 56
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
                  "start": 67,
                  "end": 70
                },
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 61,
            "end": 72
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 76,
                "end": 78
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 80,
                "end": 82
              }
            ],
            "start": 75,
            "end": 83
          },
          "definite": false,
          "start": 61,
          "end": 83
        }
      ],
      "declare": false,
      "start": 57,
      "end": 84
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
            "typeAnnotation": null,
            "start": 89,
            "end": 92
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
                  "start": 96,
                  "end": 97
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 98,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 96,
                "end": 99
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
                  "start": 100,
                  "end": 101
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 102,
                  "end": 106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 106
              }
            ],
            "start": 95,
            "end": 107
          },
          "definite": false,
          "start": 89,
          "end": 107
        }
      ],
      "declare": false,
      "start": 85,
      "end": 108
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
        "start": 115,
        "end": 116
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
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
              },
              "start": 131,
              "end": 136
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
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 139
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 151
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
                        "start": 172,
                        "end": 175
                      },
                      "start": 170,
                      "end": 175
                    },
                    "start": 169,
                    "end": 175
                  },
                  "init": null,
                  "definite": false,
                  "start": 169,
                  "end": 175
                }
              ],
              "declare": false,
              "start": 165,
              "end": 176
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 158,
            "end": 176
          }
        ],
        "start": 152,
        "end": 178
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 140,
      "end": 178
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
            "start": 183,
            "end": 187
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [],
            "start": 190,
            "end": 197
          },
          "definite": false,
          "start": 183,
          "end": 197
        }
      ],
      "declare": false,
      "start": 179,
      "end": 198
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
            "start": 220,
            "end": 235
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 243
            },
            "start": 238,
            "end": 243
          },
          "definite": false,
          "start": 220,
          "end": 243
        }
      ],
      "declare": false,
      "start": 216,
      "end": 244
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
            "start": 249,
            "end": 264
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "start": 267,
            "end": 273
          },
          "definite": false,
          "start": 249,
          "end": 273
        }
      ],
      "declare": false,
      "start": 245,
      "end": 274
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
            "start": 280,
            "end": 295
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 302
            },
            "start": 298,
            "end": 304
          },
          "definite": false,
          "start": 280,
          "end": 304
        }
      ],
      "declare": false,
      "start": 276,
      "end": 305
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
            "start": 310,
            "end": 325
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "start": 328,
            "end": 334
          },
          "definite": false,
          "start": 310,
          "end": 334
        }
      ],
      "declare": false,
      "start": 306,
      "end": 335
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
            "start": 356,
            "end": 371
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 381,
                "end": 382
              },
              "optional": false,
              "computed": true,
              "start": 376,
              "end": 383
            },
            "start": 374,
            "end": 383
          },
          "definite": false,
          "start": 356,
          "end": 383
        }
      ],
      "declare": false,
      "start": 352,
      "end": 384
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
            "start": 389,
            "end": 404
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "optional": false,
              "computed": false,
              "start": 409,
              "end": 414
            },
            "start": 407,
            "end": 414
          },
          "definite": false,
          "start": 389,
          "end": 414
        }
      ],
      "declare": false,
      "start": 385,
      "end": 415
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
            "start": 420,
            "end": 435
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 440,
              "end": 445
            },
            "start": 438,
            "end": 445
          },
          "definite": false,
          "start": 420,
          "end": 445
        }
      ],
      "declare": false,
      "start": 416,
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 466
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 475
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "optional": false,
              "computed": false,
              "start": 471,
              "end": 477
            },
            "start": 469,
            "end": 477
          },
          "definite": false,
          "start": 451,
          "end": 477
        }
      ],
      "declare": false,
      "start": 447,
      "end": 478
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
            "start": 483,
            "end": 497
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 503
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "optional": false,
              "computed": false,
              "start": 502,
              "end": 505
            },
            "start": 500,
            "end": 505
          },
          "definite": false,
          "start": 483,
          "end": 505
        }
      ],
      "declare": false,
      "start": 479,
      "end": 506
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
            "start": 512,
            "end": 527
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 534
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 535,
                "end": 536
              },
              "optional": false,
              "computed": true,
              "start": 530,
              "end": 537
            },
            "start": 530,
            "end": 539
          },
          "definite": false,
          "start": 512,
          "end": 539
        }
      ],
      "declare": false,
      "start": 508,
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 561
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 569
              },
              "optional": false,
              "computed": false,
              "start": 564,
              "end": 569
            },
            "start": 564,
            "end": 571
          },
          "definite": false,
          "start": 545,
          "end": 571
        }
      ],
      "declare": false,
      "start": 541,
      "end": 572
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
            "start": 577,
            "end": 593
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 599
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 601
              },
              "optional": false,
              "computed": false,
              "start": 596,
              "end": 601
            },
            "start": 596,
            "end": 603
          },
          "definite": false,
          "start": 577,
          "end": 603
        }
      ],
      "declare": false,
      "start": 573,
      "end": 604
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
            "start": 609,
            "end": 625
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 628,
              "end": 634
            },
            "start": 628,
            "end": 636
          },
          "definite": false,
          "start": 609,
          "end": 636
        }
      ],
      "declare": false,
      "start": 605,
      "end": 637
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
            "start": 642,
            "end": 658
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 661,
              "end": 664
            },
            "start": 661,
            "end": 666
          },
          "definite": false,
          "start": 642,
          "end": 666
        }
      ],
      "declare": false,
      "start": 638,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 699,
          "end": 702
        },
        "start": 697,
        "end": 702
      },
      "directive": null,
      "start": 697,
      "end": 703
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 706,
          "end": 710
        },
        "start": 704,
        "end": 710
      },
      "directive": null,
      "start": 704,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 718
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 719,
            "end": 720
          },
          "optional": false,
          "computed": true,
          "start": 714,
          "end": 721
        },
        "start": 712,
        "end": 721
      },
      "directive": null,
      "start": 712,
      "end": 722
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 736
            },
            "start": 730,
            "end": 736
          }
        ],
        "start": 723,
        "end": 736
      },
      "directive": null,
      "start": 723,
      "end": 737
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 744
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 746
          },
          "optional": false,
          "computed": false,
          "start": 740,
          "end": 746
        },
        "start": 738,
        "end": 746
      },
      "directive": null,
      "start": 738,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 753
          },
          "optional": false,
          "computed": false,
          "start": 750,
          "end": 753
        },
        "start": 748,
        "end": 753
      },
      "directive": null,
      "start": 748,
      "end": 754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 759
        },
        "start": 756,
        "end": 761
      },
      "directive": null,
      "start": 756,
      "end": 762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 767
        },
        "start": 763,
        "end": 769
      },
      "directive": null,
      "start": 763,
      "end": 770
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 775
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 776,
            "end": 777
          },
          "optional": false,
          "computed": true,
          "start": 771,
          "end": 778
        },
        "start": 771,
        "end": 780
      },
      "directive": null,
      "start": 771,
      "end": 781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 785
            },
            "start": 782,
            "end": 787
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 793
            },
            "start": 789,
            "end": 795
          }
        ],
        "start": 782,
        "end": 795
      },
      "directive": null,
      "start": 782,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 803
        },
        "start": 797,
        "end": 805
      },
      "directive": null,
      "start": 797,
      "end": 806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 807,
          "end": 810
        },
        "start": 807,
        "end": 812
      },
      "directive": null,
      "start": 807,
      "end": 813
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 813
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
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
    "value": "ANY2",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Null",
    "value": "null",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 220,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 249,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber3",
    "start": 280,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 310,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber5",
    "start": 356,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 374,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber6",
    "start": 389,
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
    "value": "++",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber7",
    "start": 420,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 438,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 444,
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
    "value": "ResultIsNumber8",
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
    "value": "++",
    "start": 469,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber",
    "start": 483,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 500,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber9",
    "start": 512,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 537,
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
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber10",
    "start": 545,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 573,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber11",
    "start": 577,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber12",
    "start": 609,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 638,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber13",
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
    "type": "Identifier",
    "value": "M",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 697,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 704,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 712,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 714,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "++",
    "start": 723,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 730,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 738,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 740,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 748,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 797,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 803,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  }
]
```
